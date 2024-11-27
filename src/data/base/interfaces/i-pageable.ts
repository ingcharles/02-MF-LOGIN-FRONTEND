import { ISort } from "./i-shot";

export interface IPageable {
  pageNumber: number;
  pageSize: number;
  sort: ISort[];
  offset: number;
  paged: boolean;
  unpaged: boolean;
}
