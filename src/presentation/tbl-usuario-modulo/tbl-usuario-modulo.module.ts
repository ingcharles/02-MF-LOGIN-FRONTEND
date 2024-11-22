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
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
// import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { IndexTblUsuarioModuloComponent } from './index-tbl-usuario-modulo/index-tbl-usuario-modulo.component';
import { CreateTblUsuarioModuloComponent } from './create-tbl-usuario-modulo/create-tbl-usuario-modulo.component';
import { TblUsuarioModuloRouting } from './tbl-usuario-modulo.routing';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

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
