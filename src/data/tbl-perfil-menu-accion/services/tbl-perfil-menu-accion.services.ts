/**
* Clase TblPerfilMenuAccionService que extiende de ATblPerfilMenuAccionService.
* Este archivo se complementa con el archivo ATblPerfilMenuAccionService.
*
* @author  Carlos Anchundia
* @date    03-12-2024
* @name    TblPerfilMenuAccionService
* @package Service
* @subpackage Data
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of  } from 'rxjs';
import { IGetTblPerfilMenuAccionRsViewModel, IGetTblPerfilMenuAccionViewModel, IGetTblPerfilMenuAccionPaginadoViewModel, IGetTblPerfilMenuAccionPaginadoRsViewModel, IGetTblPerfilMenuAccionByIdRsViewModel, IGetTblPerfilMenuAccionByIdViewModel, ISaveTblPerfilMenuAccionRsViewModel, ISaveTblPerfilMenuAccionViewModel, IUpdateTblPerfilMenuAccionRsViewModel, IUpdateTblPerfilMenuAccionViewModel, IGetTblPerfilMenuAccionByIdPerfilRsViewModel, IGetTblPerfilMenuAccionByIdUsuarioModuloRsViewModel } from '../../../domain/tbl-perfil-menu-accion/viewModels/i-tbl-perfil-menu-accion.viewModel';
import { environment } from '../../../environments/environment';
import { StatusResponseService } from '../../base/services/status-response.service';
import { IResponseStatusViewModel } from '../../../domain/base/viewModels/i-response-status.viewModel';
import { IResponseStatusPaginadoViewModel } from '../../../domain/base/viewModels/i-response-status-paginado.viewModel';
import { IResultApi } from '../../base/interfaces/i-result-api';
import { IGetTblUsuarioModuloPerfilByIdViewModel } from '../../../domain/tbl-usuario-modulo-perfil/viewModels/i-tbl-usuario-modulo-perfil.viewModel';

const apiAdminUrl: string = environment.apiAdminUrl;

@Injectable({
	providedIn: 'root',
})

export class TblPerfilMenuAccionService  {

	/**
	* Constructor
	* Se pueden llamar los servicios complementarios para este servicio
	* @param _http: HttpClient, _statusResponseService: StatusResponseService
	* @return TblPerfilMenuAccionService
	*/
	constructor(private _http: HttpClient, private _statusResponseService: StatusResponseService) {
	}

	/**
	* Guarda el registro actual
	* @param tblPerfilMenuAccion: ISaveTblPerfilMenuAccionViewModel
	* @return Promise<IResponseStatusViewModel<ISaveTblPerfilMenuAccionRsViewModel>>
	*/
	public saveTblPerfilMenuAccion(tblPerfilMenuAccion: ISaveTblPerfilMenuAccionViewModel): Promise<IResponseStatusViewModel<ISaveTblPerfilMenuAccionRsViewModel>>{
	const url = `${apiAdminUrl}command/tbl-perfil-menu-accion/saveTblPerfilMenuAccion`;
	return new Promise<IResponseStatusViewModel<ISaveTblPerfilMenuAccionRsViewModel>>((resolve, reject) => {
	this._http.post<IResultApi>(url, tblPerfilMenuAccion)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succes<ISaveTblPerfilMenuAccionRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.error<ISaveTblPerfilMenuAccionRsViewModel>(error));
			}
		});
	});
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetTblPerfilMenuAccionViewModel
	* @return Promise<IResponseStatusViewModel<IGetTblPerfilMenuAccionRsViewModel>>
	*/
	public getAllTblPerfilMenuAccion(): Promise<IResponseStatusViewModel<IGetTblPerfilMenuAccionRsViewModel>>{
	const url = `${apiAdminUrl}query/tbl-perfil-menu-accion/findAllTblPerfilMenuAccion`;
	return new Promise<IResponseStatusViewModel<IGetTblPerfilMenuAccionRsViewModel>>((resolve, reject) => {
	this._http.get<IResultApi>(url)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succes<IGetTblPerfilMenuAccionRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.error<IGetTblPerfilMenuAccionRsViewModel>(error));
			}
		});
	});
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetTblPerfilMenuAccionPaginadoViewModel
	* @return Promise<IResponseStatusPaginadoViewModel<IGetTblPerfilMenuAccionPaginadoRsViewModel>>
	*/
	public getPaginadoTblPerfilMenuAccion(dataViewModel: IGetTblPerfilMenuAccionPaginadoViewModel): Promise<IResponseStatusPaginadoViewModel<IGetTblPerfilMenuAccionPaginadoRsViewModel>>{
	const url = `${apiAdminUrl}query/tbl-perfil-menu-accion/findAllPaginateTblPerfilMenuAccion`;
	return new Promise<IResponseStatusPaginadoViewModel<IGetTblPerfilMenuAccionRsViewModel>>((resolve, reject) => {
	this._http.post<IResultApi>(url, dataViewModel)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succesPaginado<IGetTblPerfilMenuAccionRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.errorPaginado<IGetTblPerfilMenuAccionRsViewModel>(error));
			}
		});
	});
	}

	/**
	* Obtiene el registro actual
	* @param id_perfil_menu_accion: IGetTblPerfilMenuAccionByIdViewModel
	* @return Promise<IResponseStatusViewModel<IGetTblPerfilMenuAccionByIdRsViewModel>>
	*/
	public getByIdTblPerfilMenuAccion(id_perfil_menu_accion: IGetTblPerfilMenuAccionByIdViewModel): Promise<IResponseStatusViewModel<IGetTblPerfilMenuAccionByIdRsViewModel>>{
	const url = `${apiAdminUrl}query/tbl-perfil-menu-accion/findByIdTblPerfilMenuAccion`;
	return new Promise<IResponseStatusViewModel<IGetTblPerfilMenuAccionByIdRsViewModel>>((resolve, reject) => {
	this._http.post<IResultApi>(url, id_perfil_menu_accion)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succes<IGetTblPerfilMenuAccionByIdRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.error<IGetTblPerfilMenuAccionByIdRsViewModel>(error));
			}
		});
	});
	}

	/**
	* Actualizar el registro actual
	* @param tblPerfilMenuAccion: IUpdateTblPerfilMenuAccionViewModel
	* @return Promise<IResponseStatusViewModel<IUpdateTblPerfilMenuAccionRsViewModel>>
	*/
	public updateTblPerfilMenuAccion(tblPerfilMenuAccion: IUpdateTblPerfilMenuAccionViewModel): Promise<IResponseStatusViewModel<IUpdateTblPerfilMenuAccionRsViewModel>>{
	const url = `${apiAdminUrl}command/tbl-perfil-menu-accion/updateTblPerfilMenuAccion`;
	return new Promise<IResponseStatusViewModel<IUpdateTblPerfilMenuAccionRsViewModel>>((resolve, reject) => {
		this._http.post<IResultApi>(url, tblPerfilMenuAccion)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succes<IUpdateTblPerfilMenuAccionRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.error<IUpdateTblPerfilMenuAccionRsViewModel>(error));
			}
		});
		});
	}


	/**
	* Obtiene el registro actual
	* @param id_perfil_menu_accion: IGetTblPerfilMenuAccionByIdViewModel
	* @return Promise<IResponseStatusViewModel<IGetTblPerfilMenuAccionByIdRsViewModel>>
	*/
	public getByTblPerfilEntityIdPerfil(tblPerfilMenuAccion: IGetTblPerfilMenuAccionByIdViewModel): Promise<IResponseStatusViewModel<IGetTblPerfilMenuAccionByIdPerfilRsViewModel>>{
    const url = `${apiAdminUrl}query/tbl-perfil-menu-accion/findByTblPerfilEntityIdPerfil`;
    return new Promise<IResponseStatusViewModel<IGetTblPerfilMenuAccionByIdPerfilRsViewModel>>((resolve, reject) => {
    this._http.post<IResultApi>(url, tblPerfilMenuAccion)
      .subscribe({
        next: (result: IResultApi) => {
          resolve(this._statusResponseService.succes<IGetTblPerfilMenuAccionByIdPerfilRsViewModel>(result));
        },
        error: (error) => {
          reject(this._statusResponseService.error<IGetTblPerfilMenuAccionByIdPerfilRsViewModel>(error));
        }
      });
    });
    }


	/**
	* Obtiene el registro actual
	* @param id_perfil_menu_accion: IGetTblPerfilMenuAccionByIdViewModel
	* @return Promise<IResponseStatusViewModel<IGetTblPerfilMenuAccionByIdRsViewModel>>
	*/
	public getTblMenuByIdUsuarioModulo(tblUsuarioModuloPerfil: IGetTblUsuarioModuloPerfilByIdViewModel): Promise<IResponseStatusViewModel<IGetTblPerfilMenuAccionByIdUsuarioModuloRsViewModel>>{
    const url = `${apiAdminUrl}query/tbl-perfil-menu-accion/findTblMenuByIdUsuarioModulo`;
    return new Promise<IResponseStatusViewModel<IGetTblPerfilMenuAccionByIdUsuarioModuloRsViewModel>>((resolve, reject) => {
    this._http.post<IResultApi>(url, tblUsuarioModuloPerfil)
      .subscribe({
        next: (result: IResultApi) => {
          resolve(this._statusResponseService.succes<IGetTblPerfilMenuAccionByIdUsuarioModuloRsViewModel>(result));
        },
        error: (error) => {
          reject(this._statusResponseService.error<IGetTblPerfilMenuAccionByIdUsuarioModuloRsViewModel>(error));
        }
      });
    });
    }


}
