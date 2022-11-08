import { User } from "@prisma/client"

export interface IUsersRepository {
  create(name: string, email: string, password: string): Promise<User>
  findByEmail(email: string): Promise<User | null>
  findById(id: string): Promise<User | null>
}
