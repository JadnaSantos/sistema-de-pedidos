import { Item } from "@prisma/client"
import { prisma } from "../../../../database"
import { IDeleteOrderItemRepository, IRequestDeleteOrderItem } from "../interfaces/IDeleteOrderItemRepository"

export class DeleteOrderItemRepository implements IDeleteOrderItemRepository {
  public async delete({ item_id }: IRequestDeleteOrderItem): Promise<Item> {
    const order = await prisma.item.delete({
      where: {
        id: item_id
      },
    })

    return order
  }
}
