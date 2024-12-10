/**
* Clase TblModuloUseCase.
*
* @author  Carlos Anchundia
* @date    03-12-2024
* @name    TblModuloUseCase
* @package UseCase
* @subpackage Domain
*/

import { Injectable, inject } from '@angular/core';

import { TblModuloService } from '../../../data/tbl-modulo/services/tbl-modulo.services';
import { IGetTblModuloByIdRsViewModel, IGetTblModuloByIdViewModel, IGetTblModuloRsViewModel, IGetTblModuloViewModel, IGetTblModuloPaginadoRsViewModel, IGetTblModuloPaginadoViewModel, ISaveTblModuloRsViewModel, ISaveTblModuloViewModel, IUpdateTblModuloRsViewModel, IUpdateTblModuloViewModel  } from '../viewModels/i-tbl-modulo.viewModel';
import { IResponseStatusViewModel } from '../../base/viewModels/i-response-status.viewModel';
import { IResponseStatusPaginadoViewModel } from '../../base/viewModels/i-response-status-paginado.viewModel';


@Injectable({
	providedIn: 'root',
})
export class TblModuloUseCase {

	/**
	* Constructor
	* Se pueden llamar los servicios que van ser utilizados en los casos de uso
	 */
	constructor()
	{
	}
	_tblModuloService: TblModuloService = inject(TblModuloService)

	/**
	* Guarda el registro actual
	* @param tblModulo: ISaveTblModuloViewModel
	* @return Promise<IResponseStatusViewModel<ISaveTblModuloRsViewModel>>
	*/
	public async saveTblModulo(tblModulo: ISaveTblModuloViewModel): Promise<IResponseStatusViewModel<ISaveTblModuloRsViewModel>> {
	return await this._tblModuloService.saveTblModulo(tblModulo);
	}
	/**
	* Obtiene el/los registros
	* @return Promise<IResponseStatusViewModel<IGetTblModuloRsViewModel>>
	*/
	public async getAllTblModulo(): Promise<IResponseStatusViewModel<IGetTblModuloRsViewModel>> {
	return await this._tblModuloService.getAllTblModulo();
	}
	/**
	* Obtiene el/los registros
	* @param tblModulo: IGetTblModuloPaginadoViewModel
	* @return Promise<IResponseStatusPaginadoViewModel<IGetTblModuloPaginadoRsViewModel>>
	*/
	public async getPaginadoTblModulo(tblModulo: IGetTblModuloPaginadoViewModel): Promise<IResponseStatusPaginadoViewModel<IGetTblModuloPaginadoRsViewModel>> {
	return await this._tblModuloService.getPaginadoTblModulo(tblModulo);
	}
	/**
	* Obtiene el registro por id
	* @param tblModulo: IGetTblModuloByIdViewModel
	* @return Promise<IResponseStatusViewModel<IGetTblModuloByIdRsViewModel>>
	*/
	public async getByIdTblModulo(tblModulo: IGetTblModuloByIdViewModel): Promise<IResponseStatusViewModel<IGetTblModuloByIdRsViewModel>> {
	return await this._tblModuloService.getByIdTblModulo(tblModulo);
	}
	/**
	* Obtiene el/los registros
	* @param tblModulo: IUpdateTblModuloViewModel
	* @return Promise<IResponseStatusViewModel<IUpdateTblModuloRsViewModel>>
	*/
	public async updateTblModulo(tblModulo: IUpdateTblModuloViewModel): Promise<IResponseStatusViewModel<IUpdateTblModuloRsViewModel>> {
	return await this._tblModuloService.updateTblModulo(tblModulo);
	}

}
