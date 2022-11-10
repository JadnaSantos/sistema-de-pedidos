import { Item, Order } from "@prisma/client";

export interface IRequestAddedOrder {
  id?: string;
  amount: number;
  created_at?: Date;
  updated_at?: Date;
  order_id: string;
  product_id: string;
}

export interface IAddedOrderItemRepository {
  create({ order_id, product_id, amount }: IRequestAddedOrder): Promise<Item>
}
