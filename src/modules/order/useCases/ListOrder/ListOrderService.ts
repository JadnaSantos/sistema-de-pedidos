import { IListOrderRepository } from "../../repositories/interfaces/IListOrderRepository";

export class ListOrderService {
  constructor(
    private listRepository: IListOrderRepository
  ) { }

  public async execute() {
    const listOrder = await this.listRepository.create();

    return listOrder
  }
}
