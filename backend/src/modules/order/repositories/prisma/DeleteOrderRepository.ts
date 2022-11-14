import { Order } from "@prisma/client"
import { prisma } from "../../../../database"
import { IDeleteOrderRepository, IRequestDeleteOrder } from "../interfaces/IDeleteOrderRepository"

export class DeleteOrderRepository implements IDeleteOrderRepository {
  public async delete({ order_id }: IRequestDeleteOrder): Promise<Order> {
    const order = await prisma.order.delete({
      where: {
        id: order_id
      },
    })

    return order
  }
}
