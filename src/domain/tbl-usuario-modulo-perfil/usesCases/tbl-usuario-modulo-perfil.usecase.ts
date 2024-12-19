/**
* Clase TblUsuarioModuloPerfilUseCase.
*
* @author  Carlos Anchundia
* @date    03-12-2024
* @name    TblUsuarioModuloPerfilUseCase
* @package UseCase
* @subpackage Domain
*/

import { Injectable, inject } from '@angular/core';

import { TblUsuarioModuloPerfilService } from '../../../data/tbl-usuario-modulo-perfil/services/tbl-usuario-modulo-perfil.services';
import { IGetTblUsuarioModuloPerfilByIdRsViewModel, IGetTblUsuarioModuloPerfilByIdViewModel, IGetTblUsuarioModuloPerfilRsViewModel, IGetTblUsuarioModuloPerfilViewModel, IGetTblUsuarioModuloPerfilPaginadoRsViewModel, IGetTblUsuarioModuloPerfilPaginadoViewModel, ISaveTblUsuarioModuloPerfilRsViewModel, ISaveTblUsuarioModuloPerfilViewModel, IUpdateTblUsuarioModuloPerfilRsViewModel, IUpdateTblUsuarioModuloPerfilViewModel  } from '../viewModels/i-tbl-usuario-modulo-perfil.viewModel';
import { IResponseStatusViewModel } from '../../base/viewModels/i-response-status.viewModel';
import { IResponseStatusPaginadoViewModel } from '../../base/viewModels/i-response-status-paginado.viewModel';


@Injectable({
	providedIn: 'root',
})
export class TblUsuarioModuloPerfilUseCase {

	/**
	* Constructor
	* Se pueden llamar los servicios que van ser utilizados en los casos de uso
	 */
	constructor()
	{
	}
	_tblUsuarioModuloPerfilService: TblUsuarioModuloPerfilService = inject(TblUsuarioModuloPerfilService)

	/**
	* Guarda el registro actual
	* @param tblUsuarioModuloPerfil: ISaveTblUsuarioModuloPerfilViewModel
	* @return Promise<IResponseStatusViewModel<ISaveTblUsuarioModuloPerfilRsViewModel>>
	*/
	public async saveTblUsuarioModuloPerfil(tblUsuarioModuloPerfil: ISaveTblUsuarioModuloPerfilViewModel): Promise<IResponseStatusViewModel<ISaveTblUsuarioModuloPerfilRsViewModel>> {
	return await this._tblUsuarioModuloPerfilService.saveTblUsuarioModuloPerfil(tblUsuarioModuloPerfil);
	}
	/**
	* Obtiene el/los registros
	* @return Promise<IResponseStatusViewModel<IGetTblUsuarioModuloPerfilRsViewModel>>
	*/
	public async getAllTblUsuarioModuloPerfil(): Promise<IResponseStatusViewModel<IGetTblUsuarioModuloPerfilRsViewModel>> {
	return await this._tblUsuarioModuloPerfilService.getAllTblUsuarioModuloPerfil();
	}
	/**
	* Obtiene el/los registros
	* @param tblUsuarioModuloPerfil: IGetTblUsuarioModuloPerfilPaginadoViewModel
	* @return Promise<IResponseStatusPaginadoViewModel<IGetTblUsuarioModuloPerfilPaginadoRsViewModel>>
	*/
	public async getPaginadoTblUsuarioModuloPerfil(tblUsuarioModuloPerfil: IGetTblUsuarioModuloPerfilPaginadoViewModel): Promise<IResponseStatusPaginadoViewModel<IGetTblUsuarioModuloPerfilPaginadoRsViewModel>> {
	return await this._tblUsuarioModuloPerfilService.getPaginadoTblUsuarioModuloPerfil(tblUsuarioModuloPerfil);
	}
	/**
	* Obtiene el registro por id
	* @param tblUsuarioModuloPerfil: IGetTblUsuarioModuloPerfilByIdViewModel
	* @return Promise<IResponseStatusViewModel<IGetTblUsuarioModuloPerfilByIdRsViewModel>>
	*/
	public async getByIdTblUsuarioModuloPerfil(tblUsuarioModuloPerfil: IGetTblUsuarioModuloPerfilByIdViewModel): Promise<IResponseStatusViewModel<IGetTblUsuarioModuloPerfilByIdRsViewModel>> {
	return await this._tblUsuarioModuloPerfilService.getByIdTblUsuarioModuloPerfil(tblUsuarioModuloPerfil);
	}
	/**
	* Obtiene el/los registros
	* @param tblUsuarioModuloPerfil: IUpdateTblUsuarioModuloPerfilViewModel
	* @return Promise<IResponseStatusViewModel<IUpdateTblUsuarioModuloPerfilRsViewModel>>
	*/
	public async updateTblUsuarioModuloPerfil(tblUsuarioModuloPerfil: IUpdateTblUsuarioModuloPerfilViewModel): Promise<IResponseStatusViewModel<IUpdateTblUsuarioModuloPerfilRsViewModel>> {
	return await this._tblUsuarioModuloPerfilService.updateTblUsuarioModuloPerfil(tblUsuarioModuloPerfil);
	}

}
