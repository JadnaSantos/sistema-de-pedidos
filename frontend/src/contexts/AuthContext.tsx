import { createContext, ReactNode, useState, useEffect } from 'react'
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import Router from 'next/router';
import { api } from '../services/apiClient'
import { toast } from 'react-toastify'

type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>
  singUp: (credentials: SignUpProps) => Promise<void>;
  singOut: () => void;
}

type UserProps = {
  id: string;
  name: string;
  email: string;
}

export interface SignInProps {
  email: string;
  password: string;
}

export interface SignUpProps {
  name: string;
  email: string;
  password: string;
}


type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function singOut() {
  try {
    destroyCookie(undefined, '@nextauth.token')
    Router.push('/')
  } catch (error) {
    console.log('error ao deslogar')
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>()
  const isAuthenticated = !!user

  useEffect(() => {
    const { '@nextauth.token': token } = parseCookies()

    if (token) {
      api.get('/users/id').then(response => {
        const { id, name, email } = response.data

        setUser({
          id,
          name,
          email,
        })

      })
        .catch(() => {
          singOut()
        })
    }
  }, [])

  async function signIn({ email, password }: SignInProps) {
    try {
      const response = await api.post('/sessions', {
        email,
        password
      })

      const { id, name, token } = response.data;

      setCookie(undefined, '@nextauth.token', token, {
        maxAge: 60 * 60 * 24 * 30,
        path: "/"
      })

      setUser({
        id,
        name,
        email,
      })

      api.defaults.headers['Authorization'] = `Bearer ${token}`

      toast.success('Logado com sucess')
      Router.push('/dashboard')

    } catch (error) {
      toast.error('Erro ao acessar')
      console.log("ERRO AO ACESSAR ", error)
    }

  }


  async function singUp({ name, email, password }: SignUpProps) {
    try {
      const response = await api.post('/users', {
        name,
        email,
        password
      })

      console.log('User cadastrado')

      Router.push('/')

    } catch (error) {
      toast.error('Erro ao cadastrar')
      console.log("ERRO AO ACESSAR ", error)
    }

  }



  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, singUp, singOut }}>
      {children}
    </AuthContext.Provider>
  )
}
