/**
* Vista create-tbl-perfil-menu-accion.component.ts
*
* @author  Carlos Anchundia
* @date    03-12-2024
* @name    CreateTblPerfilMenuAccionComponent
* @package presentation
* @subpackage tbl-perfil-menu-accion
*/

import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, PLATFORM_ID, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { messages } from '../../../data/base/constants/messages';
import { AlertsService } from '../../../data/base/services/alerts.service';
import { LoaderService } from '../../../data/base/services/loader.service';
import { UtilsService } from '../../../data/base/services/utils.service';
import { ValidatorsService } from '../../../data/base/services/validators.service';
import { TblPerfilMenuAccionUseCase } from '../../../domain/tbl-perfil-menu-accion/usesCases/tbl-perfil-menu-accion.usecase';
import { IGetTblPerfilMenuAccionByIdRsViewModel, IGetTblPerfilMenuAccionByIdViewModel, IGetTblPerfilMenuAccionRsViewModel, ISaveTblPerfilMenuAccionViewModel, IUpdateTblPerfilMenuAccionViewModel } from '../../../domain/tbl-perfil-menu-accion/viewModels/i-tbl-perfil-menu-accion.viewModel';
import { ROUTES_CORE } from '../../../data/base/constants/routes';
import { SharedCreateModule } from './../../shared/shared-create/shared-create.module';
import { TblMenuAccionUseCase } from '../../../domain/tbl-menu-accion/usesCases/tbl-menu-accion.usecase';
import { TblPerfilUseCase } from '../../../domain/tbl-perfil/usesCases/tbl-perfil.usecase';
import { IGetTblPerfilByIdViewModel } from '../../../domain/tbl-perfil/viewModels/i-tbl-perfil.viewModel';
import { TblMenuUseCase } from '../../../domain/tbl-menu/usesCases/tbl-menu.usecase';
import { IGetTblMenuRsViewModel } from '../../../domain/tbl-menu/viewModels/i-tbl-menu.viewModel';
import { IGetTblAccionRsViewModel } from '../../../domain/tbl-accion/viewModels/i-tbl-accion.viewModel';
import { TblAccionUseCase } from '../../../domain/tbl-accion/usesCases/tbl-accion.usecase';

@Component({
  selector: 'create-tbl-perfil-menu-accion-page',
  templateUrl: './create-tbl-perfil-menu-accion.component.html',
  styleUrls: ['./create-tbl-perfil-menu-accion.component.scss'],
  standalone: true,
  imports: [
    SharedCreateModule
  ],
  providers: [
  ],
  host: { ngSkipHydration: 'true' }
})

export class CreateTblPerfilMenuAccionComponent implements OnInit {

  constructor() { }

  _fb: FormBuilder = inject(FormBuilder);
  _platformId: Object = inject(PLATFORM_ID);
  _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  _router: Router = inject(Router);
  _location: Location = inject(Location);
  _utilsService: UtilsService = inject(UtilsService);
  _loaderService: LoaderService = inject(LoaderService);
  _alertsService: AlertsService = inject(AlertsService);
  _validatorsService: ValidatorsService = inject(ValidatorsService);
  _tblPerfilMenuAccionUseCase: TblPerfilMenuAccionUseCase = inject(TblPerfilMenuAccionUseCase);
  _tblMenuAccionUseCase: TblMenuAccionUseCase = inject(TblMenuAccionUseCase);
  _tblMenuUseCase: TblMenuUseCase = inject(TblMenuUseCase);
  _tblAccionUseCase: TblAccionUseCase = inject(TblAccionUseCase);
  _tblPerfilUseCase: TblPerfilUseCase = inject(TblPerfilUseCase);

  @Output() closeTblPerfilMenuAccion = new EventEmitter();
  public routeCore = ROUTES_CORE;
  public title = 'Formulario TblPerfilMenuAccion';
  public formTblPerfilMenuAccion!: FormGroup;
  public navigated = false;
  public sub: any;
  public optionsEstado = [
    { name: 'Activo', value: 'Activo' },
    { name: 'Inactivo', value: 'Inactivo' }
  ];
  public optionsAccionMenu: IGetTblPerfilMenuAccionRsViewModel[] = [];
  public idPerfil!: number;
  public idPerfilMenuAccion!: number;
  public optionsMenu: IGetTblMenuRsViewModel[] = [];
  public optionsAccion: IGetTblAccionRsViewModel[] = [];
  ngOnInit(): void {
    this.sub = this._activatedRoute.params.subscribe(params => {
      this.idPerfil = params['idPerfil'];
    });
    this.loadDataMenus();
    this.loadDataPerfil(this.idPerfil);
    this.formTblPerfilMenuAccion = new FormGroup({
      idPerfilMenuAccion: new FormControl(null, Validators.compose([Validators.max(999999999)])),
      idMenu: new FormControl(null, Validators.compose([Validators.required, Validators.max(999999999)])),
      idPerfil: new FormControl(this.idPerfil, Validators.compose([Validators.required, Validators.min(1), Validators.max(999999999)])),
      idAccion: new FormControl(null, Validators.compose([Validators.required, Validators.min(1), Validators.max(999999999)])),
      estado: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(64)])),
    });

    // this.loadDataAccionMenu();

    this.sub = this._activatedRoute.params.subscribe(params => {
      const idParametro = params['id'];
      this.idPerfilMenuAccion = idParametro;
      if (idParametro != undefined) {
        let idPerfilMenuAccion: IGetTblPerfilMenuAccionByIdViewModel = { idPerfilMenuAccion: idParametro };
        this._loaderService.display(true);
        this._tblPerfilMenuAccionUseCase.getByIdTblPerfilMenuAccion(idPerfilMenuAccion).then(result => {
          this._loaderService.display(false);
          if (result.ok) {

            this.formTblPerfilMenuAccion.reset(result.data);
            this.loadDataAcciones(result.data!.perfil.idPerfil,result.data!.menuAccion.menu.idMenu,this.idPerfilMenuAccion)
            this.formTblPerfilMenuAccion.get('idPerfil')?.setValue(result.data!.perfil.idPerfil);
            this.formTblPerfilMenuAccion.get('idMenu')?.setValue(result.data!.menuAccion.menu.idMenu);
            this.formTblPerfilMenuAccion.get('idAccion')?.setValue([result.data!.menuAccion.accion.idAccion]);
           } else {
            this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
          };
        });
      };
    });
  }

  public saveTblPerfilMenuAccion(): void {

    if (this.formTblPerfilMenuAccion.invalid) {
      this.formTblPerfilMenuAccion.markAllAsTouched();
      this._alertsService.alertMessage(messages.informativeTitle, messages.camposVacios, messages.isInfo);
      return;
    }

    const currentTblPerfilMenuAccion: any = this.currentTblPerfilMenuAccion;

    if (currentTblPerfilMenuAccion.idPerfilMenuAccion) {
      this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmUpdate, () => {
        this._loaderService.display(true);
        this._tblPerfilMenuAccionUseCase.updateTblPerfilMenuAccion(currentTblPerfilMenuAccion as IUpdateTblPerfilMenuAccionViewModel).then(result => {
          this._loaderService.display(false);
          if (result.ok) {
            this._alertsService.alertMessage(messages.successTitle, messages.successUpdate, messages.isSuccess);
            this._router.navigateByUrl(this.routeCore.ADMIN.BASE + this.routeCore.ADMIN.TBLPERFILMENUACCION.INDEX(this.idPerfil));
          } else {
            this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
          }
        });
      });
      return;
    }

    this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmSave, () => {
      this._loaderService.display(true);
      this._tblPerfilMenuAccionUseCase.saveTblPerfilMenuAccion(currentTblPerfilMenuAccion as ISaveTblPerfilMenuAccionViewModel).then(result => {
        this._loaderService.display(false);
        if (result.ok) {
          this._alertsService.alertMessage(messages.successTitle, messages.successSave, messages.isSuccess);
          this._router.navigateByUrl(this.routeCore.ADMIN.BASE + this.routeCore.ADMIN.TBLPERFILMENUACCION.INDEX(this.idPerfil));
        } else {
          this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
        }
      });
    });
  }

  public cancelTblPerfilMenuAccion(): void {
    this.closeTblPerfilMenuAccion.emit(true);
    this._location.back();
  }

  private get currentTblPerfilMenuAccion(): IUpdateTblPerfilMenuAccionViewModel {
    return this.formTblPerfilMenuAccion.value as IUpdateTblPerfilMenuAccionViewModel;
  }

  // public loadDataAccionMenu(){
  //   this._loaderService.display(true);
  //   let tblPerfilMenuAccion: IGetTblPerfilMenuAccionByIdRsViewModel = { idPerfil: this.idPerfil };

  // 	this._tblMenuAccionUseCase.getAllTblMenuAccionNotInIdPerfil(tblPerfilMenuAccion).then(result => {
  // 			this._loaderService.display(false);
  // 			if (result.ok) {
  //         this.optionsAccionMenu = result.data!;
  // 			} else {
  // 				this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
  // 			}
  // 		});
  // }

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

  public loadDataMenus() {
    this._loaderService.display(true);
    this._tblMenuUseCase.getAllTblMenu().then(result => {
      this._loaderService.display(false);
      if (result.ok) {
        this.optionsMenu = result.data!;
      } else {
        this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
      }
    });
  }
  public loadDataAcciones(idPerfil: number, idMenu: number, idPerfilMenuAccion: number) {
    this._loaderService.display(true);
    const currentTblPerfilMenuAccion: IGetTblPerfilMenuAccionByIdViewModel = { idPerfil, idMenu, idPerfilMenuAccion }
    this._tblAccionUseCase.getAllTblAccionNotInIdMenuAndIdPerfil(currentTblPerfilMenuAccion).then(result => {
      this._loaderService.display(false);
      if (result.ok) {
        this.optionsAccion = result.data!;
      } else {
        this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
      }
    });
  }
  public onChangeLoadAcciones(event: any) {
    this.loadDataAcciones(this.idPerfil, event.value, this.idPerfilMenuAccion);
    console.log("onChangeLoadAcciones", event);
  }
}
