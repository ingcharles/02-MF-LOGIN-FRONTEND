/**
* Vista create-tbl-usuario-modulo.component.ts
*
* @author  Carlos Anchundia
* @date    03-12-2024
* @name    CreateTblUsuarioModuloComponent
* @package presentation
* @subpackage tbl-usuario-modulo
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
import { TblUsuarioModuloUseCase } from '../../../domain/tbl-usuario-modulo/usesCases/tbl-usuario-modulo.usecase';
import { IGetTblUsuarioModuloByIdViewModel, ISaveTblUsuarioModuloViewModel, IUpdateTblUsuarioModuloViewModel } from '../../../domain/tbl-usuario-modulo/viewModels/i-tbl-usuario-modulo.viewModel';
import { ROUTES_CORE } from '../../../data/base/constants/routes';
import { SharedCreateModule } from './../../shared/shared-create/shared-create.module';
import { ICatalogo } from '../../../data/base/interfaces/i-catalogo';
import { FontAwesomeService } from '../../../data/base/services/font-awesome.service';
import { ColorService } from '../../../data/base/services/color.service';
import { IGetTblModuloRsViewModel } from '../../../domain/tbl-modulo/viewModels/i-tbl-modulo.viewModel';
import { TblModuloUseCase } from '../../../domain/tbl-modulo/usesCases/tbl-modulo.usecase';

@Component({
	selector: 'create-tbl-usuario-modulo-page',
	templateUrl: './create-tbl-usuario-modulo.component.html',
	styleUrls: ['./create-tbl-usuario-modulo.component.scss'],
	standalone: true,
	imports: [
		SharedCreateModule,
	],
	providers: [
	],
	host: {ngSkipHydration: 'true' }
})

export class CreateTblUsuarioModuloComponent implements OnInit {

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
	_tblUsuarioModuloUseCase: TblUsuarioModuloUseCase = inject(TblUsuarioModuloUseCase);
  _fontAwesomeService: FontAwesomeService = inject(FontAwesomeService);
  _colorService: ColorService = inject(ColorService);
  _tblModuloUseCase: TblModuloUseCase = inject(TblModuloUseCase);

	@Output() closeTblUsuarioModulo = new EventEmitter();
	public routeCore = ROUTES_CORE;
	public title = 'Formulario TblUsuarioModulo';
	public formTblUsuarioModulo!: FormGroup;
	public navigated = false;
	public sub: any;
  public optionsImagenModulo:ICatalogo[] = [];
  public optionsColorModulo:ICatalogo[] = [];
  public optionsModulo:IGetTblModuloRsViewModel [] = [];

	public optionsEstado = [
	{name: 'Item 1', value: 1 },
	{name: 'Item 2', value: 2 },
	{name: 'Item 3', value: 3 }
	];

	ngOnInit(): void {

		this.formTblUsuarioModulo = new FormGroup({
			idUsuarioModulo: new FormControl(null, Validators.compose([Validators.max(999999999)])),
			idUsuario: new FormControl(null, Validators.compose([Validators.required, Validators.min(1), Validators.max(999999999)])),
			idModulo: new FormControl(null, Validators.compose([Validators.required, Validators.min(1), Validators.max(999999999)])),
			colorModulo: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(32)])),
			imagenModulo: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(32)])),
			numeroVisitaModulo: new FormControl(null, Validators.compose([Validators.required, Validators.min(1), Validators.max(999999999)])),
			numeroNotificaciones: new FormControl(null, Validators.compose([Validators.required, Validators.min(1), Validators.max(999999999)])),
			estado: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(64)])),
			fechaRegistro: new FormControl(null, Validators.compose([Validators.maxLength(8)])),
			idUsuarioRegistro: new FormControl(null, Validators.compose([Validators.max(999999999)])),
			ipCreaRegistro: new FormControl(null, Validators.compose([Validators.maxLength(32)])),
		});

		this.sub = this._activatedRoute.params.subscribe(params => {
			const idParametro = params['id'];
			if (idParametro != undefined) {
				let idUsuarioModulo: IGetTblUsuarioModuloByIdViewModel = { idUsuarioModulo: idParametro };
				this._loaderService.display(true);
				this._tblUsuarioModuloUseCase.getByIdTblUsuarioModulo(idUsuarioModulo).then(result => {
					this._loaderService.display(false);
					if (result.ok) {
						this.formTblUsuarioModulo.reset(result.data);
					} else {
						this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
					};
				});
			};
		});
    this.optionsImagenModulo = this._fontAwesomeService.loadIcons();
    this.optionsColorModulo = this._colorService.loadColors();
    this.loadDataModulos();
	}

	public saveTblUsuarioModulo(): void {

		if (this.formTblUsuarioModulo.invalid) {
			this.formTblUsuarioModulo.markAllAsTouched();
			this._alertsService.alertMessage(messages.informativeTitle, messages.camposVacios, messages.isInfo);
			return;
		}

		const currentTblUsuarioModulo: any = this.currentTblUsuarioModulo;

		if (currentTblUsuarioModulo.idUsuarioModulo) {
			this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmUpdate, () => {
				this._loaderService.display(true);
				this._tblUsuarioModuloUseCase.updateTblUsuarioModulo(currentTblUsuarioModulo as IUpdateTblUsuarioModuloViewModel).then(result => {
					this._loaderService.display(false);
					if (result.ok) {
						this._alertsService.alertMessage(messages.successTitle, messages.successUpdate, messages.isSuccess);
						this._router.navigateByUrl(this.routeCore.ADMIN.BASE + this.routeCore.ADMIN.TBLUSUARIOMODULO.INDEX);
					} else {
						this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
					}
				});
			});
		return;
	}

		this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmSave, () => {
			this._loaderService.display(true);
			this._tblUsuarioModuloUseCase.saveTblUsuarioModulo(currentTblUsuarioModulo as ISaveTblUsuarioModuloViewModel).then(result => {
				this._loaderService.display(false);
				if (result.ok) {
					this._alertsService.alertMessage(messages.successTitle, messages.successSave, messages.isSuccess);
					this.formTblUsuarioModulo.get('idUsuarioModulo')!.patchValue(result.data?.idUsuarioModulo);
					this._router.navigateByUrl(this.routeCore.ADMIN.BASE + this.routeCore.ADMIN.TBLUSUARIOMODULO.INDEX);
				} else {
					this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
				}
			});
		});
	}

	public cancelTblUsuarioModulo(): void{
		this.closeTblUsuarioModulo.emit(true);
		this._location.back();
	}

	private get currentTblUsuarioModulo(): IUpdateTblUsuarioModuloViewModel {
		return this.formTblUsuarioModulo.value as IUpdateTblUsuarioModuloViewModel;
	}

  public loadDataModulos(){
    this._loaderService.display(true);
		this._tblModuloUseCase.getAllTblModulo().then(result => {
				this._loaderService.display(false);
				if (result.ok) {
          console.log("loadDataModulos",result)
          this.optionsModulo = result.data!;
          console.log("resultado optionsAccion",result)
				} else {
					this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
				}
			});
  }


}
