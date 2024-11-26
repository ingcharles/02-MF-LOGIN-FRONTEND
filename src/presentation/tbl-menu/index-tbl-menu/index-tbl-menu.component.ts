/**
* Vista index-tbl-menu.component.ts
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    IndexTblMenuComponent
* @package presentation
* @subpackage tbl-menu
*/

import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { messages } from '../../../data/base/constants/messages';
import { AlertsService } from '../../../data/base/services/alerts.service';
import { LoaderService } from '../../../data/base/services/loader.service';
import { TblMenuUseCase } from '../../../domain/tbl-menu/usesCases/tbl-menu.usecase';
import { IGetTblMenuPaginadoViewModel } from '../../../domain/tbl-menu/viewModels/i-tbl-menu.viewModel';
import { ROUTES_CORE } from '../../../data/base/constants/routes';
import { SharedIndexModule } from './../../shared/shared-index/shared-index.module';

@Component({
	selector: 'index-tbl-menu-page',
	templateUrl: './index-tbl-menu.component.html',
	styleUrls: ['./index-tbl-menu.component.scss'],
	standalone: true,
	imports: [
	SharedIndexModule]
})

export class IndexTblMenuComponent implements OnInit {

	constructor(){ }

	_fb: FormBuilder = inject(FormBuilder);
	_loaderService: LoaderService = inject(LoaderService);
	_alertsService: AlertsService = inject(AlertsService);
	_TblMenuUseCase: TblMenuUseCase = inject(TblMenuUseCase);

	public routeCore = ROUTES_CORE;
	public page: number = 0;
	public size: number = 10;
	public totalElements: number = 0;
	public pageSizeOptions: number[] = [5, 10, 25, 50, 100];
	public title:string = 'Listado de menú';
	public tblMenuRecords: any[] = [];
	public search: string = '';
	public sortBy: string = 'nombre';
	public sortDirection: string = 'ASC';
	public loading: boolean = false;

	public ngOnInit(): void {
	}

	public loadData(): void {
		this.loading = true;
		const currentTblMenu: IGetTblMenuPaginadoViewModel = {page: this.page, size: this.size, search: this.search, sortBy: this.sortBy, sortDirection: this.sortDirection }
		this._TblMenuUseCase.getTblMenuPaginado(currentTblMenu).then(obs => {
			this._loaderService.display(true);
			obs.subscribe((result: any) => {
				this._loaderService.display(false);
				if (result.ok) {
					this.tblMenuRecords = result.data?.content!;
					this.totalElements = result.data?.totalElements;
				} else {
					this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
				}
				this.loading = false;
			});
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

}
