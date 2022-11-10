import { Request, Response } from "express";
import { AddedOrderItemRepository } from "../../repositories/prisma/AddedOrderItemRepository";
import { AddedOrderItemService } from "./AddedOrderItemService";

export class AddedOrderItemController {
  async handle(request: Request, response: Response) {
    const { order_id, product_id, amount } = request.body;

    const createOrder = new AddedOrderItemService(new AddedOrderItemRepository())

    const order = await createOrder.execute({
      order_id, product_id, amount
    })

    return response.json(order)
  }
}
