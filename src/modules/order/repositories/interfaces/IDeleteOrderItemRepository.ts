import { Item } from "@prisma/client";

export interface IRequestDeleteOrderItem {
  item_id: string;
}

export interface IDeleteOrderItemRepository {
  delete({ item_id }: IRequestDeleteOrderItem): Promise<Item>
}
