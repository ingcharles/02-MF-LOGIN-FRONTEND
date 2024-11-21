/**
* Vista create-tbl-usuarios-modulos.component.ts
*
* @author  Carlos Anchundia
* @date    22-10-2024
* @name    CreateTblUsuariosModulosComponent
* @package presentation
* @subpackage tbl-usuarios-modulos
*/

import { CommonModule, DatePipe, Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, PLATFORM_ID, inject} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { messages } from '../../../data/base/constants/messages';
import { TooltipDirective } from '../../../data/base/directives/tooltip-directive';
import { AlertsService } from '../../../data/base/services/alerts.service';
import { LoaderService } from '../../../data/base/services/loader.service';
import { UtilsService } from '../../../data/base/services/utils.service';
import { ValidatorsService } from '../../../data/base/services/validators.service';
import { TblUsuariosModulosUseCase } from '../../../domain/tbl-usuarios-modulos/usesCases/tbl-usuarios-modulos.usecase';
import { IGetTblUsuariosModulosByIdViewModel, ISaveTblUsuariosModulosViewModel, IUpdateTblUsuariosModulosViewModel } from '../../../domain/tbl-usuarios-modulos/viewModels/i-tbl-usuarios-modulos.viewModel';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
	selector: 'create-tbl-usuarios-modulos-page',
	templateUrl: './create-tbl-usuarios-modulos.component.html',
	styleUrls: ['./create-tbl-usuarios-modulos.component.scss'],
	standalone: true,
	imports: [
		CommonModule,
		
		ReactiveFormsModule,
		//TooltipDirective,
		ButtonModule,
		InputTextModule,
		FieldsetModule,
		CardModule,
		InputMaskModule,
		InputSwitchModule,
		InputTextareaModule,
		TooltipModule,
		CalendarModule,
		InputNumberModule,
		DropdownModule,
		FloatLabelModule,
	],
	providers: [],
	host: {ngSkipHydration: 'true' }
})

export class CreateTblUsuariosModulosComponent implements OnInit {

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
	_tblUsuariosModulosUseCase: TblUsuariosModulosUseCase = inject(TblUsuariosModulosUseCase);

	@Output() closeTblUsuariosModulos = new EventEmitter();
	public title = 'Formulario TblUsuariosModulos';
	public formTblUsuariosModulos!: FormGroup;
	public navigated = false;
	public sub: any;
	public optionsEstado = [
	{name: 'Item 1', id: 1 },
	{name: 'Item 2', id: 2 },
	{name: 'Item 3', id: 3 }
	];

	ngOnInit(): void {

		this.formTblUsuariosModulos = new FormGroup({
			idUsuarioModulo: new FormControl(null, Validators.compose([Validators.max(999999999)])),
			idModulo: new FormControl(null, Validators.compose([Validators.required, Validators.min(1), Validators.max(999999999)])),
			idUsuario: new FormControl(null, Validators.compose([Validators.required, Validators.min(1), Validators.max(999999999)])),
			estado: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(64)])),
		});

		this.sub = this._activatedRoute.params.subscribe(params => {
			this.navigated = true;
			const idParametro = params['id'];
			if (idParametro != undefined) {
				this.navigated = true;
				let idUsuarioModulo: IGetTblUsuariosModulosByIdViewModel = { idUsuarioModulo: idParametro };
				this._tblUsuariosModulosUseCase.getTblUsuariosModulosById(idUsuarioModulo).then(obs => {
					obs.subscribe((result) => {
						this._loaderService.display(false);
						if (result.ok) {
							this.formTblUsuariosModulos.reset(result.data);
							const estado = this.optionsEstado.find((item: any) => item.id == result.data?.estado!);
							this.formTblUsuariosModulos.get('estado')?.setValue(estado);
						} else {
							this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
						}
					});
				});
			};
		});
	}

	public saveTblUsuariosModulos(): void {

		if (this.formTblUsuariosModulos.invalid) {
			this.formTblUsuariosModulos.markAllAsTouched();
			this._alertsService.alertMessage(messages.informativeTitle, messages.camposVacios, messages.isInfo);
			return;
		}

		const currentTblUsuariosModulos: any = this.currentTblUsuariosModulos;
		currentTblUsuariosModulos.idUsuarioModulo = currentTblUsuariosModulos.idUsuarioModulo.id;

		if (this.currentTblUsuariosModulos.idUsuarioModulo) {
			this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmUpdate, () => {
				this._tblUsuariosModulosUseCase.updateTblUsuariosModulos(currentTblUsuariosModulos as IUpdateTblUsuariosModulosViewModel).then(obs => {
					this._loaderService.display(true);
					obs.subscribe((result) => {
						this._loaderService.display(false);
						if (result.ok) {
							this._alertsService.alertMessage(messages.successTitle, messages.successUpdate, messages.isSuccess);
							this._router.navigateByUrl('index-tbl-usuarios-modulos');
						} else {
							this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
						}
					});
				});
			});
			return;
		}

		this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmSave, () => {
			this._tblUsuariosModulosUseCase.saveTblUsuariosModulos(currentTblUsuariosModulos as ISaveTblUsuariosModulosViewModel).then(obs => {
				this._loaderService.display(true);
				obs.subscribe((result) => {
					this._loaderService.display(false);
					if (result.ok) {
						this._alertsService.alertMessage(messages.successTitle, messages.successSave, messages.isSuccess);
						this.formTblUsuariosModulos.get('idUsuarioModulo')!.patchValue(result.data?.idUsuarioModulo);
						this._router.navigateByUrl('index-tbl-usuarios-modulos');
					} else {
						this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
					}
				});
			});
		});
	}

	public cancelTblUsuariosModulos(): void{
		this.closeTblUsuariosModulos.emit(true);
		this._location.back();
	}

	private get currentTblUsuariosModulos(): IUpdateTblUsuariosModulosViewModel {
		return this.formTblUsuariosModulos.value as IUpdateTblUsuariosModulosViewModel;
	}

}
