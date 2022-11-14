import { Request, Response } from "express";
import { AppError } from "../../../../shared/errors/AppError";
import { ProductRepository } from "../../repositories/prisma/ProductRepository";
import { CreateProductService } from "./CreateProductService";

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, price, description, category_id } = request.body;

    const createProduct = new CreateProductService(new ProductRepository())

    if (!request.file) {
      throw new AppError('Error upload file')
    } else {

      const { originalname, filename: banner } = request.file

      const product = await createProduct.execute({
        name,
        price,
        description,
        banner,
        category_id
      });

      return response.json(product);
    }

  }
}
