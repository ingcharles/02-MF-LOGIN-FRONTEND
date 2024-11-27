/**
* Routing tbl-accion.routing.ts
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    Routes
* @package presentation
* @subpackage tbl-accion
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexTblAccionComponent } from './index-tbl-accion/index-tbl-accion.component';
import { CreateTblAccionComponent } from './create-tbl-accion/create-tbl-accion.component';
import { ROUTES_CORE } from '../../data/base/constants/routes';

export const MF_ADMIN_TBLACCION_ROUTES: Routes = [
	{
	path: ROUTES_CORE.ADMIN.BASE.slice(1)  + ROUTES_CORE.ADMIN.TBLACCION.INDEX,
	redirectTo: ROUTES_CORE.ADMIN.TBLACCION.INDEX
	},
	{
	path: ROUTES_CORE.ADMIN.TBLACCION.INDEX,
	component: IndexTblAccionComponent,
	pathMatch: 'full'
	},
	{
	path: ROUTES_CORE.ADMIN.TBLACCION.CREATE, component: CreateTblAccionComponent
	},
	{
	path: ROUTES_CORE.ADMIN.TBLACCION.EDIT(':id'), component: CreateTblAccionComponent
	}
];

@NgModule({
	imports: [
	RouterModule.forChild(MF_ADMIN_TBLACCION_ROUTES)
	],
	exports: [
	RouterModule
	]
})

export class TblAccionRouting { }
