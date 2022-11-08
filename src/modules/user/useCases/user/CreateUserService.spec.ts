import { UserRepositoryInMemory } from "../../repositories/inmemory/UserRepositoryInMemory";
import { CreateUserService } from "./CreateUserService";

let createUser: CreateUserService;
let createUserRepositoryInMemory: UserRepositoryInMemory;

describe("Create User", () => {

  beforeEach(() => {
    createUserRepositoryInMemory = new UserRepositoryInMemory()
    createUser = new CreateUserService(createUserRepositoryInMemory)
  })

  it("should be able to create a new user", () => {

  })
})
