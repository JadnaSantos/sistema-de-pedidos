import { IDeleteOrderItemRepository, IRequestDeleteOrderItem } from "../../repositories/interfaces/IDeleteOrderItemRepository"

export class DeleteOrderItemService {
  constructor(
    private deleteorderItemRepository: IDeleteOrderItemRepository
  ) { }

  public async execute({ item_id }: IRequestDeleteOrderItem) {
    const order = await this.deleteorderItemRepository.delete({
      item_id
    })

    return order
  }
}
