import { IPageable } from "./i-pageable";
import { ISort } from "./i-shot";

export interface IPaginado<T> {
  content?: T | null; // Lista de módulos
  pageable: IPageable; // Información de la paginación
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: ISort[];
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}
