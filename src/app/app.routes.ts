import { Routes } from '@angular/router';
import { LoginComponent } from '../presentation/login/login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
},
{
  path: 'login',
  component: LoginComponent
},
// {
//   path: "login",
//   loadChildren: () => import('./modules/dependencias/dependencias.routes').then(r => r.DEPENDECIA_ROUTE),
// },

];
