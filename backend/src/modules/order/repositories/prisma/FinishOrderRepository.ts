import { Order } from "@prisma/client"
import { prisma } from "../../../../database"
import { IFinishOrderRepository, IRequestFinishOrder } from "../interfaces/IFinishOrderRepository"

export class FinishOrderRepository implements IFinishOrderRepository {
  public async create({ order_id }: IRequestFinishOrder): Promise<Order> {
    const order = await prisma.order.update({
      where: {
        id: order_id
      },
      data: {
        status: true
      }
    })

    return order
  }
}
