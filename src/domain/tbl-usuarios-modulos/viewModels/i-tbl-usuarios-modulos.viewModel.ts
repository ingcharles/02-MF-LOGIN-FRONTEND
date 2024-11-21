/**
* Interface i-tbl-usuarios-modulos.viewModel.
*
* @author  Carlos Anchundia
* @date    22-10-2024
* @name    TblUsuariosModulosviewModel
* @package viewModel
* @subpackage Domain
*/

import { IAuditoriaViewModel } from '../../base/viewModels/i-auditoriaView.Model';


/**
* Interface que contiene el datos de entrada que viene del servicio
* @name ISaveTblUsuariosModulosRsViewModel
*/
export interface ISaveTblUsuariosModulosRsViewModel {
	idUsuarioModulo: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaViewModel
* @name ISaveTblUsuariosModulosViewModel
*/
export interface ISaveTblUsuariosModulosViewModel extends IAuditoriaViewModel {
	idModulo?: number | null;
	idUsuario?: number | null;
	estado?: string | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTblUsuariosModulosRsViewModel
*/
export interface IGetTblUsuariosModulosRsViewModel {
	idUsuarioModulo?: number | null;
	idModulo?: number | null;
	idUsuario?: number | null;
	estado?: string | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetTblUsuariosModulosViewModel
*/
export interface IGetTblUsuariosModulosViewModel {
	busqueda?: string | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTblUsuariosModulosPaginadoRsViewModel
*/
export interface IGetTblUsuariosModulosPaginadoRsViewModel {
	idUsuarioModulo?: number | null;
	idModulo?: number | null;
	idUsuario?: number | null;
	estado?: string | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* @name IGetTblUsuariosModulosPaginadoViewModel
*/
export interface IGetTblUsuariosModulosPaginadoViewModel {
	page: number;
	size: number;
	search: string;
	sortBy: string;
	sortDirection: string;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTblUsuariosModulosByIdRsViewModel
*/
export interface IGetTblUsuariosModulosByIdRsViewModel {
	idUsuarioModulo?: number | null;
	idModulo?: number | null;
	idUsuario?: number | null;
	estado?: string | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetTblUsuariosModulosByIdViewModel
*/
export interface IGetTblUsuariosModulosByIdViewModel {
	idUsuarioModulo: number | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IUpdateTblUsuariosModulosRsViewModel
*/
export interface IUpdateTblUsuariosModulosRsViewModel {
	idUsuarioModulo: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaViewModel
* @name IUpdateTblUsuariosModulosViewModel
*/
export interface IUpdateTblUsuariosModulosViewModel extends IAuditoriaViewModel {
	idUsuarioModulo?: number | null;
	idModulo?: number | null;
	idUsuario?: number | null;
	estado?: string | null;
}
