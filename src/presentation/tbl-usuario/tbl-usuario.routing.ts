/**
* Routing tbl-usuario.routing.ts
*
* @author  Carlos Anchundia
* @date    03-12-2024
* @name    Routes
* @package presentation
* @subpackage tbl-usuario
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexTblUsuarioComponent } from './index-tbl-usuario/index-tbl-usuario.component';
import { CreateTblUsuarioComponent } from './create-tbl-usuario/create-tbl-usuario.component';
import { ROUTES_CORE } from '../../data/base/constants/routes';

export const MF_ADMIN_TBLUSUARIO_ROUTES: Routes = [
	{
	path: ROUTES_CORE.ADMIN.BASE.slice(1)  + ROUTES_CORE.ADMIN.TBLUSUARIO.INDEX,
	redirectTo: ROUTES_CORE.ADMIN.TBLUSUARIO.INDEX
	},
	{
	path: ROUTES_CORE.ADMIN.TBLUSUARIO.INDEX,
	component: IndexTblUsuarioComponent,
	pathMatch: 'full'
	},
	{
	path: ROUTES_CORE.ADMIN.TBLUSUARIO.CREATE, component: CreateTblUsuarioComponent
	},
	{
	path: ROUTES_CORE.ADMIN.TBLUSUARIO.EDIT(':id'), component: CreateTblUsuarioComponent
	}
];

@NgModule({
	imports: [
	RouterModule.forChild(MF_ADMIN_TBLUSUARIO_ROUTES)
	],
	exports: [
	RouterModule
	]
})

export class TblUsuarioRouting { }
