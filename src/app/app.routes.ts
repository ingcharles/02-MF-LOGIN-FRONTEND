import { MF_ADMIN_TBLMENU_ROUTES } from './../presentation/tbl-menu/tbl-menu.routing';
import { Routes } from '@angular/router';
import { MF_ADMIN_TBLMODULO_ROUTES } from '../presentation/tbl-modulo/tbl-modulo.routing';
import { MF_ADMIN_TBLACCION_ROUTES } from '../presentation/tbl-accion/tbl-accion.routing';
import { MF_ADMIN_TBLPERFIL_ROUTES } from '../presentation/tbl-perfil/tbl-perfil.routing';
import { MF_ADMIN_TBLMENUACCION_ROUTES } from '../presentation/tbl-menu-accion/tbl-menu-accion.routing';
import { MF_ADMIN_TBLPERFILMENUACCION_ROUTES } from '../presentation/tbl-perfil-menu-accion/tbl-perfil-menu-accion.routing';
import { MF_ADMIN_TBLUSUARIO_ROUTES } from '../presentation/tbl-usuario/tbl-usuario.routing';
import { MF_ADMIN_TBLUSUARIOMODULO_ROUTES } from '../presentation/tbl-usuario-modulo/tbl-usuario-modulo.routing';
import { MF_ADMIN_TBLUSUARIOMODULOPERFIL_ROUTES } from '../presentation/tbl-usuario-modulo-perfil/tbl-usuario-modulo-perfil.routing';

export const MODULE_ROUTES: Routes = [
  //...MF_ADMIN_PAZ_SALVO_ROUTES,
  //...MF_ADMIN_ROUTES,
  ...MF_ADMIN_TBLMODULO_ROUTES,
  ...MF_ADMIN_TBLMENU_ROUTES,
  ...MF_ADMIN_TBLACCION_ROUTES,
  ...MF_ADMIN_TBLPERFIL_ROUTES,
  ...MF_ADMIN_TBLMENUACCION_ROUTES,
  ...MF_ADMIN_TBLPERFILMENUACCION_ROUTES,
  ...MF_ADMIN_TBLUSUARIO_ROUTES,
  ...MF_ADMIN_TBLUSUARIOMODULO_ROUTES,
  ...MF_ADMIN_TBLUSUARIOMODULOPERFIL_ROUTES
//   {
//     path: '',
//     redirectTo: 'admin-paz-salvo',
//     pathMatch: 'full'
// },
// {
// 	path: 'index-admin', component: IndexTblUsuarioModuloComponent
// 	},
// 	{
// 	path: 'create-admin:id', component: CreateTblUsuarioModuloComponent
// 	},
// {
//   path: 'create-admin-paz-salvo',
//   component: CreateAdminPazSalvoComponent
// },
// {
//   path: 'admin-paz-salvo',
//   component: AdminFirmaPazSalvoComponent
// },
// {
//   path: 'admin-paz-salvo-new',
//   component: AdminFirmaPazSalvoNewComponent
// },
// {
//   path: "login",
//   loadChildren: () => import('./modules/dependencias/dependencias.routes').then(r => r.DEPENDECIA_ROUTE),
// },

];
