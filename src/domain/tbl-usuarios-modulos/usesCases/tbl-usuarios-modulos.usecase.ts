/**
* Clase TblUsuariosModulosUseCase.
*
* @author  Carlos Anchundia
* @date    22-10-2024
* @name    TblUsuariosModulosUseCase
* @package UseCase
* @subpackage Domain
*/

import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { TblUsuariosModulosService } from '../../../data/tbl-usuarios-modulos/services/tbl-usuarios-modulos.services';
import { IGetTblUsuariosModulosByIdRsViewModel, IGetTblUsuariosModulosByIdViewModel, IGetTblUsuariosModulosRsViewModel, IGetTblUsuariosModulosViewModel, IGetTblUsuariosModulosPaginadoRsViewModel, IGetTblUsuariosModulosPaginadoViewModel, ISaveTblUsuariosModulosRsViewModel, ISaveTblUsuariosModulosViewModel, IUpdateTblUsuariosModulosRsViewModel, IUpdateTblUsuariosModulosViewModel  } from '../viewModels/i-tbl-usuarios-modulos.viewModel';
import { IResponseStatusViewModel } from '../../base/viewModels/i-response-status.viewModel';


@Injectable({
	providedIn: 'root',
})
export class TblUsuariosModulosUseCase {

	/**
	* Constructor
	* Se pueden llamar los servicios que van ser utilizados en los casos de uso
	 */
	constructor()
	{
	}
	_tblUsuariosModulosService: TblUsuariosModulosService = inject(TblUsuariosModulosService)

	/**
	* Guarda el registro actual
	* @param tblUsuariosModulos: ISaveTblUsuariosModulosViewModel
	* @return Promise<Observable<IResponseStatusViewModel<ISaveTblUsuariosModulosRsViewModel>>>
	*/
	public async saveTblUsuariosModulos(tblUsuariosModulos: ISaveTblUsuariosModulosViewModel): Promise<Observable<IResponseStatusViewModel<ISaveTblUsuariosModulosRsViewModel>>> {
	return await this._tblUsuariosModulosService.saveTblUsuariosModulos(tblUsuariosModulos);
	}
	/**
	* Obtiene el/los registros
	* @param tblUsuariosModulos: IGetTblUsuariosModulosViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetTblUsuariosModulosRsViewModel>>>
	*/
	public async getTblUsuariosModulos(tblUsuariosModulos: IGetTblUsuariosModulosViewModel): Promise<Observable<IResponseStatusViewModel<IGetTblUsuariosModulosRsViewModel>>> {
	return await this._tblUsuariosModulosService.getTblUsuariosModulos(tblUsuariosModulos);
	}
	/**
	* Obtiene el/los registros
	* @param tblUsuariosModulos: IGetTblUsuariosModulosPaginadoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetTblUsuariosModulosPaginadoRsViewModel>>>
	*/
	public async getTblUsuariosModulosPaginado(tblUsuariosModulos: IGetTblUsuariosModulosPaginadoViewModel): Promise<Observable<IResponseStatusViewModel<IGetTblUsuariosModulosPaginadoRsViewModel>>> {
	return await this._tblUsuariosModulosService.getTblUsuariosModulosPaginado(tblUsuariosModulos);
	}
	/**
	* Obtiene el registro por id
	* @param tblUsuariosModulos: IGetTblUsuariosModulosByIdViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetTblUsuariosModulosByIdRsViewModel>>>
	*/
	public async getTblUsuariosModulosById(tblUsuariosModulos: IGetTblUsuariosModulosByIdViewModel): Promise<Observable<IResponseStatusViewModel<IGetTblUsuariosModulosByIdRsViewModel>>> {
	return await this._tblUsuariosModulosService.getTblUsuariosModulosById(tblUsuariosModulos);
	}
	/**
	* Obtiene el/los registros
	* @param tblUsuariosModulos: IUpdateTblUsuariosModulosViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IUpdateTblUsuariosModulosRsViewModel>>>
	*/
	public async updateTblUsuariosModulos(tblUsuariosModulos: IUpdateTblUsuariosModulosViewModel): Promise<Observable<IResponseStatusViewModel<IUpdateTblUsuariosModulosRsViewModel>>> {
	return await this._tblUsuariosModulosService.updateTblUsuariosModulos(tblUsuariosModulos);
	}

}
