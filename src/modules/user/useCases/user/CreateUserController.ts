import { Request, Response } from "express";
import { UserRepository } from "../../repositories/prisma/UsersRepository";
import { CreateUserService } from "./CreateUserService";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService(new UserRepository())

    const user = await createUser.execute({
      name, email, password
    })

    return response.json(user)
  }
}
