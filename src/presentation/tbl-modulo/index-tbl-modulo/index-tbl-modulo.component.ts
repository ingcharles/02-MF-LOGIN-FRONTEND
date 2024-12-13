import { SharedIndexModule } from './../../shared/shared-index/shared-index.module';
/**
* Vista index-tbl-modulo.component.ts
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    IndexTblModuloComponent
* @package presentation
* @subpackage tbl-modulo
*/

import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { messages } from '../../../data/base/constants/messages';
import { AlertsService } from '../../../data/base/services/alerts.service';
import { LoaderService } from '../../../data/base/services/loader.service';
import { TblModuloUseCase } from '../../../domain/tbl-modulo/usesCases/tbl-modulo.usecase';
import { IGetTblModuloPaginadoViewModel } from '../../../domain/tbl-modulo/viewModels/i-tbl-modulo.viewModel';
import { ROUTES_CORE } from '../../../data/base/constants/routes';


@Component({
	selector: 'index-tbl-modulo-page',
	templateUrl: './index-tbl-modulo.component.html',
	styleUrls: ['./index-tbl-modulo.component.scss'],
	standalone: true,
	imports: [SharedIndexModule]
})

export class IndexTblModuloComponent implements OnInit {

	constructor(){ }

	_fb: FormBuilder = inject(FormBuilder);
	_loaderService: LoaderService = inject(LoaderService);
	_alertsService: AlertsService = inject(AlertsService);
	_TblModuloUseCase: TblModuloUseCase = inject(TblModuloUseCase);
  public routeCore = ROUTES_CORE;
	public page: number = 0;
	public size: number = 10;
	public totalElements: number = 0;
	public pageSizeOptions: number[] = [5, 10, 25, 50, 100];
	public title:string = 'Listado de módulos';
	public tblModuloRecords: any[] = [];
	public search: string = '';
	public sortBy: string = 'nombre';
	public sortDirection: string = 'ASC';
	public loading: boolean = false;

	public ngOnInit(): void {

	}

	public loadData(): void {
		const currentTblModulo: IGetTblModuloPaginadoViewModel = {page: this.page, size: this.size, search: this.search, sortBy: this.sortBy, sortDirection: this.sortDirection }
		this._TblModuloUseCase.getPaginadoTblModulo(currentTblModulo).then(result => {
			this._loaderService.display(true);
				this._loaderService.display(false);
				if (result.ok) {
					this.tblModuloRecords = result.data?.content!;
				} else {
					this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
				}
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
