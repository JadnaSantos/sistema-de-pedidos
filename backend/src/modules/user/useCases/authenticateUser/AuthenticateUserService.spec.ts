import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UserRepositoryInMemory } from "../../repositories/inmemory/UserRepositoryInMemory";
import { CreateUserService } from "../user/CreateUserService";
import { AuthenticateUserService } from "./AuthenticateUserService"

let authenticateUserService: AuthenticateUserService;
let userFakeRepository: UserRepositoryInMemory;
let createUser: CreateUserService;


describe('Authenticate User', () => {
  beforeEach(() => {
    userFakeRepository = new UserRepositoryInMemory();
    authenticateUserService = new AuthenticateUserService(userFakeRepository)

    createUser = new CreateUserService(userFakeRepository)
  })


  it("Should be able to authenticate user", async () => {
    const user: ICreateUserDTO = {
      email: "test@example.com",
      password: "123",
      name: "Test User",
    };

    await createUser.execute({ ...user });

    const userResponse = await authenticateUserService.execute({
      email: user.email,
      password: user.password,
    });

    expect(userResponse).toHaveProperty("token");
  });

  it('Should not be able to authenticate an nonexistent use', async () => {
    expect(async () => {
      await authenticateUserService.execute({
        email: "test@email.com",
        password: "123",
      });
    }).rejects.toEqual(new AppError('Incorrect email or password', 401));
  });

  it("Should not be able to authenticate an user with a incorrect password", async () => {
    const user: ICreateUserDTO = {
      name: "Test",
      email: "test@email.com",
      password: "123",
    };

    await createUser.execute({
      ...user,
    });

    await expect(
      authenticateUserService.execute({
        email: user.email,
        password: "321",
      })
    ).rejects.toEqual(new AppError('Incorrect email or password', 401));
  });
})

