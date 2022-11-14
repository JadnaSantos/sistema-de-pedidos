import { AppError } from "../../../../shared/errors/AppError";
import { CategoryRepositoryInMemory } from "../../repositories/in-memory/CategoryRepositoryInMemory";
import { CreateCategoryService } from "./CreateCategoryService"

let createCategoryService: CreateCategoryService;
let categoryRepositoryInMemory: CategoryRepositoryInMemory


describe('Create Category', () => {
  beforeEach(() => {
    categoryRepositoryInMemory = new CategoryRepositoryInMemory
    createCategoryService = new CreateCategoryService(categoryRepositoryInMemory)
  })

  it('Should Create new category', async () => {
    const category = {
      name: 'New Category',
    }

    await createCategoryService.execute(category)

    expect(category).toHaveProperty('name')
  })

  it('should not be able to create a new category without name', async () => {
    const category = {
      name: '',
    }

    await expect(await createCategoryService.execute(category)).rejects.toEqual(
      new AppError('Name invalid')
    );
  })
})
