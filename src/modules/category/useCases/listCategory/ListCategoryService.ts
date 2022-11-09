import { ICategoryRepository } from "../../repositories/interfaces/ICategoryRepository";

export class ListCategoryService {
  constructor(
    private categoryRepository: ICategoryRepository
  ) { }

  public async execute() {
    const category = await this.categoryRepository.listCategories()

    return category
  }
}
