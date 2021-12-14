// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export interface EntityList<T> {
  total: number;
  source: T[];
}

export interface UrlParams {
  serviceProductId?: string;
  orderId?: string;
}

export type User = {
  id: number
  name: string
}