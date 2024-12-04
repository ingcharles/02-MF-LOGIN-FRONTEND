/**
* Interface i-tbl-usuario.viewModel.
*
* @author  Carlos Anchundia
* @date    03-12-2024
* @name    TblUsuarioviewModel
* @package viewModel
* @subpackage Domain
*/

import { IAuditoriaViewModel } from '../../base/viewModels/i-auditoriaView.Model';


/**
* Interface que contiene el datos de entrada que viene del servicio
* @name ISaveTblUsuarioRsViewModel
*/
export interface ISaveTblUsuarioRsViewModel {
	idUsuario: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaViewModel
* @name ISaveTblUsuarioViewModel
*/
export interface ISaveTblUsuarioViewModel extends IAuditoriaViewModel {
	usuario?: string | null;
	identificacion?: string | null;
	nombreCompleto?: string | null;
	nombre?: string | null;
	apellido?: string | null;
	contrasenia?: string | null;
	codigoTemporal?: string | null;
	ipCreaRegistro?: string | null;
	fechaModificacionContrasenia?: Date | null;
	fechaUltimoAcceso?: Date | null;
	ipUltimoAcceso?: string | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTblUsuarioRsViewModel
*/
export interface IGetTblUsuarioRsViewModel {
	idUsuario?: number | null;
	usuario?: string | null;
	identificacion?: string | null;
	nombreCompleto?: string | null;
	nombre?: string | null;
	apellido?: string | null;
	contrasenia?: string | null;
	codigoTemporal?: string | null;
	ipCreaRegistro?: string | null;
	fechaModificacionContrasenia?: Date | null;
	fechaUltimoAcceso?: Date | null;
	ipUltimoAcceso?: string | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetTblUsuarioViewModel
*/
export interface IGetTblUsuarioViewModel {
	busqueda?: string | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTblUsuarioPaginadoRsViewModel
*/
export interface IGetTblUsuarioPaginadoRsViewModel {
	idUsuario?: number | null;
	usuario?: string | null;
	identificacion?: string | null;
	nombreCompleto?: string | null;
	nombre?: string | null;
	apellido?: string | null;
	contrasenia?: string | null;
	codigoTemporal?: string | null;
	ipCreaRegistro?: string | null;
	fechaModificacionContrasenia?: Date | null;
	fechaUltimoAcceso?: Date | null;
	ipUltimoAcceso?: string | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* @name IGetTblUsuarioPaginadoViewModel
*/
export interface IGetTblUsuarioPaginadoViewModel {
	page: number;
	size: number;
	search: string;
	sortBy: string;
	sortDirection: string;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetTblUsuarioByIdRsViewModel
*/
export interface IGetTblUsuarioByIdRsViewModel {
	idUsuario?: number | null;
	usuario?: string | null;
	identificacion?: string | null;
	nombreCompleto?: string | null;
	nombre?: string | null;
	apellido?: string | null;
	contrasenia?: string | null;
	codigoTemporal?: string | null;
	ipCreaRegistro?: string | null;
	fechaModificacionContrasenia?: Date | null;
	fechaUltimoAcceso?: Date | null;
	ipUltimoAcceso?: string | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetTblUsuarioByIdViewModel
*/
export interface IGetTblUsuarioByIdViewModel {
	idUsuario: number | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IUpdateTblUsuarioRsViewModel
*/
export interface IUpdateTblUsuarioRsViewModel {
	idUsuario: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaViewModel
* @name IUpdateTblUsuarioViewModel
*/
export interface IUpdateTblUsuarioViewModel extends IAuditoriaViewModel {
	idUsuario?: number | null;
	usuario?: string | null;
	identificacion?: string | null;
	nombreCompleto?: string | null;
	nombre?: string | null;
	apellido?: string | null;
	contrasenia?: string | null;
	codigoTemporal?: string | null;
	ipCreaRegistro?: string | null;
	fechaModificacionContrasenia?: Date | null;
	fechaUltimoAcceso?: Date | null;
	ipUltimoAcceso?: string | null;
	estado?: string | null;
	fechaRegistro?: Date | null;
	idUsuarioRegistro?: number | null;
}
