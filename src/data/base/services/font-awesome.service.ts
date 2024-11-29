import { Injectable } from '@angular/core';
import FontAwesomeData from '../../../assets/resources/json/font-awesome.json';
import { ICatalogo } from '../interfaces/i-catalogo';

@Injectable({
  providedIn: 'root',
})
export class FontAwesomeService {
  loadIcons(): ICatalogo[] {
    const options: ICatalogo[] = [];
    FontAwesomeData.icons.forEach((icon) => {
      const { id, unicode, name } = icon;

      if (id.endsWith('-o')) {
        options.push({ value: `far fa-${id.slice(0, -2)}`, name: `${name}`});
        options.push({ value: `fas fa-${id.slice(0, -2)}`, name: `${name}`});
      } else if (unicode.endsWith('b')) {
        options.push({ value: `fab fa-${id}`, name: `${name}`});
      } else {
        options.push({ value: `fas fa-${id}`, name: `${name}`});
      }
    });
    return options;
  }
  cleanIconClass(input: string): string {
    // Dividir la cadena en palabras.
    const parts = input.split(' ');

    // Eliminar la primera palabra.
    parts.shift();

    // Procesar cada parte eliminando los prefijos 'fas-', 'fa-', o 'fas'.
    const cleanedParts = parts.map(part => part.replace(/^(far-?|fab-?|fas-?|fa-)/, ''));

    // Unir las partes restantes en una sola cadena.
    return cleanedParts.join(' ');
  }
}
