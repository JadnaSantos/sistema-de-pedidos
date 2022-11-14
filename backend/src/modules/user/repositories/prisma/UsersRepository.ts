import { User } from "@prisma/client";
import { prisma } from "../../../../database";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../interfaces/IUsersRepository";

export class UserRepository implements IUsersRepository {
  public async create({ name, email, password }: ICreateUserDTO): Promise<User> {
    const user = await prisma.user.create({
      data: { name, email, password }
    })

    return user
  }

  public async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findFirst({ where: { email } })

    return user
  }

  public async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findFirst({ where: { id: id } })

    return user
  }

}
