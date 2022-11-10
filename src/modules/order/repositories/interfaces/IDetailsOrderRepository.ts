import { Item } from "@prisma/client";

export interface IRequestDetails {
  order_id: string;
}

export interface IDetailsOrderRepository {
  create({ order_id }: IRequestDetails): Promise<Item>
}
