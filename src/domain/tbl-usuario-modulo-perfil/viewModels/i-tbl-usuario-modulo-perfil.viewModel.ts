/**
* Interface i-tbl-usuario-modulo-perfil.viewModel.
*
* @author  Carlos Anchundia
* @date    03-12-2024
* @name    TblUsuarioModuloPerfilviewModel
* @package viewModel
* @subpackage Domain
*/


/**
* Interface que contiene el datos de entrada que viene del servicio
* @name ISaveTblUsuarioModuloPerfilRsViewModel
*/
export interface ISaveTblUsuarioModuloPerfilRsViewModel {
	idUsuarioModuloPerfil: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* @name ISaveTblUsuarioModuloPerfilViewModel
*/
export interface ISaveTblUsuarioModuloPerfilViewModel {
	idUsuarioModulo?: number | null;
	idPerfil?: number | null;
	estado?: string | null;
	ipCreaRegistro?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTblUsuarioModuloPerfilRsViewModel
*/
export interface IGetTblUsuarioModuloPerfilRsViewModel {
	idUsuarioModuloPerfil?: number | null;
	idUsuarioModulo?: number | null;
	idPerfil?: number | null;
	estado?: string | null;
	ipCreaRegistro?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* @name IGetTblUsuarioModuloPerfilViewModel
*/
export interface IGetTblUsuarioModuloPerfilViewModel {
	busqueda?: string | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTblUsuarioModuloPerfilPaginadoRsViewModel
*/
export interface IGetTblUsuarioModuloPerfilPaginadoRsViewModel {
	idUsuarioModuloPerfil?: number | null;
	idUsuarioModulo?: number | null;
	idPerfil?: number | null;
	estado?: string | null;
	ipCreaRegistro?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* @name IGetTblUsuarioModuloPerfilPaginadoViewModel
*/
export interface IGetTblUsuarioModuloPerfilPaginadoViewModel {
	page: number;
	size: number;
	search: string;
	sortBy: string;
	sortDirection: string;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTblUsuarioModuloPerfilByIdRsViewModel
*/
export interface IGetTblUsuarioModuloPerfilByIdRsViewModel {
	idUsuarioModuloPerfil?: number | null;
	idUsuarioModulo?: number | null;
	idPerfil?: number | null;
	estado?: string | null;
	ipCreaRegistro?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* @name IGetTblUsuarioModuloPerfilByIdViewModel
*/
export interface IGetTblUsuarioModuloPerfilByIdViewModel {
	idUsuarioModuloPerfil: number | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IUpdateTblUsuarioModuloPerfilRsViewModel
*/
export interface IUpdateTblUsuarioModuloPerfilRsViewModel {
	idUsuarioModuloPerfil: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* @name IUpdateTblUsuarioModuloPerfilViewModel
*/
export interface IUpdateTblUsuarioModuloPerfilViewModel {
	idUsuarioModuloPerfil?: number | null;
	idUsuarioModulo?: number | null;
	idPerfil?: number | null;
	estado?: string | null;
	ipCreaRegistro?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}
