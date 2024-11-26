/**
* Clase TblMenuUseCase.
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    TblMenuUseCase
* @package UseCase
* @subpackage Domain
*/

import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { TblMenuService } from '../../../data/tbl-menu/services/tbl-menu.services';
import { IGetTblMenuByIdRsViewModel, IGetTblMenuByIdViewModel, IGetTblMenuRsViewModel, IGetTblMenuViewModel, IGetTblMenuPaginadoRsViewModel, IGetTblMenuPaginadoViewModel, ISaveTblMenuRsViewModel, ISaveTblMenuViewModel, IUpdateTblMenuRsViewModel, IUpdateTblMenuViewModel  } from '../viewModels/i-tbl-menu.viewModel';
import { IResponseStatusViewModel } from '../../base/viewModels/i-response-status.viewModel';


@Injectable({
	providedIn: 'root',
})
export class TblMenuUseCase {

	/**
	* Constructor
	* Se pueden llamar los servicios que van ser utilizados en los casos de uso
	 */
	constructor()
	{
	}
	_tblMenuService: TblMenuService = inject(TblMenuService)

	/**
	* Guarda el registro actual
	* @param tblMenu: ISaveTblMenuViewModel
	* @return Promise<Observable<IResponseStatusViewModel<ISaveTblMenuRsViewModel>>>
	*/
	public async saveTblMenu(tblMenu: ISaveTblMenuViewModel): Promise<Observable<IResponseStatusViewModel<ISaveTblMenuRsViewModel>>> {
	return await this._tblMenuService.saveTblMenu(tblMenu);
	}
	/**
	* Obtiene el/los registros
	* @param tblMenu: IGetTblMenuViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetTblMenuRsViewModel>>>
	*/
	public async getTblMenu(tblMenu: IGetTblMenuViewModel): Promise<Observable<IResponseStatusViewModel<IGetTblMenuRsViewModel>>> {
	return await this._tblMenuService.getTblMenu(tblMenu);
	}
	/**
	* Obtiene el/los registros
	* @param tblMenu: IGetTblMenuPaginadoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetTblMenuPaginadoRsViewModel>>>
	*/
	public async getTblMenuPaginado(tblMenu: IGetTblMenuPaginadoViewModel): Promise<Observable<IResponseStatusViewModel<IGetTblMenuPaginadoRsViewModel>>> {
	return await this._tblMenuService.getTblMenuPaginado(tblMenu);
	}
	/**
	* Obtiene el registro por id
	* @param tblMenu: IGetTblMenuByIdViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetTblMenuByIdRsViewModel>>>
	*/
	public async getTblMenuById(tblMenu: IGetTblMenuByIdViewModel): Promise<Observable<IResponseStatusViewModel<IGetTblMenuByIdRsViewModel>>> {
	return await this._tblMenuService.getTblMenuById(tblMenu);
	}
	/**
	* Obtiene el/los registros
	* @param tblMenu: IUpdateTblMenuViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IUpdateTblMenuRsViewModel>>>
	*/
	public async updateTblMenu(tblMenu: IUpdateTblMenuViewModel): Promise<Observable<IResponseStatusViewModel<IUpdateTblMenuRsViewModel>>> {
	return await this._tblMenuService.updateTblMenu(tblMenu);
	}

}
