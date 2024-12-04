/**
* Clase TblUsuarioUseCase.
*
* @author  Carlos Anchundia
* @date    03-12-2024
* @name    TblUsuarioUseCase
* @package UseCase
* @subpackage Domain
*/

import { Injectable, inject } from '@angular/core';

import { TblUsuarioService } from '../../../data/tbl-usuario/services/tbl-usuario.services';
import { IGetTblUsuarioByIdRsViewModel, IGetTblUsuarioByIdViewModel, IGetTblUsuarioRsViewModel, IGetTblUsuarioViewModel, IGetTblUsuarioPaginadoRsViewModel, IGetTblUsuarioPaginadoViewModel, ISaveTblUsuarioRsViewModel, ISaveTblUsuarioViewModel, IUpdateTblUsuarioRsViewModel, IUpdateTblUsuarioViewModel  } from '../viewModels/i-tbl-usuario.viewModel';
import { IResponseStatusViewModel } from '../../base/viewModels/i-response-status.viewModel';
import { IResponseStatusPaginadoViewModel } from '../../base/viewModels/i-response-status-paginado.viewModel';


@Injectable({
	providedIn: 'root',
})
export class TblUsuarioUseCase {

	/**
	* Constructor
	* Se pueden llamar los servicios que van ser utilizados en los casos de uso
	 */
	constructor()
	{
	}
	_tblUsuarioService: TblUsuarioService = inject(TblUsuarioService)

	/**
	* Guarda el registro actual
	* @param tblUsuario: ISaveTblUsuarioViewModel
	* @return Promise<IResponseStatusViewModel<ISaveTblUsuarioRsViewModel>>
	*/
	public async saveTblUsuario(tblUsuario: ISaveTblUsuarioViewModel): Promise<IResponseStatusViewModel<ISaveTblUsuarioRsViewModel>> {
	return await this._tblUsuarioService.saveTblUsuario(tblUsuario);
	}
	/**
	* Obtiene el/los registros
	* @return Promise<IResponseStatusViewModel<IGetTblUsuarioRsViewModel>>
	*/
	public async getAllTblUsuario(): Promise<IResponseStatusViewModel<IGetTblUsuarioRsViewModel>> {
	return await this._tblUsuarioService.getAllTblUsuario();
	}
	/**
	* Obtiene el/los registros
	* @param tblUsuario: IGetTblUsuarioPaginadoViewModel
	* @return Promise<IResponseStatusPaginadoViewModel<IGetTblUsuarioPaginadoRsViewModel>>
	*/
	public async getPaginadoTblUsuario(tblUsuario: IGetTblUsuarioPaginadoViewModel): Promise<IResponseStatusPaginadoViewModel<IGetTblUsuarioPaginadoRsViewModel>> {
	return await this._tblUsuarioService.getPaginadoTblUsuario(tblUsuario);
	}
	/**
	* Obtiene el registro por id
	* @param tblUsuario: IGetTblUsuarioByIdViewModel
	* @return Promise<IResponseStatusViewModel<IGetTblUsuarioByIdRsViewModel>>
	*/
	public async getByIdTblUsuario(tblUsuario: IGetTblUsuarioByIdViewModel): Promise<IResponseStatusViewModel<IGetTblUsuarioByIdRsViewModel>> {
	return await this._tblUsuarioService.getByIdTblUsuario(tblUsuario);
	}
	/**
	* Obtiene el/los registros
	* @param tblUsuario: IUpdateTblUsuarioViewModel
	* @return Promise<IResponseStatusViewModel<IUpdateTblUsuarioRsViewModel>>
	*/
	public async updateTblUsuario(tblUsuario: IUpdateTblUsuarioViewModel): Promise<IResponseStatusViewModel<IUpdateTblUsuarioRsViewModel>> {
	return await this._tblUsuarioService.updateTblUsuario(tblUsuario);
	}

}
