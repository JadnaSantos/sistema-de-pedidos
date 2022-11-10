import { Request, Response } from "express";
import { ListOrderRepository } from "../../repositories/prisma/ListOrderRepository";
import { ListOrderService } from "./ListOrderService";

export class ListOrderController {
  async handle(request: Request, response: Response) {

    const listProduct = new ListOrderService(new ListOrderRepository())

    const order = await listProduct.execute()

    return response.json(order)
  }
}
