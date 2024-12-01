/**
* Clase TblPerfilService que extiende de ATblPerfilService.
* Este archivo se complementa con el archivo ATblPerfilService.
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    TblPerfilService
* @package Service
* @subpackage Data
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of  } from 'rxjs';
import { IGetTblPerfilRsViewModel, IGetTblPerfilViewModel, IGetTblPerfilPaginadoViewModel, IGetTblPerfilPaginadoRsViewModel, IGetTblPerfilByIdRsViewModel, IGetTblPerfilByIdViewModel, ISaveTblPerfilRsViewModel, ISaveTblPerfilViewModel, IUpdateTblPerfilRsViewModel, IUpdateTblPerfilViewModel } from '../../../domain/tbl-perfil/viewModels/i-tbl-perfil.viewModel';
import { environment } from '../../../environments/environment';
import { StatusResponseService } from '../../base/services/status-response.service';
import { IResponseStatusViewModel } from '../../../domain/base/viewModels/i-response-status.viewModel';
import { IResponseStatusPaginadoViewModel } from '../../../domain/base/viewModels/i-response-status-paginado.viewModel';
import { IResultApi } from '../../base/interfaces/i-result-api';

const apiAdminUrl: string = environment.apiAdminUrl;

@Injectable({
	providedIn: 'root',
})

export class TblPerfilService  {

	/**
	* Constructor
	* Se pueden llamar los servicios complementarios para este servicio
	* @param _http: HttpClient, _statusResponseService: StatusResponseService
	* @return TblPerfilService
	*/
	constructor(private _http: HttpClient, private _statusResponseService: StatusResponseService) {
	}

	/**
	* Guarda el registro actual
	* @param tblPerfil: ISaveTblPerfilViewModel
	* @return Promise<IResponseStatusViewModel<ISaveTblPerfilRsViewModel>>
	*/
	public saveTblPerfil(tblPerfil: ISaveTblPerfilViewModel): Promise<IResponseStatusViewModel<ISaveTblPerfilRsViewModel>>{
	const url = `${apiAdminUrl}command/tbl-perfil/saveTblPerfil`;
	return new Promise<IResponseStatusViewModel<ISaveTblPerfilRsViewModel>>((resolve, reject) => {
	this._http.post<IResultApi>(url, tblPerfil)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succes<ISaveTblPerfilRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.error<ISaveTblPerfilRsViewModel>(error));
			}
		});
	});
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetTblPerfilViewModel
	* @return Promise<IResponseStatusViewModel<IGetTblPerfilRsViewModel>>
	*/
	public getAllTblPerfil(): Promise<IResponseStatusViewModel<IGetTblPerfilRsViewModel>>{
	const url = `${apiAdminUrl}query/tbl-perfil/getAllTblPerfil`;
	return new Promise<IResponseStatusViewModel<IGetTblPerfilRsViewModel>>((resolve, reject) => {
	this._http.get<IResultApi>(url)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succes<IGetTblPerfilRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.error<IGetTblPerfilRsViewModel>(error));
			}
		});
	});
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetTblPerfilPaginadoViewModel
	* @return Promise<IResponseStatusPaginadoViewModel<IGetTblPerfilPaginadoRsViewModel>>
	*/
	public getPaginadoTblPerfil(dataViewModel: IGetTblPerfilPaginadoViewModel): Promise<IResponseStatusPaginadoViewModel<IGetTblPerfilPaginadoRsViewModel>>{
	const url = `${apiAdminUrl}query/tbl-perfil/findAllPaginateTblPerfil`;
	return new Promise<IResponseStatusPaginadoViewModel<IGetTblPerfilRsViewModel>>((resolve, reject) => {
	this._http.post<IResultApi>(url, dataViewModel)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succesPaginado<IGetTblPerfilRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.errorPaginado<IGetTblPerfilRsViewModel>(error));
			}
		});
	});
	}

	/**
	* Obtiene el registro actual
	* @param id_perfil: IGetTblPerfilByIdViewModel
	* @return Promise<IResponseStatusViewModel<IGetTblPerfilByIdRsViewModel>>
	*/
	public getByIdTblPerfil(id_perfil: IGetTblPerfilByIdViewModel): Promise<IResponseStatusViewModel<IGetTblPerfilByIdRsViewModel>>{
	const url = `${apiAdminUrl}query/tbl-perfil/findByIdTblPerfil`;
	return new Promise<IResponseStatusViewModel<IGetTblPerfilByIdRsViewModel>>((resolve, reject) => {
	this._http.post<IResultApi>(url, id_perfil)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succes<IGetTblPerfilByIdRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.error<IGetTblPerfilByIdRsViewModel>(error));
			}
		});
	});
	}

	/**
	* Actualizar el registro actual
	* @param tblPerfil: IUpdateTblPerfilViewModel
	* @return Promise<IResponseStatusViewModel<IUpdateTblPerfilRsViewModel>>
	*/
	public updateTblPerfil(tblPerfil: IUpdateTblPerfilViewModel): Promise<IResponseStatusViewModel<IUpdateTblPerfilRsViewModel>>{
	const url = `${apiAdminUrl}command/tbl-perfil/updateTblPerfil`;
	return new Promise<IResponseStatusViewModel<IUpdateTblPerfilRsViewModel>>((resolve, reject) => {
		this._http.post<IResultApi>(url, tblPerfil)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succes<IUpdateTblPerfilRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.error<IUpdateTblPerfilRsViewModel>(error));
			}
		});
		});
	}

}
