import { Order } from "@prisma/client";

export interface IRequestSendOrder {
  order_id: string;
}

export interface ISendOrderRepository {
  create({ order_id }: IRequestSendOrder): Promise<Order>
}
