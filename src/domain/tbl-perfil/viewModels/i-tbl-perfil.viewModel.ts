/**
* Interface i-tbl-perfil.viewModel.
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    TblPerfilviewModel
* @package viewModel
* @subpackage Domain
*/




/**
* Interface que contiene el datos de entrada que viene del servicio
* @name ISaveTblPerfilRsViewModel
*/
export interface ISaveTblPerfilRsViewModel {
	idPerfil: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio

* @name ISaveTblPerfilViewModel
*/
export interface ISaveTblPerfilViewModel {
	nemonico?: string | null;
	nombre?: string | null;
	descripcion?: string | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTblPerfilRsViewModel
*/
export interface IGetTblPerfilRsViewModel {
	idPerfil?: number | null;
	nemonico?: string | null;
	nombre?: string | null;
	descripcion?: string | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetTblPerfilViewModel
*/
export interface IGetTblPerfilViewModel {
	busqueda?: string | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTblPerfilPaginadoRsViewModel
*/
export interface IGetTblPerfilPaginadoRsViewModel {
	idPerfil?: number | null;
	nemonico?: string | null;
	nombre?: string | null;
	descripcion?: string | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* @name IGetTblPerfilPaginadoViewModel
*/
export interface IGetTblPerfilPaginadoViewModel {
	page: number;
	size: number;
	search: string;
	sortBy: string;
	sortDirection: string;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTblPerfilByIdRsViewModel
*/
export interface IGetTblPerfilByIdRsViewModel {
	idPerfil?: number | null;
	nemonico?: string | null;
	nombre?: string | null;
	descripcion?: string | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetTblPerfilByIdViewModel
*/
export interface IGetTblPerfilByIdViewModel {
	idPerfil: number | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IUpdateTblPerfilRsViewModel
*/
export interface IUpdateTblPerfilRsViewModel {
	idPerfil: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio

* @name IUpdateTblPerfilViewModel
*/
export interface IUpdateTblPerfilViewModel {
	idPerfil?: number | null;
	nemonico?: string | null;
	nombre?: string | null;
	descripcion?: string | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}
