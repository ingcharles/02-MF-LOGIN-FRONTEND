/**
* Clase TblAccionService que extiende de ATblAccionService.
* Este archivo se complementa con el archivo ATblAccionService.
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    TblAccionService
* @package Service
* @subpackage Data
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of  } from 'rxjs';
import { IGetTblAccionRsViewModel, IGetTblAccionViewModel, IGetTblAccionPaginadoViewModel, IGetTblAccionPaginadoRsViewModel, IGetTblAccionByIdRsViewModel, IGetTblAccionByIdViewModel, ISaveTblAccionRsViewModel, ISaveTblAccionViewModel, IUpdateTblAccionRsViewModel, IUpdateTblAccionViewModel } from '../../../domain/tbl-accion/viewModels/i-tbl-accion.viewModel';
import { environment } from '../../../environments/environment';
import { StatusResponseService } from '../../base/services/status-response.service';
import { IResponseStatusViewModel } from '../../../domain/base/viewModels/i-response-status.viewModel';
import { IResponseStatusPaginadoViewModel } from '../../../domain/base/viewModels/i-response-status-paginado.viewModel';
import { IResultApi } from '../../base/interfaces/i-result-api';

const apiAdminUrl: string = environment.apiAdminUrl;

@Injectable({
	providedIn: 'root',
})

export class TblAccionService  {

	/**
	* Constructor
	* Se pueden llamar los servicios complementarios para este servicio
	* @param _http: HttpClient, _statusResponseService: StatusResponseService
	* @return TblAccionService
	*/
	constructor(private _http: HttpClient, private _statusResponseService: StatusResponseService) {
	}

	/**
	* Guarda el registro actual
	* @param tblAccion: ISaveTblAccionViewModel
	* @return Promise<IResponseStatusViewModel<ISaveTblAccionRsViewModel>>
	*/
	public saveTblAccion(tblAccion: ISaveTblAccionViewModel): Promise<IResponseStatusViewModel<ISaveTblAccionRsViewModel>>{
	const url = `${apiAdminUrl}command/tbl-accion/saveTblAccion`;
	return new Promise<IResponseStatusViewModel<ISaveTblAccionRsViewModel>>((resolve, reject) => {
	this._http.post<IResultApi>(url, tblAccion)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succes<ISaveTblAccionRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.error<ISaveTblAccionRsViewModel>(error));
			}
		});
	});
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetTblAccionViewModel
	* @return Promise<IResponseStatusViewModel<IGetTblAccionRsViewModel>>
	*/
	public getAllTblAccion(): Promise<IResponseStatusViewModel<IGetTblAccionRsViewModel>>{
	const url = `${apiAdminUrl}query/tbl-accion/getAllTblAccion`;
	return new Promise<IResponseStatusViewModel<IGetTblAccionRsViewModel>>((resolve, reject) => {
	this._http.get<IResultApi>(url)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succes<IGetTblAccionRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.error<IGetTblAccionRsViewModel>(error));
			}
		});
	});
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetTblAccionPaginadoViewModel
	* @return Promise<IResponseStatusPaginadoViewModel<IGetTblAccionPaginadoRsViewModel>>
	*/
	public getPaginadoTblAccion(dataViewModel: IGetTblAccionPaginadoViewModel): Promise<IResponseStatusPaginadoViewModel<IGetTblAccionPaginadoRsViewModel>>{
	const url = `${apiAdminUrl}query/tbl-accion/findAllPaginateTblAccion`;
	return new Promise<IResponseStatusPaginadoViewModel<IGetTblAccionRsViewModel>>((resolve, reject) => {
	this._http.post<IResultApi>(url, dataViewModel)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succesPaginado<IGetTblAccionRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.errorPaginado<IGetTblAccionRsViewModel>(error));
			}
		});
	});
	}

	/**
	* Obtiene el registro actual
	* @param id_accion: IGetTblAccionByIdViewModel
	* @return Promise<IResponseStatusViewModel<IGetTblAccionByIdRsViewModel>>
	*/
	public getByIdTblAccion(id_accion: IGetTblAccionByIdViewModel): Promise<IResponseStatusViewModel<IGetTblAccionByIdRsViewModel>>{
	const url = `${apiAdminUrl}query/tbl-accion/findByIdTblAccion`;
	return new Promise<IResponseStatusViewModel<IGetTblAccionByIdRsViewModel>>((resolve, reject) => {
	this._http.post<IResultApi>(url, id_accion)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succes<IGetTblAccionByIdRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.error<IGetTblAccionByIdRsViewModel>(error));
			}
		});
	});
	}

	/**
	* Actualizar el registro actual
	* @param tblAccion: IUpdateTblAccionViewModel
	* @return Promise<IResponseStatusViewModel<IUpdateTblAccionRsViewModel>>
	*/
	public updateTblAccion(tblAccion: IUpdateTblAccionViewModel): Promise<IResponseStatusViewModel<IUpdateTblAccionRsViewModel>>{
	const url = `${apiAdminUrl}command/tbl-accion/updateTblAccion`;
	return new Promise<IResponseStatusViewModel<IUpdateTblAccionRsViewModel>>((resolve, reject) => {
		this._http.post<IResultApi>(url, tblAccion)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succes<IUpdateTblAccionRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.error<IUpdateTblAccionRsViewModel>(error));
			}
		});
		});
	}

}
