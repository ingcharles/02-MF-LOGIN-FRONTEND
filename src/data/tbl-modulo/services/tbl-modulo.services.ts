/**
* Clase TblModuloService que extiende de ATblModuloService.
* Este archivo se complementa con el archivo ATblModuloService.
*
* @author  Carlos Anchundia
* @date    03-12-2024
* @name    TblModuloService
* @package Service
* @subpackage Data
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of  } from 'rxjs';
import { IGetTblModuloRsViewModel, IGetTblModuloViewModel, IGetTblModuloPaginadoViewModel, IGetTblModuloPaginadoRsViewModel, IGetTblModuloByIdRsViewModel, IGetTblModuloByIdViewModel, ISaveTblModuloRsViewModel, ISaveTblModuloViewModel, IUpdateTblModuloRsViewModel, IUpdateTblModuloViewModel } from '../../../domain/tbl-modulo/viewModels/i-tbl-modulo.viewModel';
import { environment } from '../../../environments/environment';
import { StatusResponseService } from '../../base/services/status-response.service';
import { IResponseStatusViewModel } from '../../../domain/base/viewModels/i-response-status.viewModel';
import { IResponseStatusPaginadoViewModel } from '../../../domain/base/viewModels/i-response-status-paginado.viewModel';
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
	* @return Promise<IResponseStatusViewModel<ISaveTblModuloRsViewModel>>
	*/
	public saveTblModulo(tblModulo: ISaveTblModuloViewModel): Promise<IResponseStatusViewModel<ISaveTblModuloRsViewModel>>{
	const url = `${apiAdminUrl}command/tbl-modulo/saveTblModulo`;
	return new Promise<IResponseStatusViewModel<ISaveTblModuloRsViewModel>>((resolve, reject) => {
	this._http.post<IResultApi>(url, tblModulo)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succes<ISaveTblModuloRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.error<ISaveTblModuloRsViewModel>(error));
			}
		});
	});
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetTblModuloViewModel
	* @return Promise<IResponseStatusViewModel<IGetTblModuloRsViewModel>>
	*/
	public getAllTblModulo(): Promise<IResponseStatusViewModel<IGetTblModuloRsViewModel>>{
	const url = `${apiAdminUrl}query/tbl-modulo/findAllTblModulo`;
	return new Promise<IResponseStatusViewModel<IGetTblModuloRsViewModel>>((resolve, reject) => {
	this._http.get<IResultApi>(url)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succes<IGetTblModuloRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.error<IGetTblModuloRsViewModel>(error));
			}
		});
	});
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetTblModuloPaginadoViewModel
	* @return Promise<IResponseStatusPaginadoViewModel<IGetTblModuloPaginadoRsViewModel>>
	*/
	public getPaginadoTblModulo(dataViewModel: IGetTblModuloPaginadoViewModel): Promise<IResponseStatusPaginadoViewModel<IGetTblModuloPaginadoRsViewModel>>{
	const url = `${apiAdminUrl}query/tbl-modulo/findAllPaginateTblModulo`;
	return new Promise<IResponseStatusPaginadoViewModel<IGetTblModuloRsViewModel>>((resolve, reject) => {
	this._http.post<IResultApi>(url, dataViewModel)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succesPaginado<IGetTblModuloRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.errorPaginado<IGetTblModuloRsViewModel>(error));
			}
		});
	});
	}

	/**
	* Obtiene el registro actual
	* @param id_modulo: IGetTblModuloByIdViewModel
	* @return Promise<IResponseStatusViewModel<IGetTblModuloByIdRsViewModel>>
	*/
	public getByIdTblModulo(id_modulo: IGetTblModuloByIdViewModel): Promise<IResponseStatusViewModel<IGetTblModuloByIdRsViewModel>>{
	const url = `${apiAdminUrl}query/tbl-modulo/findByIdTblModulo`;
	return new Promise<IResponseStatusViewModel<IGetTblModuloByIdRsViewModel>>((resolve, reject) => {
	this._http.post<IResultApi>(url, id_modulo)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succes<IGetTblModuloByIdRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.error<IGetTblModuloByIdRsViewModel>(error));
			}
		});
	});
	}

	/**
	* Actualizar el registro actual
	* @param tblModulo: IUpdateTblModuloViewModel
	* @return Promise<IResponseStatusViewModel<IUpdateTblModuloRsViewModel>>
	*/
	public updateTblModulo(tblModulo: IUpdateTblModuloViewModel): Promise<IResponseStatusViewModel<IUpdateTblModuloRsViewModel>>{
	const url = `${apiAdminUrl}command/tbl-modulo/updateTblModulo`;
	return new Promise<IResponseStatusViewModel<IUpdateTblModuloRsViewModel>>((resolve, reject) => {
		this._http.post<IResultApi>(url, tblModulo)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succes<IUpdateTblModuloRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.error<IUpdateTblModuloRsViewModel>(error));
			}
		});
		});
	}

}
