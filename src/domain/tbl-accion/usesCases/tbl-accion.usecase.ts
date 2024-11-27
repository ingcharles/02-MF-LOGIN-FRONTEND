/**
* Clase TblAccionUseCase.
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    TblAccionUseCase
* @package UseCase
* @subpackage Domain
*/

import { Injectable, inject } from '@angular/core';

import { TblAccionService } from '../../../data/tbl-accion/services/tbl-accion.services';
import { IGetTblAccionByIdRsViewModel, IGetTblAccionByIdViewModel, IGetTblAccionRsViewModel, IGetTblAccionViewModel, IGetTblAccionPaginadoRsViewModel, IGetTblAccionPaginadoViewModel, ISaveTblAccionRsViewModel, ISaveTblAccionViewModel, IUpdateTblAccionRsViewModel, IUpdateTblAccionViewModel  } from '../viewModels/i-tbl-accion.viewModel';
import { IResponseStatusViewModel } from '../../base/viewModels/i-response-status.viewModel';
import { IResponseStatusPaginadoViewModel } from '../../base/viewModels/i-response-status-paginado.viewModel';


@Injectable({
	providedIn: 'root',
})
export class TblAccionUseCase {

	/**
	* Constructor
	* Se pueden llamar los servicios que van ser utilizados en los casos de uso
	 */
	constructor()
	{
	}
	_tblAccionService: TblAccionService = inject(TblAccionService)

	/**
	* Guarda el registro actual
	* @param tblAccion: ISaveTblAccionViewModel
	* @return Promise<IResponseStatusViewModel<ISaveTblAccionRsViewModel>>
	*/
	public async saveTblAccion(tblAccion: ISaveTblAccionViewModel): Promise<IResponseStatusViewModel<ISaveTblAccionRsViewModel>> {
	return await this._tblAccionService.saveTblAccion(tblAccion);
	}
	/**
	* Obtiene el/los registros
	* @param tblAccion: IGetTblAccionViewModel
	* @return Promise<IResponseStatusViewModel<IGetTblAccionRsViewModel>>
	*/
	public async getTblAccion(): Promise<IResponseStatusViewModel<IGetTblAccionRsViewModel>> {
	return await this._tblAccionService.getTblAccion();
	}
	/**
	* Obtiene el/los registros
	* @param tblAccion: IGetTblAccionPaginadoViewModel
	* @return Promise<IResponseStatusViewModel<IGetTblAccionPaginadoRsViewModel>>
	*/
	public async getTblAccionPaginado(tblAccion: IGetTblAccionPaginadoViewModel): Promise<IResponseStatusPaginadoViewModel<IGetTblAccionPaginadoRsViewModel>> {
	return await this._tblAccionService.getTblAccionPaginado(tblAccion);
	}
	/**
	* Obtiene el registro por id
	* @param tblAccion: IGetTblAccionByIdViewModel
	* @return Promise<IResponseStatusViewModel<IGetTblAccionByIdRsViewModel>>
	*/
	public async getTblAccionById(tblAccion: IGetTblAccionByIdViewModel): Promise<IResponseStatusViewModel<IGetTblAccionByIdRsViewModel>> {
	return await this._tblAccionService.getTblAccionById(tblAccion);
	}
	/**
	* Obtiene el/los registros
	* @param tblAccion: IUpdateTblAccionViewModel
	* @return Promise<IResponseStatusViewModel<IUpdateTblAccionRsViewModel>>
	*/
	public async updateTblAccion(tblAccion: IUpdateTblAccionViewModel): Promise<IResponseStatusViewModel<IUpdateTblAccionRsViewModel>> {
	return await this._tblAccionService.updateTblAccion(tblAccion);
	}

}
