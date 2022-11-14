import { Order } from "@prisma/client";

export interface IRequestDeleteOrder {
  order_id: string;
}

export interface IDeleteOrderRepository {
  delete({ order_id }: IRequestDeleteOrder): Promise<Order>
}
