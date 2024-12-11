/**
* Clase TblUsuarioService que extiende de ATblUsuarioService.
* Este archivo se complementa con el archivo ATblUsuarioService.
*
* @author  Carlos Anchundia
* @date    03-12-2024
* @name    TblUsuarioService
* @package Service
* @subpackage Data
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of  } from 'rxjs';
import { IGetTblUsuarioRsViewModel, IGetTblUsuarioViewModel, IGetTblUsuarioPaginadoViewModel, IGetTblUsuarioPaginadoRsViewModel, IGetTblUsuarioByIdRsViewModel, IGetTblUsuarioByIdViewModel, ISaveTblUsuarioRsViewModel, ISaveTblUsuarioViewModel, IUpdateTblUsuarioRsViewModel, IUpdateTblUsuarioViewModel } from '../../../domain/tbl-usuario/viewModels/i-tbl-usuario.viewModel';
import { environment } from '../../../environments/environment';
import { StatusResponseService } from '../../base/services/status-response.service';
import { IResponseStatusViewModel } from '../../../domain/base/viewModels/i-response-status.viewModel';
import { IResponseStatusPaginadoViewModel } from '../../../domain/base/viewModels/i-response-status-paginado.viewModel';
import { IResultApi } from '../../base/interfaces/i-result-api';

const apiAdminUrl: string = environment.apiAdminUrl;

@Injectable({
	providedIn: 'root',
})

export class TblUsuarioService  {

	/**
	* Constructor
	* Se pueden llamar los servicios complementarios para este servicio
	* @param _http: HttpClient, _statusResponseService: StatusResponseService
	* @return TblUsuarioService
	*/
	constructor(private _http: HttpClient, private _statusResponseService: StatusResponseService) {
	}

	/**
	* Guarda el registro actual
	* @param tblUsuario: ISaveTblUsuarioViewModel
	* @return Promise<IResponseStatusViewModel<ISaveTblUsuarioRsViewModel>>
	*/
	public saveTblUsuario(tblUsuario: ISaveTblUsuarioViewModel): Promise<IResponseStatusViewModel<ISaveTblUsuarioRsViewModel>>{
	const url = `${apiAdminUrl}command/tbl-usuario/saveTblUsuario`;
	return new Promise<IResponseStatusViewModel<ISaveTblUsuarioRsViewModel>>((resolve, reject) => {
	this._http.post<IResultApi>(url, tblUsuario)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succes<ISaveTblUsuarioRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.error<ISaveTblUsuarioRsViewModel>(error));
			}
		});
	});
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetTblUsuarioViewModel
	* @return Promise<IResponseStatusViewModel<IGetTblUsuarioRsViewModel>>
	*/
	public getAllTblUsuario(): Promise<IResponseStatusViewModel<IGetTblUsuarioRsViewModel>>{
	const url = `${apiAdminUrl}query/tbl-usuario/findAllTblUsuario`;
	return new Promise<IResponseStatusViewModel<IGetTblUsuarioRsViewModel>>((resolve, reject) => {
	this._http.get<IResultApi>(url)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succes<IGetTblUsuarioRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.error<IGetTblUsuarioRsViewModel>(error));
			}
		});
	});
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetTblUsuarioPaginadoViewModel
	* @return Promise<IResponseStatusPaginadoViewModel<IGetTblUsuarioPaginadoRsViewModel>>
	*/
	public getPaginadoTblUsuario(dataViewModel: IGetTblUsuarioPaginadoViewModel): Promise<IResponseStatusPaginadoViewModel<IGetTblUsuarioPaginadoRsViewModel>>{
	const url = `${apiAdminUrl}query/tbl-usuario/findAllPaginateTblUsuario`;
	return new Promise<IResponseStatusPaginadoViewModel<IGetTblUsuarioRsViewModel>>((resolve, reject) => {
	this._http.post<IResultApi>(url, dataViewModel)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succesPaginado<IGetTblUsuarioRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.errorPaginado<IGetTblUsuarioRsViewModel>(error));
			}
		});
	});
	}

	/**
	* Obtiene el registro actual
	* @param id_usuario: IGetTblUsuarioByIdViewModel
	* @return Promise<IResponseStatusViewModel<IGetTblUsuarioByIdRsViewModel>>
	*/
	public getByIdTblUsuario(id_usuario: IGetTblUsuarioByIdViewModel): Promise<IResponseStatusViewModel<IGetTblUsuarioByIdRsViewModel>>{
	const url = `${apiAdminUrl}query/tbl-usuario/findByIdTblUsuario`;
	return new Promise<IResponseStatusViewModel<IGetTblUsuarioByIdRsViewModel>>((resolve, reject) => {
	this._http.post<IResultApi>(url, id_usuario)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succes<IGetTblUsuarioByIdRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.error<IGetTblUsuarioByIdRsViewModel>(error));
			}
		});
	});
	}

	/**
	* Actualizar el registro actual
	* @param tblUsuario: IUpdateTblUsuarioViewModel
	* @return Promise<IResponseStatusViewModel<IUpdateTblUsuarioRsViewModel>>
	*/
	public updateTblUsuario(tblUsuario: IUpdateTblUsuarioViewModel): Promise<IResponseStatusViewModel<IUpdateTblUsuarioRsViewModel>>{
	const url = `${apiAdminUrl}command/tbl-usuario/updateTblUsuario`;
	return new Promise<IResponseStatusViewModel<IUpdateTblUsuarioRsViewModel>>((resolve, reject) => {
		this._http.post<IResultApi>(url, tblUsuario)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succes<IUpdateTblUsuarioRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.error<IUpdateTblUsuarioRsViewModel>(error));
			}
		});
		});
	}

}
