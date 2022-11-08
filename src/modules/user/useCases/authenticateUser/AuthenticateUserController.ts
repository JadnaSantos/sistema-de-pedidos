import { Request, Response } from "express";
import { UserRepository } from "../../repositories/prisma/UsersRepository";
import { AuthenticateUserService } from "./AuthenticateUserService";

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticatedUser = new AuthenticateUserService(new UserRepository())

    const { user, token } = await authenticatedUser.execute({ email, password })

    return response.json({ user, token })
  }
}
