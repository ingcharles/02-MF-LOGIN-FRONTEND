/**
* Clase TblUsuarioModuloUseCase.
*
* @author  Carlos Anchundia
* @date    03-12-2024
* @name    TblUsuarioModuloUseCase
* @package UseCase
* @subpackage Domain
*/

import { Injectable, inject } from '@angular/core';

import { TblUsuarioModuloService } from '../../../data/tbl-usuario-modulo/services/tbl-usuario-modulo.services';
import { IGetTblUsuarioModuloByIdRsViewModel, IGetTblUsuarioModuloByIdViewModel, IGetTblUsuarioModuloRsViewModel, IGetTblUsuarioModuloViewModel, IGetTblUsuarioModuloPaginadoRsViewModel, IGetTblUsuarioModuloPaginadoViewModel, ISaveTblUsuarioModuloRsViewModel, ISaveTblUsuarioModuloViewModel, IUpdateTblUsuarioModuloRsViewModel, IUpdateTblUsuarioModuloViewModel, IGetPaginateByTblUsuarioEntityIdUsuarioViewModel } from '../viewModels/i-tbl-usuario-modulo.viewModel';
import { IResponseStatusViewModel } from '../../base/viewModels/i-response-status.viewModel';
import { IResponseStatusPaginadoViewModel } from '../../base/viewModels/i-response-status-paginado.viewModel';


@Injectable({
  providedIn: 'root',
})
export class TblUsuarioModuloUseCase {

  /**
  * Constructor
  * Se pueden llamar los servicios que van ser utilizados en los casos de uso
   */
  constructor() {
  }
  _tblUsuarioModuloService: TblUsuarioModuloService = inject(TblUsuarioModuloService)

  /**
  * Guarda el registro actual
  * @param tblUsuarioModulo: ISaveTblUsuarioModuloViewModel
  * @return Promise<IResponseStatusViewModel<ISaveTblUsuarioModuloRsViewModel>>
  */
  public async saveTblUsuarioModulo(tblUsuarioModulo: ISaveTblUsuarioModuloViewModel): Promise<IResponseStatusViewModel<ISaveTblUsuarioModuloRsViewModel>> {
    return await this._tblUsuarioModuloService.saveTblUsuarioModulo(tblUsuarioModulo);
  }
  /**
  * Obtiene el/los registros
  * @return Promise<IResponseStatusViewModel<IGetTblUsuarioModuloRsViewModel>>
  */
  public async getAllTblUsuarioModulo(): Promise<IResponseStatusViewModel<IGetTblUsuarioModuloRsViewModel>> {
    return await this._tblUsuarioModuloService.getAllTblUsuarioModulo();
  }
  /**
  * Obtiene el/los registros
  * @param tblUsuarioModulo: IGetTblUsuarioModuloPaginadoViewModel
  * @return Promise<IResponseStatusPaginadoViewModel<IGetTblUsuarioModuloPaginadoRsViewModel>>
  */
  public async getPaginadoTblUsuarioModulo(tblUsuarioModulo: IGetTblUsuarioModuloPaginadoViewModel): Promise<IResponseStatusPaginadoViewModel<IGetTblUsuarioModuloPaginadoRsViewModel>> {
    return await this._tblUsuarioModuloService.getPaginadoTblUsuarioModulo(tblUsuarioModulo);
  }
  /**
  * Obtiene el registro por id
  * @param tblUsuarioModulo: IGetTblUsuarioModuloByIdViewModel
  * @return Promise<IResponseStatusViewModel<IGetTblUsuarioModuloByIdRsViewModel>>
  */
  public async getByIdTblUsuarioModulo(tblUsuarioModulo: IGetTblUsuarioModuloByIdViewModel): Promise<IResponseStatusViewModel<IGetTblUsuarioModuloByIdRsViewModel>> {
    return await this._tblUsuarioModuloService.getByIdTblUsuarioModulo(tblUsuarioModulo);
  }
  /**
  * Obtiene el/los registros
  * @param tblUsuarioModulo: IUpdateTblUsuarioModuloViewModel
  * @return Promise<IResponseStatusViewModel<IUpdateTblUsuarioModuloRsViewModel>>
  */
  public async updateTblUsuarioModulo(tblUsuarioModulo: IUpdateTblUsuarioModuloViewModel): Promise<IResponseStatusViewModel<IUpdateTblUsuarioModuloRsViewModel>> {
    return await this._tblUsuarioModuloService.updateTblUsuarioModulo(tblUsuarioModulo);
  }

  /**
  * Obtiene el registro por id
  * @param tblUsuarioModulo: IGetTblUsuarioModuloByIdViewModel
  * @return Promise<Observable<IResponseStatusViewModel<IGetTblUsuarioModuloByIdRsViewModel>>>
  */
  public async getTblUsuarioEntityIdUsuario(tblUsuarioModulo: IGetTblUsuarioModuloViewModel): Promise<IResponseStatusViewModel<IGetTblUsuarioModuloByIdRsViewModel>> {
    return await this._tblUsuarioModuloService.getTblUsuarioEntityIdUsuario(tblUsuarioModulo);
  }

  /**
  * Obtiene el/los registros
  * @param tblModuloPerfil: IGetTblModuloPerfilPaginadoViewModel
  * @return Promise<IResponseStatusPaginadoViewModel<IGetTblMenuAccionPaginadoRsViewModel>>
  */
  public async getPaginadoByTblUsuarioEntityIdUsuario(tblModuloPerfil: IGetPaginateByTblUsuarioEntityIdUsuarioViewModel): Promise<IResponseStatusPaginadoViewModel<IGetTblUsuarioModuloPaginadoRsViewModel>> {
    return await this._tblUsuarioModuloService.getPaginadoByTblUsuarioEntityIdUsuario(tblModuloPerfil);
  }
}
