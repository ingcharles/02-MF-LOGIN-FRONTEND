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

@NgModule({
	declarations: [
	],
	imports: [
	TblModuloRouting,
  TblUsuarioModuloRouting
	],

})

export class AdminModule { }
