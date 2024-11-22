/**
* Clase TblUsuarioModuloUseCase.
*
* @author  Carlos Anchundia
* @date    22-10-2024
* @name    TblUsuarioModuloUseCase
* @package UseCase
* @subpackage Domain
*/

import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { TblUsuarioModuloService } from '../../../data/tbl-usuario-modulo/services/tbl-usuario-modulo.service';
import { IGetTblUsuarioModuloByIdRsViewModel, IGetTblUsuarioModuloByIdViewModel, IGetTblUsuarioModuloRsViewModel, IGetTblUsuarioModuloViewModel, IGetTblUsuarioModuloPaginadoRsViewModel, IGetTblUsuarioModuloPaginadoViewModel, ISaveTblUsuarioModuloRsViewModel, ISaveTblUsuarioModuloViewModel, IUpdateTblUsuarioModuloRsViewModel, IUpdateTblUsuarioModuloViewModel  } from '../viewModels/i-tbl-usuario-modulo.viewModel';
import { IResponseStatusViewModel } from '../../base/viewModels/i-response-status.viewModel';


@Injectable({
	providedIn: 'root',
})
export class TblUsuarioModuloUseCase {

	/**
	* Constructor
	* Se pueden llamar los servicios que van ser utilizados en los casos de uso
	 */
	constructor()
	{
	}
	_tblUsuarioModuloService: TblUsuarioModuloService = inject(TblUsuarioModuloService)

	/**
	* Guarda el registro actual
	* @param tblUsuarioModulo: ISaveTblUsuarioModuloViewModel
	* @return Promise<Observable<IResponseStatusViewModel<ISaveTblUsuarioModuloRsViewModel>>>
	*/
	public async saveTblUsuarioModulo(tblUsuarioModulo: ISaveTblUsuarioModuloViewModel): Promise<Observable<IResponseStatusViewModel<ISaveTblUsuarioModuloRsViewModel>>> {
	return await this._tblUsuarioModuloService.saveTblUsuarioModulo(tblUsuarioModulo);
	}
	/**
	* Obtiene el/los registros
	* @param tblUsuarioModulo: IGetTblUsuarioModuloViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetTblUsuarioModuloRsViewModel>>>
	*/
	public async getTblUsuarioModulo(tblUsuarioModulo: IGetTblUsuarioModuloViewModel): Promise<Observable<IResponseStatusViewModel<IGetTblUsuarioModuloRsViewModel>>> {
	return await this._tblUsuarioModuloService.getTblUsuarioModulo(tblUsuarioModulo);
	}
	/**
	* Obtiene el/los registros
	* @param tblUsuarioModulo: IGetTblUsuarioModuloPaginadoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetTblUsuarioModuloPaginadoRsViewModel>>>
	*/
	public async getTblUsuarioModuloPaginado(tblUsuarioModulo: IGetTblUsuarioModuloPaginadoViewModel): Promise<Observable<IResponseStatusViewModel<IGetTblUsuarioModuloPaginadoRsViewModel>>> {
	return await this._tblUsuarioModuloService.getTblUsuarioModuloPaginado(tblUsuarioModulo);
	}
	/**
	* Obtiene el registro por id
	* @param tblUsuarioModulo: IGetTblUsuarioModuloByIdViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetTblUsuarioModuloByIdRsViewModel>>>
	*/
	public async getTblUsuarioModuloById(tblUsuarioModulo: IGetTblUsuarioModuloByIdViewModel): Promise<Observable<IResponseStatusViewModel<IGetTblUsuarioModuloByIdRsViewModel>>> {
	return await this._tblUsuarioModuloService.getTblUsuarioModuloById(tblUsuarioModulo);
	}
	/**
	* Obtiene el/los registros
	* @param tblUsuarioModulo: IUpdateTblUsuarioModuloViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IUpdateTblUsuarioModuloRsViewModel>>>
	*/
	public async updateTblUsuarioModulo(tblUsuarioModulo: IUpdateTblUsuarioModuloViewModel): Promise<Observable<IResponseStatusViewModel<IUpdateTblUsuarioModuloRsViewModel>>> {
	return await this._tblUsuarioModuloService.updateTblUsuarioModulo(tblUsuarioModulo);
	}

}
