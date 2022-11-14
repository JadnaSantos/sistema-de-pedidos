import { IProductRepository } from "../../repositories/interfaces/IProductRepository";

export class ListProductService {
  constructor(
    private productRepository: IProductRepository
  ) { }

  public async execute(category_id: string) {
    const productList = await this.productRepository.listProduct(category_id);

    return productList
  }
}
