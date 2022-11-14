import { Order } from "@prisma/client";

export interface IRequestCreateOrder {
  table: number
  name: string
}

export interface ICreateOrderRepository {
  create({ table, name }: IRequestCreateOrder): Promise<Order>
}
