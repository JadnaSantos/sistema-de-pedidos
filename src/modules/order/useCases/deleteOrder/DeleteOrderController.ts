import { Request, Response } from "express";
import { DeleteOrderRepository } from "../../repositories/prisma/DeleteOrderRepository";
import { DeleteOrderService } from "./DeleteOrderService";


export class DeleteOrderController {
  async handle(request: Request, response: Response) {
    const order_id = request.query.order_id as string;

    const createOrder = new DeleteOrderService(new DeleteOrderRepository())

    const order = await createOrder.execute({
      order_id
    })

    return response.json(order)
  }
}
