import { ICreateOrderRepository, IRequestCreateOrder } from "../../repositories/interfaces/ICreateOrderRepository";

export class CreateOrderService {
  constructor(
    private orderRepository: ICreateOrderRepository
  ) { }

  public async execute({ table, name }: IRequestCreateOrder) {
    const order = await this.orderRepository.create({
      table, name
    })

    return order
  }
}
