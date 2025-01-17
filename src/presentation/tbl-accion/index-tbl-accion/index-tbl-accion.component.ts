/**
* Vista index-tbl-accion.component.ts
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    IndexTblAccionComponent
* @package presentation
* @subpackage tbl-accion
*/
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { messages } from '../../../data/base/constants/messages';
import { AlertsService } from '../../../data/base/services/alerts.service';
import { LoaderService } from '../../../data/base/services/loader.service';
import { TblAccionUseCase } from '../../../domain/tbl-accion/usesCases/tbl-accion.usecase';
import { IGetTblAccionPaginadoRsViewModel ,IGetTblAccionPaginadoViewModel } from '../../../domain/tbl-accion/viewModels/i-tbl-accion.viewModel';
import { ROUTES_CORE } from '../../../data/base/constants/routes';
import { SharedIndexModule } from './../../shared/shared-index/shared-index.module';
import { IPaginado } from '../../../data/base/interfaces/i-paginado';
import { ColorService } from '../../../data/base/services/color.service';
import { ICatalogo } from '../../../data/base/interfaces/i-catalogo';
import { FontAwesomeService } from '../../../data/base/services/font-awesome.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'index-tbl-accion-page',
	templateUrl: './index-tbl-accion.component.html',
	styleUrls: ['./index-tbl-accion.component.scss'],
	standalone: true,
	imports: [
	SharedIndexModule]
})

export class IndexTblAccionComponent implements OnInit {

	constructor(){ }

	_fb: FormBuilder = inject(FormBuilder);
	_loaderService: LoaderService = inject(LoaderService);
	_alertsService: AlertsService = inject(AlertsService);
	_TblAccionUseCase: TblAccionUseCase = inject(TblAccionUseCase);
  _colorService: ColorService = inject(ColorService);
  _fontAwesomeService: FontAwesomeService = inject(FontAwesomeService);

	public routeCore = ROUTES_CORE;
	public page: number = 0;
	public size: number = 10;
	public pageSizeOptions: number[] = [5, 10, 25, 50, 100];
	public title:string = 'Listado de acción';
	public tblAccionRecords: IPaginado<IGetTblAccionPaginadoRsViewModel> | null = null;
  public optionsIcon:ICatalogo[] = [];
  public optionsColor:ICatalogo[] = [];
	public search: string = '';
	public sortBy: string = 'nombre';
	public sortDirection: string = 'ASC';
	public loading: boolean = false;
  public sub: any;

	public ngOnInit(): void {
    this.optionsIcon = this._fontAwesomeService.loadIcons();
    this.optionsColor = this._colorService.loadColorsAccion();
	}

	public loadData(): void {
		this.loading = true;
		const currentTblAccion: IGetTblAccionPaginadoViewModel = {page: this.page, size: this.size, search: this.search, sortBy: this.sortBy, sortDirection: this.sortDirection }
		this._TblAccionUseCase.getPaginadoTblAccion(currentTblAccion).then(result => {
			this._loaderService.display(true);
				this._loaderService.display(false);
				if (result.ok) {
					this.tblAccionRecords = result.data!;
				} else {
					this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
				}
				this.loading = false;
			});
	}

	public inputSearch(event: any): void {
		this.search = event.target.value;
		this.loadData();
	}

	public changePage(event: any): void {
		this.size = event.target.value;
		this.page = 0;
		this.loadData();
	}

	public getStatus(status: boolean): any {
		switch (status) {
			case true:
				return 'primary';
			case false:
				return 'danger';
			default:
				return 'warning';
		}
	}

	public clearSearch(): void {
		this.search = '';
		this.loadData();
	}

	public lazyLoadData(event: any) {
		this.page = event.first / event.rows;
		this.size = event.rows
		this.sortBy = event.sortField || 'nombre';
		this.sortDirection = event.sortOrder === 1 ? 'ASC' : 'DESC';
		this.loadData();
	}

  getColorDetails(value: string): ICatalogo {
    return this.optionsColor.find(color => color.value === value)!;
  }

  getIconDetails(value: string): ICatalogo {
    return this.optionsIcon.find(icon => icon.value === value)!
  }
}
