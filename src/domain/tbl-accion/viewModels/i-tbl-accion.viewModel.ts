/**
* Interface i-tbl-accion.viewModel.
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    TblAccionviewModel
* @package viewModel
* @subpackage Domain
*/




/**
* Interface que contiene el datos de entrada que viene del servicio
* @name ISaveTblAccionRsViewModel
*/
export interface ISaveTblAccionRsViewModel {
	idAccion: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio

* @name ISaveTblAccionViewModel
*/
export interface ISaveTblAccionViewModel {
	nombre?: string | null;
	nemonico?: string | null;
	pagina?: string | null;
	imagen?: string | null;
	color?: string | null;
	descripcion?: string | null;
	orden?: number | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTblAccionRsViewModel
*/
export interface IGetTblAccionRsViewModel {
	idAccion?: number | null;
	nombre?: string | null;
	nemonico?: string | null;
	pagina?: string | null;
	imagen?: string | null;
	color?: 'success' | 'info' | 'warn' | 'danger' | 'help' | 'primary' | 'secondary' | 'contrast' | null | undefined;
	descripcion?: string | null;
	orden?: number | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetTblAccionViewModel
*/
export interface IGetTblAccionViewModel {
	busqueda?: string | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTblAccionPaginadoRsViewModel
*/
export interface IGetTblAccionPaginadoRsViewModel {
	idAccion?: number | null;
	nombre?: string | null;
	nemonico?: string | null;
	pagina?: string | null;
	imagen?: string | null;
	color?: string | null;
	descripcion?: string | null;
	orden?: number | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* @name IGetTblAccionPaginadoViewModel
*/
export interface IGetTblAccionPaginadoViewModel {
	page: number;
	size: number;
	search: string;
	sortBy: string;
	sortDirection: string;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTblAccionByIdRsViewModel
*/
export interface IGetTblAccionByIdRsViewModel {
	idAccion?: number | null;
	nombre?: string | null;
	nemonico?: string | null;
	pagina?: string | null;
	imagen?: string | null;
	color?: string | null;
	descripcion?: string | null;
	orden?: number | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetTblAccionByIdViewModel
*/
export interface IGetTblAccionByIdViewModel {
	idAccion: number | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IUpdateTblAccionRsViewModel
*/
export interface IUpdateTblAccionRsViewModel {
	idAccion: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio

* @name IUpdateTblAccionViewModel
*/
export interface IUpdateTblAccionViewModel  {
	idAccion?: number | null;
	nombre?: string | null;
	nemonico?: string | null;
	pagina?: string | null;
	imagen?: string | null;
	color?: string | null;
	descripcion?: string | null;
	orden?: number | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}
