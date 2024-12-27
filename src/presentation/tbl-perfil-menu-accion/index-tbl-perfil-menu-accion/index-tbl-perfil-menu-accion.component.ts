/**
* Vista index-tbl-perfil-menu-accion.component.ts
*
* @author  Carlos Anchundia
* @date    03-12-2024
* @name    IndexTblPerfilMenuAccionComponent
* @package presentation
* @subpackage tbl-perfil-menu-accion
*/
import { Location } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { messages } from '../../../data/base/constants/messages';
import { AlertsService } from '../../../data/base/services/alerts.service';
import { LoaderService } from '../../../data/base/services/loader.service';
import { TblPerfilMenuAccionUseCase } from '../../../domain/tbl-perfil-menu-accion/usesCases/tbl-perfil-menu-accion.usecase';
import { IGetPaginateByTblAccionEntityIdMenuViewModel, IGetTblPerfilMenuAccionPaginadoRsViewModel, IGetTblPerfilMenuAccionPaginadoViewModel } from '../../../domain/tbl-perfil-menu-accion/viewModels/i-tbl-perfil-menu-accion.viewModel';
import { ROUTES_CORE } from '../../../data/base/constants/routes';
import { SharedIndexModule } from './../../shared/shared-index/shared-index.module';
import { IPaginado } from '../../../data/base/interfaces/i-paginado';
import { ActivatedRoute } from '@angular/router';
import { IGetTblPerfilByIdViewModel } from '../../../domain/tbl-perfil/viewModels/i-tbl-perfil.viewModel';
import { TblPerfilUseCase } from '../../../domain/tbl-perfil/usesCases/tbl-perfil.usecase';

@Component({
  selector: 'index-tbl-perfil-menu-accion-page',
  templateUrl: './index-tbl-perfil-menu-accion.component.html',
  styleUrls: ['./index-tbl-perfil-menu-accion.component.scss'],
  standalone: true,
  imports: [
    SharedIndexModule]
})

export class IndexTblPerfilMenuAccionComponent implements OnInit {

  constructor() { }

  _fb: FormBuilder = inject(FormBuilder);
  _loaderService: LoaderService = inject(LoaderService);
  _alertsService: AlertsService = inject(AlertsService);
  _tblPerfilMenuAccionUseCase: TblPerfilMenuAccionUseCase = inject(TblPerfilMenuAccionUseCase);
  _tblPerfilUseCase: TblPerfilUseCase = inject(TblPerfilUseCase);
  _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  _location: Location = inject(Location);

  public routeCore = ROUTES_CORE;
  public page: number = 0;
  public size: number = 10;
  public pageSizeOptions: number[] = [5, 10, 25, 50, 100];
  public title: string = 'Listado';
  public tblPerfilMenuAccionRecords: IPaginado<IGetTblPerfilMenuAccionPaginadoRsViewModel> | null = null;
  public search: string = '';
  public sortBy: string = 'idPerfilMenuAccion';
  public sortDirection: string = 'ASC';
  public loading: boolean = false;
  public idPerfil!: number;
  public sub: any;

  public ngOnInit(): void {
    this.sub = this._activatedRoute.params.subscribe(params => {
      this.idPerfil = params['idPerfil'];
    });
    this.loadDataPerfil(this.idPerfil);
  }

  public loadData(): void {

    const currentTblPerfilMenuAccion: IGetPaginateByTblAccionEntityIdMenuViewModel = {pagination:{ page: this.page, size: this.size, search: this.search, sortBy: this.sortBy, sortDirection: this.sortDirection }, idPerfil: this.idPerfil};
    this._loaderService.display(true);
    this._tblPerfilMenuAccionUseCase.getPaginadoTblPerfilMenuAccion(currentTblPerfilMenuAccion).then(result => {
      this._loaderService.display(false);
      if (result.ok) {
        this.tblPerfilMenuAccionRecords = result.data!;
      } else {
        this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
      }
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
    this.sortBy = event.sortField || 'idPerfilMenuAccion';
    this.sortDirection = event.sortOrder === 1 ? 'ASC' : 'DESC';
    this.loadData();
  }

  public cancelTblPerfilMenuAccion(): void {
    //this.closeTblModuloPerfil.emit(true);
    this._location.back();
  }
  public loadDataPerfil(idPerfil: number) {
    const currentTblPerfil: IGetTblPerfilByIdViewModel = { idPerfil }
    this._loaderService.display(true);
    this._tblPerfilUseCase.getByIdTblPerfil(currentTblPerfil).then(result => {
      this._loaderService.display(false);
      if (result.ok) {
        this.title = result.data!.nombre;
      } else {
        this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
      }
    });
  }

}
