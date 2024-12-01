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

}
