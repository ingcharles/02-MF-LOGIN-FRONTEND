/**
* Clase TblMenuAccionUseCase.
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    TblMenuAccionUseCase
* @package UseCase
* @subpackage Domain
*/

import { Injectable, inject } from '@angular/core';

import { TblMenuAccionService } from '../../../data/tbl-menu-accion/services/tbl-menu-accion.services';
import { IGetTblMenuAccionByIdRsViewModel, IGetTblMenuAccionByIdViewModel, IGetTblMenuAccionRsViewModel, IGetTblMenuAccionViewModel, IGetTblMenuAccionPaginadoRsViewModel, IGetTblMenuAccionPaginadoViewModel, ISaveTblMenuAccionRsViewModel, ISaveTblMenuAccionViewModel, IUpdateTblMenuAccionRsViewModel, IUpdateTblMenuAccionViewModel, IGetPaginateByTblMenuEntityIdMenuViewModel } from '../viewModels/i-tbl-menu-accion.viewModel';
import { IResponseStatusViewModel } from '../../base/viewModels/i-response-status.viewModel';
import { IResponseStatusPaginadoViewModel } from '../../base/viewModels/i-response-status-paginado.viewModel';
import { IGetTblPerfilMenuAccionByIdRsViewModel, IGetTblPerfilMenuAccionByIdViewModel, IGetTblPerfilMenuAccionRsViewModel } from '../../tbl-perfil-menu-accion/viewModels/i-tbl-perfil-menu-accion.viewModel';


@Injectable({
  providedIn: 'root',
})
export class TblMenuAccionUseCase {

  /**
  * Constructor
  * Se pueden llamar los servicios que van ser utilizados en los casos de uso
   */
  constructor() {
  }
  _tblMenuAccionService: TblMenuAccionService = inject(TblMenuAccionService)

  /**
  * Guarda el registro actual
  * @param tblMenuAccion: ISaveTblMenuAccionViewModel
  * @return Promise<IResponseStatusViewModel<ISaveTblMenuAccionRsViewModel>>
  */
  public async saveTblMenuAccion(tblMenuAccion: ISaveTblMenuAccionViewModel): Promise<IResponseStatusViewModel<ISaveTblMenuAccionRsViewModel>> {
    return await this._tblMenuAccionService.saveTblMenuAccion(tblMenuAccion);
  }
  /**
  * Obtiene el/los registros
  * @return Promise<IResponseStatusViewModel<IGetTblMenuAccionRsViewModel>>
  */
  public async getAllTblMenuAccion(): Promise<IResponseStatusViewModel<IGetTblMenuAccionRsViewModel>> {
    return await this._tblMenuAccionService.getAllTblMenuAccion();
  }
  /**
  * Obtiene el/los registros
  * @param tblMenuAccion: IGetTblMenuAccionPaginadoViewModel
  * @return Promise<IResponseStatusPaginadoViewModel<IGetTblMenuAccionPaginadoRsViewModel>>
  */
  public async getPaginadoTblMenuAccion(tblMenuAccion: IGetTblMenuAccionPaginadoViewModel): Promise<IResponseStatusPaginadoViewModel<IGetTblMenuAccionPaginadoRsViewModel>> {
    return await this._tblMenuAccionService.getPaginadoTblMenuAccion(tblMenuAccion);
  }
  /**
  * Obtiene el registro por id
  * @param tblMenuAccion: IGetTblMenuAccionByIdViewModel
  * @return Promise<IResponseStatusViewModel<IGetTblMenuAccionByIdRsViewModel>>
  */
  public async getByIdTblMenuAccion(tblMenuAccion: IGetTblMenuAccionByIdViewModel): Promise<IResponseStatusViewModel<IGetTblMenuAccionByIdRsViewModel>> {
    return await this._tblMenuAccionService.getByIdTblMenuAccion(tblMenuAccion);
  }
  /**
  * Obtiene el/los registros
  * @param tblMenuAccion: IUpdateTblMenuAccionViewModel
  * @return Promise<IResponseStatusViewModel<IUpdateTblMenuAccionRsViewModel>>
  */
  public async updateTblMenuAccion(tblMenuAccion: IUpdateTblMenuAccionViewModel): Promise<IResponseStatusViewModel<IUpdateTblMenuAccionRsViewModel>> {
    return await this._tblMenuAccionService.updateTblMenuAccion(tblMenuAccion);
  }

  /**
* Obtiene el/los registros
* @param tblMenuAccion: IGetTblMenuAccionPaginadoViewModel
* @return Promise<IResponseStatusPaginadoViewModel<IGetTblMenuAccionPaginadoRsViewModel>>
*/
  public async getPaginateByTblMenuEntityIdMenu(tblMenuAccion: IGetPaginateByTblMenuEntityIdMenuViewModel): Promise<IResponseStatusPaginadoViewModel<IGetTblMenuAccionPaginadoRsViewModel>> {
    return await this._tblMenuAccionService.getPaginateByTblMenuEntityIdMenu(tblMenuAccion);
  }

  /**
* Obtiene el/los registros
* @param tblMenuAccion: IGetTblMenuAccionPaginadoViewModel
* @return Promise<IResponseStatusPaginadoViewModel<IGetTblMenuAccionPaginadoRsViewModel>>
*/
  public async getByTblMenuEntityIdMenuAndEstado(tblMenuAccion: IGetTblMenuAccionByIdViewModel): Promise<IResponseStatusViewModel<IGetTblMenuAccionRsViewModel>> {
    return await this._tblMenuAccionService.getByTblMenuEntityIdMenuAndEstado(tblMenuAccion);
  }

  /**
  * Obtiene el/los registros
  * @param tblMenuAccion: IGetTblMenuAccionPaginadoViewModel
  * @return Promise<IResponseStatusPaginadoViewModel<IGetTblMenuAccionPaginadoRsViewModel>>
  */
  public async getAllTblMenuAccionNotInIdPerfil(tblMenuAccion: IGetTblPerfilMenuAccionByIdRsViewModel): Promise<IResponseStatusViewModel<IGetTblMenuAccionRsViewModel>> {
    return await this._tblMenuAccionService.getAllTblMenuAccionNotInIdPerfil(tblMenuAccion);
  }


}
