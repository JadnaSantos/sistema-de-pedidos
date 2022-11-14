import { Request, Response } from "express";
import { FinishOrderRepository } from "../../repositories/prisma/FinishOrderRepository";
import { FinishOrderService } from "./FinishOrderService";

export class FinishOrderController {
  async handle(request: Request, response: Response) {
    const { order_id } = request.body;

    const finishiOrder = new FinishOrderService(new FinishOrderRepository())

    const order = await finishiOrder.execute({ order_id })

    return response.json(order)
  }
}
