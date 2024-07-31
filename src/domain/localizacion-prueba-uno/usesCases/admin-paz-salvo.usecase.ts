/**
* Clase AdminPazSalvoUseCase.
*
* @author  Carlos Anchundia
* @date    08-05-2024
* @name    AdminPazSalvoUseCase
* @package UseCase
* @subpackage Domain
*/

import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { IGetAdminPazSalvoByIdRsViewModel, IGetAdminPazSalvoByIdViewModel, IGetAdminPazSalvoRsViewModel, IGetAdminPazSalvoViewModel, IGetAdminPazSalvoPaginadoRsViewModel, IGetAdminPazSalvoPaginadoViewModel, ISaveAdminPazSalvoRsViewModel, ISaveAdminPazSalvoViewModel, IUpdateAdminPazSalvoRsViewModel, IUpdateAdminPazSalvoViewModel  } from '../viewModels/i-admin-paz-salvo.viewModel';
import { IResponseStatusViewModel } from '../../base/viewModels/i-response-status.viewModel';
import { AdminPazSalvoService } from '../../../data/localizacion-prueba-uno/services/admin-paz-salvo.services';


@Injectable({
	providedIn: 'root',
})
export class AdminPazSalvoUseCase {

	/**
	* Constructor
	* Se pueden llamar los servicios que van ser utilizados en los casos de uso
	 */
	constructor()
	{
	}
	_adminPazSalvoService: AdminPazSalvoService = inject(AdminPazSalvoService)

	/**
	* Guarda el registro actual
	* @param AdminPazSalvo: ISaveAdminPazSalvoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<ISaveAdminPazSalvoRsViewModel>>>
	*/
	public async saveAdminPazSalvo(AdminPazSalvo: ISaveAdminPazSalvoViewModel): Promise<Observable<IResponseStatusViewModel<ISaveAdminPazSalvoRsViewModel>>> {
	return await this._adminPazSalvoService.saveAdminPazSalvo(AdminPazSalvo);
	}
	/**
	* Obtiene el/los registros
	* @param AdminPazSalvo: IGetAdminPazSalvoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetAdminPazSalvoRsViewModel>>>
	*/
	public async getAdminPazSalvo(AdminPazSalvo: IGetAdminPazSalvoViewModel): Promise<Observable<IResponseStatusViewModel<IGetAdminPazSalvoRsViewModel>>> {
	return await this._adminPazSalvoService.getAdminPazSalvo(AdminPazSalvo);
	}
	/**
	* Obtiene el/los registros
	* @param AdminPazSalvo: IGetAdminPazSalvoPaginadoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetAdminPazSalvoPaginadoRsViewModel>>>
	*/
	public async getAdminPazSalvoPaginado(AdminPazSalvo: IGetAdminPazSalvoPaginadoViewModel): Promise<Observable<IResponseStatusViewModel<IGetAdminPazSalvoPaginadoRsViewModel>>> {
	return await this._adminPazSalvoService.getAdminPazSalvoPaginado(AdminPazSalvo);
	}
	/**
	* Obtiene el registro por id
	* @param AdminPazSalvo: IGetAdminPazSalvoByIdViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetAdminPazSalvoByIdRsViewModel>>>
	*/
	public async getAdminPazSalvoById(AdminPazSalvo: IGetAdminPazSalvoByIdViewModel): Promise<Observable<IResponseStatusViewModel<IGetAdminPazSalvoByIdRsViewModel>>> {
	return await this._adminPazSalvoService.getAdminPazSalvoById(AdminPazSalvo);
	}
	/**
	* Obtiene el/los registros
	* @param AdminPazSalvo: IUpdateAdminPazSalvoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IUpdateAdminPazSalvoRsViewModel>>>
	*/
	public async updateAdminPazSalvo(AdminPazSalvo: IUpdateAdminPazSalvoViewModel): Promise<Observable<IResponseStatusViewModel<IUpdateAdminPazSalvoRsViewModel>>> {
	return await this._adminPazSalvoService.updateAdminPazSalvo(AdminPazSalvo);
	}

}
