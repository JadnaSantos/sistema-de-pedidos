import { Order } from "@prisma/client"

export interface IRequestFinishOrder {
  order_id: string
}

export interface IFinishOrderRepository {
  create({ order_id }: IRequestFinishOrder): Promise<Order>
}
