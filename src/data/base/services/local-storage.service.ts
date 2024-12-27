import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
//import { ISistemas } from "../domain/layout/i-sistemas";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  //public applicationSubject = new Subject<ISistemas | null>

  //private storageSub = new Subject<void>();
  //storageSub$ = this.storageSub.asObservable();
  // Observable to subscribe to storage changes
  // watchStorage() {
  //   return this.storageSub.asObservable();
  // }

  // Set item in local storage and notify subscribers
  setItem<T>(key: string, data: T | null) {
    if (data !== null) {
      localStorage.setItem(key, JSON.stringify(data));
      //this.storageSub.next();
      //console.log("storageSub.next()0:",this.storageSub)
      this.emitGlobalEvent(key);
    }
    else {
      this.removeItem(key);
    }
  }

  // Get item from local storage
  getItem<T>(key: string): T | null {
    if (key !== null) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) as T : null;
    }
    return null;
  }

  // Remove item from local storage and notify subscribers
  removeItem(key: string) {
    localStorage.removeItem(key);
    //this.storageSub.next();
    this.emitGlobalEvent(key);
  }

  // Clear all items from local storage and notify subscribers
  clear() {
    localStorage.clear();
    //this.storageSub.next();
  }
  private emitGlobalEvent(key: string) {
    const event = new CustomEvent('storageChanged', { detail: { key } });
    // window.dispatchEvent(new Event('storageChanged'));
    window.dispatchEvent(event);
  }
  /*setSistema(data: ISistemas | null) {
    this.applicationSubject.next(data);
    if (data !== null) {
      localStorage.setItem('Sistema', JSON.stringify(data));
    } else {
      localStorage.removeItem('Sistema');
    }
  }

  getSistema(): ISistemas {
    const objetoAlmacenado = localStorage.getItem('Sistema');
    return JSON.parse(objetoAlmacenado || '{}')
  }*/




}
