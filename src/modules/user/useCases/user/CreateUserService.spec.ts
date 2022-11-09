import { AppError } from "../../../../shared/errors/AppError";
import { UserRepositoryInMemory } from "../../repositories/inmemory/UserRepositoryInMemory";
import { CreateUserService } from "./CreateUserService";

let createUser: CreateUserService;
let userFakeRepository: UserRepositoryInMemory;

describe("Create User", () => {

  beforeEach(() => {
    userFakeRepository = new UserRepositoryInMemory()

    createUser = new CreateUserService(userFakeRepository)
  })

  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      name: 'User',
      email: 'user@teste.com',
      password: 'password',
    })

    expect(user).toHaveProperty('name')
    expect(user).toHaveProperty('email')
    expect(user).toHaveProperty('password')
  })

  it('should not be able to create a new user if email already in use', async () => {
    await createUser.execute({
      name: 'User',
      email: 'user@teste.com',
      password: 'password',
    })

    await expect(createUser.execute(
      {
        name: 'User',
        email: 'user@teste.com',
        password: 'password',
      }
    )).rejects.toEqual(new AppError("Email already exists"));
  })

  it('should not be able to create a new user without email', async () => {
    await createUser.execute({
      name: 'User',
      email: 'user@teste.com',
      password: 'password',
    })

    await expect(createUser.execute(
      {
        name: 'User',
        email: '',
        password: 'password',
      }
    )).rejects.toEqual(new AppError("Email incorrect"));
  })

})
