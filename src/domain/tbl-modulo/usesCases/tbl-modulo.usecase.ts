/**
* Clase TblModuloUseCase.
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    TblModuloUseCase
* @package UseCase
* @subpackage Domain
*/

import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { TblModuloService } from '../../../data/tbl-modulo/services/tbl-modulo.services';
import { IGetTblModuloByIdRsViewModel, IGetTblModuloByIdViewModel, IGetTblModuloRsViewModel, IGetTblModuloViewModel, IGetTblModuloPaginadoRsViewModel, IGetTblModuloPaginadoViewModel, ISaveTblModuloRsViewModel, ISaveTblModuloViewModel, IUpdateTblModuloRsViewModel, IUpdateTblModuloViewModel  } from '../viewModels/i-tbl-modulo.viewModel';
import { IResponseStatusViewModel } from '../../base/viewModels/i-response-status.viewModel';


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
	* @return Promise<Observable<IResponseStatusViewModel<ISaveTblModuloRsViewModel>>>
	*/
	public async saveTblModulo(tblModulo: ISaveTblModuloViewModel): Promise<Observable<IResponseStatusViewModel<ISaveTblModuloRsViewModel>>> {
	return await this._tblModuloService.saveTblModulo(tblModulo);
	}
	/**
	* Obtiene el/los registros
	* @param tblModulo: IGetTblModuloViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetTblModuloRsViewModel>>>
	*/
	public async getTblModulo(tblModulo: IGetTblModuloViewModel): Promise<Observable<IResponseStatusViewModel<IGetTblModuloRsViewModel>>> {
	return await this._tblModuloService.getTblModulo(tblModulo);
	}
	/**
	* Obtiene el/los registros
	* @param tblModulo: IGetTblModuloPaginadoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetTblModuloPaginadoRsViewModel>>>
	*/
	public async getTblModuloPaginado(tblModulo: IGetTblModuloPaginadoViewModel): Promise<Observable<IResponseStatusViewModel<IGetTblModuloPaginadoRsViewModel>>> {
	return await this._tblModuloService.getTblModuloPaginado(tblModulo);
	}
	/**
	* Obtiene el registro por id
	* @param tblModulo: IGetTblModuloByIdViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetTblModuloByIdRsViewModel>>>
	*/
	public async getTblModuloById(tblModulo: IGetTblModuloByIdViewModel): Promise<Observable<IResponseStatusViewModel<IGetTblModuloByIdRsViewModel>>> {
	return await this._tblModuloService.getTblModuloById(tblModulo);
	}
	/**
	* Obtiene el/los registros
	* @param tblModulo: IUpdateTblModuloViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IUpdateTblModuloRsViewModel>>>
	*/
	public async updateTblModulo(tblModulo: IUpdateTblModuloViewModel): Promise<Observable<IResponseStatusViewModel<IUpdateTblModuloRsViewModel>>> {
	return await this._tblModuloService.updateTblModulo(tblModulo);
	}

}
