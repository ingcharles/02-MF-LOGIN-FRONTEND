/**
* Clase TblMenuAccionService que extiende de ATblMenuAccionService.
* Este archivo se complementa con el archivo ATblMenuAccionService.
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    TblMenuAccionService
* @package Service
* @subpackage Data
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { IGetTblMenuAccionRsViewModel, IGetTblMenuAccionViewModel, IGetTblMenuAccionPaginadoViewModel, IGetTblMenuAccionPaginadoRsViewModel, IGetTblMenuAccionByIdRsViewModel, IGetTblMenuAccionByIdViewModel, ISaveTblMenuAccionRsViewModel, ISaveTblMenuAccionViewModel, IUpdateTblMenuAccionRsViewModel, IUpdateTblMenuAccionViewModel, IGetPaginateByTblMenuEntityIdMenuViewModel } from '../../../domain/tbl-menu-accion/viewModels/i-tbl-menu-accion.viewModel';
import { environment } from '../../../environments/environment';
import { StatusResponseService } from '../../base/services/status-response.service';
import { IResponseStatusViewModel } from '../../../domain/base/viewModels/i-response-status.viewModel';
import { IResponseStatusPaginadoViewModel } from '../../../domain/base/viewModels/i-response-status-paginado.viewModel';
import { IResultApi } from '../../base/interfaces/i-result-api';
import { IGetTblPerfilMenuAccionByIdRsViewModel, IGetTblPerfilMenuAccionByIdViewModel } from '../../../domain/tbl-perfil-menu-accion/viewModels/i-tbl-perfil-menu-accion.viewModel';

const apiAdminUrl: string = environment.apiAdminUrl;

@Injectable({
  providedIn: 'root',
})

export class TblMenuAccionService {

  /**
  * Constructor
  * Se pueden llamar los servicios complementarios para este servicio
  * @param _http: HttpClient, _statusResponseService: StatusResponseService
  * @return TblMenuAccionService
  */
  constructor(private _http: HttpClient, private _statusResponseService: StatusResponseService) {
  }

  /**
  * Guarda el registro actual
  * @param tblMenuAccion: ISaveTblMenuAccionViewModel
  * @return Promise<IResponseStatusViewModel<ISaveTblMenuAccionRsViewModel>>
  */
  public saveTblMenuAccion(tblMenuAccion: ISaveTblMenuAccionViewModel): Promise<IResponseStatusViewModel<ISaveTblMenuAccionRsViewModel>> {
    const url = `${apiAdminUrl}command/tbl-menu-accion/saveTblMenuAccion`;
    return new Promise<IResponseStatusViewModel<ISaveTblMenuAccionRsViewModel>>((resolve, reject) => {
      this._http.post<IResultApi>(url, tblMenuAccion)
        .subscribe({
          next: (result: IResultApi) => {
            resolve(this._statusResponseService.succes<ISaveTblMenuAccionRsViewModel>(result));
          },
          error: (error) => {
            reject(this._statusResponseService.error<ISaveTblMenuAccionRsViewModel>(error));
          }
        });
    });
  }

  /**
  * Obtiene el/los registros
  * @param busqueda: IGetTblMenuAccionViewModel
  * @return Promise<IResponseStatusViewModel<IGetTblMenuAccionRsViewModel>>
  */
  public getAllTblMenuAccion(): Promise<IResponseStatusViewModel<IGetTblMenuAccionRsViewModel>> {
    const url = `${apiAdminUrl}query/tbl-menu-accion/getAllTblMenuAccion`;
    return new Promise<IResponseStatusViewModel<IGetTblMenuAccionRsViewModel>>((resolve, reject) => {
      this._http.get<IResultApi>(url)
        .subscribe({
          next: (result: IResultApi) => {
            resolve(this._statusResponseService.succes<IGetTblMenuAccionRsViewModel>(result));
          },
          error: (error) => {
            reject(this._statusResponseService.error<IGetTblMenuAccionRsViewModel>(error));
          }
        });
    });
  }

  /**
  * Obtiene el/los registros
  * @param busqueda: IGetTblMenuAccionPaginadoViewModel
  * @return Promise<IResponseStatusPaginadoViewModel<IGetTblMenuAccionPaginadoRsViewModel>>
  */
  public getPaginadoTblMenuAccion(dataViewModel: IGetTblMenuAccionPaginadoViewModel): Promise<IResponseStatusPaginadoViewModel<IGetTblMenuAccionPaginadoRsViewModel>> {
    const url = `${apiAdminUrl}query/tbl-menu-accion/findAllPaginateTblMenuAccion`;
    return new Promise<IResponseStatusPaginadoViewModel<IGetTblMenuAccionRsViewModel>>((resolve, reject) => {
      this._http.post<IResultApi>(url, dataViewModel)
        .subscribe({
          next: (result: IResultApi) => {
            resolve(this._statusResponseService.succesPaginado<IGetTblMenuAccionRsViewModel>(result));
          },
          error: (error) => {
            reject(this._statusResponseService.errorPaginado<IGetTblMenuAccionRsViewModel>(error));
          }
        });
    });
  }

  /**
  * Obtiene el registro actual
  * @param id_menu_accion: IGetTblMenuAccionByIdViewModel
  * @return Promise<IResponseStatusViewModel<IGetTblMenuAccionByIdRsViewModel>>
  */
  public getByIdTblMenuAccion(id_menu_accion: IGetTblMenuAccionByIdViewModel): Promise<IResponseStatusViewModel<IGetTblMenuAccionByIdRsViewModel>> {
    const url = `${apiAdminUrl}query/tbl-menu-accion/findByIdTblMenuAccion`;
    return new Promise<IResponseStatusViewModel<IGetTblMenuAccionByIdRsViewModel>>((resolve, reject) => {
      this._http.post<IResultApi>(url, id_menu_accion)
        .subscribe({
          next: (result: IResultApi) => {
            resolve(this._statusResponseService.succes<IGetTblMenuAccionByIdRsViewModel>(result));
          },
          error: (error) => {
            reject(this._statusResponseService.error<IGetTblMenuAccionByIdRsViewModel>(error));
          }
        });
    });
  }

  /**
  * Actualizar el registro actual
  * @param tblMenuAccion: IUpdateTblMenuAccionViewModel
  * @return Promise<IResponseStatusViewModel<IUpdateTblMenuAccionRsViewModel>>
  */
  public updateTblMenuAccion(tblMenuAccion: IUpdateTblMenuAccionViewModel): Promise<IResponseStatusViewModel<IUpdateTblMenuAccionRsViewModel>> {
    const url = `${apiAdminUrl}command/tbl-menu-accion/updateTblMenuAccion`;
    return new Promise<IResponseStatusViewModel<IUpdateTblMenuAccionRsViewModel>>((resolve, reject) => {
      this._http.post<IResultApi>(url, tblMenuAccion)
        .subscribe({
          next: (result: IResultApi) => {
            resolve(this._statusResponseService.succes<IUpdateTblMenuAccionRsViewModel>(result));
          },
          error: (error) => {
            reject(this._statusResponseService.error<IUpdateTblMenuAccionRsViewModel>(error));
          }
        });
    });
  }

  /**
  * Obtiene el/los registros
  * @param busqueda: IGetTblMenuAccionPaginadoViewModel
  * @return Promise<IResponseStatusPaginadoViewModel<IGetTblMenuAccionPaginadoRsViewModel>>
  */
  public getPaginateByTblMenuEntityIdMenu(dataViewModel: IGetPaginateByTblMenuEntityIdMenuViewModel): Promise<IResponseStatusPaginadoViewModel<IGetTblMenuAccionPaginadoRsViewModel>> {
    const url = `${apiAdminUrl}query/tbl-menu-accion/findPaginateByTblMenuEntityIdMenu`;
    return new Promise<IResponseStatusPaginadoViewModel<IGetTblMenuAccionRsViewModel>>((resolve, reject) => {
      this._http.post<IResultApi>(url, dataViewModel)
        .subscribe({
          next: (result: IResultApi) => {
            resolve(this._statusResponseService.succesPaginado<IGetTblMenuAccionRsViewModel>(result));
          },
          error: (error) => {
            reject(this._statusResponseService.errorPaginado<IGetTblMenuAccionRsViewModel>(error));
          }
        });
    });
  }

  /**
  * Obtiene el/los registros
  * @param busqueda: IGetTblMenuAccionPaginadoViewModel
  * @return Promise<IResponseStatusPaginadoViewModel<IGetTblMenuAccionPaginadoRsViewModel>>
  */
  public getByTblMenuEntityIdMenuAndEstado(dataViewModel: IGetTblMenuAccionByIdViewModel): Promise<IResponseStatusViewModel<IGetTblMenuAccionRsViewModel>> {
    const url = `${apiAdminUrl}query/tbl-menu-accion/findByTblMenuEntityIdMenuAndEstado`;
    return new Promise<IResponseStatusViewModel<IGetTblMenuAccionRsViewModel>>((resolve, reject) => {
      this._http.post<IResultApi>(url, dataViewModel)
        .subscribe({
          next: (result: IResultApi) => {
            console.log("result: " + JSON.stringify(result));
            resolve(this._statusResponseService.succes<IGetTblMenuAccionRsViewModel>(result));
          },
          error: (error) => {
            reject(this._statusResponseService.error<IGetTblMenuAccionRsViewModel>(error));
          }
        });
    });
  }

  /**
 * Obtiene el/los registros
 * @param busqueda: IGetTblMenuAccionPaginadoViewModel
 * @return Promise<IResponseStatusPaginadoViewModel<IGetTblMenuAccionPaginadoRsViewModel>>
 */
  public getAllTblMenuAccionNotInIdPerfil(dataViewModel: IGetTblPerfilMenuAccionByIdRsViewModel): Promise<IResponseStatusViewModel<IGetTblMenuAccionRsViewModel>> {
    const url = `${apiAdminUrl}query/tbl-menu-accion/findAllTblMenuAccionNotInIdPerfil`;
    return new Promise<IResponseStatusViewModel<IGetTblMenuAccionRsViewModel>>((resolve, reject) => {
      this._http.post<IResultApi>(url, dataViewModel)
        .subscribe({
          next: (result: IResultApi) => {
            resolve(this._statusResponseService.succes<IGetTblMenuAccionRsViewModel>(result));
          },
          error: (error) => {
            reject(this._statusResponseService.error<IGetTblMenuAccionRsViewModel>(error));
          }
        });
    });
  }

}
