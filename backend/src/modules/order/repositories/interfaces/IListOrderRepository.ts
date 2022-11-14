import { Order } from "@prisma/client"

export interface IListOrderRepository {
  create(): Promise<Order>
}
