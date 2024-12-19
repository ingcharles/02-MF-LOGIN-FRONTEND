/**
* Interface i-tbl-modulo-perfil.viewModel.
*
* @author  Carlos Anchundia
* @date    03-12-2024
* @name    TblModuloPerfilviewModel
* @package viewModel
* @subpackage Domain
*/




/**
* Interface que contiene el datos de entrada que viene del servicio
* @name ISaveTblModuloPerfilRsViewModel
*/
export interface ISaveTblModuloPerfilRsViewModel {
	idModuloPerfil: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio

* @name ISaveTblModuloPerfilViewModel
*/
export interface ISaveTblModuloPerfilViewModel {
	idModulo?: number | null;
	idPerfil?: number | null;
	estado?: string | null;
	ipCreaRegistro?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTblModuloPerfilRsViewModel
*/
export interface IGetTblModuloPerfilRsViewModel {
	idModuloPerfil?: number | null;
	idModulo?: number | null;
	idPerfil?: number | null;
	estado?: string | null;
	ipCreaRegistro?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetTblModuloPerfilViewModel
*/
export interface IGetTblModuloPerfilViewModel {
	busqueda?: string | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTblModuloPerfilPaginadoRsViewModel
*/
export interface IGetTblModuloPerfilPaginadoRsViewModel {
	idModuloPerfil?: number | null;
	idModulo?: number | null;
	idPerfil?: number | null;
	estado?: string | null;
	ipCreaRegistro?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* @name IGetTblModuloPerfilPaginadoViewModel
*/
export interface IGetTblModuloPerfilPaginadoViewModel {
	page: number;
	size: number;
	search: string;
	sortBy: string;
	sortDirection: string;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTblModuloPerfilByIdRsViewModel
*/
export interface IGetTblModuloPerfilByIdRsViewModel {
	idModuloPerfil?: number | null;
	idModulo?: number | null;
	idPerfil?: number | null;
	estado?: string | null;
	ipCreaRegistro?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetTblModuloPerfilByIdViewModel
*/
export interface IGetTblModuloPerfilByIdViewModel {
	idModuloPerfil: number | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IUpdateTblModuloPerfilRsViewModel
*/
export interface IUpdateTblModuloPerfilRsViewModel {
	idModuloPerfil: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio

* @name IUpdateTblModuloPerfilViewModel
*/
export interface IUpdateTblModuloPerfilViewModel {
	idModuloPerfil?: number | null;
	idModulo?: number | null;
	idPerfil?: number | null;
	estado?: string | null;
	ipCreaRegistro?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}


/**
* Interface que contiene los datos de salida que van al servicio
* @name IGetPaginateByTblModuloEntityIdModuloViewModel
*/
export interface IGetPaginateByTblModuloEntityIdModuloViewModel {
  pagination: IGetTblModuloPerfilPaginadoViewModel;
  idModulo: number;
}
