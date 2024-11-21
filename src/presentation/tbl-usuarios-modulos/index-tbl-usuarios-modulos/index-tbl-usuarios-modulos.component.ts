/**
* Vista index-tbl-usuarios-modulos.component.ts
*
* @author  Carlos Anchundia
* @date    22-10-2024
* @name    IndexTblUsuariosModulosComponent
* @package presentation
* @subpackage tbl-usuarios-modulos
*/

import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { messages } from '../../../data/base/constants/messages';
import { AlertsService } from '../../../data/base/services/alerts.service';
import { LoaderService } from '../../../data/base/services/loader.service';
import { TblUsuariosModulosUseCase } from '../../../domain/tbl-usuarios-modulos/usesCases/tbl-usuarios-modulos.usecase';
import { IGetTblUsuariosModulosPaginadoViewModel } from '../../../domain/tbl-usuarios-modulos/viewModels/i-tbl-usuarios-modulos.viewModel';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
	selector: 'index-tbl-usuarios-modulos-page',
	templateUrl: './index-tbl-usuarios-modulos.component.html',
	styleUrls: ['./index-tbl-usuarios-modulos.component.scss'],
	standalone: true,
	imports: [CommonModule, RouterModule, PanelModule, TableModule, TagModule, ButtonModule, IconFieldModule, InputIconModule, InputTextModule, ToolbarModule]
})

export class IndexTblUsuariosModulosComponent implements OnInit {

	constructor(){ }

	_fb: FormBuilder = inject(FormBuilder);
	_loaderService: LoaderService = inject(LoaderService);
	_alertsService: AlertsService = inject(AlertsService);
	_TblUsuariosModulosUseCase: TblUsuariosModulosUseCase = inject(TblUsuariosModulosUseCase);

	public page: number = 0;
	public size: number = 10;
	public totalElements: number = 0;
	public pageSizeOptions: number[] = [5, 10, 25, 50, 100];
	public title:string = 'Listado TblUsuariosModulos';
	public tblUsuariosModulosRecords: any[] = [];
	public search: string = '';
	public sortBy: string = 'idUsuarioModulo';
	public sortDirection: string = 'ASC';
	public loading: boolean = false;

	public ngOnInit(): void {
	}

	public loadData(): void {
		this.loading = true;
		const currentTblUsuariosModulos: IGetTblUsuariosModulosPaginadoViewModel = {page: this.page, size: this.size, search: this.search, sortBy: this.sortBy, sortDirection: this.sortDirection }
		this._TblUsuariosModulosUseCase.getTblUsuariosModulosPaginado(currentTblUsuariosModulos).then(obs => {
			this._loaderService.display(true);
			obs.subscribe((result: any) => {
				this._loaderService.display(false);
				if (result.ok) {
					this.tblUsuariosModulosRecords = result.data?.content!;
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
		this.sortBy = event.sortField || 'idUsuarioModulo';
		this.sortDirection = event.sortOrder === 1 ? 'ASC' : 'DESC';
		this.loadData();
	}

}
