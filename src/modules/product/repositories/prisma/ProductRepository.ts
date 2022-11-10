import { Product } from "@prisma/client";
import { prisma } from "../../../../database";
import { IProductDTO } from "../../dtos/IProductDTO";
import { IProductRepository } from "../interfaces/IProductRepository";

export class ProductRepository implements IProductRepository {
  public async create({ name, price, description, banner, category_id }: IProductDTO): Promise<Product> {
    const product = await prisma.product.create({
      data: {
        name,
        price,
        description,
        banner,
        category_id
      }
    })

    return product
  }

  public async listProduct(category_id: string): Promise<Product> {
    const product = await prisma.product.findMany({
      where: { category_id: category_id }
    })

    return product
  }
}
