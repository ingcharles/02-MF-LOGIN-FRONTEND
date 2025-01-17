/**
* Interface i-tbl-usuario-modulo.viewModel.
*
* @author  Carlos Anchundia
* @date    03-12-2024
* @name    TblUsuarioModuloviewModel
* @package viewModel
* @subpackage Domain
*/




/**
* Interface que contiene el datos de entrada que viene del servicio
* @name ISaveTblUsuarioModuloRsViewModel
*/
export interface ISaveTblUsuarioModuloRsViewModel {
	idUsuarioModulo: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio

* @name ISaveTblUsuarioModuloViewModel
*/
export interface ISaveTblUsuarioModuloViewModel {
	idUsuario?: number | null;
	idModulo?: number | null;
	colorModulo?: string | null;
	iconoModulo?: string | null;
	numeroVisitaModulo?: number | null;
	numeroNotificaciones?: number | null;
	estado?: string | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTblUsuarioModuloRsViewModel
*/
export interface IGetTblUsuarioModuloRsViewModel {
	idUsuarioModulo?: number | null;
	idUsuario?: number | null;
	idModulo?: number | null;
	colorModulo?: string | null;
	iconoModulo?: string | null;
	numeroVisitaModulo?: number | null;
	numeroNotificaciones?: number | null;
	estado?: string | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetTblUsuarioModuloViewModel
*/
export interface IGetTblUsuarioModuloViewModel {
	busqueda?: string | null;
  idUsuario?: number | null;
}
/**
* Interface que contiene los datos de salida que van al servicio
* @name IGetPaginateByTblMenuEntityIdMenuViewModel
*/
export interface IGetPaginateByTblMenuEntityIdMenuViewModel {
  pagination: IGetTblUsuarioModuloPaginadoViewModel;
  idUsuario: number;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTblUsuarioModuloPaginadoRsViewModel
*/
export interface IGetTblUsuarioModuloPaginadoRsViewModel {
	idUsuarioModulo?: number | null;
	idUsuario?: number | null;
	idModulo?: number | null;
	colorModulo?: string | null;
	iconoModulo?: string | null;
	numeroVisitaModulo?: number | null;
	numeroNotificaciones?: number | null;
  ordenModulo?: number | null;
	estado?: string | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* @name IGetTblUsuarioModuloPaginadoViewModel
*/
export interface IGetTblUsuarioModuloPaginadoViewModel {
	page: number;
	size: number;
	search: string;
	sortBy: string;
	sortDirection: string;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTblUsuarioModuloByIdRsViewModel
*/
export interface IGetTblUsuarioModuloByIdRsViewModel {
	idUsuarioModulo?: number | null;
	idUsuario?: number | null;
	idModulo?: number | null;
	colorModulo?: string | null;
	iconoModulo?: string | null;
	numeroVisitaModulo?: number | null;
	numeroNotificaciones?: number | null;
	estado?: string | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetTblUsuarioModuloByIdViewModel
*/
export interface IGetTblUsuarioModuloByIdViewModel {
	idUsuarioModulo: number | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IUpdateTblUsuarioModuloRsViewModel
*/
export interface IUpdateTblUsuarioModuloRsViewModel {
	idUsuarioModulo: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio

* @name IUpdateTblUsuarioModuloViewModel
*/
export interface IUpdateTblUsuarioModuloViewModel {
	idUsuarioModulo?: number | null;
	idUsuario?: number | null;
	idModulo?: number | null;
	colorModulo?: string | null;
	iconoModulo?: string | null;
	numeroVisitaModulo?: number | null;
	numeroNotificaciones?: number | null;
	estado?: string | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* @name IGetPaginateByTblModuloPerfilEntityIdModuloViewModel
*/
export interface IGetPaginateByTblUsuarioEntityIdUsuarioViewModel {
  pagination: IGetTblUsuarioModuloPaginadoViewModel;
  idUsuario: number;
}
