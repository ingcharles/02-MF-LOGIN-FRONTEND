/**
* Clase TblModuloPerfilUseCase.
*
* @author  Carlos Anchundia
* @date    03-12-2024
* @name    TblModuloPerfilUseCase
* @package UseCase
* @subpackage Domain
*/

import { Injectable, inject } from '@angular/core';

import { TblModuloPerfilService } from '../../../data/tbl-modulo-perfil/services/tbl-modulo-perfil.services';
import { IGetTblModuloPerfilByIdRsViewModel, IGetTblModuloPerfilByIdViewModel, IGetTblModuloPerfilRsViewModel, IGetTblModuloPerfilPaginadoRsViewModel, IGetTblModuloPerfilPaginadoViewModel, ISaveTblModuloPerfilRsViewModel, ISaveTblModuloPerfilViewModel, IUpdateTblModuloPerfilRsViewModel, IUpdateTblModuloPerfilViewModel, IGetPaginateByTblModuloEntityIdModuloViewModel  } from '../viewModels/i-tbl-modulo-perfil.viewModel';
import { IResponseStatusViewModel } from '../../base/viewModels/i-response-status.viewModel';
import { IResponseStatusPaginadoViewModel } from '../../base/viewModels/i-response-status-paginado.viewModel';


@Injectable({
	providedIn: 'root',
})
export class TblModuloPerfilUseCase {

	/**
	* Constructor
	* Se pueden llamar los servicios que van ser utilizados en los casos de uso
	 */
	constructor()
	{
	}
	_tblModuloPerfilService: TblModuloPerfilService = inject(TblModuloPerfilService)

	/**
	* Guarda el registro actual
	* @param tblModuloPerfil: ISaveTblModuloPerfilViewModel
	* @return Promise<IResponseStatusViewModel<ISaveTblModuloPerfilRsViewModel>>
	*/
	public async saveTblModuloPerfil(tblModuloPerfil: ISaveTblModuloPerfilViewModel): Promise<IResponseStatusViewModel<ISaveTblModuloPerfilRsViewModel>> {
	return await this._tblModuloPerfilService.saveTblModuloPerfil(tblModuloPerfil);
	}
	/**
	* Obtiene el/los registros
	* @return Promise<IResponseStatusViewModel<IGetTblModuloPerfilRsViewModel>>
	*/
	public async getAllTblModuloPerfil(): Promise<IResponseStatusViewModel<IGetTblModuloPerfilRsViewModel>> {
	return await this._tblModuloPerfilService.getAllTblModuloPerfil();
	}
	/**
	* Obtiene el/los registros
	* @param tblModuloPerfil: IGetTblModuloPerfilPaginadoViewModel
	* @return Promise<IResponseStatusPaginadoViewModel<IGetTblModuloPerfilPaginadoRsViewModel>>
	*/
	public async getPaginadoTblModuloPerfil(tblModuloPerfil: IGetTblModuloPerfilPaginadoViewModel): Promise<IResponseStatusPaginadoViewModel<IGetTblModuloPerfilPaginadoRsViewModel>> {
	return await this._tblModuloPerfilService.getPaginadoTblModuloPerfil(tblModuloPerfil);
	}
	/**
	* Obtiene el registro por id
	* @param tblModuloPerfil: IGetTblModuloPerfilByIdViewModel
	* @return Promise<IResponseStatusViewModel<IGetTblModuloPerfilByIdRsViewModel>>
	*/
	public async getByIdTblModuloPerfil(tblModuloPerfil: IGetTblModuloPerfilByIdViewModel): Promise<IResponseStatusViewModel<IGetTblModuloPerfilByIdRsViewModel>> {
	return await this._tblModuloPerfilService.getByIdTblModuloPerfil(tblModuloPerfil);
	}
	/**
	* Obtiene el/los registros
	* @param tblModuloPerfil: IUpdateTblModuloPerfilViewModel
	* @return Promise<IResponseStatusViewModel<IUpdateTblModuloPerfilRsViewModel>>
	*/
	public async updateTblModuloPerfil(tblModuloPerfil: IUpdateTblModuloPerfilViewModel): Promise<IResponseStatusViewModel<IUpdateTblModuloPerfilRsViewModel>> {
	return await this._tblModuloPerfilService.updateTblModuloPerfil(tblModuloPerfil);
	}

    /**
  * Obtiene el/los registros
  * @param tblModuloPerfil: IGetTblModuloPerfilPaginadoViewModel
  * @return Promise<IResponseStatusPaginadoViewModel<IGetTblMenuAccionPaginadoRsViewModel>>
  */
  public async getPaginateByTblModuloEntityIdModulo(tblModuloPerfil: IGetPaginateByTblModuloEntityIdModuloViewModel): Promise<IResponseStatusPaginadoViewModel<IGetTblModuloPerfilPaginadoRsViewModel>> {
    return await this._tblModuloPerfilService.getPaginateByTblModuloEntityIdModulo(tblModuloPerfil);
  }
}
