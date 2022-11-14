import { Category } from "@prisma/client";
import { ICategoryDTO } from "../../dtos/ICategoryDTO";
import { ICategoryRepository } from "../interfaces/ICategoryRepository";

export class CategoryRepositoryInMemory implements ICategoryRepository {
  categories: Category[] = [];

  async create({ id, name, created_at, updated_at }: ICategoryDTO): Promise<Category> {
    const category: Category = {
      id: String(id),
      name,
      created_at: new Date(),
      updated_at: new Date(),
    }

    this.categories.push(category)

    return category
  }

  async listCategories(): Promise<Category> {
    throw new Error("Method not implemented.");
  }
}
