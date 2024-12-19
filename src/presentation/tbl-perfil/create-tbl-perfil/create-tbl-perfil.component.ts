/**
* Vista create-tbl-perfil.component.ts
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    CreateTblPerfilComponent
* @package presentation
* @subpackage tbl-perfil
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
import { TblPerfilUseCase } from '../../../domain/tbl-perfil/usesCases/tbl-perfil.usecase';
import { IGetTblPerfilByIdViewModel, ISaveTblPerfilViewModel, IUpdateTblPerfilViewModel } from '../../../domain/tbl-perfil/viewModels/i-tbl-perfil.viewModel';
import { ROUTES_CORE } from '../../../data/base/constants/routes';
import { SharedCreateModule } from './../../shared/shared-create/shared-create.module';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
	selector: 'create-tbl-perfil-page',
	templateUrl: './create-tbl-perfil.component.html',
	styleUrls: ['./create-tbl-perfil.component.scss'],
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

export class CreateTblPerfilComponent implements OnInit {

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
	_tblPerfilUseCase: TblPerfilUseCase = inject(TblPerfilUseCase);

	@Output() closeTblPerfil = new EventEmitter();
	public routeCore = ROUTES_CORE;
	public title = 'Formulario perfíl';
	public formTblPerfil!: FormGroup;
	public navigated = false;
	public sub: any;
	public optionsEstado = [
	{name: 'Activo', value: "Activo" },
	{name: 'Inactivo', value: "Inactivo" },
	];

	ngOnInit(): void {

		this.formTblPerfil = new FormGroup({
			idPerfil: new FormControl(null, Validators.compose([Validators.max(999999999)])),
			nemonico: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(64)])),
			nombre: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(100)])),
			descripcion: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(256)])),
			estado: new FormControl(null, Validators.compose([Validators.maxLength(64)])),
		});

		this.sub = this._activatedRoute.params.subscribe(params => {
			const idParametro = params['id'];
			if (idParametro != undefined) {
				let idPerfil: IGetTblPerfilByIdViewModel = { idPerfil: idParametro };
				this._loaderService.display(true);
				this._tblPerfilUseCase.getByIdTblPerfil(idPerfil).then(result => {
					this._loaderService.display(false);
					if (result.ok) {
						this.formTblPerfil.reset(result.data);

					} else {
						this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
					};
				});
			};
		});
	}

	public saveTblPerfil(): void {

		if (this.formTblPerfil.invalid) {
			this.formTblPerfil.markAllAsTouched();
			this._alertsService.alertMessage(messages.informativeTitle, messages.camposVacios, messages.isInfo);
			return;
		}

		const currentTblPerfil: any = this.currentTblPerfil;

		if (currentTblPerfil.idPerfil) {
			this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmUpdate, () => {
				this._loaderService.display(true);
				this._tblPerfilUseCase.updateTblPerfil(currentTblPerfil as IUpdateTblPerfilViewModel).then(result => {
					this._loaderService.display(false);
					if (result.ok) {
						this._alertsService.alertMessage(messages.successTitle, messages.successUpdate, messages.isSuccess);
						this._router.navigateByUrl(this.routeCore.ADMIN.BASE + this.routeCore.ADMIN.TBLPERFIL.INDEX);
					} else {
						this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
					}
				});
			});
		return;
	}

		this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmSave, () => {
			this._loaderService.display(true);
			this._tblPerfilUseCase.saveTblPerfil(currentTblPerfil as ISaveTblPerfilViewModel).then(result => {
				this._loaderService.display(false);
				if (result.ok) {
					this._alertsService.alertMessage(messages.successTitle, messages.successSave, messages.isSuccess);
					this._router.navigateByUrl(this.routeCore.ADMIN.BASE + this.routeCore.ADMIN.TBLPERFIL.INDEX);
				} else {
					this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
				}
			});
		});
	}

	public cancelTblPerfil(): void{
		this.closeTblPerfil.emit(true);
		this._location.back();
	}

	private get currentTblPerfil(): IUpdateTblPerfilViewModel {
		return this.formTblPerfil.value as IUpdateTblPerfilViewModel;
	}

}
