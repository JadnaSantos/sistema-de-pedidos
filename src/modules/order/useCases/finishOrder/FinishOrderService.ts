import { IFinishOrderRepository, IRequestFinishOrder } from "../../repositories/interfaces/IFinishOrderRepository"

export class FinishOrderService {
  constructor(
    private finishOrderRepository: IFinishOrderRepository
  ) { }

  public async execute({ order_id }: IRequestFinishOrder) {
    const order = await this.finishOrderRepository.create({
      order_id
    })

    return order
  }
}
