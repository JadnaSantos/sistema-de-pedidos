import { Request, Response } from "express";
import { DetailsOrderRepository } from "../../repositories/prisma/DetailsOrderRepository";
import { DetailsOrderService } from "./DetailsOrderService";

export class DetailsOrderController {
  async handle(request: Request, response: Response) {

    const order_id = request.query.order_id as string;

    const detailsOrder = new DetailsOrderService(new DetailsOrderRepository())

    const order = await detailsOrder.execute({ order_id })

    return response.json(order)

  }
}
