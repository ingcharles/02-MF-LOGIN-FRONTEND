/**
* Routing tbl-perfil-menu-accion.routing.ts
*
* @author  Carlos Anchundia
* @date    03-12-2024
* @name    Routes
* @package presentation
* @subpackage tbl-perfil-menu-accion
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexTblPerfilMenuAccionComponent } from './index-tbl-perfil-menu-accion/index-tbl-perfil-menu-accion.component';
import { CreateTblPerfilMenuAccionComponent } from './create-tbl-perfil-menu-accion/create-tbl-perfil-menu-accion.component';
import { ROUTES_CORE } from '../../data/base/constants/routes';

export const MF_ADMIN_TBLPERFILMENUACCION_ROUTES: Routes = [
	{
	path: ROUTES_CORE.ADMIN.BASE.slice(1)  + ROUTES_CORE.ADMIN.TBLPERFILMENUACCION.INDEX(':idPerfil'),
	redirectTo: ROUTES_CORE.ADMIN.TBLPERFILMENUACCION.INDEX(':idPerfil')
	},
	{
	path: ROUTES_CORE.ADMIN.TBLPERFILMENUACCION.INDEX(':idPerfil'),
	component: IndexTblPerfilMenuAccionComponent,
	pathMatch: 'full'
	},
	{
	path: ROUTES_CORE.ADMIN.TBLPERFILMENUACCION.CREATE(':idPerfil'), component: CreateTblPerfilMenuAccionComponent
	},
	{
	path: ROUTES_CORE.ADMIN.TBLPERFILMENUACCION.EDIT(':idPerfil',':id'), component: CreateTblPerfilMenuAccionComponent
	}
];

@NgModule({
	imports: [
	RouterModule.forChild(MF_ADMIN_TBLPERFILMENUACCION_ROUTES)
	],
	exports: [
	RouterModule
	]
})

export class TblPerfilMenuAccionRouting { }
