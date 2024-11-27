/**
* Vista create-tbl-accion.component.ts
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    CreateTblAccionComponent
* @package presentation
* @subpackage tbl-accion
*/

import { CommonModule, DatePipe, Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, PLATFORM_ID, inject} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { messages } from '../../../data/base/constants/messages';
import { AlertsService } from '../../../data/base/services/alerts.service';
import { LoaderService } from '../../../data/base/services/loader.service';
import { UtilsService } from '../../../data/base/services/utils.service';
import { ValidatorsService } from '../../../data/base/services/validators.service';
import { TblAccionUseCase } from '../../../domain/tbl-accion/usesCases/tbl-accion.usecase';
import { IGetTblAccionByIdViewModel, ISaveTblAccionViewModel, IUpdateTblAccionViewModel } from '../../../domain/tbl-accion/viewModels/i-tbl-accion.viewModel';
import { ROUTES_CORE } from '../../../data/base/constants/routes';
import { SharedCreateModule } from './../../shared/shared-create/shared-create.module';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
	selector: 'create-tbl-accion-page',
	templateUrl: './create-tbl-accion.component.html',
	styleUrls: ['./create-tbl-accion.component.scss'],
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

export class CreateTblAccionComponent implements OnInit {

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
	_tblAccionUseCase: TblAccionUseCase = inject(TblAccionUseCase);

	@Output() closeTblAccion = new EventEmitter();
	public routeCore = ROUTES_CORE;
	public title = 'Formulario TblAccion';
	public formTblAccion!: FormGroup;
	public navigated = false;
	public sub: any;
	public optionsEstado = [
	{nombre: 'Item 1', id_accion: 1 },
	{nombre: 'Item 2', id_accion: 2 },
	{nombre: 'Item 3', id_accion: 3}
	];

	ngOnInit(): void {

		this.formTblAccion = new FormGroup({
			idAccion: new FormControl(null, Validators.compose([Validators.max(999999999)])),
			nombre: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(256)])),
			nemonico: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(64)])),
			pagina: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(256)])),
			imagen: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(64)])),
			color: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(64)])),
			descripcion: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(256)])),
			orden: new FormControl(null, Validators.compose([Validators.required, Validators.min(1), Validators.max(999999999)])),
			estado: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(64)])),
			fechaRegistro: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(8)])),
			idUsuarioRegistro: new FormControl(null, Validators.compose([Validators.required, Validators.min(1), Validators.max(999999999)])),
		});

		this.sub = this._activatedRoute.params.subscribe(params => {
			this.navigated = true;
			const idParametro = params['id'];
			if (idParametro != undefined) {
				this.navigated = true;
				let idAccion: IGetTblAccionByIdViewModel = { idAccion: idParametro };
				this._tblAccionUseCase.getTblAccionById(idAccion).then(result => {
						this._loaderService.display(false);
						if (result.ok) {
							this.formTblAccion.reset(result.data);
							const estado = this.optionsEstado.find((item: any) => item.id == result.data?.estado!);
							this.formTblAccion.get('estado')?.setValue(estado);
							if (result.data?.fechaRegistro != null) {
								this.formTblAccion.get('fechaRegistro')?.setValue(new Date(result.data?.fechaRegistro));
							}
						} else {
							this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
						}
					});
        }
				//});
			});
	}

	public saveTblAccion(): void {

		if (this.formTblAccion.invalid) {
			this.formTblAccion.markAllAsTouched();
			this._alertsService.alertMessage(messages.informativeTitle, messages.camposVacios, messages.isInfo);
			return;
		}

		const currentTblAccion: any = this.currentTblAccion;

		if (currentTblAccion.idAccion) {
			this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmUpdate, () => {
				this._tblAccionUseCase.updateTblAccion(currentTblAccion as IUpdateTblAccionViewModel).then(result => {
					this._loaderService.display(true);
						this._loaderService.display(false);
						if (result.ok) {
							this._alertsService.alertMessage(messages.successTitle, messages.successUpdate, messages.isSuccess);
							this._router.navigateByUrl(this.routeCore.ADMIN.BASE + this.routeCore.ADMIN.TBLACCION.INDEX);
						} else {
							this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
						}
					});
				});
			return;
		}

		this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmSave, () => {
			this._tblAccionUseCase.saveTblAccion(currentTblAccion as ISaveTblAccionViewModel).then(result => {
				this._loaderService.display(true);
					this._loaderService.display(false);
					if (result.ok) {
						this._alertsService.alertMessage(messages.successTitle, messages.successSave, messages.isSuccess);
						this.formTblAccion.get('idAccion')!.patchValue(result.data?.idAccion);
						this._router.navigateByUrl(this.routeCore.ADMIN.BASE + this.routeCore.ADMIN.TBLACCION.INDEX);
					} else {
						this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
					}
				});
		});
	}

	public cancelTblAccion(): void{
		this.closeTblAccion.emit(true);
		this._location.back();
	}

	private get currentTblAccion(): IUpdateTblAccionViewModel {
		return this.formTblAccion.value as IUpdateTblAccionViewModel;
	}

}
