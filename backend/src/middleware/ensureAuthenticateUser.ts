import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../shared/errors/AppError";

interface IPayload {
  name: string
  email: string
  sub: string
}

export async function ensureAuthenticateUser(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError('Token missing')
  }

  const [, token] = authHeader.split(" ")

  try {
    const { sub } = verify(token, 'b1cd0c7e1e8495eb8ef2cf9214a428a2') as IPayload

    request.user_id = sub

    return next()
  } catch (err) {
    throw new AppError('Token Invalid')
  }
}
