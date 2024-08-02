import { Routes } from '@angular/router';
import { AdminFirmaPazSalvoComponent } from '../presentation/paz-salvo/admin-firma-paz-salvo/admin-firma-paz-salvo.component';
import { CreateAdminPazSalvoComponent } from '../presentation/paz-salvo/create-admin-paz-salvo/create-admin-paz-salvo.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin-paz-salvo',
    pathMatch: 'full'
},
{
  path: 'create-admin-paz-salvo',
  component: CreateAdminPazSalvoComponent
},
{
  path: 'admin-paz-salvo',
  component: AdminFirmaPazSalvoComponent
},
// {
//   path: "login",
//   loadChildren: () => import('./modules/dependencias/dependencias.routes').then(r => r.DEPENDECIA_ROUTE),
// },

];
