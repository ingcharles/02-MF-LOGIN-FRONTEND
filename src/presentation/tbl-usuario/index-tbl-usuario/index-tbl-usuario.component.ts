/**
* Vista index-tbl-usuario.component.ts
*
* @author  Carlos Anchundia
* @date    03-12-2024
* @name    IndexTblUsuarioComponent
* @package presentation
* @subpackage tbl-usuario
*/
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { messages } from '../../../data/base/constants/messages';
import { AlertsService } from '../../../data/base/services/alerts.service';
import { LoaderService } from '../../../data/base/services/loader.service';
import { TblUsuarioUseCase } from '../../../domain/tbl-usuario/usesCases/tbl-usuario.usecase';
import { IGetTblUsuarioPaginadoRsViewModel ,IGetTblUsuarioPaginadoViewModel } from '../../../domain/tbl-usuario/viewModels/i-tbl-usuario.viewModel';
import { ROUTES_CORE } from '../../../data/base/constants/routes';
import { SharedIndexModule } from './../../shared/shared-index/shared-index.module';
import { IPaginado } from '../../../data/base/interfaces/i-paginado';

@Component({
	selector: 'index-tbl-usuario-page',
	templateUrl: './index-tbl-usuario.component.html',
	styleUrls: ['./index-tbl-usuario.component.scss'],
	standalone: true,
	imports: [
	SharedIndexModule]
})

export class IndexTblUsuarioComponent implements OnInit {

	constructor(){ }
	_fb: FormBuilder = inject(FormBuilder);
	_loaderService: LoaderService = inject(LoaderService);
	_alertsService: AlertsService = inject(AlertsService);
	_TblUsuarioUseCase: TblUsuarioUseCase = inject(TblUsuarioUseCase);

	public routeCore = ROUTES_CORE;
	public page: number = 0;
	public size: number = 10;
	public pageSizeOptions: number[] = [5, 10, 25, 50, 100];
	public title:string = 'Listado TblUsuario';
	public tblUsuarioRecords: IPaginado<IGetTblUsuarioPaginadoRsViewModel> | null = null;
	public search: string = '';
	public sortBy: string = 'idUsuario';
	public sortDirection: string = 'ASC';
	public loading: boolean = false;

	public ngOnInit(): void {
	}

	public loadData(): void {
		this.loading = true;
		const currentTblUsuario: IGetTblUsuarioPaginadoViewModel = {page: this.page, size: this.size, search: this.search, sortBy: this.sortBy, sortDirection: this.sortDirection }
		this._TblUsuarioUseCase.getPaginadoTblUsuario(currentTblUsuario).then(result => {
			this._loaderService.display(true);
				this._loaderService.display(false);
				if (result.ok) {
					this.tblUsuarioRecords = result.data!;
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
		this.sortBy = event.sortField || 'idUsuario';
		this.sortDirection = event.sortOrder === 1 ? 'ASC' : 'DESC';
		this.loadData();
	}

}
