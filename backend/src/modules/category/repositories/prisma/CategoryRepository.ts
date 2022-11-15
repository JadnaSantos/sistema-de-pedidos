import { Category } from "@prisma/client";
import { prisma } from "../../../../database";
import { ICategoryDTO } from "../../dtos/ICategoryDTO";
import { ICategoryRepository } from "../interfaces/ICategoryRepository";

export class CategoryRepository implements ICategoryRepository {
  public async create({ name }: ICategoryDTO): Promise<Category> {
    const category = await prisma.category.create({
      data: {
        name
      }
    })

    return category
  }

  public async listCategories(): Promise<Category[]> {
    const category = await prisma.category.findMany({
      select: {
        id: true,
        name: true,
      }
    })

    return category
  }
}
