import { BaseModel } from './base.model';

export interface Address {
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface Establishment extends BaseModel {
  name: string;
  cpfCnpj: string;
  description: string;
  address: Address;
  phone: string;
  serviceType: string;
  image: string;
}
