export interface ICreateUserDTO {
  id?: string;
  name: string;
  email: string;
  password: string,
  created_at?: Date | undefined;
  updated_at?: Date | undefined;
}
