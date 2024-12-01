import { MF_ADMIN_TBLMENU_ROUTES } from './../presentation/tbl-menu/tbl-menu.routing';
import { Routes } from '@angular/router';
import { AdminFirmaPazSalvoComponent } from '../presentation/paz-salvo/admin-firma-paz-salvo/admin-firma-paz-salvo.component';
import { CreateAdminPazSalvoComponent } from '../presentation/paz-salvo/create-admin-paz-salvo/create-admin-paz-salvo.component';
import { AdminFirmaPazSalvoNewComponent } from '../presentation/paz-salvo/admin-firma-paz-salvo-new/admin-firma-paz-salvo-new.component';
import { IndexTblUsuarioModuloComponent } from '../presentation/tbl-usuario-modulo/index-tbl-usuario-modulo/index-tbl-usuario-modulo.component';
import { CreateTblUsuarioModuloComponent } from '../presentation/tbl-usuario-modulo/create-tbl-usuario-modulo/create-tbl-usuario-modulo.component';
import { MF_ADMIN_PAZ_SALVO_ROUTES } from '../presentation/paz-salvo/paz-salvo.routing';
import { MF_ADMIN_ROUTES } from '../presentation/tbl-usuario-modulo/tbl-usuario-modulo.routing';
import { MF_ADMIN_TBLMODULO_ROUTES } from '../presentation/tbl-modulo/tbl-modulo.routing';
import { MF_ADMIN_TBLACCION_ROUTES } from '../presentation/tbl-accion/tbl-accion.routing';
import { MF_ADMIN_TBLPERFIL_ROUTES } from '../presentation/tbl-perfil/tbl-perfil.routing';

export const MODULE_ROUTES: Routes = [
  //...MF_ADMIN_PAZ_SALVO_ROUTES,
  //...MF_ADMIN_ROUTES,
  ...MF_ADMIN_TBLMODULO_ROUTES,
  ...MF_ADMIN_TBLMENU_ROUTES,
  ...MF_ADMIN_TBLACCION_ROUTES,
  ...MF_ADMIN_TBLPERFIL_ROUTES
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
