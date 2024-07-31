/**
* Interface i-localizacion-prueba-uno.viewModel.
*
* @author  Carlos Anchundia
* @date    08-05-2024
* @name    AdminPazSalvoviewModel
* @package viewModel
* @subpackage Domain
*/

import { IAuditoriaViewModel } from '../../base/viewModels/i-auditoriaView.Model';


/**
* Interface que contiene el datos de entrada que viene del servicio
* @name ISaveAdminPazSalvoRsViewModel
*/
export interface ISaveAdminPazSalvoRsViewModel {
	campoSerial: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaViewModel
* @name ISaveAdminPazSalvoViewModel
*/
export interface ISaveAdminPazSalvoViewModel extends IAuditoriaViewModel {
	campoFechaUnicio?: Date | null;
	campoFechaFin?: Date | null;
	campoDescripcion?: string | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetAdminPazSalvoRsViewModel
*/
export interface IGetAdminPazSalvoRsViewModel {
	campoSerial?: number | null;
	campoFechaUnicio?: Date | null;
	campoFechaFin?: Date | null;
	campoDescripcion?: string | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetAdminPazSalvoViewModel
*/
export interface IGetAdminPazSalvoViewModel {
	busqueda?: string | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetAdminPazSalvoPaginadoRsViewModel
*/
export interface IGetAdminPazSalvoPaginadoRsViewModel {
	campoSerial?: number | null;
	campoFechaUnicio?: Date | null;
	campoFechaFin?: Date | null;
	campoDescripcion?: string | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* @name IGetAdminPazSalvoPaginadoViewModel
*/
export interface IGetAdminPazSalvoPaginadoViewModel {
	page: number;
	size: number;
	search: string;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IGetAdminPazSalvoByIdRsViewModel
*/
export interface IGetAdminPazSalvoByIdRsViewModel {
	campoSerial?: number | null;
	campoFechaUnicio?: Date | null;
	campoFechaFin?: Date | null;
	campoDescripcion?: string | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaModel
* @name IGetAdminPazSalvoByIdViewModel
*/
export interface IGetAdminPazSalvoByIdViewModel {
	campoSerial: number | null;
}

/**
* Interface que contiene el datos de entrada que viene del servicio
* @name IUpdateAdminPazSalvoRsViewModel
*/
export interface IUpdateAdminPazSalvoRsViewModel {
	campoSerial: number | null;
}

/**
* Interface que contiene los datos de salida que van al servicio
* Extiende IAuditoriaViewModel
* @name IUpdateAdminPazSalvoViewModel
*/
export interface IUpdateAdminPazSalvoViewModel extends IAuditoriaViewModel {
	campoSerial?: number | null;
	campoFechaUnicio?: Date | null;
	campoFechaFin?: Date | null;
	campoDescripcion?: string | null;
}
