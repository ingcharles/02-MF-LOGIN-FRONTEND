import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminFirmaPazSalvoComponent } from './admin-firma-paz-salvo/admin-firma-paz-salvo.component';
import { CreateAdminPazSalvoComponent } from './create-admin-paz-salvo/create-admin-paz-salvo.component';
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
  {
    path: 'admin-paz-salvo',
    component: AdminFirmaPazSalvoComponent
  },
];

//export const PazSalvoRoutes = RouterModule.forChild(MF_ADMIN_PAZ_SALVO);
@NgModule({
  imports: [RouterModule.forChild(MF_ADMIN_PAZ_SALVO_ROUTES)],
  exports: [RouterModule]
})
export class AdminPazSalvoRouting { }
