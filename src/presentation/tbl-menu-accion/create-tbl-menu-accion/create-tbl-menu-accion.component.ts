/**
* Vista create-tbl-menu-accion.component.ts
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    CreateTblMenuAccionComponent
* @package presentation
* @subpackage tbl-menu-accion
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
import { TblMenuAccionUseCase } from '../../../domain/tbl-menu-accion/usesCases/tbl-menu-accion.usecase';
import { IGetTblMenuAccionByIdRsViewModel, IGetTblMenuAccionByIdViewModel, IGetTblMenuAccionRsViewModel, ISaveTblMenuAccionViewModel, IUpdateTblMenuAccionViewModel } from '../../../domain/tbl-menu-accion/viewModels/i-tbl-menu-accion.viewModel';
import { ROUTES_CORE } from '../../../data/base/constants/routes';
import { SharedCreateModule } from './../../shared/shared-create/shared-create.module';
import { IGetTblMenuByIdRsViewModel, IGetTblMenuByIdViewModel, IGetTblMenuRsViewModel } from '../../../domain/tbl-menu/viewModels/i-tbl-menu.viewModel';
import { TblMenuUseCase } from '../../../domain/tbl-menu/usesCases/tbl-menu.usecase';
import { IResponseStatusViewModel } from '../../../domain/base/viewModels/i-response-status.viewModel';
import { TblAccionUseCase } from '../../../domain/tbl-accion/usesCases/tbl-accion.usecase';

@Component({
	selector: 'create-tbl-menu-accion-page',
	templateUrl: './create-tbl-menu-accion.component.html',
	styleUrls: ['./create-tbl-menu-accion.component.scss'],
	standalone: true,
	imports: [
		SharedCreateModule,
	],
	providers: [
	],
	host: {ngSkipHydration: 'true' }
})

export class CreateTblMenuAccionComponent implements OnInit {

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
	_tblMenuAccionUseCase: TblMenuAccionUseCase = inject(TblMenuAccionUseCase);
  _tblMenuUseCase: TblMenuUseCase = inject(TblMenuUseCase);
  _tblAccionUseCase: TblAccionUseCase = inject(TblAccionUseCase);

	@Output() closeTblMenuAccion = new EventEmitter();
	public routeCore = ROUTES_CORE;
	public title = 'Formulario TblMenuAccion';
	public formTblMenuAccion!: FormGroup;
  public tblMenuRecords: IGetTblMenuByIdRsViewModel | null = null;
  public optionsAccion:IGetTblMenuRsViewModel [] = [];
	public navigated = false;
	public sub: any;
  public idMenu!: number;
	public optionsEstado = [
	{name: 'Activo', value: "Activo" },
	{name: 'Inactivo', value: 'Inactivo' }
	];

	ngOnInit(): void {
    this.sub = this._activatedRoute.params.subscribe(params => {
      this.idMenu = params['idMenu'];
    });

		this.formTblMenuAccion = new FormGroup({
			idMenuAccion: new FormControl(null, Validators.compose([Validators.max(999999999)])),
			idMenu: new FormControl(this.idMenu, Validators.compose([Validators.required, Validators.min(1), Validators.max(999999999)])),
			idAccion: new FormControl(null, Validators.compose([Validators.required, Validators.min(1), Validators.max(999999999)])),
			estado: new FormControl('Activo', Validators.compose([Validators.required, Validators.maxLength(64)])),
		});

    this.loadDataMenu(this.idMenu);
    this.loadDataAcciones();

		this.sub = this._activatedRoute.params.subscribe(params => {
			const idParametro = params['id'];
			if (idParametro != undefined) {
				let idMenuAccion: IGetTblMenuAccionByIdViewModel = { idMenuAccion: idParametro };
				this._loaderService.display(true);
				this._tblMenuAccionUseCase.getByIdTblMenuAccion(idMenuAccion).then(result => {
					this._loaderService.display(false);
					if (result.ok) {
						this.formTblMenuAccion.reset(result.data);
            this.formTblMenuAccion.get('idAccion')?.setValue(result.data!.accion.idAccion);
            this.formTblMenuAccion.get('idMenu')?.setValue(result.data!.menu.idMenu);

					} else {
						this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
					};
				});
			};
		});
	}

	public saveTblMenuAccion(): void {

		if (this.formTblMenuAccion.invalid) {
			this.formTblMenuAccion.markAllAsTouched();
			this._alertsService.alertMessage(messages.informativeTitle, messages.camposVacios, messages.isInfo);
			return;
		}

		const currentTblMenuAccion: any = this.currentTblMenuAccion;

		if (currentTblMenuAccion.idMenuAccion) {
			this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmUpdate, () => {
				this._loaderService.display(true);
				this._tblMenuAccionUseCase.updateTblMenuAccion(currentTblMenuAccion as IUpdateTblMenuAccionViewModel).then(result => {
					this._loaderService.display(false);
					if (result.ok) {
						this._alertsService.alertMessage(messages.successTitle, messages.successUpdate, messages.isSuccess);
						this._router.navigateByUrl(this.routeCore.ADMIN.BASE + this.routeCore.ADMIN.TBLMENUACCION.INDEX);
					} else {
						this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
					}
				});
			});
		return;
	}

		this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmSave, () => {
			this._loaderService.display(true);
			this._tblMenuAccionUseCase.saveTblMenuAccion(currentTblMenuAccion as ISaveTblMenuAccionViewModel).then(result => {
				this._loaderService.display(false);
				if (result.ok) {
					this._alertsService.alertMessage(messages.successTitle, messages.successSave, messages.isSuccess);
					this.formTblMenuAccion.get('idMenuAccion')!.patchValue(result.data?.idMenuAccion);
					this._router.navigateByUrl(this.routeCore.ADMIN.BASE + this.routeCore.ADMIN.TBLMENUACCION.INDEX);
				} else {
					this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
				}
			});
		});
	}

	public cancelTblMenuAccion(): void{
		this.closeTblMenuAccion.emit(true);
		this._location.back();
	}

	private get currentTblMenuAccion(): IUpdateTblMenuAccionViewModel {
		return this.formTblMenuAccion.value as IUpdateTblMenuAccionViewModel;
	}

  public loadDataMenu(idMenu:number){
    const currentTblMenu: IGetTblMenuByIdViewModel = {idMenu}
    this._loaderService.display(true);
		this._tblMenuUseCase.getTblMenuById(currentTblMenu).then(result => {
				this._loaderService.display(false);
				if (result.ok) {
          this.tblMenuRecords = result.data!;
          console.log("resultado",result)
          this.title ='Listado acciones para el menú ' + this.tblMenuRecords?.nombre
					//this.tblMenuAccionRecords = result.data!;
				} else {
					this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
				}
				//this.loading = false;
			});
  }
  public loadDataAcciones(){
    this._loaderService.display(true);
		this._tblAccionUseCase.getAllTblAccion().then(result => {
				this._loaderService.display(false);
				if (result.ok) {
          this.optionsAccion = result.data!;
          console.log("resultado optionsAccion",result)
				} else {
					this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
				}
			});
  }
}
