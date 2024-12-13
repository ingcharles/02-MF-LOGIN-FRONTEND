/**
* Routing tbl-modulo-perfil.routing.ts
*
* @author  Carlos Anchundia
* @date    03-12-2024
* @name    Routes
* @package presentation
* @subpackage tbl-modulo-perfil
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexTblModuloPerfilComponent } from './index-tbl-modulo-perfil/index-tbl-modulo-perfil.component';
import { CreateTblModuloPerfilComponent } from './create-tbl-modulo-perfil/create-tbl-modulo-perfil.component';
import { ROUTES_CORE } from '../../data/base/constants/routes';

export const MF_ADMIN_TBLMODULOPERFIL_ROUTES: Routes = [
	{
	path: ROUTES_CORE.ADMIN.BASE.slice(1)  + ROUTES_CORE.ADMIN.TBLMODULOPERFIL.INDEX(':idModulo'),
	redirectTo: ROUTES_CORE.ADMIN.TBLMODULOPERFIL.INDEX(':idModulo')
	},
	{
	path: ROUTES_CORE.ADMIN.TBLMODULOPERFIL.INDEX(':idModulo'),
	component: IndexTblModuloPerfilComponent,
	pathMatch: 'full'
	},
	{
	path: ROUTES_CORE.ADMIN.TBLMODULOPERFIL.CREATE(':idModulo'), component: CreateTblModuloPerfilComponent
	},
	{
	path: ROUTES_CORE.ADMIN.TBLMODULOPERFIL.EDIT(':idModulo',':id'), component: CreateTblModuloPerfilComponent
	}
];

@NgModule({
	imports: [
	RouterModule.forChild(MF_ADMIN_TBLMODULOPERFIL_ROUTES)
	],
	exports: [
	RouterModule
	]
})

export class TblModuloPerfilRouting { }
