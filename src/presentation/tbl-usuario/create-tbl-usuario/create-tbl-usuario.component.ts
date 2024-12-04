/**
* Vista create-tbl-usuario.component.ts
*
* @author  Carlos Anchundia
* @date    03-12-2024
* @name    CreateTblUsuarioComponent
* @package presentation
* @subpackage tbl-usuario
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
import { TblUsuarioUseCase } from '../../../domain/tbl-usuario/usesCases/tbl-usuario.usecase';
import { IGetTblUsuarioByIdViewModel, ISaveTblUsuarioViewModel, IUpdateTblUsuarioViewModel } from '../../../domain/tbl-usuario/viewModels/i-tbl-usuario.viewModel';
import { ROUTES_CORE } from '../../../data/base/constants/routes';
import { SharedCreateModule } from './../../shared/shared-create/shared-create.module';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
	selector: 'create-tbl-usuario-page',
	templateUrl: './create-tbl-usuario.component.html',
	styleUrls: ['./create-tbl-usuario.component.scss'],
	standalone: true,
	imports: [
		SharedCreateModule,
		NgxMaskDirective
	],
	providers: [
	provideNgxMask()
	],
	host: {ngSkipHydration: 'true' }
})

export class CreateTblUsuarioComponent implements OnInit {

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
	_tblUsuarioUseCase: TblUsuarioUseCase = inject(TblUsuarioUseCase);

	@Output() closeTblUsuario = new EventEmitter();
	public routeCore = ROUTES_CORE;
	public title = 'Formulario TblUsuario';
	public formTblUsuario!: FormGroup;
	public navigated = false;
	public sub: any;
	public optionsEstado = [
	{name: 'Activo', value: 'Activo' },
	{name: 'Inactivo', value: 'Inactivo' }
	];

	ngOnInit(): void {

		this.formTblUsuario = new FormGroup({
			idUsuario: new FormControl(null, Validators.compose([Validators.max(999999999)])),
			usuario: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(64)])),
			identificacion: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(13)])),
			nombre: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(128)])),
			apellido: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(128)])),
			contrasenia: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(256)])),
			estado: new FormControl(null, Validators.compose([Validators.maxLength(64)])),
		});

		this.sub = this._activatedRoute.params.subscribe(params => {
			const idParametro = params['id'];
			if (idParametro != undefined) {
				let idUsuario: IGetTblUsuarioByIdViewModel = { idUsuario: idParametro };
				this._loaderService.display(true);
				this._tblUsuarioUseCase.getByIdTblUsuario(idUsuario).then(result => {
					this._loaderService.display(false);
					if (result.ok) {
						this.formTblUsuario.reset(result.data);
						if (result.data?.fechaModificacionContrasenia != null) {
							this.formTblUsuario.get('fechaModificacionContrasenia')?.setValue(new Date(result.data?.fechaModificacionContrasenia));
						}
						if (result.data?.fechaUltimoAcceso != null) {
							this.formTblUsuario.get('fechaUltimoAcceso')?.setValue(new Date(result.data?.fechaUltimoAcceso));
						}
						if (result.data?.fechaRegistro != null) {
							this.formTblUsuario.get('fechaRegistro')?.setValue(new Date(result.data?.fechaRegistro));
						}
					} else {
						this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
					};
				});
			};
		});
	}

	public saveTblUsuario(): void {

		if (this.formTblUsuario.invalid) {
			this.formTblUsuario.markAllAsTouched();
			this._alertsService.alertMessage(messages.informativeTitle, messages.camposVacios, messages.isInfo);
			return;
		}

		const currentTblUsuario: any = this.currentTblUsuario;

		if (currentTblUsuario.idUsuario) {
			this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmUpdate, () => {
				this._loaderService.display(true);
				this._tblUsuarioUseCase.updateTblUsuario(currentTblUsuario as IUpdateTblUsuarioViewModel).then(result => {
					this._loaderService.display(false);
					if (result.ok) {
						this._alertsService.alertMessage(messages.successTitle, messages.successUpdate, messages.isSuccess);
						this._router.navigateByUrl(this.routeCore.ADMIN.BASE + this.routeCore.ADMIN.TBLUSUARIO.INDEX);
					} else {
						this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
					}
				});
			});
		return;
	}

		this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmSave, () => {
			this._loaderService.display(true);
			this._tblUsuarioUseCase.saveTblUsuario(currentTblUsuario as ISaveTblUsuarioViewModel).then(result => {
				this._loaderService.display(false);
				if (result.ok) {
					this._alertsService.alertMessage(messages.successTitle, messages.successSave, messages.isSuccess);
					this._router.navigateByUrl(this.routeCore.ADMIN.BASE + this.routeCore.ADMIN.TBLUSUARIO.INDEX);
				} else {
					this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
				}
			});
		});
	}

	public cancelTblUsuario(): void{
		this.closeTblUsuario.emit(true);
		this._location.back();
	}

	private get currentTblUsuario(): IUpdateTblUsuarioViewModel {
		return this.formTblUsuario.value as IUpdateTblUsuarioViewModel;
	}

}
