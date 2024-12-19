/**
* Clase TblUsuarioModuloPerfilService que extiende de ATblUsuarioModuloPerfilService.
* Este archivo se complementa con el archivo ATblUsuarioModuloPerfilService.
*
* @author  Carlos Anchundia
* @date    03-12-2024
* @name    TblUsuarioModuloPerfilService
* @package Service
* @subpackage Data
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of  } from 'rxjs';
import { IGetTblUsuarioModuloPerfilRsViewModel, IGetTblUsuarioModuloPerfilViewModel, IGetTblUsuarioModuloPerfilPaginadoViewModel, IGetTblUsuarioModuloPerfilPaginadoRsViewModel, IGetTblUsuarioModuloPerfilByIdRsViewModel, IGetTblUsuarioModuloPerfilByIdViewModel, ISaveTblUsuarioModuloPerfilRsViewModel, ISaveTblUsuarioModuloPerfilViewModel, IUpdateTblUsuarioModuloPerfilRsViewModel, IUpdateTblUsuarioModuloPerfilViewModel } from '../../../domain/tbl-usuario-modulo-perfil/viewModels/i-tbl-usuario-modulo-perfil.viewModel';
import { environment } from '../../../environments/environment';
import { StatusResponseService } from '../../base/services/status-response.service';
import { IResponseStatusViewModel } from '../../../domain/base/viewModels/i-response-status.viewModel';
import { IResponseStatusPaginadoViewModel } from '../../../domain/base/viewModels/i-response-status-paginado.viewModel';
import { IResultApi } from '../../base/interfaces/i-result-api';

const apiAdminUrl: string = environment.apiAdminUrl;

@Injectable({
	providedIn: 'root',
})

export class TblUsuarioModuloPerfilService  {

	/**
	* Constructor
	* Se pueden llamar los servicios complementarios para este servicio
	* @param _http: HttpClient, _statusResponseService: StatusResponseService
	* @return TblUsuarioModuloPerfilService
	*/
	constructor(private _http: HttpClient, private _statusResponseService: StatusResponseService) {
	}

	/**
	* Guarda el registro actual
	* @param tblUsuarioModuloPerfil: ISaveTblUsuarioModuloPerfilViewModel
	* @return Promise<IResponseStatusViewModel<ISaveTblUsuarioModuloPerfilRsViewModel>>
	*/
	public saveTblUsuarioModuloPerfil(tblUsuarioModuloPerfil: ISaveTblUsuarioModuloPerfilViewModel): Promise<IResponseStatusViewModel<ISaveTblUsuarioModuloPerfilRsViewModel>>{
	const url = `${apiAdminUrl}command/tbl-usuario-modulo-perfil/saveTblUsuarioModuloPerfil`;
	return new Promise<IResponseStatusViewModel<ISaveTblUsuarioModuloPerfilRsViewModel>>((resolve, reject) => {
	this._http.post<IResultApi>(url, tblUsuarioModuloPerfil)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succes<ISaveTblUsuarioModuloPerfilRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.error<ISaveTblUsuarioModuloPerfilRsViewModel>(error));
			}
		});
	});
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetTblUsuarioModuloPerfilViewModel
	* @return Promise<IResponseStatusViewModel<IGetTblUsuarioModuloPerfilRsViewModel>>
	*/
	public getAllTblUsuarioModuloPerfil(): Promise<IResponseStatusViewModel<IGetTblUsuarioModuloPerfilRsViewModel>>{
	const url = `${apiAdminUrl}query/tbl-usuario-modulo-perfil/findAllTblUsuarioModuloPerfil`;
	return new Promise<IResponseStatusViewModel<IGetTblUsuarioModuloPerfilRsViewModel>>((resolve, reject) => {
	this._http.get<IResultApi>(url)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succes<IGetTblUsuarioModuloPerfilRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.error<IGetTblUsuarioModuloPerfilRsViewModel>(error));
			}
		});
	});
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetTblUsuarioModuloPerfilPaginadoViewModel
	* @return Promise<IResponseStatusPaginadoViewModel<IGetTblUsuarioModuloPerfilPaginadoRsViewModel>>
	*/
	public getPaginadoTblUsuarioModuloPerfil(dataViewModel: IGetTblUsuarioModuloPerfilPaginadoViewModel): Promise<IResponseStatusPaginadoViewModel<IGetTblUsuarioModuloPerfilPaginadoRsViewModel>>{
	const url = `${apiAdminUrl}query/tbl-usuario-modulo-perfil/findAllPaginateTblUsuarioModuloPerfil`;
	return new Promise<IResponseStatusPaginadoViewModel<IGetTblUsuarioModuloPerfilRsViewModel>>((resolve, reject) => {
	this._http.post<IResultApi>(url, dataViewModel)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succesPaginado<IGetTblUsuarioModuloPerfilRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.errorPaginado<IGetTblUsuarioModuloPerfilRsViewModel>(error));
			}
		});
	});
	}

	/**
	* Obtiene el registro actual
	* @param id_usuario_modulo_perfil: IGetTblUsuarioModuloPerfilByIdViewModel
	* @return Promise<IResponseStatusViewModel<IGetTblUsuarioModuloPerfilByIdRsViewModel>>
	*/
	public getByIdTblUsuarioModuloPerfil(id_usuario_modulo_perfil: IGetTblUsuarioModuloPerfilByIdViewModel): Promise<IResponseStatusViewModel<IGetTblUsuarioModuloPerfilByIdRsViewModel>>{
	const url = `${apiAdminUrl}query/tbl-usuario-modulo-perfil/findByIdTblUsuarioModuloPerfil`;
	return new Promise<IResponseStatusViewModel<IGetTblUsuarioModuloPerfilByIdRsViewModel>>((resolve, reject) => {
	this._http.post<IResultApi>(url, id_usuario_modulo_perfil)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succes<IGetTblUsuarioModuloPerfilByIdRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.error<IGetTblUsuarioModuloPerfilByIdRsViewModel>(error));
			}
		});
	});
	}

	/**
	* Actualizar el registro actual
	* @param tblUsuarioModuloPerfil: IUpdateTblUsuarioModuloPerfilViewModel
	* @return Promise<IResponseStatusViewModel<IUpdateTblUsuarioModuloPerfilRsViewModel>>
	*/
	public updateTblUsuarioModuloPerfil(tblUsuarioModuloPerfil: IUpdateTblUsuarioModuloPerfilViewModel): Promise<IResponseStatusViewModel<IUpdateTblUsuarioModuloPerfilRsViewModel>>{
	const url = `${apiAdminUrl}command/tbl-usuario-modulo-perfil/updateTblUsuarioModuloPerfil`;
	return new Promise<IResponseStatusViewModel<IUpdateTblUsuarioModuloPerfilRsViewModel>>((resolve, reject) => {
		this._http.post<IResultApi>(url, tblUsuarioModuloPerfil)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succes<IUpdateTblUsuarioModuloPerfilRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.error<IUpdateTblUsuarioModuloPerfilRsViewModel>(error));
			}
		});
		});
	}

}
