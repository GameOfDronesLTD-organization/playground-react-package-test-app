import { Role } from "./role";

export type Employee = {
  id: number;
  email: string;
  full_name: string;
  IIN: string;
  phone: string;
  image?: string;
  place_of_residence: string;
  salary: number;
  location_id: number;
  role: Role;
};
