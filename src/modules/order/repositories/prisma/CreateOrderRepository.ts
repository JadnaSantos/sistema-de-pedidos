import { Order } from "@prisma/client";
import { prisma } from "../../../../database";
import { ICreateOrderRepository, IRequestCreateOrder } from "../interfaces/ICreateOrderRepository";

export class CreateOrderRepository implements ICreateOrderRepository {
  public async create({ table, name }: IRequestCreateOrder): Promise<Order> {
    const order = await prisma.order.create({
      data: {
        table,
        name
      }
    })

    return order
  }
}
