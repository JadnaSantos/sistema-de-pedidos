import { IProductDTO } from "../../dtos/IProductDTO";
import { IProductRepository } from "../../repositories/interfaces/IProductRepository";

export class CreateProductService {
  constructor(
    private productRepository: IProductRepository
  ) { }

  public async execute({ name, price, description, banner, category_id }: IProductDTO) {

    const product = await this.productRepository.create({
      name,
      price,
      description,
      banner,
      category_id
    })

    return product
  }
}
