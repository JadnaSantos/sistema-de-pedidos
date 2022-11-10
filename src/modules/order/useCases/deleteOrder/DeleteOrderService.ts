import { IDeleteOrderRepository, IRequestDeleteOrder } from "../../repositories/interfaces/IDeleteOrderRepository"

export class DeleteOrderService {
  constructor(
    private deleteorderRepository: IDeleteOrderRepository
  ) { }

  public async execute({ order_id }: IRequestDeleteOrder) {
    const order = await this.deleteorderRepository.delete({
      order_id
    })

    return order
  }
}
