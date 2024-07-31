
/**
* Vista create-localizacion-prueba-uno.component.ts
*
* @author  Carlos Anchundia
* @date    08-05-2024
* @name    CreateAdminPazSalvoComponent
* @package presentation
* @subpackage localizacion-prueba-uno
*/

import { CommonModule, DatePipe, Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, PLATFORM_ID, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { messages } from '../../../data/base/constants/messages';
import { TooltipDirective } from '../../../data/base/directives/tooltip-directive';
import { AlertsService } from '../../../data/base/services/alerts.service';
import { LoaderService } from '../../../data/base/services/loader.service';
import { UtilsService } from '../../../data/base/services/utils.service';
import { ValidatorsService } from '../../../data/base/services/validators.service';
import { IGetAdminPazSalvoByIdViewModel, ISaveAdminPazSalvoViewModel, IUpdateAdminPazSalvoViewModel } from '../../../domain/localizacion-prueba-uno/viewModels/i-admin-paz-salvo.viewModel';
import { AdminPazSalvoUseCase } from '../../../domain/localizacion-prueba-uno/usesCases/admin-paz-salvo.usecase';

@Component({
	selector: 'create-firma-admin-paz-salvo-page',
  templateUrl: './create-firma-admin-paz-salvo.component.html',
  styleUrl: './create-firma-admin-paz-salvo.component.scss',
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		TooltipDirective,
	],
	providers: [],
	host: {ngSkipHydration: 'true' }
})

export class CreateFirmaAdminPazSalvoComponent implements OnInit {

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
	_adminPazSalvoUseCase: AdminPazSalvoUseCase = inject(AdminPazSalvoUseCase);

	public title = 'Formulario AdminPazSalvo';

	public formAdminPazSalvo!: FormGroup;
	navigated = false;
	sub: any;
	@Output() closeAdminPazSalvo = new EventEmitter();


	ngOnInit(): void {

	this._utilsService.showTooltip(this._platformId);

	this.formAdminPazSalvo = new FormGroup({
		campoSerial: new FormControl(null, Validators.compose([Validators.max(999999999)])),
		campoFechaUnicio: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(10)])),
		campoFechaFin: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(10)])),
		campoDescripcion: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(250)])),
	});

	this.sub = this._activatedRoute.params.subscribe(params => {
		this.navigated = true;
		const id = params['id'];
		if (id != undefined) {
			this.navigated = true;
			let campoSerial: IGetAdminPazSalvoByIdViewModel = { campoSerial: id };
			this._adminPazSalvoUseCase.getAdminPazSalvoById(campoSerial).then(obs => {
				obs.subscribe((result) => {
					this._loaderService.display(false);
					if (result.ok) {
						this.formAdminPazSalvo.reset(result.data);
						if (result.data?.campoFechaUnicio != null) {
							var datePipe = new DatePipe('en-US');
							this.formAdminPazSalvo.get('campoFechaUnicio')?.setValue(datePipe.transform(result.data?.campoFechaUnicio, 'yyyy-MM-dd'));
						}
						if (result.data?.campoFechaFin != null) {
							var datePipe = new DatePipe('en-US');
							this.formAdminPazSalvo.get('campoFechaFin')?.setValue(datePipe.transform(result.data?.campoFechaFin, 'yyyy-MM-dd'));
						}
						} else {
							this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
						}
					});
				});
			};
		});
	};

	saveAdminPazSalvo(): void {
		if (this.formAdminPazSalvo.invalid) {
			this.formAdminPazSalvo.markAllAsTouched();
			this._alertsService.alertMessage(messages.informativeTitle, messages.camposVacios, messages.isInfo);
			return;
		}
		const currentAdminPazSalvo:any = this.currentAdminPazSalvo;
		currentAdminPazSalvo.campoFechaUnicio = new Date(this.formAdminPazSalvo.value.campoFechaUnicio).toISOString();
		currentAdminPazSalvo.campoFechaFin = new Date(this.formAdminPazSalvo.value.campoFechaFin).toISOString();

		if (this.currentAdminPazSalvo.campoSerial) {
			this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmUpdate, () => {
				this._adminPazSalvoUseCase.updateAdminPazSalvo(currentAdminPazSalvo as IUpdateAdminPazSalvoViewModel).then(obs => {
					this._loaderService.display(true);
					obs.subscribe((result) => {
						this._loaderService.display(false);
						if (result.ok) {
							this._alertsService.alertMessage(messages.successTitle, messages.successUpdate, messages.isSuccess);
              this._router.navigateByUrl('index-localizacion-prueba-uno');
						} else {
							this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
						}
					});
				});
			});
			return;
		};

	this._alertsService.alertConfirm(messages.confirmationTitle, messages.confirmSave, () => {
		this._adminPazSalvoUseCase.saveAdminPazSalvo(currentAdminPazSalvo as ISaveAdminPazSalvoViewModel).then(obs => {
		this._loaderService.display(true);
		obs.subscribe((result) => {
			this._loaderService.display(false);
			if (result.ok) {
			this._alertsService.alertMessage(messages.successTitle, messages.successSave, messages.isSuccess);
				this.formAdminPazSalvo.get('campoSerial')!.patchValue(result.data?.campoSerial);
				this._router.navigateByUrl('index-localizacion-prueba-uno');
			} else {
			this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
				}
			});
		});
	});
	};

	public cancelAdminPazSalvo(): void{
		this.closeAdminPazSalvo.emit(true);
		this._location.back();
	};

	private get currentAdminPazSalvo(): IUpdateAdminPazSalvoViewModel {
		return this.formAdminPazSalvo.value as IUpdateAdminPazSalvoViewModel;
	};

}
