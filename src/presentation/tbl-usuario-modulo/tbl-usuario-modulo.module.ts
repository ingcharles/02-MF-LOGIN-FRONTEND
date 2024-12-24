/**
* Módulo tbl-usuario-modulo.module.ts
*
* @author  Carlos Anchundia
* @date    03-12-2024
* @name    NgModule
* @package presentation
* @subpackage tbl-usuario-modulo
*/

import { NgModule } from '@angular/core';
import { TblUsuarioModuloRouting } from './tbl-usuario-modulo.routing';
import { MfEventService } from '../../data/base/services/mf-event-service';
import { TblPerfilMenuAccionUseCase } from '../../domain/tbl-perfil-menu-accion/usesCases/tbl-perfil-menu-accion.usecase';

@NgModule({
	declarations: [
	],
	imports: [
	TblUsuarioModuloRouting
	],
	providers: [
	]
})

export class TblUsuarioModuloModule { }
