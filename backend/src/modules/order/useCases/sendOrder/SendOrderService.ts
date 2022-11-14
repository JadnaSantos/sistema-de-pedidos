import { IRequestSendOrder, ISendOrderRepository } from "../../repositories/interfaces/ISendOrderRepository"

export class SendOrderService {
  constructor(
    private sendOrderRepository: ISendOrderRepository
  ) { }

  public async execute({ order_id }: IRequestSendOrder) {
    const sendOrder = await this.sendOrderRepository.create({
      order_id
    })

    return sendOrder
  }
}
