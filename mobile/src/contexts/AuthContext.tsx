import React, { useState, createContext, ReactNode } from "react";
import { api } from '../../src/services/api'

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
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState<UserProps>({
    id: '',
    name: '',
    email: '',
    token: '',

  })

  const isAuthenticated = !!user.name;

  async function signIn({ email, password }: SignInProps) {
    setIsLoading(true)
    try {
      const response = await api.post('/sessions', {
        email, password
      })

      const { id, name, token } = response.data

      setUser({
        id,
        name,
        email,
        token
      })

      setIsLoading(false)

    } catch (error) {
      console.log('error ao acessar', error)
      setIsLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
