import { Injectable } from '@angular/core';
import colors from '../../../assets/resources/json/color.json';
import { ICatalogo } from '../interfaces/i-catalogo';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  loadColorsModule(): ICatalogo[] {
    const options: ICatalogo[] = [];
    return colors.colorsModule;
  }
  loadColorsAccion(): ICatalogo[] {
    const options: ICatalogo[] = [];
    return colors.colorsAccion
  }
}
