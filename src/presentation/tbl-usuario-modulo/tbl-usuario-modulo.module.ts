/**
* Modulo tbl-usuario-modulo.module.ts
*
* @author  Carlos Anchundia
* @date    22-10-2024
* @name    NgModule
* @package presentation
* @subpackage tbl-usuario-modulo
*/

import { NgModule } from '@angular/core';

import { IndexTblUsuarioModuloComponent } from './index-tbl-usuario-modulo/index-tbl-usuario-modulo.component';
import { CreateTblUsuarioModuloComponent } from './create-tbl-usuario-modulo/create-tbl-usuario-modulo.component';
import { TblUsuarioModuloRouting } from './tbl-usuario-modulo.routing';
@NgModule({
	declarations: [],
	imports: [
	TblUsuarioModuloRouting
	],
	// providers: [
	// provideNgxMask(),
	// {provide: ValidationService }
	// ]
})

export class TblUsuarioModuloModule { }
