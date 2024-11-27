/**
* Interface i-tbl-menu.viewModel.
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    TblMenuviewModel
* @package viewModel
* @subpackage Domain
*/

import { IAuditoriaViewModel } from '../../base/viewModels/i-auditoriaView.Model';


/**
* Interface que contiene el datos de entrada que viene del servicio
* @name ISaveTblMenuRsViewModel
*/
export interface ISaveTblMenuRsViewModel {
	idMenu: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaViewModel
* @name ISaveTblMenuViewModel
*/
export interface ISaveTblMenuViewModel extends IAuditoriaViewModel {
	idMenuPadre?: number | null;
	nemonico?: string | null;
	nemonicoPadre?: string | null;
	nombre?: string | null;
	imagen?: string | null;
	ruta?: string | null;
	orden?: number | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTblMenuRsViewModel
*/
export interface IGetTblMenuRsViewModel {
	idMenu?: number | null;
	idMenuPadre?: number | null;
	nemonico?: string | null;
	nemonicoPadre?: string | null;
	nombre?: string | null;
	imagen?: string | null;
	ruta?: string | null;
	orden?: number | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetTblMenuViewModel
*/
export interface IGetTblMenuViewModel {
	busqueda?: string | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTblMenuPaginadoRsViewModel
*/
export interface IGetTblMenuPaginadoRsViewModel {
	idMenu?: number | null;
	menuPadre?: IGetTblMenuPaginadoRsViewModel | null;
	nemonico?: string | null;
	nemonicoPadre?: string | null;
	nombre?: string | null;
	imagen?: string | null;
	ruta?: string | null;
	orden?: number | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* @name IGetTblMenuPaginadoViewModel
*/
export interface IGetTblMenuPaginadoViewModel {
	page: number;
	size: number;
	search: string;
	sortBy: string;
	sortDirection: string;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTblMenuByIdRsViewModel
*/
export interface IGetTblMenuByIdRsViewModel {
	idMenu?: number | null;
	idMenuPadre?: number | null;
	nemonico?: string | null;
	nemonicoPadre?: string | null;
	nombre?: string | null;
	imagen?: string | null;
	ruta?: string | null;
	orden?: number | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetTblMenuByIdViewModel
*/
export interface IGetTblMenuByIdViewModel {
	idMenu: number | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IUpdateTblMenuRsViewModel
*/
export interface IUpdateTblMenuRsViewModel {
	idMenu: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaViewModel
* @name IUpdateTblMenuViewModel
*/
export interface IUpdateTblMenuViewModel extends IAuditoriaViewModel {
	idMenu?: number | null;
	idMenuPadre?: number | null;
	nemonico?: string | null;
	nemonicoPadre?: string | null;
	nombre?: string | null;
	imagen?: string | null;
	ruta?: string | null;
	orden?: number | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}
