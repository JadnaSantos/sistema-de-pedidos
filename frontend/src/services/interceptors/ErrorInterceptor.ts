import { AxiosError } from 'axios';
import { singOut } from '../../contexts/AuthContext';

export function errorInterceptor(error: AxiosError) {
  if (error.message === 'Network error') {
    return Promise.reject(new Error('Erro de conexão'))
  }

  if (error.response?.status === 401) {
    return Promise.reject(new Error('Error with Authentication'))
  }

  if (typeof window !== undefined) {
    singOut()
  }

  return Promise.reject(error)
}
