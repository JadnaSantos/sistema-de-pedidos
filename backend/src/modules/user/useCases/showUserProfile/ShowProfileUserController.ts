import { Request, Response } from "express";
import { UserRepository } from "../../repositories/prisma/UsersRepository";
import { ShowProfileService } from "./ShowProfileUserService";

export class ShowUserProfileController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const showUser = new ShowProfileService(new UserRepository())

    const user = await showUser.execute(id);


    return response.json(user)
  }
}
