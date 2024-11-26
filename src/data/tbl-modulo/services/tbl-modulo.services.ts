/**
* Clase TblModuloService que extiende de ATblModuloService.
* Este archivo se complementa con el archivo ATblModuloService.
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    TblModuloService
* @package Service
* @subpackage Data
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of  } from 'rxjs';
import { IGetTblModuloRsViewModel, IGetTblModuloViewModel, IGetTblModuloPaginadoViewModel, IGetTblModuloPaginadoRsViewModel, IGetTblModuloByIdRsViewModel, IGetTblModuloByIdViewModel, ISaveTblModuloRsViewModel, ISaveTblModuloViewModel, IUpdateTblModuloRsViewModel, IUpdateTblModuloViewModel } from '../../../domain/tbl-modulo/viewModels/i-tbl-modulo.viewModel';
import { environment } from '../../../environments/environment';
import { StatusResponseService } from '../../base/services/status-response.service';
import { IResponseStatusViewModel } from '../../../domain/base/viewModels/i-response-status.viewModel';
import { IResultApi } from '../../base/interfaces/i-result-api';

const apiAdminUrl: string = environment.apiAdminUrl;

@Injectable({
	providedIn: 'root',
})

export class TblModuloService  {

	/**
	* Constructor
	* Se pueden llamar los servicios complementarios para este servicio
	* @param _http: HttpClient, _statusResponseService: StatusResponseService
	* @return TblModuloService
	*/
	constructor(private _http: HttpClient, private _statusResponseService: StatusResponseService) {
	}

	/**
	* Guarda el registro actual
	* @param tblModulo: ISaveTblModuloViewModel
	* @return Promise<Observable<IResponseStatusViewModel<ISaveTblModuloRsViewModel>>>
	*/
	public async saveTblModulo(tblModulo: ISaveTblModuloViewModel): Promise<Observable<IResponseStatusViewModel<ISaveTblModuloRsViewModel>>>{
	const url = `${apiAdminUrl}command/tbl-modulo/saveTblModulo`;
	return this._http.post<IResultApi>(url, tblModulo).pipe(
		map((result) => {
		return this._statusResponseService.succes<ISaveTblModuloRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<ISaveTblModuloRsViewModel>(error));
		})
	);
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetTblModuloViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetTblModuloRsViewModel>>>
	*/
	public async getTblModulo(busqueda: IGetTblModuloViewModel): Promise<Observable<IResponseStatusViewModel<IGetTblModuloRsViewModel>>>{
	const url = `${apiAdminUrl}query/tbl-modulo/getTblModulo`;
	return this._http.post<IResultApi>(url, busqueda).pipe(
		map((result) => {
		return this._statusResponseService.succes<IGetTblModuloRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IGetTblModuloRsViewModel>(error));
		})
	);
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetTblModuloPaginadoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetTblModuloPaginadoRsViewModel>>>
	*/
	public async getTblModuloPaginado(dataViewModel: IGetTblModuloPaginadoViewModel): Promise<Observable<IResponseStatusViewModel<IGetTblModuloPaginadoRsViewModel>>>{
	const url = `${apiAdminUrl}query/tbl-modulo/findAllPaginateTblModulo`;
	return this._http.post<IResultApi>(url, dataViewModel).pipe(
		map((result) => {
		return this._statusResponseService.succes<IGetTblModuloPaginadoRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IGetTblModuloPaginadoRsViewModel>(error));
		})
	);
	}

	/**
	* Obtiene el registro actual
	* @param id_modulo: IGetTblModuloByIdViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetTblModuloByIdRsViewModel>>>
	*/
	public async getTblModuloById(id_modulo: IGetTblModuloByIdViewModel): Promise<Observable<IResponseStatusViewModel<IGetTblModuloByIdRsViewModel>>>{
	const url = `${apiAdminUrl}query/tbl-modulo/findByIdTblModulo`;
	return this._http.post<IResultApi>(url, id_modulo).pipe(
		map((result) => {
		return this._statusResponseService.succes<IGetTblModuloByIdRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IGetTblModuloByIdRsViewModel>(error));
		})
	);
	}

	/**
	* Actualizar el registro actual
	* @param tblModulo: IUpdateTblModuloViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IUpdateTblModuloRsViewModel>>>
	*/
	public async updateTblModulo(tblModulo: IUpdateTblModuloViewModel): Promise<Observable<IResponseStatusViewModel<IUpdateTblModuloRsViewModel>>>{
	const url = `${apiAdminUrl}command/tbl-modulo/updateTblModulo`;
	return this._http.post<IResultApi>(url, tblModulo).pipe(
		map((result) => {
		return this._statusResponseService.succes<IUpdateTblModuloRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IUpdateTblModuloRsViewModel>(error));
		})
	);
	}

}
