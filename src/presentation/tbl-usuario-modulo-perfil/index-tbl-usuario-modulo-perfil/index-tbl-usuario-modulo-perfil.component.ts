/**
* Vista index-tbl-usuario-modulo-perfil.component.ts
*
* @author  Carlos Anchundia
* @date    03-12-2024
* @name    IndexTblUsuarioModuloPerfilComponent
* @package presentation
* @subpackage tbl-usuario-modulo-perfil
*/
import { Location } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { messages } from '../../../data/base/constants/messages';
import { AlertsService } from '../../../data/base/services/alerts.service';
import { LoaderService } from '../../../data/base/services/loader.service';
import { TblUsuarioModuloPerfilUseCase } from '../../../domain/tbl-usuario-modulo-perfil/usesCases/tbl-usuario-modulo-perfil.usecase';
import { IGetTblUsuarioModuloPerfilPaginadoRsViewModel, IGetTblUsuarioModuloPerfilPaginadoViewModel } from '../../../domain/tbl-usuario-modulo-perfil/viewModels/i-tbl-usuario-modulo-perfil.viewModel';
import { ROUTES_CORE } from '../../../data/base/constants/routes';
import { SharedIndexModule } from './../../shared/shared-index/shared-index.module';
import { IPaginado } from '../../../data/base/interfaces/i-paginado';
import { ActivatedRoute } from '@angular/router';
import { TblUsuarioModuloUseCase } from '../../../domain/tbl-usuario-modulo/usesCases/tbl-usuario-modulo.usecase';
import { IGetTblUsuarioModuloByIdViewModel } from '../../../domain/tbl-usuario-modulo/viewModels/i-tbl-usuario-modulo.viewModel';

@Component({
  selector: 'index-tbl-usuario-modulo-perfil-page',
  templateUrl: './index-tbl-usuario-modulo-perfil.component.html',
  styleUrls: ['./index-tbl-usuario-modulo-perfil.component.scss'],
  standalone: true,
  imports: [
    SharedIndexModule]
})

export class IndexTblUsuarioModuloPerfilComponent implements OnInit {

  constructor() { }

  _fb: FormBuilder = inject(FormBuilder);
  _loaderService: LoaderService = inject(LoaderService);
  _alertsService: AlertsService = inject(AlertsService);
  _tblUsuarioModuloPerfilUseCase: TblUsuarioModuloPerfilUseCase = inject(TblUsuarioModuloPerfilUseCase);
  _tblUsuarioModuloUseCase: TblUsuarioModuloUseCase = inject(TblUsuarioModuloUseCase);
  _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  _location: Location = inject(Location);

  public routeCore = ROUTES_CORE;
  public page: number = 0;
  public size: number = 10;
  public pageSizeOptions: number[] = [5, 10, 25, 50, 100];
  public title: string = 'Listado';
  public tblUsuarioModuloPerfilRecords: IPaginado<IGetTblUsuarioModuloPerfilPaginadoRsViewModel> | null = null;
  public search: string = '';
  public sortBy: string = 'idUsuarioModuloPerfil';
  public sortDirection: string = 'ASC';
  public loading: boolean = false;
  public idUsuarioModulo!: number;
  public sub: any;

  public ngOnInit(): void {
    this.sub = this._activatedRoute.params.subscribe(params => {
      this.idUsuarioModulo = params['idUsuarioModulo'];
    });
    this.loadDataUsuarioModulo(this.idUsuarioModulo);

  }

  public loadData(): void {
    this.loading = true;
    const currentTblUsuarioModuloPerfil: IGetTblUsuarioModuloPerfilPaginadoViewModel = { page: this.page, size: this.size, search: this.search, sortBy: this.sortBy, sortDirection: this.sortDirection }
    this._loaderService.display(true);
    this._tblUsuarioModuloPerfilUseCase.getPaginadoTblUsuarioModuloPerfil(currentTblUsuarioModuloPerfil).then(result => {
      this._loaderService.display(false);
      if (result.ok) {
        this.tblUsuarioModuloPerfilRecords = result.data!;
      } else {
        this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
      }
      this.loading = false;
    });
  }

  public inputSearch(event: any): void {
    this.search = event.target.value;
    this.loadData();
  }

  public changePage(event: any): void {
    this.size = event.target.value;
    this.page = 0;
    this.loadData();
  }

  public getStatus(status: string): any {
    switch (status) {
      case 'Activo':
        return 'primary';
      case 'Inactivo':
        return 'danger';
      default:
        return 'warning';
    }
  }

  public clearSearch(): void {
    this.search = '';
    this.loadData();
  }

  public lazyLoadData(event: any) {
    this.page = event.first / event.rows;
    this.size = event.rows
    this.sortBy = event.sortField || 'idUsuarioModuloPerfil';
    this.sortDirection = event.sortOrder === 1 ? 'ASC' : 'DESC';
    this.loadData();
  }

  public loadDataUsuarioModulo(idUsuarioModulo: number) {
    const currentTblUsuario: IGetTblUsuarioModuloByIdViewModel = { idUsuarioModulo }
    this._tblUsuarioModuloUseCase.getByIdTblUsuarioModulo(currentTblUsuario).then(result => {
      this._loaderService.display(true);
      this._loaderService.display(false);
      if (result.ok) {
        this.title = result.data!.usuario.nombreCompleto + ' en el modulo: ' + result.data!.modulo.nombre
      } else {
        this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
      }
    });
  }

  public cancelTblUsuarioModuloPerfil(): void {
    this._location.back();
  }

}
