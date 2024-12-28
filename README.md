# 02MFADMINPAZSALVO

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## implementar acciones dinamicas

  public tblAccionButtomIndexHeaderRecords: IGetTblMenuAccionRsViewModel[] | null = null;
  public tblAccionButtomIndexBodyRecords: IGetTblMenuAccionRsViewModel[] | null = null;
 
    this.loadAcciones(this._localStorageService.getItem<number>('idPerfil')!,this._localStorageService.getItem<number>('idMenu')!)
  public  loadAcciones(idPerfil:number, idMenu:number): void{
    this.loading = true;
    const currentTblMenuAccion: IGetTblMenuAccionViewModel = {idPerfil, idMenu }
    this._loaderService.display(true);
    this._tblMenuAccionUseCase.getByTblMenuEntityIdMenuAndEstado(currentTblMenuAccion).then(result => {
      this._loaderService.display(false);
      if (result.ok) {
        this.tblAccionButtomIndexHeaderRecords = result.data!.filter((record:any) => record.accion.tipo === messages.buttomIndexHeader);
        this.tblAccionButtomIndexBodyRecords = result.data!!.filter((record:any) => record.accion.tipo === messages.buttomIndexBody);;
      } else {
        this._alertsService.alertMessage(messages.warningTitle, result.message, messages.isWarning);
      }
      this.loading = false;
    });
  }

  @for (item of tblAccionButtomIndexHeaderRecords; track $index) {
      <p-button [severity]="item.accion?.color" label="{{item.accion?.nombre}}" icon="{{item.accion?.icono}}"
        class="mr-2" [routerLink]="[routeCore.ADMIN.BASE + routeCore.ADMIN.TBLPERFIL.INDEX + item.accion?.ruta]" />
      }
      
  @for (itemAccion of tblAccionButtomIndexBodyRecords; track $index) {
          <p-button [severity]="itemAccion.accion?.color" title="{{itemAccion.accion?.nombre}}"
            icon="{{itemAccion.accion?.icono}}" class="mr-2" size="small"
            [routerLink]="[routeCore.ADMIN.BASE + itemAccion.accion?.ruta + item.idPerfil]" />
          }
