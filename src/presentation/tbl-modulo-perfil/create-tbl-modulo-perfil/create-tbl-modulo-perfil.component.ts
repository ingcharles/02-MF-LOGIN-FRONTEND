/**
* Vista create-tbl-modulo-perfil.component.ts
*
* @author  Carlos Anchundia
* @date    03-12-2024
* @name    CreateTblModuloPerfilComponent
* @package presentation
* @subpackage tbl-modulo-perfil
*/

import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, PLATFORM_ID, inject} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { messages } from '../../../data/base/constants/messages';
import { AlertsService } from '../../../data/base/services/alerts.service';
import { LoaderService } from '../../../data/base/services/loader.service';
import { UtilsService } from '../../../data/base/services/utils.service';
import { ValidatorsService } from '../../../data/base/services/validators.service';
import { TblModuloPerfilUseCase } from '../../../domain/tbl-modulo-perfil/usesCases/tbl-modulo-perfil.usecase';
import { IGetTblModuloPerfilByIdViewModel, ISaveTblModuloPerfilViewModel, IUpdateTblModuloPerfilViewModel } from '../../../domain/tbl-modulo-perfil/viewModels/i-tbl-modulo-perfil.viewModel';
import { ROUTES_CORE } from '../../../data/base/constants/routes';
import { SharedCreateModule } from './../../shared/shared-create/shared-create.module';
import { provideNgxMask } from 'ngx-mask';
import { TblPerfilUseCase } from '../../../domain/tbl-perfil/usesCases/tbl-perfil.usecase';
import { IGetTblPerfilRsViewModel } from '../../../domain/tbl-perfil/viewModels/i-tbl-perfil.viewModel';

@Component({
	selector: 'create-tbl-modulo-perfil-page',
	templateUrl: './create-tbl-modulo-perfil.component.html',
	styleUrls: ['./create-tbl-modulo-perfil.component.scss'],
	standalone: true,
	imports: [
		SharedCreateModule,
	],
	providers: [
	provideNgxMask()
	],
	host: {ngSkipHydration: 'true' }
})

export class CreateTblModuloPerfilComponent implements OnInit {

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
	_tblModuloPerfilUseCase: TblModuloPerfilUseCase = inject(TblModuloPerfilUseCase);
	_tblPerfilUseCase: TblPerfilUseCase = inject(TblPerfilUseCase);
  public optionsPerfil:IGetTblPerfilRsViewModel [] = [];
	@Output() closeTblModuloPerfil = new EventEmitter();
	public routeCore = ROUTES_CORE;
	public title = 'Formulario para asignar perfíl al módulo: ';
	public formTblModuloPerfil!: FormGroup;
	public navigated = false;
  public idModulo!: number;
	public sub: any;
	public optionsEstado = [
	{name: 'Activo', value: 'Activo' },
	{name: 'Inactivo', value: 'Inactivo' }
	];

	ngOnInit(): void {
    this.sub = this._activatedRoute.params.subscribe(params => {
      this.idModulo = params['idModulo'];
    });
		this.formTblModuloPerfil = new FormGroup({
			idModuloPerfil: new FormControl(null, Validators.compose([Validators.max(999999999)])),
			idModulo: new FormControl(this.idModulo, Validators.compose([Validators.required, Validators.min(1), Validators.max(999999999)])),
			idPerfil: new FormControl(null, Validators.compose([Validators.required, Validators.min(1), Validators.max(999999999)])),
			estado: new FormControl(null, Validators.compose([Validators.maxLength(64)])),
		});

    this.loadDataPerfiles();

		this.sub = this._activatedRoute.params.subscribe(params => {
			const idParametro = params['id'];
			if (idParametro != undefined) {
				let idModuloPerfil: IGetTblModuloPerfilByIdViewModel = { idModuloPerfil: idParametro };
				this._loaderService.display(true);
				this._tblModuloPerfilUseCase.getByIdTblModuloPerfil(idModuloPerfil).then(result => {
					this._loaderService.display(false);
					if (result.ok) {
						this.formTblModuloPerfil.reset(result.data);
					} else {
						this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
					};
				});
			};
		});
	}

	public saveTblModuloPerfil(): void {

		if (this.formTblModuloPerfil.invalid) {
			this.formTblModuloPerfil.markAllAsTouched();
			this._alertsService.alertMessage(messages.informativeTitle, messages.camposVacios, messages.isInfo);
			return;
		}

		const currentTblModuloPerfil: any = this.currentTblModuloPerfil;

		if (currentTblModuloPerfil.idModuloPerfil) {
			this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmUpdate, () => {
				this._loaderService.display(true);
				this._tblModuloPerfilUseCase.updateTblModuloPerfil(currentTblModuloPerfil as IUpdateTblModuloPerfilViewModel).then(result => {
					this._loaderService.display(false);
					if (result.ok) {
						this._alertsService.alertMessage(messages.successTitle, messages.successUpdate, messages.isSuccess);
						this._router.navigateByUrl(this.routeCore.ADMIN.BASE + this.routeCore.ADMIN.TBLMODULOPERFIL.INDEX);
					} else {
						this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
					}
				});
			});
		return;
	}

		this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmSave, () => {
			this._loaderService.display(true);
			this._tblModuloPerfilUseCase.saveTblModuloPerfil(currentTblModuloPerfil as ISaveTblModuloPerfilViewModel).then(result => {
				this._loaderService.display(false);
				if (result.ok) {
					this._alertsService.alertMessage(messages.successTitle, messages.successSave, messages.isSuccess);
					this.formTblModuloPerfil.get('idModuloPerfil')!.patchValue(result.data?.idModuloPerfil);
					this._router.navigateByUrl(this.routeCore.ADMIN.BASE + this.routeCore.ADMIN.TBLMODULOPERFIL.INDEX);
				} else {
					this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
				}
			});
		});
	}

	public cancelTblModuloPerfil(): void{
		this.closeTblModuloPerfil.emit(true);
		this._location.back();
	}

	private get currentTblModuloPerfil(): IUpdateTblModuloPerfilViewModel {
		return this.formTblModuloPerfil.value as IUpdateTblModuloPerfilViewModel;
	}

  public loadDataPerfiles(){
    this._loaderService.display(true);
		this._tblPerfilUseCase.getAllTblPerfil().then(result => {
				this._loaderService.display(false);
				if (result.ok) {
          this.optionsPerfil = result.data!;
				} else {
					this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
				}
			});
  }
}
