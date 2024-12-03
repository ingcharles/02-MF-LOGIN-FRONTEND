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
import { Component, EventEmitter, OnInit, Output, PLATFORM_ID, inject} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { messages } from '../../../data/base/constants/messages';
import { AlertsService } from '../../../data/base/services/alerts.service';
import { LoaderService } from '../../../data/base/services/loader.service';
import { UtilsService } from '../../../data/base/services/utils.service';
import { ValidatorsService } from '../../../data/base/services/validators.service';
import { TblPerfilMenuAccionUseCase } from '../../../domain/tbl-perfil-menu-accion/usesCases/tbl-perfil-menu-accion.usecase';
import { IGetTblPerfilMenuAccionByIdViewModel, ISaveTblPerfilMenuAccionViewModel, IUpdateTblPerfilMenuAccionViewModel } from '../../../domain/tbl-perfil-menu-accion/viewModels/i-tbl-perfil-menu-accion.viewModel';
import { ROUTES_CORE } from '../../../data/base/constants/routes';
import { SharedCreateModule } from './../../shared/shared-create/shared-create.module';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
	selector: 'create-tbl-perfil-menu-accion-page',
	templateUrl: './create-tbl-perfil-menu-accion.component.html',
	styleUrls: ['./create-tbl-perfil-menu-accion.component.scss'],
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

	@Output() closeTblPerfilMenuAccion = new EventEmitter();
	public routeCore = ROUTES_CORE;
	public title = 'Formulario TblPerfilMenuAccion';
	public formTblPerfilMenuAccion!: FormGroup;
	public navigated = false;
	public sub: any;
	public optionsEstado = [
	{name: 'Item 1', value: 1 },
	{name: 'Item 2', value: 2 },
	{name: 'Item 3', value: 3 }
	];

	ngOnInit(): void {

		this.formTblPerfilMenuAccion = new FormGroup({
			idPerfilMenuAccion: new FormControl(null, Validators.compose([Validators.max(999999999)])),
			idPerfil: new FormControl(null, Validators.compose([Validators.required, Validators.min(1), Validators.max(999999999)])),
			idMenuAccion: new FormControl(null, Validators.compose([Validators.required, Validators.min(1), Validators.max(999999999)])),
			estado: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(64)])),
			fechaRegistro: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(8)])),
			idUsuarioRegistro: new FormControl(null, Validators.compose([Validators.required, Validators.min(1), Validators.max(999999999)])),
		});

		this.sub = this._activatedRoute.params.subscribe(params => {
			const idParametro = params['id'];
			if (idParametro != undefined) {
				let idPerfilMenuAccion: IGetTblPerfilMenuAccionByIdViewModel = { idPerfilMenuAccion: idParametro };
				this._loaderService.display(true);
				this._tblPerfilMenuAccionUseCase.getByIdTblPerfilMenuAccion(idPerfilMenuAccion).then(result => {
					this._loaderService.display(false);
					if (result.ok) {
						this.formTblPerfilMenuAccion.reset(result.data);
						if (result.data?.fechaRegistro != null) {
							this.formTblPerfilMenuAccion.get('fechaRegistro')?.setValue(new Date(result.data?.fechaRegistro));
						}
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
						this._router.navigateByUrl(this.routeCore.ADMIN.BASE + this.routeCore.ADMIN.TBLPERFILMENUACCION.INDEX);
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
					this.formTblPerfilMenuAccion.get('idPerfilMenuAccion')!.patchValue(result.data?.idPerfilMenuAccion);
					this._router.navigateByUrl(this.routeCore.ADMIN.BASE + this.routeCore.ADMIN.TBLPERFILMENUACCION.INDEX);
				} else {
					this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
				}
			});
		});
	}

	public cancelTblPerfilMenuAccion(): void{
		this.closeTblPerfilMenuAccion.emit(true);
		this._location.back();
	}

	private get currentTblPerfilMenuAccion(): IUpdateTblPerfilMenuAccionViewModel {
		return this.formTblPerfilMenuAccion.value as IUpdateTblPerfilMenuAccionViewModel;
	}

}
