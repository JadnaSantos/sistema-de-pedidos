import { Order } from "@prisma/client"
import { prisma } from "../../../../database"
import { ISendOrderRepository, IRequestSendOrder } from "../interfaces/ISendOrderRepository"

export class SendOrderRepository implements ISendOrderRepository {
  public async create({ order_id }: IRequestSendOrder): Promise<Order> {
    const order = await prisma.order.update({
      where: {
        id: order_id
      },
      data: {
        draft: false
      }
    })

    return order
  }
}
