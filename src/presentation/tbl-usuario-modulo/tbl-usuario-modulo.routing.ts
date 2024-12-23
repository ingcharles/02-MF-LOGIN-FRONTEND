/**
* Routing tbl-usuario-modulo.routing.ts
*
* @author  Carlos Anchundia
* @date    03-12-2024
* @name    Routes
* @package presentation
* @subpackage tbl-usuario-modulo
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexTblUsuarioModuloComponent } from './index-tbl-usuario-modulo/index-tbl-usuario-modulo.component';
import { CreateTblUsuarioModuloComponent } from './create-tbl-usuario-modulo/create-tbl-usuario-modulo.component';
import { ROUTES_CORE } from '../../data/base/constants/routes';
import { IndexModuloComponent } from './index-modulo/index-modulo.component';

export const MF_ADMIN_TBLUSUARIOMODULO_ROUTES: Routes = [
  {
    path: ROUTES_CORE.ADMIN.BASE.slice(1) + ROUTES_CORE.ADMIN.TBLUSUARIOMODULO.INDEX(':idUsuario'),
    redirectTo: ROUTES_CORE.ADMIN.TBLUSUARIOMODULO.INDEX(':idUsuario')
  },
  {
    path: ROUTES_CORE.ADMIN.TBLUSUARIOMODULO.INDEX(':idUsuario'),
    component: IndexTblUsuarioModuloComponent,
    pathMatch: 'full'
  },
  {
    path: ROUTES_CORE.ADMIN.TBLUSUARIOMODULO.INDEXMODULO(':idUsuario'), component: IndexModuloComponent
  },
  {
    path: ROUTES_CORE.ADMIN.TBLUSUARIOMODULO.CREATE(':idUsuario'), component: CreateTblUsuarioModuloComponent
  },
  {
    path: ROUTES_CORE.ADMIN.TBLUSUARIOMODULO.EDIT(':idUsuario', ':id'), component: CreateTblUsuarioModuloComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(MF_ADMIN_TBLUSUARIOMODULO_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class TblUsuarioModuloRouting { }
