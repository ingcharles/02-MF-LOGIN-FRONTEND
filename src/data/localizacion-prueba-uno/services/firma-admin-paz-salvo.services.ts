/**
* Clase AdminPazSalvoService que extiende de AAdminPazSalvoService.
* Este archivo se complementa con el archivo AAdminPazSalvoService.
*
* @author  Carlos Anchundia
* @date    08-05-2024
* @name    AdminPazSalvoService
* @package Service
* @subpackage Data
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { IResponseStatusViewModel } from '../../../domain/base/viewModels/i-response-status.viewModel';
import { IGetAdminPazSalvoByIdRsViewModel, IGetAdminPazSalvoByIdViewModel, IGetAdminPazSalvoPaginadoRsViewModel, IGetAdminPazSalvoPaginadoViewModel, IGetAdminPazSalvoRsViewModel, IGetAdminPazSalvoViewModel, ISaveAdminPazSalvoRsViewModel, ISaveAdminPazSalvoViewModel, IUpdateAdminPazSalvoRsViewModel, IUpdateAdminPazSalvoViewModel } from '../../../domain/localizacion-prueba-uno/viewModels/i-admin-paz-salvo.viewModel';
import { environment } from '../../../environments/environment';
import { StatusResponseService } from '../../base/services/status-response.service';
import { IResultApi } from '../../base/interfaces/i-result-api';

const apiAdminUrl: string = environment.apiAdminUrl;

@Injectable({
	providedIn: 'root',
})

export class FirmaAdminPazSalvoService  {

	/**
	* Constructor
	* Se pueden llamar los servicios complementarios para este servicio
	* @param _http: HttpClient, _statusResponseService: StatusResponseService
	* @return AdminPazSalvoService
	*/
	constructor(private _http: HttpClient, private _statusResponseService: StatusResponseService) {
	}

	/**
	* Guarda el registro actual
	* @param AdminPazSalvo: ISaveAdminPazSalvoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<ISaveAdminPazSalvoRsViewModel>>>
	*/
	public async saveAdminPazSalvo(AdminPazSalvo: ISaveAdminPazSalvoViewModel): Promise<Observable<IResponseStatusViewModel<ISaveAdminPazSalvoRsViewModel>>>{
	const url = `${apiAdminUrl}command/localizacion-prueba-uno/saveAdminPazSalvo`;
	return this._http.post<IResultApi>(url, AdminPazSalvo).pipe(
		map((result) => {
		return this._statusResponseService.succes<ISaveAdminPazSalvoRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<ISaveAdminPazSalvoRsViewModel>(error));
		})
	);
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetAdminPazSalvoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetAdminPazSalvoRsViewModel>>>
	*/
	public async getAdminPazSalvo(busqueda: IGetAdminPazSalvoViewModel): Promise<Observable<IResponseStatusViewModel<IGetAdminPazSalvoRsViewModel>>>{
	const url = `${apiAdminUrl}query/localizacion-prueba-uno/getAdminPazSalvo`;
	return this._http.post<IResultApi>(url, busqueda).pipe(
		map((result) => {
		return this._statusResponseService.succes<IGetAdminPazSalvoRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IGetAdminPazSalvoRsViewModel>(error));
		})
	);
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetAdminPazSalvoPaginadoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetAdminPazSalvoPaginadoRsViewModel>>>
	*/
	public async getAdminPazSalvoPaginado(dataViewModel: IGetAdminPazSalvoPaginadoViewModel): Promise<Observable<IResponseStatusViewModel<IGetAdminPazSalvoPaginadoRsViewModel>>>{
	const url = `${apiAdminUrl}query/localizacion-prueba-uno/findAllPaginateAdminPazSalvo`;
	return this._http.post<IResultApi>(url, dataViewModel).pipe(
		map((result) => {
		return this._statusResponseService.succes<IGetAdminPazSalvoPaginadoRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IGetAdminPazSalvoPaginadoRsViewModel>(error));
		})
	);
	}

	/**
	* Obtiene el registro actual
	* @param campo_serial: IGetAdminPazSalvoByIdViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetAdminPazSalvoByIdRsViewModel>>>
	*/
	public async getAdminPazSalvoById(campo_serial: IGetAdminPazSalvoByIdViewModel): Promise<Observable<IResponseStatusViewModel<IGetAdminPazSalvoByIdRsViewModel>>>{
	const url = `${apiAdminUrl}query/localizacion-prueba-uno/findByIdAdminPazSalvo`;
	return this._http.post<IResultApi>(url, campo_serial).pipe(
		map((result) => {
		return this._statusResponseService.succes<IGetAdminPazSalvoByIdRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IGetAdminPazSalvoByIdRsViewModel>(error));
		})
	);
	}

	/**
	* Actualizar el registro actual
	* @param AdminPazSalvo: IUpdateAdminPazSalvoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IUpdateAdminPazSalvoRsViewModel>>>
	*/
	public async updateAdminPazSalvo(AdminPazSalvo: IUpdateAdminPazSalvoViewModel): Promise<Observable<IResponseStatusViewModel<IUpdateAdminPazSalvoRsViewModel>>>{
	const url = `${apiAdminUrl}command/localizacion-prueba-uno/updateAdminPazSalvo`;
	return this._http.post<IResultApi>(url, AdminPazSalvo).pipe(
		map((result) => {
		return this._statusResponseService.succes<IUpdateAdminPazSalvoRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IUpdateAdminPazSalvoRsViewModel>(error));
		})
	);
	}

}
