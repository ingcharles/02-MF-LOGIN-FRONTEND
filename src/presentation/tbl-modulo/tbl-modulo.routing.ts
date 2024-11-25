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

export const MF_ADMIN_MODULO_ROUTES: Routes = [
  {
    path: ROUTES_CORE.ADMIN.BASE + '/' + ROUTES_CORE.ADMIN.MODULO.INDEX, // Contexto del shell
    redirectTo: ROUTES_CORE.ADMIN.MODULO.INDEX
  },
  {
    path: ROUTES_CORE.ADMIN.MODULO.INDEX,
    component: IndexTblModuloComponent,
    pathMatch: 'full' // Página principal de módulo
  },
  {
    path: ROUTES_CORE.ADMIN.MODULO.CREATE,
    component: CreateTblModuloComponent // Crear módulo
  },
  {
    path: ROUTES_CORE.ADMIN.MODULO.EDIT(':id'),
    component: CreateTblModuloComponent // Editar módulo (puede reutilizar el mismo componente)
  },
  {
    path: '**',  // Redirige a una página no encontrada si la ruta no coincide
    redirectTo: 'modulo' // Ruta comodín para redirigir a 'modulo'
  }
];

@NgModule({
	imports: [
	RouterModule.forChild(MF_ADMIN_MODULO_ROUTES)
	],
	exports: [
	RouterModule
	]
})

export class TblModuloRouting { }
