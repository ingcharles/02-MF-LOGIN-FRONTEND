import { Injectable } from '@angular/core';
import ColorData from '../../../assets/resources/json/color.json';
import { ICatalogo } from '../interfaces/i-catalogo';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  loadColors(): ICatalogo[] {
    const options: ICatalogo[] = [];
    return ColorData.colors;
  }
}
