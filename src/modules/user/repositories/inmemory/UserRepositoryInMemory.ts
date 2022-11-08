import { User } from "@prisma/client";
import { IUsersRepository } from "../interfaces/IUsersRepository";

export class UserRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create(id: string, name: string, email: string, password: string, created_at: Date, updated_at: Date): Promise<User> {
    const user: User = {
      id, name, email, password, created_at, updated_at
    }

    this.users.push(user);

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find(user => user.email === email) || null
  }


  async findById(id: string): Promise<User | null> {
    return this.users.find((user) => user.id === id)
  }
}
