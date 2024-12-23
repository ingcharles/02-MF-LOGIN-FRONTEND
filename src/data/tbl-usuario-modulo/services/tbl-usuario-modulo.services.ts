/**
* Clase TblUsuarioModuloService que extiende de ATblUsuarioModuloService.
* Este archivo se complementa con el archivo ATblUsuarioModuloService.
*
* @author  Carlos Anchundia
* @date    03-12-2024
* @name    TblUsuarioModuloService
* @package Service
* @subpackage Data
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of  } from 'rxjs';
import { IGetTblUsuarioModuloRsViewModel, IGetTblUsuarioModuloViewModel, IGetTblUsuarioModuloPaginadoViewModel, IGetTblUsuarioModuloPaginadoRsViewModel, IGetTblUsuarioModuloByIdRsViewModel, IGetTblUsuarioModuloByIdViewModel, ISaveTblUsuarioModuloRsViewModel, ISaveTblUsuarioModuloViewModel, IUpdateTblUsuarioModuloRsViewModel, IUpdateTblUsuarioModuloViewModel, IGetPaginateByTblUsuarioEntityIdUsuarioViewModel, IGetPaginateByTblMenuEntityIdMenuViewModel } from '../../../domain/tbl-usuario-modulo/viewModels/i-tbl-usuario-modulo.viewModel';
import { environment } from '../../../environments/environment';
import { StatusResponseService } from '../../base/services/status-response.service';
import { IResponseStatusViewModel } from '../../../domain/base/viewModels/i-response-status.viewModel';
import { IResponseStatusPaginadoViewModel } from '../../../domain/base/viewModels/i-response-status-paginado.viewModel';
import { IResultApi } from '../../base/interfaces/i-result-api';

const apiAdminUrl: string = environment.apiAdminUrl;

@Injectable({
	providedIn: 'root',
})

export class TblUsuarioModuloService  {

	/**
	* Constructor
	* Se pueden llamar los servicios complementarios para este servicio
	* @param _http: HttpClient, _statusResponseService: StatusResponseService
	* @return TblUsuarioModuloService
	*/
	constructor(private _http: HttpClient, private _statusResponseService: StatusResponseService) {
	}

	/**
	* Guarda el registro actual
	* @param tblUsuarioModulo: ISaveTblUsuarioModuloViewModel
	* @return Promise<IResponseStatusViewModel<ISaveTblUsuarioModuloRsViewModel>>
	*/
	public saveTblUsuarioModulo(tblUsuarioModulo: ISaveTblUsuarioModuloViewModel): Promise<IResponseStatusViewModel<ISaveTblUsuarioModuloRsViewModel>>{
	const url = `${apiAdminUrl}command/tbl-usuario-modulo/saveTblUsuarioModulo`;
	return new Promise<IResponseStatusViewModel<ISaveTblUsuarioModuloRsViewModel>>((resolve, reject) => {
	this._http.post<IResultApi>(url, tblUsuarioModulo)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succes<ISaveTblUsuarioModuloRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.error<ISaveTblUsuarioModuloRsViewModel>(error));
			}
		});
	});
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetTblUsuarioModuloViewModel
	* @return Promise<IResponseStatusViewModel<IGetTblUsuarioModuloRsViewModel>>
	*/
	public getAllTblUsuarioModulo(): Promise<IResponseStatusViewModel<IGetTblUsuarioModuloRsViewModel>>{
	const url = `${apiAdminUrl}query/tbl-usuario-modulo/getAllTblUsuarioModulo`;
	return new Promise<IResponseStatusViewModel<IGetTblUsuarioModuloRsViewModel>>((resolve, reject) => {
	this._http.get<IResultApi>(url)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succes<IGetTblUsuarioModuloRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.error<IGetTblUsuarioModuloRsViewModel>(error));
			}
		});
	});
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetTblUsuarioModuloPaginadoViewModel
	* @return Promise<IResponseStatusPaginadoViewModel<IGetTblUsuarioModuloPaginadoRsViewModel>>
	*/
	public getPaginadoTblUsuarioModulo(dataViewModel: IGetTblUsuarioModuloPaginadoViewModel): Promise<IResponseStatusPaginadoViewModel<IGetTblUsuarioModuloPaginadoRsViewModel>>{
	const url = `${apiAdminUrl}query/tbl-usuario-modulo/findAllPaginateTblUsuarioModulo`;
	return new Promise<IResponseStatusPaginadoViewModel<IGetTblUsuarioModuloRsViewModel>>((resolve, reject) => {
	this._http.post<IResultApi>(url, dataViewModel)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succesPaginado<IGetTblUsuarioModuloRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.errorPaginado<IGetTblUsuarioModuloRsViewModel>(error));
			}
		});
	});
	}

	/**
	* Obtiene el registro actual
	* @param id_usuario_modulo: IGetTblUsuarioModuloByIdViewModel
	* @return Promise<IResponseStatusViewModel<IGetTblUsuarioModuloByIdRsViewModel>>
	*/
	public getByIdTblUsuarioModulo(id_usuario_modulo: IGetTblUsuarioModuloByIdViewModel): Promise<IResponseStatusViewModel<IGetTblUsuarioModuloByIdRsViewModel>>{
	const url = `${apiAdminUrl}query/tbl-usuario-modulo/findByIdTblUsuarioModulo`;
	return new Promise<IResponseStatusViewModel<IGetTblUsuarioModuloByIdRsViewModel>>((resolve, reject) => {
	this._http.post<IResultApi>(url, id_usuario_modulo)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succes<IGetTblUsuarioModuloByIdRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.error<IGetTblUsuarioModuloByIdRsViewModel>(error));
			}
		});
	});
	}

	/**
	* Actualizar el registro actual
	* @param tblUsuarioModulo: IUpdateTblUsuarioModuloViewModel
	* @return Promise<IResponseStatusViewModel<IUpdateTblUsuarioModuloRsViewModel>>
	*/
	public updateTblUsuarioModulo(tblUsuarioModulo: IUpdateTblUsuarioModuloViewModel): Promise<IResponseStatusViewModel<IUpdateTblUsuarioModuloRsViewModel>>{
	const url = `${apiAdminUrl}command/tbl-usuario-modulo/updateTblUsuarioModulo`;
	return new Promise<IResponseStatusViewModel<IUpdateTblUsuarioModuloRsViewModel>>((resolve, reject) => {
		this._http.post<IResultApi>(url, tblUsuarioModulo)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succes<IUpdateTblUsuarioModuloRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.error<IUpdateTblUsuarioModuloRsViewModel>(error));
			}
		});
		});
	}

    	/**
	* Obtiene el registro actual
	* @param id_usuario_modulo: IGetTblUsuarioModuloByIdViewModel
	* @return Promise<IResponseStatusViewModel<IGetTblUsuarioModuloByIdRsViewModel>>>
	*/
	public async getPaginateByTblUsuarioEntityIdUsuario(tblUsuarioModulo: IGetPaginateByTblMenuEntityIdMenuViewModel): Promise<IResponseStatusViewModel<IGetTblUsuarioModuloByIdRsViewModel>>{
    const url = `${apiAdminUrl}query/tbl-usuario-modulo/findPaginateByTblUsuarioEntityIdUsuario`;
    return new Promise<IResponseStatusViewModel<IGetTblUsuarioModuloByIdRsViewModel>>((resolve, reject) => {
      this._http.post<IResultApi>(url, tblUsuarioModulo)
      .subscribe({
        next: (result: IResultApi) => {
          resolve(this._statusResponseService.succes<IGetTblUsuarioModuloByIdRsViewModel>(result));
        },
        error: (error) => {
          reject(this._statusResponseService.error<IGetTblUsuarioModuloByIdRsViewModel>(error));
        }
      });
      });
    }


    /**
    * Obtiene el/los registros
    * @param busqueda: IGetTblMenuAccionPaginadoViewModel
    * @return Promise<IResponseStatusPaginadoViewModel<IGetTblMenuAccionPaginadoRsViewModel>>
    */
    public getPaginadoByTblUsuarioEntityIdUsuario(dataViewModel: IGetPaginateByTblUsuarioEntityIdUsuarioViewModel): Promise<IResponseStatusPaginadoViewModel<IGetTblUsuarioModuloPaginadoRsViewModel>>{
      const url = `${apiAdminUrl}query/tbl-usuario-modulo/findPaginateByTblUsuarioEntityIdUsuario`;
      return new Promise<IResponseStatusPaginadoViewModel<IGetTblUsuarioModuloRsViewModel>>((resolve, reject) => {
      this._http.post<IResultApi>(url, dataViewModel)
        .subscribe({
          next: (result: IResultApi) => {
            resolve(this._statusResponseService.succesPaginado<IGetTblUsuarioModuloRsViewModel>(result));
          },
          error: (error) => {
            reject(this._statusResponseService.errorPaginado<IGetTblUsuarioModuloRsViewModel>(error));
          }
        });
      });
    }
}
