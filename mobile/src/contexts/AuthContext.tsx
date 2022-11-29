import React, { useState, createContext, ReactNode, useEffect } from "react";
import { api } from '../../src/services/api'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { AppError } from "../utils/AppError";
import { useNavigation } from "@react-navigation/native";

type UserProps = {
  id: string;
  name: string;
  email: string;
  token: string;
}

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credential: SignInProps) => Promise<void>
  loadingAuth: boolean;
  isloading: boolean;
  singOut: () => Promise<void>
}

type AuthProviderProps = {
  children: ReactNode
}

type SignInProps = {
  email: string;
  password: string;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const navigation = useNavigation();
  const [loadingAuth, setLoadingAuth] = useState(false)
  const [isloading, setIsLoading] = useState(true)

  const [user, setUser] = useState<UserProps>({
    id: '',
    name: '',
    email: '',
    token: ''
  })


  const isAuthenticated = !!user.name;

  async function getUser() {
    const userInfo = await AsyncStorage.getItem('@system')

    let hasUser: UserProps = JSON.parse(userInfo || '{}')

    if (Object.keys(hasUser).length > 0) {
      api.defaults.headers.common['Authorization'] = `Bearer ${hasUser.token}`

      setUser({
        id: hasUser.id,
        name: hasUser.name,
        email: hasUser.email,
        token: hasUser.token,
      })

      setIsLoading(false)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  async function signIn({ email, password }: SignInProps) {
    setLoadingAuth(true);
    try {
      const response = await api.post('/sessions', {
        email, password
      })

      const { id, name, token } = response.data

      const data = {
        ...response.data
      }

      await AsyncStorage.setItem('@system', JSON.stringify(data))

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setUser({
        id,
        name,
        email,
        token
      })

      setLoadingAuth(false);

      navigation.navigate('dashboard')

    } catch (error) {
      const isAppError = error instanceof AppError
      setLoadingAuth(false);
    }
  }

  async function singOut() {
    await AsyncStorage.clear().then(() => {
      setUser({
        id: '',
        name: '',
        email: '',
        token: ''
      })
    })
  }

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      signIn,
      loadingAuth,
      isloading,
      singOut
    }}>

      {children}
    </AuthContext.Provider>
  )
}
