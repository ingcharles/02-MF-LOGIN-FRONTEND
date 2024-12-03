/**
* Routing tbl-menu-accion.routing.ts
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    Routes
* @package presentation
* @subpackage tbl-menu-accion
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexTblMenuAccionComponent } from './index-tbl-menu-accion/index-tbl-menu-accion.component';
import { CreateTblMenuAccionComponent } from './create-tbl-menu-accion/create-tbl-menu-accion.component';
import { ROUTES_CORE } from '../../data/base/constants/routes';

export const MF_ADMIN_TBLMENUACCION_ROUTES: Routes = [
	{
	path: ROUTES_CORE.ADMIN.BASE.slice(1)  + ROUTES_CORE.ADMIN.TBLMENUACCION.INDEX(':idMenu'),
	redirectTo: ROUTES_CORE.ADMIN.TBLMENUACCION.INDEX(':idMenu')
	},
	{
	path: ROUTES_CORE.ADMIN.TBLMENUACCION.INDEX(':idMenu'),
	component: IndexTblMenuAccionComponent,
	pathMatch: 'full'
	},
	{
	path: ROUTES_CORE.ADMIN.TBLMENUACCION.CREATE(':idMenu'), component: CreateTblMenuAccionComponent
	},
	{
	path: ROUTES_CORE.ADMIN.TBLMENUACCION.EDIT(':idMenu',':id'), component: CreateTblMenuAccionComponent
	}
];

@NgModule({
	imports: [
	RouterModule.forChild(MF_ADMIN_TBLMENUACCION_ROUTES)
	],
	exports: [
	RouterModule
	]
})

export class TblMenuAccionRouting { }
