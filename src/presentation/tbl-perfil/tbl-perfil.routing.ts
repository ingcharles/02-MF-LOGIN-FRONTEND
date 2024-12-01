/**
* Routing tbl-perfil.routing.ts
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    Routes
* @package presentation
* @subpackage tbl-perfil
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexTblPerfilComponent } from './index-tbl-perfil/index-tbl-perfil.component';
import { CreateTblPerfilComponent } from './create-tbl-perfil/create-tbl-perfil.component';
import { ROUTES_CORE } from '../../data/base/constants/routes';

export const MF_ADMIN_TBLPERFIL_ROUTES: Routes = [
	{
	path: ROUTES_CORE.ADMIN.BASE.slice(1)  + ROUTES_CORE.ADMIN.TBLPERFIL.INDEX,
	redirectTo: ROUTES_CORE.ADMIN.TBLPERFIL.INDEX
	},
	{
	path: ROUTES_CORE.ADMIN.TBLPERFIL.INDEX,
	component: IndexTblPerfilComponent,
	pathMatch: 'full'
	},
	{
	path: ROUTES_CORE.ADMIN.TBLPERFIL.CREATE, component: CreateTblPerfilComponent
	},
	{
	path: ROUTES_CORE.ADMIN.TBLPERFIL.EDIT(':id'), component: CreateTblPerfilComponent
	}
];

@NgModule({
	imports: [
	RouterModule.forChild(MF_ADMIN_TBLPERFIL_ROUTES)
	],
	exports: [
	RouterModule
	]
})

export class TblPerfilRouting { }
