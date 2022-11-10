import { Category } from "@prisma/client";
import { ICategoryDTO } from "../../dtos/ICategoryDTO";

export interface ICategoryRepository {
  create({ name }: ICategoryDTO): Promise<Category>
  listCategories(): Promise<Category>
}
