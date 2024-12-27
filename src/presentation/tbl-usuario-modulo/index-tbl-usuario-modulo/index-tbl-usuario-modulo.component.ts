/**
* Vista index-tbl-usuario-modulo.component.ts
*
* @author  Carlos Anchundia
* @date    03-12-2024
* @name    IndexTblUsuarioModuloComponent
* @package presentation
* @subpackage tbl-usuario-modulo
*/
import { Location } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { messages } from '../../../data/base/constants/messages';
import { AlertsService } from '../../../data/base/services/alerts.service';
import { LoaderService } from '../../../data/base/services/loader.service';
import { TblUsuarioModuloUseCase } from '../../../domain/tbl-usuario-modulo/usesCases/tbl-usuario-modulo.usecase';
import { IGetPaginateByTblUsuarioEntityIdUsuarioViewModel, IGetTblUsuarioModuloPaginadoRsViewModel, IGetTblUsuarioModuloPaginadoViewModel } from '../../../domain/tbl-usuario-modulo/viewModels/i-tbl-usuario-modulo.viewModel';
import { ROUTES_CORE } from '../../../data/base/constants/routes';
import { SharedIndexModule } from './../../shared/shared-index/shared-index.module';
import { IPaginado } from '../../../data/base/interfaces/i-paginado';
import { ActivatedRoute } from '@angular/router';
import { ICatalogo } from '../../../data/base/interfaces/i-catalogo';
import { ColorService } from '../../../data/base/services/color.service';
import { FontAwesomeService } from '../../../data/base/services/font-awesome.service';
import { TblModuloUseCase } from '../../../domain/tbl-modulo/usesCases/tbl-modulo.usecase';
import { TblUsuarioUseCase } from '../../../domain/tbl-usuario/usesCases/tbl-usuario.usecase';
import { IGetTblUsuarioByIdViewModel } from '../../../domain/tbl-usuario/viewModels/i-tbl-usuario.viewModel';

@Component({
  selector: 'index-tbl-usuario-modulo-page',
  templateUrl: './index-tbl-usuario-modulo.component.html',
  styleUrls: ['./index-tbl-usuario-modulo.component.scss'],
  standalone: true,
  imports: [
    SharedIndexModule]
})

export class IndexTblUsuarioModuloComponent implements OnInit {

  constructor() { }

  _fb: FormBuilder = inject(FormBuilder);
  _loaderService: LoaderService = inject(LoaderService);
  _alertsService: AlertsService = inject(AlertsService);
  _tblUsuarioModuloUseCase: TblUsuarioModuloUseCase = inject(TblUsuarioModuloUseCase);
  _tblModuloUseCase: TblModuloUseCase = inject(TblModuloUseCase);
  _tblUsuarioUseCase: TblUsuarioUseCase = inject(TblUsuarioUseCase);
  _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  _colorService: ColorService = inject(ColorService);
  _fontAwesomeService: FontAwesomeService = inject(FontAwesomeService);
  _location: Location = inject(Location);

  public routeCore = ROUTES_CORE;
  public page: number = 0;
  public size: number = 10;
  public pageSizeOptions: number[] = [5, 10, 25, 50, 100];
  public title: string = '';
  public tblUsuarioModuloRecords: IPaginado<IGetTblUsuarioModuloPaginadoRsViewModel> | null = null;
  public search: string = '';
  public sortBy: string = 'idUsuarioModulo';
  public sortDirection: string = 'ASC';
  public idUsuario!: number;
  public sub: any;
  public optionsImagenModulo: ICatalogo[] = [];
  public optionsColorModulo: ICatalogo[] = [];


  public ngOnInit(): void {
    this.sub = this._activatedRoute.params.subscribe(params => {
      this.idUsuario = params['idUsuario'];
    });
    this.loadDataUsuario(this.idUsuario);
    this.optionsImagenModulo = this._fontAwesomeService.loadIcons();
    this.optionsColorModulo = this._colorService.loadColorsModule();

  }

  public loadData(): void {
    const currentTblUsuarioModulo: IGetPaginateByTblUsuarioEntityIdUsuarioViewModel = { pagination: { page: this.page, size: this.size, search: this.search, sortBy: this.sortBy, sortDirection: this.sortDirection }, idUsuario: this.idUsuario }
    this._loaderService.display(true);
    this._tblUsuarioModuloUseCase.getPaginadoByTblUsuarioEntityIdUsuario(currentTblUsuarioModulo).then(result => {
      this._loaderService.display(false);
      if (result.ok) {
        this.tblUsuarioModuloRecords = result.data!;
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
    this.sortBy = event.sortField || 'idUsuarioModulo';
    this.sortDirection = event.sortOrder === 1 ? 'ASC' : 'DESC';
    this.loadData();
  }

  getColorDetails(value: string): ICatalogo {
    return this.optionsColorModulo.find(color => color.value === value)!;
  }

  getIconDetails(value: string): ICatalogo {
    return this.optionsImagenModulo.find(icon => icon.value === value)!
  }

  public cancelTblUsuarioModulo(): void {
    this._location.back();
  }

  public loadDataUsuario(idUsuario: number) {
    const currentTblUsuario: IGetTblUsuarioByIdViewModel = { idUsuario }
    this._tblUsuarioUseCase.getByIdTblUsuario(currentTblUsuario).then(result => {
      this._loaderService.display(true);
      this._loaderService.display(false);
      if (result.ok) {
        this.title = result.data!.nombreCompleto;
      } else {
        this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
      }
    });
  }

}
