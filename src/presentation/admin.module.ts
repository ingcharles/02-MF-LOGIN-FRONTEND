/**
* Modulo tbl-modulo.module.ts
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    NgModule
* @package presentation
* @subpackage tbl-modulo
*/

import { NgModule } from '@angular/core';
import { TblModuloRouting } from './tbl-modulo/tbl-modulo.routing';
import { TblUsuarioModuloRouting } from './tbl-usuario-modulo/tbl-usuario-modulo.routing';
import { TblMenuRouting } from './tbl-menu/tbl-menu.routing';
import { TblAccionRouting } from './tbl-accion/tbl-accion.routing';
import { TblPerfilRouting } from './tbl-perfil/tbl-perfil.routing';
import { TblMenuAccionRouting } from './tbl-menu-accion/tbl-menu-accion.routing';
import { TblPerfilMenuAccionRouting } from './tbl-perfil-menu-accion/tbl-perfil-menu-accion.routing';

@NgModule({
	declarations: [
	],
	imports: [
	TblModuloRouting,
  TblMenuRouting,
  TblUsuarioModuloRouting,
  TblAccionRouting,
  TblPerfilRouting,
  TblMenuAccionRouting,
  TblPerfilMenuAccionRouting,
  TblUsuarioModuloRouting
	],

})

export class AdminModule { }
