import { Injectable } from '@angular/core';
import { messages } from '../constants/messages';
import { IResponseStatusViewModel } from '../../../domain/base/viewModels/i-response-status.viewModel';
import { IResultApi } from '../interfaces/i-result-api';
import { IResponseStatusPaginadoViewModel } from '../../../domain/base/viewModels/i-response-status-paginado.viewModel';

@Injectable({ providedIn: 'root' })
export class StatusResponseService {
  constructor() { }

  error<T>(httpErrorResponse: any): IResponseStatusViewModel<T>  {
    let { error, ok, status, StatusCode } = httpErrorResponse;
    let responseStatus: IResponseStatusViewModel<T> = <IResponseStatusViewModel<T>>{}

    if (StatusCode) {
      if (StatusCode == 404 || StatusCode == 500) {
        responseStatus = { message: error.Message, statusCode: StatusCode, ok }
      }
    } else {
      console.log(status)
      if (status == 401) {
        responseStatus = { message: error.message, statusCode: status, ok }
      } else if (status == 403) {
        responseStatus = { message: messages.serviceFail, statusCode: status, ok }
      } else if (status == 0 || status == 500) {
        responseStatus = { message: messages.serviceNotFound, statusCode: status, ok }
      }
    }
    console.log("responseStatus", responseStatus)
    return responseStatus;
  }

  succes<T>(result: IResultApi): IResponseStatusViewModel<T> {
    let responseStatus: IResponseStatusViewModel<T> = <IResponseStatusViewModel<T>>{}
    responseStatus = { data: result.data, message: result.message, statusCode: result.statusCode, ok: result.status }
    return responseStatus;
  }

  succesPaginado<T>(result: IResultApi): IResponseStatusPaginadoViewModel<T> {
    let responseStatus: IResponseStatusPaginadoViewModel<T> = <IResponseStatusPaginadoViewModel<T>>{}
    responseStatus = { data: result.data, message: result.message, statusCode: result.statusCode, ok: result.status }
    return responseStatus;
  }

  errorPaginado<T>(httpErrorResponse: any): IResponseStatusPaginadoViewModel<T>  {
    let { error, ok, status, StatusCode } = httpErrorResponse;
    let responseStatus: IResponseStatusPaginadoViewModel<T> = <IResponseStatusPaginadoViewModel<T>>{}

    if (StatusCode) {
      if (StatusCode == 404 || StatusCode == 500) {
        responseStatus = { message: error.Message, statusCode: StatusCode, ok }
      }
    } else {
      console.log(status)
      if (status == 401) {
        responseStatus = { message: error.message, statusCode: status, ok }
      } else if (status == 403) {
        responseStatus = { message: messages.serviceFail, statusCode: status, ok }
      } else if (status == 0 || status == 500) {
        responseStatus = { message: messages.serviceNotFound, statusCode: status, ok }
      }
    }
    console.log("responseStatus", responseStatus)
    return responseStatus;
  }

}
