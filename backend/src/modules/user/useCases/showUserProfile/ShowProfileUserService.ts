import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository";

export class ShowProfileService {
  constructor(
    private usersRepository: IUsersRepository
  ) { }

  async execute(id: string) {
    const user = await this.usersRepository.findById(id)

    if (!user) {
      throw new AppError('User not found')
    }

    return user
  }
}
