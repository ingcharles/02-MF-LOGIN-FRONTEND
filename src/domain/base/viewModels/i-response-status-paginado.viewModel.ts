import { IPaginado } from "../../../data/base/interfaces/i-paginado";



export interface IResponseStatusPaginadoViewModel<T>{
  data?: IPaginado<T>,
  message: string;
  statusCode: number | null;
  ok: boolean | null;
}


