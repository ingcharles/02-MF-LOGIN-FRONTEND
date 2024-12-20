/**
* Vista index-tbl-menu-accion.component.ts
*
* @author  Carlos Anchundia
* @date    22-11-2024
* @name    IndexTblMenuAccionComponent
* @package presentation
* @subpackage tbl-menu-accion
*/
import { Location } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { messages } from '../../../data/base/constants/messages';
import { AlertsService } from '../../../data/base/services/alerts.service';
import { LoaderService } from '../../../data/base/services/loader.service';
import { TblMenuAccionUseCase } from '../../../domain/tbl-menu-accion/usesCases/tbl-menu-accion.usecase';
import { IGetPaginateByTblMenuEntityIdMenuViewModel, IGetTblMenuAccionPaginadoRsViewModel } from '../../../domain/tbl-menu-accion/viewModels/i-tbl-menu-accion.viewModel';
import { ROUTES_CORE } from '../../../data/base/constants/routes';
import { SharedIndexModule } from './../../shared/shared-index/shared-index.module';
import { IPaginado } from '../../../data/base/interfaces/i-paginado';
import { ActivatedRoute } from '@angular/router';
import { TblMenuUseCase } from '../../../domain/tbl-menu/usesCases/tbl-menu.usecase';
import { IGetTblMenuByIdViewModel } from '../../../domain/tbl-menu/viewModels/i-tbl-menu.viewModel';

@Component({
	selector: 'index-tbl-menu-accion-page',
	templateUrl: './index-tbl-menu-accion.component.html',
	styleUrls: ['./index-tbl-menu-accion.component.scss'],
	standalone: true,
	imports: [
	SharedIndexModule]
})

export class IndexTblMenuAccionComponent implements OnInit {

	constructor(){ }

	_fb: FormBuilder = inject(FormBuilder);
	_loaderService: LoaderService = inject(LoaderService);
	_alertsService: AlertsService = inject(AlertsService);
	_tblMenuAccionUseCase: TblMenuAccionUseCase = inject(TblMenuAccionUseCase);
 	_tblMenuUseCase: TblMenuUseCase = inject(TblMenuUseCase);
  _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
	_location: Location = inject(Location);

	public routeCore = ROUTES_CORE;
	public page: number = 0;
	public size: number = 10;
	public pageSizeOptions: number[] = [5, 10, 25, 50, 100];
	public title:string = 'Listado Menú Acción';
	public tblMenuAccionRecords: IPaginado<IGetTblMenuAccionPaginadoRsViewModel> | null = null;
	public search: string = '';
	public sortBy: string = 'idMenuAccion';
	public sortDirection: string = 'ASC';
	public loading: boolean = false;
	public sub: any;
  public idMenu!: number;
	public ngOnInit(): void {

	}

	public loadData(): void {
    this.sub = this._activatedRoute.params.subscribe(params => {
      this.idMenu = params['idMenu'];
    });

    this.loadDataMenu(this.idMenu);



		const currentTblMenuAccion: IGetPaginateByTblMenuEntityIdMenuViewModel = {pagination:{page: this.page, size: this.size, search: this.search, sortBy: this.sortBy, sortDirection: this.sortDirection},idMenu:this.idMenu }
		this._tblMenuAccionUseCase.getPaginateByTblMenuEntityIdMenu(currentTblMenuAccion).then(result => {
			this._loaderService.display(true);
				this._loaderService.display(false);
				if (result.ok) {
					this.tblMenuAccionRecords = result.data!;
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
		this.sortBy = event.sortField || 'idMenuAccion';
		this.sortDirection = event.sortOrder === 1 ? 'ASC' : 'DESC';
		this.loadData();
	}

  public loadDataMenu(idMenu:number){
    const currentTblMenu: IGetTblMenuByIdViewModel = {idMenu}
		this._tblMenuUseCase.getTblMenuById(currentTblMenu).then(result => {
			this._loaderService.display(true);
				this._loaderService.display(false);
				if (result.ok) {
          this.title = result.data!.nombre
				} else {
					this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
				}
			});
  }

  public cancelTblMenuAccion(): void{
		this._location.back();
	}
}
