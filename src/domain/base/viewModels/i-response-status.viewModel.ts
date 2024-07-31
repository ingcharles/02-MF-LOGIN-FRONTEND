


export interface IResponseStatusViewModel<T>{
  data?: T | null,
  message: string;
  statusCode: number | null;
  ok: boolean | null;
}
