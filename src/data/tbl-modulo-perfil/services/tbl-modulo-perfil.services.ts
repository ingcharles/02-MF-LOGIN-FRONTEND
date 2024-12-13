/**
* Clase TblModuloPerfilService que extiende de ATblModuloPerfilService.
* Este archivo se complementa con el archivo ATblModuloPerfilService.
*
* @author  Carlos Anchundia
* @date    03-12-2024
* @name    TblModuloPerfilService
* @package Service
* @subpackage Data
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of  } from 'rxjs';
import { IGetTblModuloPerfilRsViewModel, IGetTblModuloPerfilViewModel, IGetTblModuloPerfilPaginadoViewModel, IGetTblModuloPerfilPaginadoRsViewModel, IGetTblModuloPerfilByIdRsViewModel, IGetTblModuloPerfilByIdViewModel, ISaveTblModuloPerfilRsViewModel, ISaveTblModuloPerfilViewModel, IUpdateTblModuloPerfilRsViewModel, IUpdateTblModuloPerfilViewModel, IGetPaginateByTblModuloEntityIdModuloViewModel } from '../../../domain/tbl-modulo-perfil/viewModels/i-tbl-modulo-perfil.viewModel';
import { environment } from '../../../environments/environment';
import { StatusResponseService } from '../../base/services/status-response.service';
import { IResponseStatusViewModel } from '../../../domain/base/viewModels/i-response-status.viewModel';
import { IResponseStatusPaginadoViewModel } from '../../../domain/base/viewModels/i-response-status-paginado.viewModel';
import { IResultApi } from '../../base/interfaces/i-result-api';

const apiAdminUrl: string = environment.apiAdminUrl;

@Injectable({
	providedIn: 'root',
})

export class TblModuloPerfilService  {

	/**
	* Constructor
	* Se pueden llamar los servicios complementarios para este servicio
	* @param _http: HttpClient, _statusResponseService: StatusResponseService
	* @return TblModuloPerfilService
	*/
	constructor(private _http: HttpClient, private _statusResponseService: StatusResponseService) {
	}

	/**
	* Guarda el registro actual
	* @param tblModuloPerfil: ISaveTblModuloPerfilViewModel
	* @return Promise<IResponseStatusViewModel<ISaveTblModuloPerfilRsViewModel>>
	*/
	public saveTblModuloPerfil(tblModuloPerfil: ISaveTblModuloPerfilViewModel): Promise<IResponseStatusViewModel<ISaveTblModuloPerfilRsViewModel>>{
	const url = `${apiAdminUrl}command/tbl-modulo-perfil/saveTblModuloPerfil`;
	return new Promise<IResponseStatusViewModel<ISaveTblModuloPerfilRsViewModel>>((resolve, reject) => {
	this._http.post<IResultApi>(url, tblModuloPerfil)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succes<ISaveTblModuloPerfilRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.error<ISaveTblModuloPerfilRsViewModel>(error));
			}
		});
	});
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetTblModuloPerfilViewModel
	* @return Promise<IResponseStatusViewModel<IGetTblModuloPerfilRsViewModel>>
	*/
	public getAllTblModuloPerfil(): Promise<IResponseStatusViewModel<IGetTblModuloPerfilRsViewModel>>{
	const url = `${apiAdminUrl}query/tbl-modulo-perfil/findAllTblModuloPerfil`;
	return new Promise<IResponseStatusViewModel<IGetTblModuloPerfilRsViewModel>>((resolve, reject) => {
	this._http.get<IResultApi>(url)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succes<IGetTblModuloPerfilRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.error<IGetTblModuloPerfilRsViewModel>(error));
			}
		});
	});
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetTblModuloPerfilPaginadoViewModel
	* @return Promise<IResponseStatusPaginadoViewModel<IGetTblModuloPerfilPaginadoRsViewModel>>
	*/
	public getPaginadoTblModuloPerfil(dataViewModel: IGetTblModuloPerfilPaginadoViewModel): Promise<IResponseStatusPaginadoViewModel<IGetTblModuloPerfilPaginadoRsViewModel>>{
	const url = `${apiAdminUrl}query/tbl-modulo-perfil/findAllPaginateTblModuloPerfil`;
	return new Promise<IResponseStatusPaginadoViewModel<IGetTblModuloPerfilRsViewModel>>((resolve, reject) => {
	this._http.post<IResultApi>(url, dataViewModel)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succesPaginado<IGetTblModuloPerfilRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.errorPaginado<IGetTblModuloPerfilRsViewModel>(error));
			}
		});
	});
	}

	/**
	* Obtiene el registro actual
	* @param id_modulo_perfil: IGetTblModuloPerfilByIdViewModel
	* @return Promise<IResponseStatusViewModel<IGetTblModuloPerfilByIdRsViewModel>>
	*/
	public getByIdTblModuloPerfil(id_modulo_perfil: IGetTblModuloPerfilByIdViewModel): Promise<IResponseStatusViewModel<IGetTblModuloPerfilByIdRsViewModel>>{
	const url = `${apiAdminUrl}query/tbl-modulo-perfil/findByIdTblModuloPerfil`;
	return new Promise<IResponseStatusViewModel<IGetTblModuloPerfilByIdRsViewModel>>((resolve, reject) => {
	this._http.post<IResultApi>(url, id_modulo_perfil)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succes<IGetTblModuloPerfilByIdRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.error<IGetTblModuloPerfilByIdRsViewModel>(error));
			}
		});
	});
	}

	/**
	* Actualizar el registro actual
	* @param tblModuloPerfil: IUpdateTblModuloPerfilViewModel
	* @return Promise<IResponseStatusViewModel<IUpdateTblModuloPerfilRsViewModel>>
	*/
	public updateTblModuloPerfil(tblModuloPerfil: IUpdateTblModuloPerfilViewModel): Promise<IResponseStatusViewModel<IUpdateTblModuloPerfilRsViewModel>>{
	const url = `${apiAdminUrl}command/tbl-modulo-perfil/updateTblModuloPerfil`;
	return new Promise<IResponseStatusViewModel<IUpdateTblModuloPerfilRsViewModel>>((resolve, reject) => {
		this._http.post<IResultApi>(url, tblModuloPerfil)
		.subscribe({
			next: (result: IResultApi) => {
				resolve(this._statusResponseService.succes<IUpdateTblModuloPerfilRsViewModel>(result));
			},
			error: (error) => {
				reject(this._statusResponseService.error<IUpdateTblModuloPerfilRsViewModel>(error));
			}
		});
		});
	}


    /**
    * Obtiene el/los registros
    * @param busqueda: IGetTblMenuAccionPaginadoViewModel
    * @return Promise<IResponseStatusPaginadoViewModel<IGetTblMenuAccionPaginadoRsViewModel>>
    */
    public getPaginateByTblModuloEntityIdModulo(dataViewModel: IGetPaginateByTblModuloEntityIdModuloViewModel): Promise<IResponseStatusPaginadoViewModel<IGetTblModuloPerfilPaginadoRsViewModel>>{
      const url = `${apiAdminUrl}query/tbl-modulo-perfil/findPaginateByTblModuloEntityIdModulo`;
      return new Promise<IResponseStatusPaginadoViewModel<IGetTblModuloPerfilRsViewModel>>((resolve, reject) => {
      this._http.post<IResultApi>(url, dataViewModel)
        .subscribe({
          next: (result: IResultApi) => {
            resolve(this._statusResponseService.succesPaginado<IGetTblModuloPerfilRsViewModel>(result));
          },
          error: (error) => {
            reject(this._statusResponseService.errorPaginado<IGetTblModuloPerfilRsViewModel>(error));
          }
        });
      });
    }


}
