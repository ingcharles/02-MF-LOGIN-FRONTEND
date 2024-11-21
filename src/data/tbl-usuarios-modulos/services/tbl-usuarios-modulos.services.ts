/**
* Clase TblUsuariosModulosService que extiende de ATblUsuariosModulosService.
* Este archivo se complementa con el archivo ATblUsuariosModulosService.
*
* @author  Carlos Anchundia
* @date    22-10-2024
* @name    TblUsuariosModulosService
* @package Service
* @subpackage Data
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of  } from 'rxjs';
import { IGetTblUsuariosModulosRsViewModel, IGetTblUsuariosModulosViewModel, IGetTblUsuariosModulosPaginadoViewModel, IGetTblUsuariosModulosPaginadoRsViewModel, IGetTblUsuariosModulosByIdRsViewModel, IGetTblUsuariosModulosByIdViewModel, ISaveTblUsuariosModulosRsViewModel, ISaveTblUsuariosModulosViewModel, IUpdateTblUsuariosModulosRsViewModel, IUpdateTblUsuariosModulosViewModel } from '../../../domain/tbl-usuarios-modulos/viewModels/i-tbl-usuarios-modulos.viewModel';
import { environment } from '../../../environments/environment';
import { StatusResponseService } from '../../base/services/status-response.service';
import { IResponseStatusViewModel } from '../../../domain/base/viewModels/i-response-status.viewModel';
import { IResultApi } from '../../base/interfaces/i-result-api';

const apiUrl: string = environment.apiUrl;

@Injectable({
	providedIn: 'root',
})

export class TblUsuariosModulosService  {

	/**
	* Constructor
	* Se pueden llamar los servicios complementarios para este servicio
	* @param _http: HttpClient, _statusResponseService: StatusResponseService
	* @return TblUsuariosModulosService
	*/
	constructor(private _http: HttpClient, private _statusResponseService: StatusResponseService) {
	}

	/**
	* Guarda el registro actual
	* @param tblUsuariosModulos: ISaveTblUsuariosModulosViewModel
	* @return Promise<Observable<IResponseStatusViewModel<ISaveTblUsuariosModulosRsViewModel>>>
	*/
	public async saveTblUsuariosModulos(tblUsuariosModulos: ISaveTblUsuariosModulosViewModel): Promise<Observable<IResponseStatusViewModel<ISaveTblUsuariosModulosRsViewModel>>>{
	tblUsuariosModulos.auditoria = 'transaccionAuditoria';
	const url = `${apiUrl}command/tbl-usuarios-modulos/saveTblUsuariosModulos`;
	return this._http.post<IResultApi>(url, tblUsuariosModulos).pipe(
		map((result) => {
		return this._statusResponseService.succes<ISaveTblUsuariosModulosRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<ISaveTblUsuariosModulosRsViewModel>(error));
		})
	);
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetTblUsuariosModulosViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetTblUsuariosModulosRsViewModel>>>
	*/
	public async getTblUsuariosModulos(busqueda: IGetTblUsuariosModulosViewModel): Promise<Observable<IResponseStatusViewModel<IGetTblUsuariosModulosRsViewModel>>>{
	const url = `${apiUrl}query/tbl-usuarios-modulos/getTblUsuariosModulos`;
	return this._http.post<IResultApi>(url, busqueda).pipe(
		map((result) => {
		return this._statusResponseService.succes<IGetTblUsuariosModulosRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IGetTblUsuariosModulosRsViewModel>(error));
		})
	);
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetTblUsuariosModulosPaginadoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetTblUsuariosModulosPaginadoRsViewModel>>>
	*/
	public async getTblUsuariosModulosPaginado(dataViewModel: IGetTblUsuariosModulosPaginadoViewModel): Promise<Observable<IResponseStatusViewModel<IGetTblUsuariosModulosPaginadoRsViewModel>>>{
	const url = `${apiUrl}query/tbl-usuarios-modulos/findAllPaginateTblUsuariosModulos`;
	return this._http.post<IResultApi>(url, dataViewModel).pipe(
		map((result) => {
		return this._statusResponseService.succes<IGetTblUsuariosModulosPaginadoRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IGetTblUsuariosModulosPaginadoRsViewModel>(error));
		})
	);
	}

	/**
	* Obtiene el registro actual
	* @param id_usuario_modulo: IGetTblUsuariosModulosByIdViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetTblUsuariosModulosByIdRsViewModel>>>
	*/
	public async getTblUsuariosModulosById(id_usuario_modulo: IGetTblUsuariosModulosByIdViewModel): Promise<Observable<IResponseStatusViewModel<IGetTblUsuariosModulosByIdRsViewModel>>>{
	const url = `${apiUrl}query/tbl-usuarios-modulos/findByIdTblUsuariosModulos`;
	return this._http.post<IResultApi>(url, id_usuario_modulo).pipe(
		map((result) => {
		return this._statusResponseService.succes<IGetTblUsuariosModulosByIdRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IGetTblUsuariosModulosByIdRsViewModel>(error));
		})
	);
	}

	/**
	* Actualizar el registro actual
	* @param tblUsuariosModulos: IUpdateTblUsuariosModulosViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IUpdateTblUsuariosModulosRsViewModel>>>
	*/
	public async updateTblUsuariosModulos(tblUsuariosModulos: IUpdateTblUsuariosModulosViewModel): Promise<Observable<IResponseStatusViewModel<IUpdateTblUsuariosModulosRsViewModel>>>{
	tblUsuariosModulos.auditoria = 'transaccionAuditoria';
	const url = `${apiUrl}command/tbl-usuarios-modulos/updateTblUsuariosModulos`;
	return this._http.post<IResultApi>(url, tblUsuariosModulos).pipe(
		map((result) => {
		return this._statusResponseService.succes<IUpdateTblUsuariosModulosRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IUpdateTblUsuariosModulosRsViewModel>(error));
		})
	);
	}

}
