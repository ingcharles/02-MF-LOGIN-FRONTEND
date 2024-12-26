/**
* Módulo tbl-modulo.module.ts
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    NgModule
* @package presentation
* @subpackage tbl-modulo
*/

import { NgModule } from '@angular/core';
import { TblUsuarioModuloModule } from './tbl-usuario-modulo/tbl-usuario-modulo.module';
import { TblModuloModule } from './tbl-modulo/tbl-modulo.module';
import { TblMenuModule } from './tbl-menu/tbl-menu.module';
import { TblAccionModule } from './tbl-accion/tbl-accion.module';
import { TblPerfilModule } from './tbl-perfil/tbl-perfil.module';
import { TblMenuAccionModule } from './tbl-menu-accion/tbl-menu-accion.module';
import { TblPerfilMenuAccionModule } from './tbl-perfil-menu-accion/tbl-perfil-menu-accion.module';
import { TblUsuarioModuloPerfilModule } from './tbl-usuario-modulo-perfil/tbl-usuario-modulo-perfil.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
	declarations: [
	],
	imports: [
	TblModuloModule,
  TblMenuModule,
  TblUsuarioModuloModule,
  TblAccionModule,
  TblPerfilModule,
  TblMenuAccionModule,
  TblPerfilMenuAccionModule,
  TblUsuarioModuloPerfilModule,

	],
  providers: [
    //provideHttpClient(withInterceptorsFromDi())  // Esto reemplaza a HttpClientModule
  ],
})

export class AdminModule { }
