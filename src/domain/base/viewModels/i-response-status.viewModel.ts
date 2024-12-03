export interface IResponseStatusViewModel<T>{
  data?: any[T] | null,
  message: string;
  statusCode: number | null;
  ok: boolean | null;
}
