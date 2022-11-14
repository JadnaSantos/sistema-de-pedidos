import { Product, } from "@prisma/client";
import { IProductDTO } from "../../dtos/IProductDTO";

export interface IProductRepository {
  create({ name, price, description, banner, category_id }: IProductDTO): Promise<Product>
  listProduct(category_id: string): Promise<Product>

}
