import { inject, Injectable } from "@angular/core";
import { filter, from, map, mergeMap, Observable, Subject } from "rxjs";
import { TblPerfilMenuAccionUseCase } from "../../../domain/tbl-perfil-menu-accion/usesCases/tbl-perfil-menu-accion.usecase";

@Injectable({
  providedIn: 'root'
})
export class MfEventService {
  private events = new Subject<any>();
  constructor(private _tblPerfilMenuAccionUseCase: TblPerfilMenuAccionUseCase) {
      console.log('TblPerfilMenuAccionUseCase inyectado:', this._tblPerfilMenuAccionUseCase)
  }

  emit(eventName: string, payload: any): void {
    console.log("emit mf:",eventName,payload)
    this.events.next({ eventName, payload });
  }

  on(eventName: string): Observable<any> {
    console.log("on mf:", eventName);

    return new Observable((observer) => {
      console.log("_tblPerfilMenuAccionUseCase",this._tblPerfilMenuAccionUseCase)

      // Primero se llama al servicio
      this._tblPerfilMenuAccionUseCase
        .getAllTblPerfilMenuAccion()
        .then((result) => {
          if (result.ok) {
            console.log("Datos del servicio:", result.data);
            // Emitir el evento con los datos del servicio
            this.events.asObservable().subscribe({
              next: (event) => {
                if (event.eventName === eventName) {
                  observer.next({
                    payload: event.payload,
                    serviceData: result.data,
                  });
                }
              },
              error: (err) => observer.error(err),
            });
          } else {
            observer.error(new Error(result.message));
          }
        })
        .catch((err) => observer.error(err));
    });
  }

  /*on(eventName: string): Observable<any> {
    console.log("on mf:",eventName)
    return this.events.asObservable().pipe(
      filter(event => event.eventName == eventName),
      map(event => event.payload)
    );
  }

  getAllPerfilMenuAccionObservable(): Observable<any> {
    return from(this._tblPerfilMenuAccionUseCase.getAllTblPerfilMenuAccion());
  }*/
    /*on(eventName: string): Observable<any> {
      let a = this._tblPerfilMenuAccionUseCase.getAllTblPerfilMenuAccion().then(result => {
        console.log("result",result);
        if (result.ok) {
          console.log("result",result);
         // return { payload: event.payload, serviceData: result.data };
        } else {
          throw new Error(result.message);
        }});
        console.log("a:", a);
      console.log("on mf:", eventName);

      return this.events.asObservable().pipe(
        filter(event => event.eventName === eventName), // Filtrar por el evento especificado
        mergeMap(event => {
          // Llamar al servicio remoto en combinación con el evento
          return this._tblPerfilMenuAccionUseCase.getAllTblPerfilMenuAccion().then(result => {
            console.log("result",result);
            if (result.ok) {
              return { payload: event.payload, serviceData: result.data };
            } else {
              throw new Error(result.message);
            }
          });
        }),
        map(data => {
          console.log("Datos combinados:", data);
          return data; // Retornar los datos combinados
        })
      );
    }*/
}
