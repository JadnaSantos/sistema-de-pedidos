import { ProductRepositoryInMemory } from "../../repositories/in-memory/ProductRepositoryInMemory";
import { CreateProductService } from "./CreateProductService"

let createProduct: CreateProductService;
let productFakeRepository: ProductRepositoryInMemory;


describe("Create Product", () => {

  beforeEach(() => {
    productFakeRepository = new ProductRepositoryInMemory();
    createProduct = new CreateProductService(productFakeRepository)
  })

  it('should be able to create a new product', async () => {
    const product = await createProduct.execute({
      name: 'Product',
      price: 12333333,
      description: 'Product Description',
      banner: 'photo.png',
      category_id: '5c98b449-92d9-4b36-b7cf-04f60b5ce9c2',
    })

    expect(product).toHaveProperty('name')
    expect(product).toHaveProperty('price')
    expect(product).toHaveProperty('description')
    expect(product).toHaveProperty('banner')
    expect(product).toHaveProperty('category_id')
  })

})
