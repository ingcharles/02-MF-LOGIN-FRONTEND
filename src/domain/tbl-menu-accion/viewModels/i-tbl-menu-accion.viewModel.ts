/**
* Interface i-tbl-menu-accion.viewModel.
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    TblMenuAccionviewModel
* @package viewModel
* @subpackage Domain
*/


import { IGetTblAccionByIdRsViewModel, IGetTblAccionRsViewModel } from '../../tbl-accion/viewModels/i-tbl-accion.viewModel';
import { IGetTblMenuByIdRsViewModel, IGetTblMenuRsViewModel } from '../../tbl-menu/viewModels/i-tbl-menu.viewModel';


/**
* Interface que contiene el datos de entrada que viene del servicio
* @name ISaveTblMenuAccionRsViewModel
*/
export interface ISaveTblMenuAccionRsViewModel {
	idMenuAccion: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio

* @name ISaveTblMenuAccionViewModel
*/
export interface ISaveTblMenuAccionViewModel {
	idMenu?: number | null;
	idAccion?: number | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTblMenuAccionRsViewModel
*/
export interface IGetTblMenuAccionRsViewModel {
	idMenuAccion?: number | null;
	menu?: IGetTblMenuRsViewModel | null;
	accion?: IGetTblAccionRsViewModel | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetTblMenuAccionViewModel
*/
export interface IGetTblMenuAccionViewModel {
	busqueda?: string | null;
  idPerfil?: number | null;
  idMenu?: number | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTblMenuAccionPaginadoRsViewModel
*/
export interface IGetTblMenuAccionPaginadoRsViewModel {
	idMenuAccion?: number | null;
	idMenu?: number | null;
	idAccion?: number | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* @name IGetTblMenuAccionPaginadoViewModel
*/
export interface IGetTblMenuAccionPaginadoViewModel {
	page: number;
	size: number;
	search: string;
	sortBy: string;
	sortDirection: string;
}

/**
* Interface que contiene los datos de salida que van al servicio
* @name IGetPaginateByTblMenuEntityIdMenuViewModel
*/
export interface IGetPaginateByTblMenuEntityIdMenuViewModel {
	pagination: IGetTblMenuAccionPaginadoViewModel;
  idMenu: number;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTblMenuAccionByIdRsViewModel
*/
export interface IGetTblMenuAccionByIdRsViewModel {
	idMenuAccion?: number | null;
	menu?: IGetTblMenuByIdRsViewModel | null;
	accion?: IGetTblAccionByIdRsViewModel | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetTblMenuAccionByIdViewModel
*/
export interface IGetTblMenuAccionByIdViewModel {
	idMenuAccion?: number | null;
  idMenu?: number | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IUpdateTblMenuAccionRsViewModel
*/
export interface IUpdateTblMenuAccionRsViewModel {
	idMenuAccion: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio

* @name IUpdateTblMenuAccionViewModel
*/
export interface IUpdateTblMenuAccionViewModel {
	idMenuAccion?: number | null;
	idMenu?: number | null;
	idAccion?: number | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}
