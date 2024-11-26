/**
* Routing tbl-menu.routing.ts
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    Routes
* @package presentation
* @subpackage tbl-menu
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexTblMenuComponent } from './index-tbl-menu/index-tbl-menu.component';
import { CreateTblMenuComponent } from './create-tbl-menu/create-tbl-menu.component';
import { ROUTES_CORE } from '../../data/base/constants/routes';

export const MF_ADMIN_TBLMENU_ROUTES: Routes = [
	{
	path: ROUTES_CORE.ADMIN.BASE.slice(1)  + ROUTES_CORE.ADMIN.TBLMENU.INDEX,
	redirectTo: ROUTES_CORE.ADMIN.TBLMENU.INDEX
	},
	{
	path: ROUTES_CORE.ADMIN.TBLMENU.INDEX,
	component: IndexTblMenuComponent,
	pathMatch: 'full'
	},
	{
	path: ROUTES_CORE.ADMIN.TBLMENU.CREATE, component: CreateTblMenuComponent
	},
	{
	path: ROUTES_CORE.ADMIN.TBLMENU.EDIT(':id'), component: CreateTblMenuComponent
	},
	/*{
	path: '**',
	redirectTo: 'menu'
	}*/
];

@NgModule({
	imports: [
	RouterModule.forChild(MF_ADMIN_TBLMENU_ROUTES)
	],
	exports: [
	RouterModule
	]
})

export class TblMenuRouting { }
