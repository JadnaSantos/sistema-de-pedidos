export interface IProductDTO {
  id?: string;
  name: string;
  price: number;
  description: string;
  banner: string;
  created_at?: Date;
  updated_at?: Date;
  category_id: string;
}
