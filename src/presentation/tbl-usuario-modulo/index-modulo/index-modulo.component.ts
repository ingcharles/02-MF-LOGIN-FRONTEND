import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { LoaderService } from '../../../data/base/services/loader.service';
import { IGetPaginateByTblMenuEntityIdMenuViewModel, IGetTblUsuarioModuloByIdViewModel, IGetTblUsuarioModuloViewModel } from '../../../domain/tbl-usuario-modulo/viewModels/i-tbl-usuario-modulo.viewModel';
import { TblUsuarioModuloUseCase } from '../../../domain/tbl-usuario-modulo/usesCases/tbl-usuario-modulo.usecase';
import { IUsuarioModulo } from '../../../domain/tbl-usuario-modulo/viewModels/i-usuario-modulo';

@Component({
  selector: 'app-index-modulos',
  standalone: true,
  imports: [],
  templateUrl: './index-modulo.component.html',
  styleUrls: ['./index-modulo.component.scss']
})
export class IndexModuloComponent implements OnInit {
  _loaderService: LoaderService = inject(LoaderService);
  _tblUsuarioModuloUseCase: TblUsuarioModuloUseCase = inject(TblUsuarioModuloUseCase);
  public page: number = 0;
  public size: number = 10;
  public search: string = '';
  public sortBy: string = 'idUsuarioModulo';
  public sortDirection: string = 'ASC';
  @Output() outputSistemaSeleccionado = new EventEmitter<number>();

  usuarioModulos: IUsuarioModulo[] = [];
  // [
  //   { idSistema: 1, rutaSistema: 'sistema-uno', nombreSistema: 'Sistema Uno', iconoSistema: 'fa fa-user', colorSistema: 'rojo100', descripcionSistema: 'Descripcion SIstema' },
  //   { idSistema: 2, rutaSistema: 'sistema-dos', nombreSistema: 'Sistema Dos', iconoSistema: 'fa fa-dark', colorSistema: 'verde100', descripcionSistema: 'Descripcion SIstema' },
  //   { idSistema: 3, rutaSistema: 'sistema-uno', nombreSistema: 'Sistema Tres', iconoSistema: 'fa fa-file', colorSistema: 'azul100', descripcionSistema: 'Descripcion SIstema' },
  //   { idSistema: 4, rutaSistema: 'sistema-uno', nombreSistema: 'Sistema Cuatro', iconoSistema: 'fa fa-user', colorSistema: 'amarillo100', descripcionSistema: 'Descripcion SIstema' },
  //   { idSistema: 5, rutaSistema: 'sistema-uno', nombreSistema: 'Sistema Cinco', iconoSistema: 'fa fa-user', colorSistema: 'anaranjado100', descripcionSistema: 'Descripcion SIstema' }]

  ngOnInit(): void {
    this.loadModule();
  }
  clickSistema(idSistema: number) {
    this.outputSistemaSeleccionado.emit(idSistema);
    this.sendUsuarioModulo(idSistema)
  }

  public loadModule(): void {
    const tblUsuarioModulo: IGetPaginateByTblMenuEntityIdMenuViewModel = { pagination: { page: this.page, size: this.size, search: this.search, sortBy: this.sortBy, sortDirection: this.sortDirection }, idUsuario: 1 }
    this._loaderService.display(true);
    this._tblUsuarioModuloUseCase.getPaginateByTblUsuarioEntityIdUsuario(tblUsuarioModulo).then(result => {
      this._loaderService.display(false);
      if (result.ok) {
        console.log("result", result)
        this.usuarioModulos = result.data.content;
      }
    });
  }

  sendUsuarioModulo(data: any) {

    const event = new CustomEvent('mfIdUsuarioModulo', { detail: data });
    window.dispatchEvent(event);
  }
}
