import { User } from "@prisma/client";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../interfaces/IUsersRepository";

export class UserRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({
    id,
    name,
    email,
    password,
    created_at,
    updated_at
  }: ICreateUserDTO): Promise<User> {
    const user: User = {
      id: String(id),
      name,
      email,
      password,
      created_at: new Date(),
      updated_at: new Date(),
    }

    this.users.push(user)

    return user
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find(user => user.email === email) || null
  }

  async findById(id: string): Promise<User | null> {
    return this.users.find(user => user.id === id) || null
  }
}
