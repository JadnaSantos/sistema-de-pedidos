import { Order } from "@prisma/client"
import { prisma } from "../../../../database"
import { IListOrderRepository } from "../interfaces/IListOrderRepository"

export class ListOrderRepository implements IListOrderRepository {
  public async create(): Promise<Order> {
    const orders = await prisma.order.findMany({
      where: {
        draft: false,
        status: false
      },
      orderBy: {
        created_at: 'desc'
      }
    })

    return orders
  }
}
