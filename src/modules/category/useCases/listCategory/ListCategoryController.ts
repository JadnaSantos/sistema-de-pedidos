import { Request, Response } from "express";
import { CategoryRepository } from "../../repositories/prisma/CategoryRepository";
import { ListCategoryService } from "./ListCategoryService";

export class ListCategoryController {
  async handle(request: Request, response: Response) {
    const listcategories = new ListCategoryService(new CategoryRepository())

    const category = await listcategories.execute()

    return response.json(category)
  }
}
