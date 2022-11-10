import { Request, Response } from "express";
import { DeleteOrderItemRepository } from "../../repositories/prisma/DeleteOrderItemRepository";
import { DeleteOrderItemService } from "./DeleteOrderItemService";

export class DeleteOrderItemController {
  async handle(request: Request, response: Response) {
    const item_id = request.query.item_id as string;

    const deleteOrderItem = new DeleteOrderItemService(new DeleteOrderItemRepository())

    const item = await deleteOrderItem.execute({ item_id })

    return response.json(item)
  }
}
