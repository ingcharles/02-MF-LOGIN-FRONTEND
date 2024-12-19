/**
* Routing tbl-usuario-modulo-perfil.routing.ts
*
* @author  Carlos Anchundia
* @date    03-12-2024
* @name    Routes
* @package presentation
* @subpackage tbl-usuario-modulo-perfil
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexTblUsuarioModuloPerfilComponent } from './index-tbl-usuario-modulo-perfil/index-tbl-usuario-modulo-perfil.component';
import { CreateTblUsuarioModuloPerfilComponent } from './create-tbl-usuario-modulo-perfil/create-tbl-usuario-modulo-perfil.component';
import { ROUTES_CORE } from '../../data/base/constants/routes';

export const MF_ADMIN_TBLUSUARIOMODULOPERFIL_ROUTES: Routes = [
	{
	path: ROUTES_CORE.ADMIN.BASE.slice(1)  + ROUTES_CORE.ADMIN.TBLUSUARIOMODULOPERFIL.INDEX(':idUsuarioModulo'),
	redirectTo: ROUTES_CORE.ADMIN.TBLUSUARIOMODULOPERFIL.INDEX(':idUsuarioModulo')
	},
	{
	path: ROUTES_CORE.ADMIN.TBLUSUARIOMODULOPERFIL.INDEX(':idUsuarioModulo'),
	component: IndexTblUsuarioModuloPerfilComponent,
	pathMatch: 'full'
	},
	{
	path: ROUTES_CORE.ADMIN.TBLUSUARIOMODULOPERFIL.CREATE(':idUsuarioModulo'), component: CreateTblUsuarioModuloPerfilComponent
	},
	{
	path: ROUTES_CORE.ADMIN.TBLUSUARIOMODULOPERFIL.EDIT(':idUsuarioModulo',':id'), component: CreateTblUsuarioModuloPerfilComponent
	}
];

@NgModule({
	imports: [
	RouterModule.forChild(MF_ADMIN_TBLUSUARIOMODULOPERFIL_ROUTES)
	],
	exports: [
	RouterModule
	]
})

export class TblUsuarioModuloPerfilRouting { }
