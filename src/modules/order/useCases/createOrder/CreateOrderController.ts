import { Request, Response } from "express";
import { CreateOrderRepository } from "../../repositories/prisma/CreateOrderRepository";
import { CreateOrderService } from "./CreateOrderService";

export class CreateOrderController {
  async handle(request: Request, response: Response) {
    const { table, name } = request.body;

    const createOrder = new CreateOrderService(new CreateOrderRepository())

    const order = await createOrder.execute({
      table, name
    })

    return response.json(order)
  }
}
