/**
* Routing tbl-usuario-modulo.routing.ts
*
* @author  Carlos Anchundia
* @date    22-10-2024
* @name    Routes
* @package presentation
* @subpackage tbl-usuario-modulo
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexTblUsuarioModuloComponent } from './index-tbl-usuario-modulo/index-tbl-usuario-modulo.component';
import { CreateTblUsuarioModuloComponent } from './create-tbl-usuario-modulo/create-tbl-usuario-modulo.component';
import { IndexModuloComponent } from './index-modulo/index-modulo.component';

export const MF_ADMIN_ROUTES: Routes = [
	{
		path: 'home',
		component: IndexModuloComponent,
		pathMatch: 'full'
	  },
	{
	path: 'index', component: IndexTblUsuarioModuloComponent
	},
	{
	path: 'create:id', component: CreateTblUsuarioModuloComponent
	},
	{
	path: '**',
	redirectTo: 'home'
	}

];

@NgModule({
	imports: [RouterModule.forChild(MF_ADMIN_ROUTES)],
	exports: [RouterModule]
})

export class TblUsuarioModuloRouting { }
