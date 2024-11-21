import { Routes } from '@angular/router';
import { AdminFirmaPazSalvoComponent } from '../presentation/paz-salvo/admin-firma-paz-salvo/admin-firma-paz-salvo.component';
import { CreateAdminPazSalvoComponent } from '../presentation/paz-salvo/create-admin-paz-salvo/create-admin-paz-salvo.component';
import { AdminFirmaPazSalvoNewComponent } from '../presentation/paz-salvo/admin-firma-paz-salvo-new/admin-firma-paz-salvo-new.component';
import { IndexTblUsuariosModulosComponent } from '../presentation/tbl-usuarios-modulos/index-tbl-usuarios-modulos/index-tbl-usuarios-modulos.component';
import { CreateTblUsuariosModulosComponent } from '../presentation/tbl-usuarios-modulos/create-tbl-usuarios-modulos/create-tbl-usuarios-modulos.component';
import { MF_ADMIN_PAZ_SALVO_ROUTES } from '../presentation/paz-salvo/paz-salvo.routing';
import { MF_ADMIN_ROUTES } from '../presentation/tbl-usuarios-modulos/tbl-usuarios-modulos.routing';

export const MODULE_ROUTES: Routes = [
  ...MF_ADMIN_PAZ_SALVO_ROUTES,
  ...MF_ADMIN_ROUTES
//   {
//     path: '',
//     redirectTo: 'admin-paz-salvo',
//     pathMatch: 'full'
// },
// {
// 	path: 'index-admin', component: IndexTblUsuariosModulosComponent
// 	},
// 	{
// 	path: 'create-admin:id', component: CreateTblUsuariosModulosComponent
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
