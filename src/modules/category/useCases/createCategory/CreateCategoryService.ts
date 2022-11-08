import { AppError } from "../../../../shared/errors/AppError"
import { ICategoryDTO } from "../../dtos/ICategoryDTO"
import { ICategoryRepository } from "../../repositories/interfaces/ICategoryRepository"


export class CreateCategoryService {
  constructor(
    private categoryRepository: ICategoryRepository
  ) { }

  public async execute({ name }: ICategoryDTO) {

    if (name === '') {
      throw new AppError('Name invalid')
    }

    const category = await this.categoryRepository.create(name)

    return category
  }
}
