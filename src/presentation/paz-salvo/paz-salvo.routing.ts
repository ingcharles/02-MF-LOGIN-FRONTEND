import { Routes, RouterModule } from '@angular/router';
import { CreateAdminPazSalvoComponent } from './create-admin-paz-salvo/create-admin-paz-salvo.component';
import { NgModule } from '@angular/core';
import { CreateFirmaAdminPazSalvoComponent } from './create-firma-admin-paz-salvo/create-firma-admin-paz-salvo.component';

const MF_ADMIN_PAZ_SALVO_ROUTES: Routes = [
  {
    path: '',
    component: CreateAdminPazSalvoComponent,
    pathMatch: 'full'
  },
  {
    path: 'create-firma-admin-paz-salvo',
    component: CreateFirmaAdminPazSalvoComponent
  },
  {
    path: 'create-admin-paz-salvo',
    component: CreateAdminPazSalvoComponent
  },
];

//export const PazSalvoRoutes = RouterModule.forChild(MF_ADMIN_PAZ_SALVO);
@NgModule({
  imports: [RouterModule.forChild(MF_ADMIN_PAZ_SALVO_ROUTES)],
  exports: [RouterModule]
})
export class AdminPazSalvoRouting { }
