/**
* Routing tbl-usuarios-modulos.routing.ts
*
* @author  Carlos Anchundia
* @date    22-10-2024
* @name    Routes
* @package presentation
* @subpackage tbl-usuarios-modulos
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexTblUsuariosModulosComponent } from './index-tbl-usuarios-modulos/index-tbl-usuarios-modulos.component';
import { CreateTblUsuariosModulosComponent } from './create-tbl-usuarios-modulos/create-tbl-usuarios-modulos.component';

export const MF_ADMIN_ROUTES: Routes = [
	{
		path: '',
		component: CreateTblUsuariosModulosComponent,
		pathMatch: 'full'
	  },
	{
	path: '', component: IndexTblUsuariosModulosComponent
	},
	{
	path: ':id', component: CreateTblUsuariosModulosComponent
	},
	// {
	// path: '**',
	// redirectTo: ''
	// }
];

@NgModule({
	imports: [RouterModule.forChild(MF_ADMIN_ROUTES)],
	exports: [RouterModule]
})

export class TblUsuariosModulosRouting { }
