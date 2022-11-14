export interface IOrderDTO {
  id: string;
  table: number;
  status: string;
  draft: boolean;
  name: string;
  created_at: Date;
  updated_at: Date;
}
