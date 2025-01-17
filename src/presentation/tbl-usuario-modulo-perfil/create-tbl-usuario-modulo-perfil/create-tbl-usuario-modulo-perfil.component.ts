/**
* Vista create-tbl-usuario-modulo-perfil.component.ts
*
* @author  Carlos Anchundia
* @date    03-12-2024
* @name    CreateTblUsuarioModuloPerfilComponent
* @package presentation
* @subpackage tbl-usuario-modulo-perfil
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
import { TblUsuarioModuloPerfilUseCase } from '../../../domain/tbl-usuario-modulo-perfil/usesCases/tbl-usuario-modulo-perfil.usecase';
import { TblPerfilUseCase } from '../../../domain/tbl-perfil/usesCases/tbl-perfil.usecase';
import { IGetTblUsuarioModuloPerfilByIdViewModel, ISaveTblUsuarioModuloPerfilViewModel, IUpdateTblUsuarioModuloPerfilViewModel } from '../../../domain/tbl-usuario-modulo-perfil/viewModels/i-tbl-usuario-modulo-perfil.viewModel';
import { ROUTES_CORE } from '../../../data/base/constants/routes';
import { SharedCreateModule } from './../../shared/shared-create/shared-create.module';
import { TblUsuarioModuloUseCase } from '../../../domain/tbl-usuario-modulo/usesCases/tbl-usuario-modulo.usecase';
import { IGetTblUsuarioModuloByIdViewModel } from '../../../domain/tbl-usuario-modulo/viewModels/i-tbl-usuario-modulo.viewModel';
import { IGetTblPerfilRsViewModel } from '../../../domain/tbl-perfil/viewModels/i-tbl-perfil.viewModel';

@Component({
  selector: 'create-tbl-usuario-modulo-perfil-page',
  templateUrl: './create-tbl-usuario-modulo-perfil.component.html',
  styleUrls: ['./create-tbl-usuario-modulo-perfil.component.scss'],
  standalone: true,
  imports: [
    SharedCreateModule,
  ],
  providers: [
  ],
  host: { ngSkipHydration: 'true' }
})

export class CreateTblUsuarioModuloPerfilComponent implements OnInit {

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
  _tblUsuarioModuloPerfilUseCase: TblUsuarioModuloPerfilUseCase = inject(TblUsuarioModuloPerfilUseCase);
  _tblUsuarioModuloUseCase: TblUsuarioModuloUseCase = inject(TblUsuarioModuloUseCase);
  _tblPerfilUseCase: TblPerfilUseCase = inject(TblPerfilUseCase);

  @Output() closeTblUsuarioModuloPerfil = new EventEmitter();
  public routeCore = ROUTES_CORE;
  public title = 'Formulario';
  public formTblUsuarioModuloPerfil!: FormGroup;
  public navigated = false;
  public sub: any;
  public optionsEstado = [
    { name: 'Activo', value: 'Activo' },
    { name: 'Inactivo', value: 'Inactivo' }
  ];
  public idUsuarioModulo!: number;
  public idUsuarioModuloPerfil!: number;
  public optionsPerfil: IGetTblPerfilRsViewModel[] = [];

  ngOnInit(): void {
    console.log("ngOnInit")
    this.sub = this._activatedRoute.params.subscribe(params => {
      console.log("params",params)
      this.idUsuarioModulo = params['idUsuarioModulo'];
    });
    this.loadDataUsuarioModulo(this.idUsuarioModulo)
    this.formTblUsuarioModuloPerfil = new FormGroup({
      idUsuarioModuloPerfil: new FormControl(null, Validators.compose([Validators.max(999999999)])),
      idUsuarioModulo: new FormControl(this.idUsuarioModulo, Validators.compose([Validators.required, Validators.min(1), Validators.max(999999999)])),
      idPerfil: new FormControl(null, Validators.compose([Validators.required, Validators.min(1), Validators.max(999999999)])),
      estado: new FormControl(null, Validators.compose([Validators.maxLength(64)])),
    });

    this.sub = this._activatedRoute.params.subscribe(params => {
      this.idUsuarioModuloPerfil = params['id'];
      if (this.idUsuarioModuloPerfil != undefined) {
        let idUsuarioModuloPerfil: IGetTblUsuarioModuloPerfilByIdViewModel = { idUsuarioModuloPerfil: this.idUsuarioModuloPerfil };
        this._loaderService.display(true);
        this._tblUsuarioModuloPerfilUseCase.getByIdTblUsuarioModuloPerfil(idUsuarioModuloPerfil).then(result => {
          this._loaderService.display(false);
          if (result.ok) {
            console.log("aaa", result)
            this.formTblUsuarioModuloPerfil.reset(result.data);
             this.formTblUsuarioModuloPerfil.get('idPerfil')?.setValue(result.data!.perfil.idPerfil);
             this.formTblUsuarioModuloPerfil.get('idUsuarioModulo')?.setValue(result.data!.usuarioModulo.idUsuarioModulo);
          } else {
            this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
          };
        });
      };
      this.loadDataPerfiles(this.formTblUsuarioModuloPerfil.get('idUsuarioModulo')?.value, this.idUsuarioModuloPerfil)
    });
  }

  public saveTblUsuarioModuloPerfil(): void {
    console.log("currentTblUsuarioModuloPerfil",this.formTblUsuarioModuloPerfil)
    if (this.formTblUsuarioModuloPerfil.invalid) {
      this.formTblUsuarioModuloPerfil.markAllAsTouched();
      this._alertsService.alertMessage(messages.informativeTitle, messages.camposVacios, messages.isInfo);
      return;
    }

    const currentTblUsuarioModuloPerfil: any = this.currentTblUsuarioModuloPerfil;
    if (currentTblUsuarioModuloPerfil.idUsuarioModuloPerfil) {
      this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmUpdate, () => {
        this._loaderService.display(true);
        this._tblUsuarioModuloPerfilUseCase.updateTblUsuarioModuloPerfil(currentTblUsuarioModuloPerfil as IUpdateTblUsuarioModuloPerfilViewModel).then(result => {
          this._loaderService.display(false);
          if (result.ok) {
            this._alertsService.alertMessage(messages.successTitle, messages.successUpdate, messages.isSuccess);
            this._router.navigateByUrl(this.routeCore.ADMIN.BASE + this.routeCore.ADMIN.TBLUSUARIOMODULOPERFIL.INDEX(this.idUsuarioModulo));
          } else {
            this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
          }
        });
      });
      return;
    }

    this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmSave, () => {
      this._loaderService.display(true);
      this._tblUsuarioModuloPerfilUseCase.saveTblUsuarioModuloPerfil(currentTblUsuarioModuloPerfil as ISaveTblUsuarioModuloPerfilViewModel).then(result => {
        this._loaderService.display(false);
        if (result.ok) {
          this._alertsService.alertMessage(messages.successTitle, messages.successSave, messages.isSuccess);
          this.formTblUsuarioModuloPerfil.get('idUsuarioModuloPerfil')!.patchValue(result.data?.idUsuarioModuloPerfil);
          this._router.navigateByUrl(this.routeCore.ADMIN.BASE + this.routeCore.ADMIN.TBLUSUARIOMODULOPERFIL.INDEX(this.idUsuarioModulo));
        } else {
          this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
        }
      });
    });
  }

  public cancelTblUsuarioModuloPerfil(): void {
    this.closeTblUsuarioModuloPerfil.emit(true);
    this._location.back();
  }

  private get currentTblUsuarioModuloPerfil(): IUpdateTblUsuarioModuloPerfilViewModel {
    return this.formTblUsuarioModuloPerfil.value as IUpdateTblUsuarioModuloPerfilViewModel;
  }

  public loadDataUsuarioModulo(idUsuarioModulo: number) {
    this._loaderService.display(true);
    const currentTblUsuario: IGetTblUsuarioModuloByIdViewModel = { idUsuarioModulo }
    this._tblUsuarioModuloUseCase.getByIdTblUsuarioModulo(currentTblUsuario).then(result => {
      this._loaderService.display(false);
      if (result.ok) {
        console.log("result.data",result.data)
        this.title = result.data!.usuario.nombreCompleto + ' en el modulo: ' + result.data!.modulo.nombre
      } else {
        this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
      }
    });
  }

  public loadDataPerfiles(idUsuarioModulo: number, idUsuarioModuloPerfil: number) {
    this._loaderService.display(true);
    const currentTblUsuarioModuloPerfil: IGetTblUsuarioModuloPerfilByIdViewModel = { idUsuarioModulo, idUsuarioModuloPerfil }
    this._tblPerfilUseCase.getAllTblPerfilNotInIdUsuarioModulo(currentTblUsuarioModuloPerfil).then(result => {
      this._loaderService.display(false);
      if (result.ok) {
        this.optionsPerfil = result.data!;
      } else {
        this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
      }
    });
  }
}
