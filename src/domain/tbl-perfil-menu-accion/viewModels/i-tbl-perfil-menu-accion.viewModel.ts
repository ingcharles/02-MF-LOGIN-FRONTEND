/**
* Interface i-tbl-perfil-menu-accion.viewModel.
*
* @author  Carlos Anchundia
* @date    03-12-2024
* @name    TblPerfilMenuAccionviewModel
* @package viewModel
* @subpackage Domain
*/

import { IAuditoriaViewModel } from '../../base/viewModels/i-auditoriaView.Model';


/**
* Interface que contiene el datos de entrada que viene del servicio
* @name ISaveTblPerfilMenuAccionRsViewModel
*/
export interface ISaveTblPerfilMenuAccionRsViewModel {
	idPerfilMenuAccion: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaViewModel
* @name ISaveTblPerfilMenuAccionViewModel
*/
export interface ISaveTblPerfilMenuAccionViewModel extends IAuditoriaViewModel {
	idPerfil?: number | null;
	idMenuAccion?: number | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTblPerfilMenuAccionRsViewModel
*/
export interface IGetTblPerfilMenuAccionRsViewModel {
	idPerfilMenuAccion?: number | null;
	idPerfil?: number | null;
	idMenuAccion?: number | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetTblPerfilMenuAccionViewModel
*/
export interface IGetTblPerfilMenuAccionViewModel {
	busqueda?: string | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTblPerfilMenuAccionPaginadoRsViewModel
*/
export interface IGetTblPerfilMenuAccionPaginadoRsViewModel {
	idPerfilMenuAccion?: number | null;
	idPerfil?: number | null;
	idMenuAccion?: number | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* @name IGetTblPerfilMenuAccionPaginadoViewModel
*/
export interface IGetTblPerfilMenuAccionPaginadoViewModel {
	page: number;
	size: number;
	search: string;
	sortBy: string;
	sortDirection: string;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTblPerfilMenuAccionByIdRsViewModel
*/
export interface IGetTblPerfilMenuAccionByIdRsViewModel {
	idPerfilMenuAccion?: number | null;
	idPerfil?: number | null;
	idMenuAccion?: number | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetTblPerfilMenuAccionByIdViewModel
*/
export interface IGetTblPerfilMenuAccionByIdViewModel {
	idPerfilMenuAccion: number | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IUpdateTblPerfilMenuAccionRsViewModel
*/
export interface IUpdateTblPerfilMenuAccionRsViewModel {
	idPerfilMenuAccion: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaViewModel
* @name IUpdateTblPerfilMenuAccionViewModel
*/
export interface IUpdateTblPerfilMenuAccionViewModel extends IAuditoriaViewModel {
	idPerfilMenuAccion?: number | null;
	idPerfil?: number | null;
	idMenuAccion?: number | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}
