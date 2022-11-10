import { Request, Response } from "express";
import { SendOrderRepository } from "../../repositories/prisma/SendOrderRepository";
import { SendOrderService } from "./SendOrderService";

export class SendOrderController {
  async handle(request: Request, response: Response) {
    const { order_id } = request.body;

    const sendOrder = new SendOrderService(new SendOrderRepository())

    const order = await sendOrder.execute({
      order_id
    })

    return response.json(order)
  }
}
