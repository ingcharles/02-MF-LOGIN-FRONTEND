/**
* Vista index-tbl-modulo-perfil.component.ts
*
* @author  Carlos Anchundia
* @date    03-12-2024
* @name    IndexTblModuloPerfilComponent
* @package presentation
* @subpackage tbl-modulo-perfil
*/
import { Location } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { messages } from '../../../data/base/constants/messages';
import { AlertsService } from '../../../data/base/services/alerts.service';
import { LoaderService } from '../../../data/base/services/loader.service';
import { TblModuloPerfilUseCase } from '../../../domain/tbl-modulo-perfil/usesCases/tbl-modulo-perfil.usecase';
import { IGetPaginateByTblModuloEntityIdModuloViewModel, IGetTblModuloPerfilPaginadoRsViewModel, IGetTblModuloPerfilPaginadoViewModel } from '../../../domain/tbl-modulo-perfil/viewModels/i-tbl-modulo-perfil.viewModel';
import { ROUTES_CORE } from '../../../data/base/constants/routes';
import { SharedIndexModule } from './../../shared/shared-index/shared-index.module';
import { IPaginado } from '../../../data/base/interfaces/i-paginado';
import { ActivatedRoute } from '@angular/router';
import { IGetTblModuloByIdViewModel } from '../../../domain/tbl-modulo/viewModels/i-tbl-modulo.viewModel';
import { TblModuloUseCase } from '../../../domain/tbl-modulo/usesCases/tbl-modulo.usecase';

@Component({
  selector: 'index-tbl-modulo-perfil-page',
  templateUrl: './index-tbl-modulo-perfil.component.html',
  styleUrls: ['./index-tbl-modulo-perfil.component.scss'],
  standalone: true,
  imports: [
    SharedIndexModule]
})

export class IndexTblModuloPerfilComponent implements OnInit {

  constructor() { }

  _fb: FormBuilder = inject(FormBuilder);
  _loaderService: LoaderService = inject(LoaderService);
  _alertsService: AlertsService = inject(AlertsService);
  _tblModuloPerfilUseCase: TblModuloPerfilUseCase = inject(TblModuloPerfilUseCase);
  _tblModuloUseCase: TblModuloUseCase = inject(TblModuloUseCase);
  _location: Location = inject(Location);
  _activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  public routeCore = ROUTES_CORE;
  public page: number = 0;
  public size: number = 10;
  public pageSizeOptions: number[] = [5, 10, 25, 50, 100];
  public title: string = 'Listado de perfiles para el módulo: ';
  public tblModuloPerfilRecords: IPaginado<IGetTblModuloPerfilPaginadoRsViewModel> | null = null;
  public search: string = '';
  public sortBy: string = 'idModuloPerfil';
  public sortDirection: string = 'ASC';
  public loading: boolean = false;
  public idModulo!: number;
  public sub: any;
  public ngOnInit(): void {
    this.sub = this._activatedRoute.params.subscribe(params => {
      this.idModulo = params['idModulo'];
    });
    this.loadDataModulo(this.idModulo);
  }

  public loadData(): void {
    this.loading = true;
    const currentTblModuloPerfil: IGetPaginateByTblModuloEntityIdModuloViewModel = { pagination: { page: this.page, size: this.size, search: this.search, sortBy: this.sortBy, sortDirection: this.sortDirection }, idModulo: this.idModulo }
    this._tblModuloPerfilUseCase.getPaginateByTblModuloEntityIdModulo(currentTblModuloPerfil).then(result => {
      this._loaderService.display(true);
      this._loaderService.display(false);
      if (result.ok) {
        this.tblModuloPerfilRecords = result.data!;
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

  public getStatus(status: boolean): any {
    switch (status) {
      case true:
        return 'primary';
      case false:
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
    this.sortBy = event.sortField || 'idModuloPerfil';
    this.sortDirection = event.sortOrder === 1 ? 'ASC' : 'DESC';
    this.loadData();
  }

  public cancelTblModuloPerfil(): void {
    this._location.back();
  }

  public loadDataModulo(idModulo: number) {
    const currentTblModulo: IGetTblModuloByIdViewModel = { idModulo }
    this._loaderService.display(true);
    this._tblModuloUseCase.getByIdTblModulo(currentTblModulo).then(result => {
      this._loaderService.display(false);
      if (result.ok) {
        this.title = result.data!.nombre;
      } else {
        this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
      }
    });
  }
}
