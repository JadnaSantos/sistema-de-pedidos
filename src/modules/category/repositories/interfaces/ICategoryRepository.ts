import { Category } from "@prisma/client";

export interface ICategoryRepository {
  create(name: string): Promise<Category>
  listCategories(): Promise<Category>
}
