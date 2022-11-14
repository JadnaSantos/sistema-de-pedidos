import { Request, Response } from "express";
import { ProductRepository } from "../../repositories/prisma/ProductRepository";
import { ListProductService } from "./ListProductService";

export class ListProductController {
  async handle(request: Request, response: Response) {
    const category_id = request.query.category_id as string;

    const listByCategory = new ListProductService(new ProductRepository())

    const product = await listByCategory.execute(category_id)

    return response.json(product)
  }
}
