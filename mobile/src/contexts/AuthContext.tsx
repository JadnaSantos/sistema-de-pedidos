import React, { useState, createContext, ReactNode, useEffect } from "react";
import { api } from '../../src/services/api'
import { UserDTO } from "../dtos/UserDTO";
import { storageUserGet, storageUserRemove, storageUserSave } from "../storage/storageUser";
import { storageAuthTokenGet, storageAuthTokenRemove, storageAuthTokenSave } from "../storage/storageAuthToken";

// type UserProps = {
//   id: string;
//   name: string;
//   email: string;
//   token: string;
// }

type SignInProps = {
  email: string;
  password: string;
}

type AuthContextData = {
  user: UserDTO;
  isAuthenticated: boolean;
  signIn: (credential: SignInProps) => Promise<void>
  loadingAuth: boolean;
  isloading: boolean;
  signOut: () => Promise<void>
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [loadingAuth, setLoadingAuth] = useState(true)
  const [isloading, setIsLoading] = useState(false)

  const [user, setUser] = useState<UserDTO>({} as UserDTO)


  const isAuthenticated = !!user.name;

  async function userAndTokenUpdate(userData: UserDTO, token: string) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    setUser(userData);
  }

  async function storageUserAndTokenSave(userData: UserDTO, token: string) {
    try {
      setLoadingAuth(true)
      await storageUserSave(userData);
      await storageAuthTokenSave(token);

    } catch (error) {
      throw error
    } finally {
      setLoadingAuth(false);
    }
  }

  async function signIn({ email, password }: SignInProps) {
    try {
      setLoadingAuth(true);
      const { data } = await api.post('/sessions', {
        email, password
      })


      if (data.user && data.token) {
        await storageUserAndTokenSave(data.user, data.token)
        userAndTokenUpdate(data.user, data.token)
      }

    } catch (error) {
      throw error
    } finally {
      setLoadingAuth(false);
    }
  }

  async function signOut() {
    try {
      setLoadingAuth(true);
      setUser({} as UserDTO);
      await storageUserRemove();
      await storageAuthTokenRemove();
    } catch (error) {
      throw error;
    } finally {
      setLoadingAuth(false);
    }
  }

  async function loadUserData() {
    try {
      setLoadingAuth(true);

      const userLogged = await storageUserGet();
      const token = await storageAuthTokenGet();

      if (token && userLogged) {
        userAndTokenUpdate(userLogged, token);
      }
    } catch (error) {
      throw error
    } finally {
      setLoadingAuth(false);
    }
  }

  useEffect(() => {
    loadUserData()
  }, [])


  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      signIn,
      loadingAuth,
      isloading,
      signOut
    }}>

      {children}
    </AuthContext.Provider>
  )
}
