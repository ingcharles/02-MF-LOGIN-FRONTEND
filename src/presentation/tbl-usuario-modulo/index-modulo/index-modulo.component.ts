import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { IModulo, IModuloUsuario } from '../../../domain/tbl-usuario-modulo/viewModels/i-modulo';
import { LoaderService } from '../../../data/base/services/loader.service';
import { IGetTblUsuarioModuloByIdViewModel, IGetTblUsuarioModuloViewModel } from '../../../domain/tbl-usuario-modulo/viewModels/i-tbl-usuario-modulo.viewModel';
import { TblUsuarioModuloUseCase } from '../../../domain/tbl-usuario-modulo/usesCases/tbl-usuario-modulo.usecase';

@Component({
  selector: 'app-index-modulos',
  standalone: true,
  imports: [],
  templateUrl: './index-modulo.component.html',
  styleUrl: './index-modulo.component.scss'
})
export class IndexModuloComponent implements OnInit {
  _loaderService: LoaderService = inject(LoaderService);
  _tblUsuarioModuloUseCase: TblUsuarioModuloUseCase = inject(TblUsuarioModuloUseCase);

  @Output() outputSistemaSeleccionado = new EventEmitter<number>();

  sistemas: IModuloUsuario[] = [];
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
      console.log("idSistema",idSistema)
      this.outputSistemaSeleccionado.emit(idSistema);
    }

    public loadModule(): void {
      //this.loading = true;
      const currentTblUsuarioModulo: IGetTblUsuarioModuloViewModel = {idUsuario: 1 }
      this._tblUsuarioModuloUseCase.getTblUsuarioModuloFindByIdUsuario(currentTblUsuarioModulo).then(obs => {
        this._loaderService.display(true);
        obs.subscribe((result: any) => {
          this._loaderService.display(false);
          console.log("result1:",result)
          if (result.ok) {
            console.log("result",result)
            this.sistemas = result.data;
            this.sendData(result.data)
            //this.tblUsuarioModuloRecords = result.data?.content!;
            //this.totalElements = result.data?.totalElements;
          } else {
           // this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
          }
          //this.loading = false;
        });
      });
    }

    sendData(data: any) {

      const event = new CustomEvent('mfData', { detail: data });
      window.dispatchEvent(event);
    }
  }
