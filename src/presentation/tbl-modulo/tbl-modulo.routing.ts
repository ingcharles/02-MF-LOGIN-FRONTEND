/**
* Routing tbl-modulo.routing.ts
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    Routes
* @package presentation
* @subpackage tbl-modulo
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexTblModuloComponent } from './index-tbl-modulo/index-tbl-modulo.component';
import { CreateTblModuloComponent } from './create-tbl-modulo/create-tbl-modulo.component';
import { ROUTES_CORE } from '../../data/base/constants/routes';

export const MF_ADMIN_TBLMODULO_ROUTES: Routes = [
  {
    path: ROUTES_CORE.ADMIN.BASE.slice(1)  + ROUTES_CORE.ADMIN.TBLMODULO.INDEX, // Contexto del shell
    redirectTo: ROUTES_CORE.ADMIN.TBLMODULO.INDEX
  },
  {
    path: ROUTES_CORE.ADMIN.TBLMODULO.INDEX,
    component: IndexTblModuloComponent,
    pathMatch: 'full' // Página principal de módulo
  },
  {
    path: ROUTES_CORE.ADMIN.TBLMODULO.CREATE,
    component: CreateTblModuloComponent // Crear módulo
  },
  {
    path: ROUTES_CORE.ADMIN.TBLMODULO.EDIT(':id'),
    component: CreateTblModuloComponent // Editar módulo (puede reutilizar el mismo componente)
  },
  /*{
    path: '**',  // Redirige a una página no encontrada si la ruta no coincide
    redirectTo: 'modulo' // Ruta comodín para redirigir a 'modulo'
  }*/
];

@NgModule({
	imports: [
	RouterModule.forChild(MF_ADMIN_TBLMODULO_ROUTES)
	],
	exports: [
	RouterModule
	]
})

export class TblModuloRouting { }
