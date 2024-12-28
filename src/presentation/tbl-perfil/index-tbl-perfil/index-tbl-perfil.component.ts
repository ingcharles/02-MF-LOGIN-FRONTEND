import { filter } from 'rxjs';
/**
* Vista index-tbl-perfil.component.ts
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    IndexTblPerfilComponent
* @package presentation
* @subpackage tbl-perfil
*/
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { messages } from '../../../data/base/constants/messages';
import { AlertsService } from '../../../data/base/services/alerts.service';
import { LoaderService } from '../../../data/base/services/loader.service';
import { TblPerfilUseCase } from '../../../domain/tbl-perfil/usesCases/tbl-perfil.usecase';
import { IGetTblPerfilPaginadoRsViewModel, IGetTblPerfilPaginadoViewModel } from '../../../domain/tbl-perfil/viewModels/i-tbl-perfil.viewModel';
import { ROUTES_CORE } from '../../../data/base/constants/routes';
import { SharedIndexModule } from './../../shared/shared-index/shared-index.module';
import { IPaginado } from '../../../data/base/interfaces/i-paginado';
import { ActivatedRoute } from '@angular/router';
import { TblMenuAccionUseCase } from '../../../domain/tbl-menu-accion/usesCases/tbl-menu-accion.usecase';
import { IGetTblMenuAccionRsViewModel, IGetTblMenuAccionViewModel } from '../../../domain/tbl-menu-accion/viewModels/i-tbl-menu-accion.viewModel';
import { IGetTblAccionRsViewModel } from '../../../domain/tbl-accion/viewModels/i-tbl-accion.viewModel';
import { LocalStorageService } from '../../../data/base/services/local-storage.service';

@Component({
  selector: 'index-tbl-perfil-page',
  templateUrl: './index-tbl-perfil.component.html',
  styleUrls: ['./index-tbl-perfil.component.scss'],
  standalone: true,
  imports: [
    SharedIndexModule]
})

export class IndexTblPerfilComponent implements OnInit {

  constructor() { }

  _fb: FormBuilder = inject(FormBuilder);
  _loaderService: LoaderService = inject(LoaderService);
  _alertsService: AlertsService = inject(AlertsService);
  _tblPerfilUseCase: TblPerfilUseCase = inject(TblPerfilUseCase);
  _tblMenuAccionUseCase: TblMenuAccionUseCase = inject(TblMenuAccionUseCase);
  _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  _localStorageService: LocalStorageService = inject(LocalStorageService);
  public routeCore = ROUTES_CORE;
  public page: number = 0;
  public size: number = 10;
  public pageSizeOptions: number[] = [5, 10, 25, 50, 100];
  public title: string = 'Listado de perfiles';
  public tblPerfilRecords: IPaginado<IGetTblPerfilPaginadoRsViewModel> | null = null;
  //public tblAccionButtomIndexHeaderRecords: IGetTblMenuAccionRsViewModel[] | null = null;
  //public tblAccionButtomIndexBodyRecords: IGetTblMenuAccionRsViewModel[] | null = null;
  public search: string = '';
  public sortBy: string = 'idPerfil';
  public sortDirection: string = 'ASC';
  public loading: boolean = false;
  public sub: any;
  //public idMenu: any;
  public ngOnInit(): void {
    // this.sub = this._activatedRoute.params.subscribe(params => {
    //   this.idMenu = params['idMenu'];
    // });
    // this.idMenu = this._localStorageService.getItem<number>('idMenu');
    // this.idMenu = this._localStorageService.getItem<number>('idPerfil');
    console.log("llega this.idPerfil ", this._localStorageService.getItem<number>('idPerfil')!);
    console.log("llega this.idMenu ", this._localStorageService.getItem<number>('idMenu')!);
    //this.loadAcciones(this._localStorageService.getItem<number>('idPerfil')!,this._localStorageService.getItem<number>('idMenu')!)


  }

  public loadData(): void {
    this.loading = true;
    const currentTblPerfil: IGetTblPerfilPaginadoViewModel = { page: this.page, size: this.size, search: this.search, sortBy: this.sortBy, sortDirection: this.sortDirection }
    this._loaderService.display(true);
    this._tblPerfilUseCase.getPaginadoTblPerfil(currentTblPerfil).then(result => {
      this._loaderService.display(false);
      if (result.ok) {
        this.tblPerfilRecords = result.data!;
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
    this.sortBy = event.sortField || 'idPerfil';
    this.sortDirection = event.sortOrder === 1 ? 'ASC' : 'DESC';
    this.loadData();
  }

  // public  loadAcciones(idPerfil:number, idMenu:number): void{
  //   this.loading = true;
  //   const currentTblMenuAccion: IGetTblMenuAccionViewModel = {idPerfil, idMenu }
  //   this._loaderService.display(true);
  //   this._tblMenuAccionUseCase.getByTblMenuEntityIdMenuAndEstado(currentTblMenuAccion).then(result => {
  //     this._loaderService.display(false);
  //     if (result.ok) {
  //       this.tblAccionButtomIndexHeaderRecords = result.data!.filter((record:any) => record.accion.tipo === messages.buttomIndexHeader);
  //       this.tblAccionButtomIndexBodyRecords = result.data!!.filter((record:any) => record.accion.tipo === messages.buttomIndexBody);;
  //     } else {
  //       this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
  //     }
  //     this.loading = false;
  //   });
  // }
}
