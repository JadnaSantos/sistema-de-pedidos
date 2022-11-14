import { Prisma, Product } from "@prisma/client";
import { IProductDTO } from "../../dtos/IProductDTO";
import { IProductRepository } from "../interfaces/IProductRepository";

export class ProductRepositoryInMemory implements IProductRepository {
  products: Product[] = [];

  async create({
    id,
    name,
    price,
    description,
    banner,
    category_id,
    created_at,
    updated_at
  }: IProductDTO): Promise<Product> {
    const product: Product = {
      id: String(id),
      name,
      price: new Prisma.Decimal(99),
      description,
      banner,
      category_id,
      created_at: new Date(),
      updated_at: new Date(),
    }

    this.products.push(product);

    return product;
  }

  async listProduct(): Promise<Product> {
    throw new Error("Method not implemented.");
  }
}
