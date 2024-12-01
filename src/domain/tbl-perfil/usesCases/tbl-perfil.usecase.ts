/**
* Clase TblPerfilUseCase.
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    TblPerfilUseCase
* @package UseCase
* @subpackage Domain
*/

import { Injectable, inject } from '@angular/core';

import { TblPerfilService } from '../../../data/tbl-perfil/services/tbl-perfil.services';
import { IGetTblPerfilByIdRsViewModel, IGetTblPerfilByIdViewModel, IGetTblPerfilRsViewModel, IGetTblPerfilViewModel, IGetTblPerfilPaginadoRsViewModel, IGetTblPerfilPaginadoViewModel, ISaveTblPerfilRsViewModel, ISaveTblPerfilViewModel, IUpdateTblPerfilRsViewModel, IUpdateTblPerfilViewModel  } from '../viewModels/i-tbl-perfil.viewModel';
import { IResponseStatusViewModel } from '../../base/viewModels/i-response-status.viewModel';
import { IResponseStatusPaginadoViewModel } from '../../base/viewModels/i-response-status-paginado.viewModel';


@Injectable({
	providedIn: 'root',
})
export class TblPerfilUseCase {

	/**
	* Constructor
	* Se pueden llamar los servicios que van ser utilizados en los casos de uso
	 */
	constructor()
	{
	}
	_tblPerfilService: TblPerfilService = inject(TblPerfilService)

	/**
	* Guarda el registro actual
	* @param tblPerfil: ISaveTblPerfilViewModel
	* @return Promise<IResponseStatusViewModel<ISaveTblPerfilRsViewModel>>
	*/
	public async saveTblPerfil(tblPerfil: ISaveTblPerfilViewModel): Promise<IResponseStatusViewModel<ISaveTblPerfilRsViewModel>> {
	return await this._tblPerfilService.saveTblPerfil(tblPerfil);
	}
	/**
	* Obtiene el/los registros
	* @return Promise<IResponseStatusViewModel<IGetTblPerfilRsViewModel>>
	*/
	public async getAllTblPerfil(): Promise<IResponseStatusViewModel<IGetTblPerfilRsViewModel>> {
	return await this._tblPerfilService.getAllTblPerfil();
	}
	/**
	* Obtiene el/los registros
	* @param tblPerfil: IGetTblPerfilPaginadoViewModel
	* @return Promise<IResponseStatusPaginadoViewModel<IGetTblPerfilPaginadoRsViewModel>>
	*/
	public async getPaginadoTblPerfil(tblPerfil: IGetTblPerfilPaginadoViewModel): Promise<IResponseStatusPaginadoViewModel<IGetTblPerfilPaginadoRsViewModel>> {
	return await this._tblPerfilService.getPaginadoTblPerfil(tblPerfil);
	}
	/**
	* Obtiene el registro por id
	* @param tblPerfil: IGetTblPerfilByIdViewModel
	* @return Promise<IResponseStatusViewModel<IGetTblPerfilByIdRsViewModel>>
	*/
	public async getByIdTblPerfil(tblPerfil: IGetTblPerfilByIdViewModel): Promise<IResponseStatusViewModel<IGetTblPerfilByIdRsViewModel>> {
	return await this._tblPerfilService.getByIdTblPerfil(tblPerfil);
	}
	/**
	* Obtiene el/los registros
	* @param tblPerfil: IUpdateTblPerfilViewModel
	* @return Promise<IResponseStatusViewModel<IUpdateTblPerfilRsViewModel>>
	*/
	public async updateTblPerfil(tblPerfil: IUpdateTblPerfilViewModel): Promise<IResponseStatusViewModel<IUpdateTblPerfilRsViewModel>> {
	return await this._tblPerfilService.updateTblPerfil(tblPerfil);
	}

}
