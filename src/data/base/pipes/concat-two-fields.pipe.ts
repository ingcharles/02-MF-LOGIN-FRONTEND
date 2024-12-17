import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'concatTwoFields'
})
export class ConcatTwoFieldsPipe implements PipeTransform {
  // transform(item: any, field1: string, field2: string): string {
  //   return `${item.field1} - ${item.field2}`;
  // }
  // transform(item: any): string {
  //   return `${item.menuAccion.menu.nombre} - ${item.menuAccion.accion.nombre}`;
  // }
  transform(value: string, secondValue: string, separator: string = ' - '): string {
    return `${value || ''}${separator}${secondValue || ''}`;
  }
}
