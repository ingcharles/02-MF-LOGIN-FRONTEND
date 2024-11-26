
/**
* Vista create-tbl-modulo.component.ts
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    CreateTblModuloComponent
* @package presentation
* @subpackage tbl-modulo
*/
import { SharedCreateModule } from './../../shared/shared-create/shared-create.module';
import {Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, PLATFORM_ID, inject} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { messages } from '../../../data/base/constants/messages';
import { AlertsService } from '../../../data/base/services/alerts.service';
import { LoaderService } from '../../../data/base/services/loader.service';
import { UtilsService } from '../../../data/base/services/utils.service';
import { ValidatorsService } from '../../../data/base/services/validators.service';
import { TblModuloUseCase } from '../../../domain/tbl-modulo/usesCases/tbl-modulo.usecase';
import { IGetTblModuloByIdViewModel, ISaveTblModuloViewModel, IUpdateTblModuloViewModel } from '../../../domain/tbl-modulo/viewModels/i-tbl-modulo.viewModel';

import { ROUTES_CORE } from '../../../data/base/constants/routes';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
	selector: 'create-tbl-modulo-page',
	templateUrl: './create-tbl-modulo.component.html',
	styleUrls: ['./create-tbl-modulo.component.scss'],
	standalone: true,
	imports: [
    NgxMaskDirective,
    SharedCreateModule
    
	],
	providers: [provideNgxMask()],
	host: {ngSkipHydration: 'true' }
})

export class CreateTblModuloComponent implements OnInit {

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
	_tblModuloUseCase: TblModuloUseCase = inject(TblModuloUseCase);

	@Output() closeTblModulo = new EventEmitter();
  public routeCore = ROUTES_CORE;
	public title = 'Formulario TblModulo';
	public formTblModulo!: FormGroup;
	public navigated = false;
	public sub: any;
	public optionsEstado = [
	{name: 'Item 1', id: 1 },
	{name: 'Item 2', id: 2 },
	{name: 'Item 3', id: 3 }
	];

	ngOnInit(): void {

		this.formTblModulo = new FormGroup({
			idModulo: new FormControl(null, Validators.compose([Validators.max(999999999)])),
			nemonico: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(56)])),
			nombre: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(256)])),
			numeroVersion: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(16)])),
			ruta: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(1024)])),
			descripcion: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(1024)])),
		});

		this.sub = this._activatedRoute.params.subscribe(params => {
			this.navigated = true;
			const idParametro = params['id'];
			if (idParametro != undefined) {
				this.navigated = true;
				let idModulo: IGetTblModuloByIdViewModel = { idModulo: idParametro };
				this._tblModuloUseCase.getTblModuloById(idModulo).then(obs => {
					obs.subscribe((result) => {
						this._loaderService.display(false);
						if (result.ok) {
							this.formTblModulo.reset(result.data);
							const estado = this.optionsEstado.find((item: any) => item.id == result.data?.estado!);
							this.formTblModulo.get('estado')?.setValue(estado);
							if (result.data?.fechaRegistro != null) {
								this.formTblModulo.get('fechaRegistro')?.setValue(new Date(result.data?.fechaRegistro));
							}
						} else {
							this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
						}
					});
				});
			};
		});
	}

	public saveTblModulo(): void {

		if (this.formTblModulo.invalid) {
			this.formTblModulo.markAllAsTouched();
			this._alertsService.alertMessage(messages.informativeTitle, messages.camposVacios, messages.isInfo);
			return;
		}

		const currentTblModulo: any = this.currentTblModulo;
    console.log("currentTblModulo",currentTblModulo)
		//currentTblModulo.idModulo = currentTblModulo.idModulo.id;

		if (currentTblModulo.idModulo) {
			this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmUpdate, () => {
				this._tblModuloUseCase.updateTblModulo(currentTblModulo as IUpdateTblModuloViewModel).then(obs => {
					this._loaderService.display(true);
					obs.subscribe((result) => {
						this._loaderService.display(false);
						if (result.ok) {
							this._alertsService.alertMessage(messages.successTitle, messages.successUpdate, messages.isSuccess);
							this._router.navigateByUrl(this.routeCore.ADMIN.BASE + this.routeCore.ADMIN.TBLMODULO.INDEX);
						} else {
							this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
						}
					});
				});
			});
			return;
		}

		this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmSave, () => {
			this._tblModuloUseCase.saveTblModulo(currentTblModulo as ISaveTblModuloViewModel).then(obs => {
				this._loaderService.display(true);
				obs.subscribe((result) => {
					this._loaderService.display(false);
					if (result.ok) {
						this._alertsService.alertMessage(messages.successTitle, messages.successSave, messages.isSuccess);
						this.formTblModulo.get('idModulo')!.patchValue(result.data?.idModulo);
						this._router.navigateByUrl(this.routeCore.ADMIN.BASE + this.routeCore.ADMIN.TBLMODULO.INDEX);
					} else {
						this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
					}
				});
			});
		});
	}

	public cancelTblModulo(): void{
		this.closeTblModulo.emit(true);
		this._location.back();
	}

	private get currentTblModulo(): IUpdateTblModuloViewModel {
		return this.formTblModulo.value as IUpdateTblModuloViewModel;
	}

}
