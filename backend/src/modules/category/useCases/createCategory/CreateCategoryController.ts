import { Request, Response } from "express";
import { CategoryRepository } from "../../repositories/prisma/CategoryRepository";
import { CreateCategoryService } from "./CreateCategoryService";

export class CreateCategoryController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const createCategory = new CreateCategoryService(new CategoryRepository())

    const category = await createCategory.execute({ name })

    return response.json(category)
  }
}
