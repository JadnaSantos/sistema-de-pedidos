import axios from "axios";
import { AppError } from "../utils/AppError";


export const api = axios.create({
  // baseURL: ip maquina + localhost api
})

api.interceptors.response.use(response => response, error => {
  if (error.response && error.response.data) {
    return Promise.reject(new AppError(error.response.data.message));
  } else {
    return Promise.reject(new AppError('Erro no servidor, por favor! Tente mais tarde'))
  }
})
