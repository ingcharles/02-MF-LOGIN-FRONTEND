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

	public routeCore = ROUTES_CORE;
	public page: number = 0;
	public size: number = 10;
	public pageSizeOptions: number[] = [5, 10, 25, 50, 100];
	public title:string = 'Listado TblAccion';
	public tblAccionRecords: IPaginado<IGetTblAccionPaginadoRsViewModel> | null = null;
	public search: string = '';
	public sortBy: string = 'idAccion';
	public sortDirection: string = 'ASC';
	public loading: boolean = false;

	public ngOnInit(): void {
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
		this.sortBy = event.sortField || 'idAccion';
		this.sortDirection = event.sortOrder === 1 ? 'ASC' : 'DESC';
		this.loadData();
	}

}
