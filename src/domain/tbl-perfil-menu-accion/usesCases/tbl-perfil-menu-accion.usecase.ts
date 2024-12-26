/**
* Clase TblPerfilMenuAccionUseCase.
*
* @author  Carlos Anchundia
* @date    03-12-2024
* @name    TblPerfilMenuAccionUseCase
* @package UseCase
* @subpackage Domain
*/

import { Injectable, inject } from '@angular/core';

import { TblPerfilMenuAccionService } from '../../../data/tbl-perfil-menu-accion/services/tbl-perfil-menu-accion.services';
import { IGetTblPerfilMenuAccionByIdRsViewModel, IGetTblPerfilMenuAccionByIdViewModel, IGetTblPerfilMenuAccionRsViewModel, IGetTblPerfilMenuAccionViewModel, IGetTblPerfilMenuAccionPaginadoRsViewModel, IGetTblPerfilMenuAccionPaginadoViewModel, ISaveTblPerfilMenuAccionRsViewModel, ISaveTblPerfilMenuAccionViewModel, IUpdateTblPerfilMenuAccionRsViewModel, IUpdateTblPerfilMenuAccionViewModel, IGetTblPerfilMenuAccionByIdPerfilRsViewModel, IGetTblPerfilMenuAccionByIdUsuarioModuloRsViewModel  } from '../viewModels/i-tbl-perfil-menu-accion.viewModel';
import { IResponseStatusViewModel } from '../../base/viewModels/i-response-status.viewModel';
import { IResponseStatusPaginadoViewModel } from '../../base/viewModels/i-response-status-paginado.viewModel';
import { IGetTblUsuarioModuloPerfilByIdViewModel } from '../../tbl-usuario-modulo-perfil/viewModels/i-tbl-usuario-modulo-perfil.viewModel';


@Injectable({
	providedIn: 'root',
})
export class TblPerfilMenuAccionUseCase {

	/**
	* Constructor
	* Se pueden llamar los servicios que van ser utilizados en los casos de uso
	 */
	constructor()
	{
	}
	_tblPerfilMenuAccionService: TblPerfilMenuAccionService = inject(TblPerfilMenuAccionService)

	/**
	* Guarda el registro actual
	* @param tblPerfilMenuAccion: ISaveTblPerfilMenuAccionViewModel
	* @return Promise<IResponseStatusViewModel<ISaveTblPerfilMenuAccionRsViewModel>>
	*/
	public async saveTblPerfilMenuAccion(tblPerfilMenuAccion: ISaveTblPerfilMenuAccionViewModel): Promise<IResponseStatusViewModel<ISaveTblPerfilMenuAccionRsViewModel>> {
	return await this._tblPerfilMenuAccionService.saveTblPerfilMenuAccion(tblPerfilMenuAccion);
	}
	/**
	* Obtiene el/los registros
	* @return Promise<IResponseStatusViewModel<IGetTblPerfilMenuAccionRsViewModel>>
	*/
	public async getAllTblPerfilMenuAccion(): Promise<IResponseStatusViewModel<IGetTblPerfilMenuAccionRsViewModel>> {
	return await this._tblPerfilMenuAccionService.getAllTblPerfilMenuAccion();
	}
	/**
	* Obtiene el/los registros
	* @param tblPerfilMenuAccion: IGetTblPerfilMenuAccionPaginadoViewModel
	* @return Promise<IResponseStatusPaginadoViewModel<IGetTblPerfilMenuAccionPaginadoRsViewModel>>
	*/
	public async getPaginadoTblPerfilMenuAccion(tblPerfilMenuAccion: IGetTblPerfilMenuAccionPaginadoViewModel): Promise<IResponseStatusPaginadoViewModel<IGetTblPerfilMenuAccionPaginadoRsViewModel>> {
	return await this._tblPerfilMenuAccionService.getPaginadoTblPerfilMenuAccion(tblPerfilMenuAccion);
	}
	/**
	* Obtiene el registro por id
	* @param tblPerfilMenuAccion: IGetTblPerfilMenuAccionByIdViewModel
	* @return Promise<IResponseStatusViewModel<IGetTblPerfilMenuAccionByIdRsViewModel>>
	*/
	public async getByIdTblPerfilMenuAccion(tblPerfilMenuAccion: IGetTblPerfilMenuAccionByIdViewModel): Promise<IResponseStatusViewModel<IGetTblPerfilMenuAccionByIdRsViewModel>> {
	return await this._tblPerfilMenuAccionService.getByIdTblPerfilMenuAccion(tblPerfilMenuAccion);
	}
	/**
	* Obtiene el/los registros
	* @param tblPerfilMenuAccion: IUpdateTblPerfilMenuAccionViewModel
	* @return Promise<IResponseStatusViewModel<IUpdateTblPerfilMenuAccionRsViewModel>>
	*/
	public async updateTblPerfilMenuAccion(tblPerfilMenuAccion: IUpdateTblPerfilMenuAccionViewModel): Promise<IResponseStatusViewModel<IUpdateTblPerfilMenuAccionRsViewModel>> {
	return await this._tblPerfilMenuAccionService.updateTblPerfilMenuAccion(tblPerfilMenuAccion);
	}

  	/**
	* Obtiene el registro por id
	* @param tblPerfilMenuAccion: IGetTblPerfilMenuAccionByIdViewModel
	* @return Promise<IResponseStatusViewModel<IGetTblPerfilMenuAccionByIdRsViewModel>>
	*/
	public async getByTblPerfilEntityIdPerfil(tblPerfilMenuAccion: IGetTblPerfilMenuAccionByIdViewModel): Promise<IResponseStatusViewModel<IGetTblPerfilMenuAccionByIdPerfilRsViewModel>> {
    return await this._tblPerfilMenuAccionService.getByTblPerfilEntityIdPerfil(tblPerfilMenuAccion);
    }

    	/**
	* Obtiene el registro por id
	* @param tblUsuarioModulo: IGetTblUsuarioModuloByIdViewModel
	* @return Promise<IResponseStatusViewModel<IGetTblUsuarioModuloByIdRsViewModel>>
	*/
	public async getTblMenuByIdUsuarioModulo(tblUsuarioModuloPerfil: IGetTblUsuarioModuloPerfilByIdViewModel): Promise<IResponseStatusViewModel<IGetTblPerfilMenuAccionByIdUsuarioModuloRsViewModel>> {
    return await this._tblPerfilMenuAccionService.getTblMenuByIdUsuarioModulo(tblUsuarioModuloPerfil);
    }
}
