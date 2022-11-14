import { AddedOrderItemRepository, IRequestAddedOrder } from "../../repositories/interfaces/IAddedOrderItemRepository"

export class AddedOrderItemService {
  constructor(
    private orderRepository: AddedOrderItemRepository
  ) { }

  public async execute({ order_id, product_id, amount }: IRequestAddedOrder) {
    const order = await this.orderRepository.create({
      order_id, product_id, amount
    })

    return order
  }
}
