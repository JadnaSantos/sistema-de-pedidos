import { IDetailsOrderRepository, IRequestDetails } from "../../repositories/interfaces/IDetailsOrderRepository"

export class DetailsOrderService {
  constructor(
    private orderRepository: IDetailsOrderRepository
  ) { }

  public async execute({ order_id }: IRequestDetails) {
    const detailsOrder = await this.orderRepository.create({
      order_id
    })

    return detailsOrder
  }
}
