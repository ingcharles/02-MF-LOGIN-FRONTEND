import { Component, EventEmitter, inject, OnInit, Output, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { LoaderService } from '../../../data/base/services/loader.service';
import { IGetPaginateByTblMenuEntityIdMenuViewModel, IGetTblUsuarioModuloByIdViewModel, IGetTblUsuarioModuloViewModel } from '../../../domain/tbl-usuario-modulo/viewModels/i-tbl-usuario-modulo.viewModel';
import { TblUsuarioModuloUseCase } from '../../../domain/tbl-usuario-modulo/usesCases/tbl-usuario-modulo.usecase';
import { IUsuarioModulo } from '../../../domain/tbl-usuario-modulo/viewModels/i-usuario-modulo';
import { SharedDialogInfoComponent } from "../../shared/shared-dialog-info/shared-dialog-info.component";
import { TblPerfilMenuAccionUseCase } from '../../../domain/tbl-perfil-menu-accion/usesCases/tbl-perfil-menu-accion.usecase';
import { IGetTblUsuarioModuloPerfilByIdViewModel } from '../../../domain/tbl-usuario-modulo-perfil/viewModels/i-tbl-usuario-modulo-perfil.viewModel';
import { LocalStorageService } from '../../../data/base/services/local-storage.service';
import { messages } from '../../../data/base/constants/messages';
import { AlertsService } from '../../../data/base/services/alerts.service';
@Component({
  selector: 'app-index-modulos',
  standalone: true,
  imports: [SharedDialogInfoComponent, SharedDialogInfoComponent],
  templateUrl: './index-modulo.component.html',
  styleUrls: ['./index-modulo.component.scss']
})
export class IndexModuloComponent implements OnInit {
  _loaderService: LoaderService = inject(LoaderService);
  _tblUsuarioModuloUseCase: TblUsuarioModuloUseCase = inject(TblUsuarioModuloUseCase);
  _tblPerfilMenuAccionUseCase: TblPerfilMenuAccionUseCase = inject(TblPerfilMenuAccionUseCase);
  _localStorageService: LocalStorageService = inject(LocalStorageService);
   _alertsService: AlertsService = inject(AlertsService);

  public page: number = 0;
  public size: number = 10;
  public search: string = '';
  public sortBy: string = 'idUsuarioModulo';
  public sortDirection: string = 'ASC';
  public isVisibleDialog: boolean = false;
  public dataDialog: string = '';

  usuarioModulos: IUsuarioModulo[] = [];

  ngOnInit(): void {
    this.loadModule();
  }
  onClickSistema(idUsuarioModulo: number) {
    const tblUsuarioModuloPerfil: IGetTblUsuarioModuloPerfilByIdViewModel = { idUsuarioModulo: idUsuarioModulo }
    this._tblPerfilMenuAccionUseCase.getTblMenuByIdUsuarioModulo(tblUsuarioModuloPerfil).then(result => {
      if (result.ok) {
        this._localStorageService.setItem<any>('dataPerfilMenu', result.data);
      }
    });
  }

  public loadModule(): void {
    const tblUsuarioModulo: IGetPaginateByTblMenuEntityIdMenuViewModel = { pagination: { page: this.page, size: this.size, search: this.search, sortBy: this.sortBy, sortDirection: this.sortDirection }, idUsuario: 1 }
    this._loaderService.display(true);
    this._tblUsuarioModuloUseCase.getPaginateByTblUsuarioEntityIdUsuario(tblUsuarioModulo).then(result => {
      this._loaderService.display(false);
      if (result.ok) {
        this.usuarioModulos = result.data.content;
      }else{
        this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
      }
    });
  }


  openDialogInfo(info: string) {
    this.isVisibleDialog = true;
    this.dataDialog = info;
  }
  onDialogClose(): void {
    this.isVisibleDialog = false;
  }
}
