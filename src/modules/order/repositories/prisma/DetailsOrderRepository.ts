import { Item } from "@prisma/client"
import { prisma } from "../../../../database"
import { IDetailsOrderRepository, IRequestDetails } from "../interfaces/IDetailsOrderRepository"

export class DetailsOrderRepository implements IDetailsOrderRepository {
  public async create({ order_id }: IRequestDetails): Promise<Item> {
    const orders = await prisma.item.findMany({
      where: {
        order_id: order_id
      },
      include: {
        product: true,
        order: true,
      }
    })

    return orders
  }
}
