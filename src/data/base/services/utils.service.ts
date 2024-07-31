import { isPlatformBrowser } from '@angular/common';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  isFieldInvalid(fieldName: string, form: FormGroup): boolean {
    const field = form.get(fieldName)!;
    return field.invalid && (field.dirty || field.touched);
  }

  getFieldErrorRequired(fieldName: string, form: FormGroup): string {

    const field = form.get(fieldName)!;
    if (field.hasError('required')) {
      return 'Este campo es obligatorio';
    }
    return '';


  }

  showTooltip(platformId: Object) {



    if (isPlatformBrowser(platformId)) {
      const bootstrap = (window as any).bootstrap;
      const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
      });
    }

  }
}
