/**
* Modulo tbl-usuarios-modulos.module.ts
*
* @author  Carlos Anchundia
* @date    22-10-2024
* @name    NgModule
* @package presentation
* @subpackage tbl-usuarios-modulos
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
// import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { IndexTblUsuariosModulosComponent } from './index-tbl-usuarios-modulos/index-tbl-usuarios-modulos.component';
import { CreateTblUsuariosModulosComponent } from './create-tbl-usuarios-modulos/create-tbl-usuarios-modulos.component';
import { TblUsuariosModulosRouting } from './tbl-usuarios-modulos.routing';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
	declarations: [],
	imports: [
		CardModule,
	ButtonModule,
	TblUsuariosModulosRouting
	],
	// providers: [
	// provideNgxMask(),
	// {provide: ValidationService }
	// ]
})

export class TblUsuariosModulosModule { }
