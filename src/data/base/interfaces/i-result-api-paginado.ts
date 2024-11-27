import { IPaginado } from "./i-paginado";

export interface IResultApiPaginado<T> {
    data: IPaginado<T>;
    message: string;
    statusCode: number;
    ok: boolean | null;
  }
