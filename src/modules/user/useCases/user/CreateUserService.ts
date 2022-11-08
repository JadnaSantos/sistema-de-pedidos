import { hash } from "bcrypt";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository";

export class CreateUserService {
  constructor(
    private usersRepository: IUsersRepository
  ) { }

  public async execute({ name, email, password }: ICreateUserDTO) {

    if (!email) {
      throw new AppError('Email incorrect');
    }

    const isExistEmail = await this.usersRepository.findByEmail(email);

    if (isExistEmail) {
      throw new AppError('Email already exists');
    }

    const hashedPassword = await hash(password, 10)

    const user = await this.usersRepository.create(
      name,
      email,
      password = hashedPassword
    )

    return user;
  }
}
