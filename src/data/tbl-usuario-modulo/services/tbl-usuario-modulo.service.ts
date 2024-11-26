/**
* Clase TblUsuarioModuloService que extiende de ATblUsuarioModuloService.
* Este archivo se complementa con el archivo ATblUsuarioModuloService.
*
* @author  Carlos Anchundia
* @date    22-10-2024
* @name    TblUsuarioModuloService
* @package Service
* @subpackage Data
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of  } from 'rxjs';
import { IGetTblUsuarioModuloRsViewModel, IGetTblUsuarioModuloViewModel, IGetTblUsuarioModuloPaginadoViewModel, IGetTblUsuarioModuloPaginadoRsViewModel, IGetTblUsuarioModuloByIdRsViewModel, IGetTblUsuarioModuloByIdViewModel, ISaveTblUsuarioModuloRsViewModel, ISaveTblUsuarioModuloViewModel, IUpdateTblUsuarioModuloRsViewModel, IUpdateTblUsuarioModuloViewModel } from '../../../domain/tbl-usuario-modulo/viewModels/i-tbl-usuario-modulo.viewModel';
import { environment } from '../../../environments/environment';
import { StatusResponseService } from '../../base/services/status-response.service';
import { IResponseStatusViewModel } from '../../../domain/base/viewModels/i-response-status.viewModel';
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
	* @return Promise<Observable<IResponseStatusViewModel<ISaveTblUsuarioModuloRsViewModel>>>
	*/
	public async saveTblUsuarioModulo(tblUsuarioModulo: ISaveTblUsuarioModuloViewModel): Promise<Observable<IResponseStatusViewModel<ISaveTblUsuarioModuloRsViewModel>>>{
	const url = `${apiAdminUrl}command/tbl-usuario-modulo/saveTblUsuarioModulo`;
	return this._http.post<IResultApi>(url, tblUsuarioModulo).pipe(
		map((result) => {
		return this._statusResponseService.succes<ISaveTblUsuarioModuloRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<ISaveTblUsuarioModuloRsViewModel>(error));
		})
	);
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetTblUsuarioModuloViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetTblUsuarioModuloRsViewModel>>>
	*/
	public async getTblUsuarioModulo(busqueda: IGetTblUsuarioModuloViewModel): Promise<Observable<IResponseStatusViewModel<IGetTblUsuarioModuloRsViewModel>>>{
	const url = `${apiAdminUrl}query/tbl-usuario-modulo/getTblUsuarioModulo`;
	return this._http.post<IResultApi>(url, busqueda).pipe(
		map((result) => {
		return this._statusResponseService.succes<IGetTblUsuarioModuloRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IGetTblUsuarioModuloRsViewModel>(error));
		})
	);
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetTblUsuarioModuloPaginadoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetTblUsuarioModuloPaginadoRsViewModel>>>
	*/
	public async getTblUsuarioModuloPaginado(dataViewModel: IGetTblUsuarioModuloPaginadoViewModel): Promise<Observable<IResponseStatusViewModel<IGetTblUsuarioModuloPaginadoRsViewModel>>>{
	const url = `${apiAdminUrl}query/tbl-usuario-modulo/findAllPaginateTblUsuarioModulo`;
	return this._http.post<IResultApi>(url, dataViewModel).pipe(
		map((result) => {
		return this._statusResponseService.succes<IGetTblUsuarioModuloPaginadoRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IGetTblUsuarioModuloPaginadoRsViewModel>(error));
		})
	);
	}

    	/**
	* Obtiene el/los registros
	* @param busqueda: IGetTblUsuarioModuloViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetTblUsuarioModuloRsViewModel>>>
	*/
	public async getTblUsuarioModuloFindById(busqueda: IGetTblUsuarioModuloByIdViewModel): Promise<Observable<IResponseStatusViewModel<IGetTblUsuarioModuloRsViewModel>>>{
    const url = `${apiAdminUrl}query/tbl-usuario-modulo/findByIdUsuario`;
    return this._http.post<IResultApi>(url, busqueda).pipe(
      map((result) => {
      return this._statusResponseService.succes<IGetTblUsuarioModuloRsViewModel>(result);
      }),
      catchError((error) => {
      return of(this._statusResponseService.error<IGetTblUsuarioModuloRsViewModel>(error));
      })
    );
  }

	/**
	* Obtiene el registro actual
	* @param id_usuario_modulo: IGetTblUsuarioModuloByIdViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetTblUsuarioModuloByIdRsViewModel>>>
	*/
	public async getTblUsuarioModuloById(id_usuario_modulo: IGetTblUsuarioModuloByIdViewModel): Promise<Observable<IResponseStatusViewModel<IGetTblUsuarioModuloByIdRsViewModel>>>{
	const url = `${apiAdminUrl}query/tbl-usuario-modulo/findByIdTblUsuarioModulo`;
	return this._http.post<IResultApi>(url, id_usuario_modulo).pipe(
		map((result) => {
		return this._statusResponseService.succes<IGetTblUsuarioModuloByIdRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IGetTblUsuarioModuloByIdRsViewModel>(error));
		})
	);
	}

  	/**
	* Obtiene el registro actual
	* @param id_usuario_modulo: IGetTblUsuarioModuloByIdViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetTblUsuarioModuloByIdRsViewModel>>>
	*/
	public async getTblUsuarioEntityIdUsuario(tblUsuarioModulo: IGetTblUsuarioModuloViewModel): Promise<Observable<IResponseStatusViewModel<IGetTblUsuarioModuloByIdRsViewModel>>>{
    const url = `${apiAdminUrl}query/tbl-usuario-modulo/findByTblUsuarioEntityIdUsuario`;
    return this._http.post<IResultApi>(url, tblUsuarioModulo).pipe(
      map((result) => {
      return this._statusResponseService.succes<IGetTblUsuarioModuloByIdRsViewModel>(result);
      }),
      catchError((error) => {
      return of(this._statusResponseService.error<IGetTblUsuarioModuloByIdRsViewModel>(error));
      })
    );
    }

	/**
	* Actualizar el registro actual
	* @param tblUsuarioModulo: IUpdateTblUsuarioModuloViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IUpdateTblUsuarioModuloRsViewModel>>>
	*/
	public async updateTblUsuarioModulo(tblUsuarioModulo: IUpdateTblUsuarioModuloViewModel): Promise<Observable<IResponseStatusViewModel<IUpdateTblUsuarioModuloRsViewModel>>>{
	const url = `${apiAdminUrl}command/tbl-usuario-modulo/updateTblUsuarioModulo`;
	return this._http.post<IResultApi>(url, tblUsuarioModulo).pipe(
		map((result) => {
		return this._statusResponseService.succes<IUpdateTblUsuarioModuloRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IUpdateTblUsuarioModuloRsViewModel>(error));
		})
	);
	}

}
