/**
* Clase TblMenuService que extiende de ATblMenuService.
* Este archivo se complementa con el archivo ATblMenuService.
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    TblMenuService
* @package Service
* @subpackage Data
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of  } from 'rxjs';
import { IGetTblMenuRsViewModel, IGetTblMenuViewModel, IGetTblMenuPaginadoViewModel, IGetTblMenuPaginadoRsViewModel, IGetTblMenuByIdRsViewModel, IGetTblMenuByIdViewModel, ISaveTblMenuRsViewModel, ISaveTblMenuViewModel, IUpdateTblMenuRsViewModel, IUpdateTblMenuViewModel } from '../../../domain/tbl-menu/viewModels/i-tbl-menu.viewModel';
import { environment } from '../../../environments/environment';
import { StatusResponseService } from '../../base/services/status-response.service';
import { IResponseStatusViewModel } from '../../../domain/base/viewModels/i-response-status.viewModel';
import { IResultApi } from '../../base/interfaces/i-result-api';

const apiAdminUrl: string = environment.apiAdminUrl;

@Injectable({
	providedIn: 'root',
})

export class TblMenuService  {

	/**
	* Constructor
	* Se pueden llamar los servicios complementarios para este servicio
	* @param _http: HttpClient, _statusResponseService: StatusResponseService
	* @return TblMenuService
	*/
	constructor(private _http: HttpClient, private _statusResponseService: StatusResponseService) {
	}

	/**
	* Guarda el registro actual
	* @param tblMenu: ISaveTblMenuViewModel
	* @return Promise<Observable<IResponseStatusViewModel<ISaveTblMenuRsViewModel>>>
	*/
	public async saveTblMenu(tblMenu: ISaveTblMenuViewModel): Promise<Observable<IResponseStatusViewModel<ISaveTblMenuRsViewModel>>>{
	const url = `${apiAdminUrl}command/tbl-menu/saveTblMenu`;
	return this._http.post<IResultApi>(url, tblMenu).pipe(
		map((result) => {
		return this._statusResponseService.succes<ISaveTblMenuRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<ISaveTblMenuRsViewModel>(error));
		})
	);
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetTblMenuViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetTblMenuRsViewModel>>>
	*/
	public getAllTblMenu(): Promise<IResponseStatusViewModel<IGetTblMenuRsViewModel>>{
	const url = `${apiAdminUrl}query/tbl-menu/findAllTblMenu`;
	return new Promise<IResponseStatusViewModel<IGetTblMenuRsViewModel>>((resolve, reject) => {
    this._http.get<IResultApi>(url)
    .subscribe({
      next: (response: IResultApi) => {
        resolve(this._statusResponseService.succes<IGetTblMenuRsViewModel>(response));
      },
      error: (error) => {
        reject(this._statusResponseService.error<IGetTblMenuRsViewModel>(error));
      }
    });
    /*.pipe(
      map((result) => {
      return this._statusResponseService.succes<IGetTblMenuRsViewModel>(result);
      }),
      catchError((error) => {
      return of(this._statusResponseService.error<IGetTblMenuRsViewModel>(error));
      })
    );*/
  });

	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetTblMenuPaginadoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetTblMenuPaginadoRsViewModel>>>
	*/
	public async getTblMenuPaginado(dataViewModel: IGetTblMenuPaginadoViewModel): Promise<Observable<IResponseStatusViewModel<IGetTblMenuPaginadoRsViewModel>>>{
	const url = `${apiAdminUrl}query/tbl-menu/findAllPaginateTblMenu`;
	return this._http.post<IResultApi>(url, dataViewModel).pipe(
		map((result) => {
		return this._statusResponseService.succes<IGetTblMenuPaginadoRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IGetTblMenuPaginadoRsViewModel>(error));
		})
	);
	}

	/**
	* Obtiene el registro actual
	* @param id_menu: IGetTblMenuByIdViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetTblMenuByIdRsViewModel>>>
	*/
	public getTblMenuById(id_menu: IGetTblMenuByIdViewModel): Promise<IResponseStatusViewModel<IGetTblMenuByIdRsViewModel>>{
    const url = `${apiAdminUrl}query/tbl-menu/findByIdTblMenu`;
    return new Promise<IResponseStatusViewModel<IGetTblMenuByIdRsViewModel>>((resolve, reject) => {
      this._http.post<IResultApi>(url, id_menu)
      .subscribe({
        next: (response: IResultApi) => {
          resolve(this._statusResponseService.succes<IGetTblMenuByIdRsViewModel>(response));
        },
        error: (error) => {
          reject(this._statusResponseService.error<IGetTblMenuByIdRsViewModel>(error));
        }
      });
    });
  }
	/*return this._http.post<IResultApi>(url, id_menu).pipe(
		map((result) => {
		return this._statusResponseService.succes<IGetTblMenuByIdRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IGetTblMenuByIdRsViewModel>(error));
		})
	);*/
	//}

	/**
	* Actualizar el registro actual
	* @param tblMenu: IUpdateTblMenuViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IUpdateTblMenuRsViewModel>>>
	*/
	public async updateTblMenu(tblMenu: IUpdateTblMenuViewModel): Promise<Observable<IResponseStatusViewModel<IUpdateTblMenuRsViewModel>>>{

	const url = `${apiAdminUrl}command/tbl-menu/updateTblMenu`;
	return this._http.post<IResultApi>(url, tblMenu).pipe(
		map((result) => {
		return this._statusResponseService.succes<IUpdateTblMenuRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IUpdateTblMenuRsViewModel>(error));
		})
	);
	}

}
