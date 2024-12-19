/**
* Interface i-tbl-modulo.viewModel.
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    TblModuloviewModel
* @package viewModel
* @subpackage Domain
*/




/**
* Interface que contiene el datos de entrada que viene del servicio
* @name ISaveTblModuloRsViewModel
*/
export interface ISaveTblModuloRsViewModel {
	idModulo: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio

* @name ISaveTblModuloViewModel
*/
export interface ISaveTblModuloViewModel {
	nemonico?: string | null;
	nombre?: string | null;
	numeroVersion?: string | null;
	ruta?: string | null;
	descripcion?: string | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTblModuloRsViewModel
*/
export interface IGetTblModuloRsViewModel {
	idModulo?: number | null;
	nemonico?: string | null;
	nombre?: string | null;
	numeroVersion?: string | null;
	ruta?: string | null;
	descripcion?: string | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetTblModuloViewModel
*/
export interface IGetTblModuloViewModel {
	busqueda?: string | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTblModuloPaginadoRsViewModel
*/
export interface IGetTblModuloPaginadoRsViewModel {
	idModulo?: number | null;
	nemonico?: string | null;
	nombre?: string | null;
	numeroVersion?: string | null;
	ruta?: string | null;
	descripcion?: string | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* @name IGetTblModuloPaginadoViewModel
*/
export interface IGetTblModuloPaginadoViewModel {
	page: number;
	size: number;
	search: string;
	sortBy: string;
	sortDirection: string;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTblModuloByIdRsViewModel
*/
export interface IGetTblModuloByIdRsViewModel {
	idModulo?: number | null;
	nemonico?: string | null;
	nombre?: string | null;
	numeroVersion?: string | null;
	ruta?: string | null;
	descripcion?: string | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetTblModuloByIdViewModel
*/
export interface IGetTblModuloByIdViewModel {
	idModulo: number | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IUpdateTblModuloRsViewModel
*/
export interface IUpdateTblModuloRsViewModel {
	idModulo: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio

* @name IUpdateTblModuloViewModel
*/
export interface IUpdateTblModuloViewModel {
	idModulo?: number | null;
	nemonico?: string | null;
	nombre?: string | null;
	numeroVersion?: string | null;
	ruta?: string | null;
	descripcion?: string | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}
