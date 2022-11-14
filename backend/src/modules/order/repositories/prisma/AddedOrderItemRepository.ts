import { Item } from "@prisma/client";
import { prisma } from "../../../../database";
import { IAddedOrderItemRepository, IRequestAddedOrder } from "../interfaces/IAddedOrderItemRepository";


export class AddedOrderItemRepository implements IAddedOrderItemRepository {
  public async create({ order_id, product_id, amount }: IRequestAddedOrder): Promise<Item> {
    const order = await prisma.item.create({
      data: {
        order_id,
        product_id,
        amount
      }
    })

    return order
  }
}
