import { Routes } from '@angular/router';
import { CreateAdminPazSalvoComponent } from '../presentation/paz-salvo/create-admin-paz-salvo/create-admin-paz-salvo.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin-paz-salvo',
    pathMatch: 'full'
},
{
  path: 'admin-paz-salvo',
  component: CreateAdminPazSalvoComponent
},
// {
//   path: "login",
//   loadChildren: () => import('./modules/dependencias/dependencias.routes').then(r => r.DEPENDECIA_ROUTE),
// },

];
