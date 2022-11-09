import { UserRepositoryInMemory } from "../../repositories/inmemory/UserRepositoryInMemory";
import { CreateUserService } from "../user/CreateUserService";

let createUser: CreateUserService;
let fakeRepository: UserRepositoryInMemory;

describe("Show Profile User", () => {
  beforeEach(() => {
    fakeRepository = new UserRepositoryInMemory()

    createUser = new CreateUserService(fakeRepository)
  })
  it('shoul be able to show details profille user', async () => {

  })
})
