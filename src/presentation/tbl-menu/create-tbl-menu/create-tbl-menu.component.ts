/**
* Vista create-tbl-menu.component.ts
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    CreateTblMenuComponent
* @package presentation
* @subpackage tbl-menu
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
import { TblMenuUseCase } from '../../../domain/tbl-menu/usesCases/tbl-menu.usecase';
import { IGetTblMenuByIdViewModel, IGetTblMenuRsViewModel, IGetTblMenuViewModel, ISaveTblMenuViewModel, IUpdateTblMenuViewModel } from '../../../domain/tbl-menu/viewModels/i-tbl-menu.viewModel';
import { ROUTES_CORE } from '../../../data/base/constants/routes';
import { SharedCreateModule } from './../../shared/shared-create/shared-create.module';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
	selector: 'create-tbl-menu-page',
	templateUrl: './create-tbl-menu.component.html',
	styleUrls: ['./create-tbl-menu.component.scss'],
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

export class CreateTblMenuComponent implements OnInit {

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
	_tblMenuUseCase: TblMenuUseCase = inject(TblMenuUseCase);

	@Output() closeTblMenu = new EventEmitter();
	public routeCore = ROUTES_CORE;
	public title = 'Formulario TblMenu';
	public formTblMenu!: FormGroup;
	public navigated = false;
	public sub: any;
	public optionsEstado = [
	{name: 'Activo', id: 'Activo' },
	{name: 'Inactivo', id: 'Inactivo' },
	//{name: 'Activo', id: 3 }
	];
  public optionsMenuPadre: IGetTblMenuRsViewModel[] = [];


	async ngOnInit(): Promise<void> {

		this.formTblMenu = new FormGroup({
			idMenu: new FormControl(null, Validators.compose([Validators.max(999999999)])),
			idMenuPadre: new FormControl(null, Validators.compose([])),
			nemonico: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(64)])),
			nombre: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(64)])),
			imagen: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(64)])),
			ruta: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(128)])),
			orden: new FormControl(null, Validators.compose([Validators.required, Validators.min(1), Validators.max(999999999)])),
			estado: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(64)])),
			//fechaRegistro: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(8)])),
			//idUsuarioRegistro: new FormControl(null, Validators.compose([Validators.required, Validators.min(1), Validators.max(999999999)])),
		});

    await this.loadDataMenuPadre();

		this.sub = this._activatedRoute.params.subscribe(async params => {
			this.navigated = true;
			const idParametro = params['id'];
			if (idParametro != undefined) {
				this.navigated = true;
				let idMenu: IGetTblMenuByIdViewModel = { idMenu: idParametro };
				await this._tblMenuUseCase.getTblMenuById(idMenu).then(result => {
				//	obs.subscribe((result) => {
						this._loaderService.display(false);
						if (result.ok) {
							this.formTblMenu.reset(result.data);
              this.formTblMenu.get('idMenuPadre')?.setValue(this.findMenuPadre(result.data?.menuPadre?.idMenu!)?.idMenu);
							if (result.data?.fechaRegistro != null) {
								this.formTblMenu.get('fechaRegistro')?.setValue(new Date(result.data?.fechaRegistro));
							}
						} else {
							this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
						}
					//});
				});
			};
		});


	}

	public saveTblMenu(): void {

		if (this.formTblMenu.invalid) {
			this.formTblMenu.markAllAsTouched();
			this._alertsService.alertMessage(messages.informativeTitle, messages.camposVacios, messages.isInfo);
			return;
		}

		const currentTblMenu: any = this.currentTblMenu;

		if (currentTblMenu.idMenu) {
			this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmUpdate, () => {
				this._tblMenuUseCase.updateTblMenu(currentTblMenu as IUpdateTblMenuViewModel).then(obs => {
					this._loaderService.display(true);
					obs.subscribe((result) => {
						this._loaderService.display(false);
						if (result.ok) {
							this._alertsService.alertMessage(messages.successTitle, messages.successUpdate, messages.isSuccess);
							this._router.navigateByUrl(this.routeCore.ADMIN.BASE + this.routeCore.ADMIN.TBLMENU.INDEX);
						} else {
							this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
						}
					});
				});
			});
			return;
		}

		this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmSave, () => {
			//currentTblMenu['estado']= this.formTblMenu.get('estado')?.value?.id;
      //console.log("formTblMenu",this.formTblMenu.get('estado')?.value?.id)
      //console.log("currentTblMenu",currentTblMenu)
      this._tblMenuUseCase.saveTblMenu(currentTblMenu as ISaveTblMenuViewModel).then(obs => {
				this._loaderService.display(true);
				obs.subscribe((result) => {
					this._loaderService.display(false);
					if (result.ok) {
						this._alertsService.alertMessage(messages.successTitle, messages.successSave, messages.isSuccess);
						this.formTblMenu.get('idMenu')!.patchValue(result.data?.idMenu);
						this._router.navigateByUrl(this.routeCore.ADMIN.BASE + this.routeCore.ADMIN.TBLMENU.INDEX);
					} else {
						this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
					}
				});
			});
		});
	}

	public cancelTblMenu(): void{
		this.closeTblMenu.emit(true);
		this._location.back();
	}

	private get currentTblMenu(): IUpdateTblMenuViewModel {
		return this.formTblMenu.value as IUpdateTblMenuViewModel;
	}


  public async loadDataMenuPadre(): Promise<void> {
		await this._tblMenuUseCase.getAllTblMenu().then((result: any) => {
			this._loaderService.display(true);
			//obs.subscribe((result: any) => {
				this._loaderService.display(false);
				if (result.ok) {

					this.optionsMenuPadre = result.data;
          console.log("result11:",this.optionsMenuPadre);
					//this.totalElements = result.data?.totalElements;
				} else {
					this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
				}
				//this.loading = false;
			//});
		});
	}

  findMenuPadre(idMenu: number): IGetTblMenuRsViewModel | undefined {
    return this.optionsMenuPadre.find(item => item.idMenu === idMenu);
  }

}
