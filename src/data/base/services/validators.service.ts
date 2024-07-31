import { Injectable } from '@angular/core';
import { FormControl, FormGroup, NgModel, ValidationErrors } from '@angular/forms';
export const isValidCI = (control: FormControl): ValidationErrors | null => {

  return null;
}

@Injectable({
  providedIn: 'root'
})

export class ValidatorsService {
  firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  patternEmail: string = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$";


  // onlyNumber: string = "^([0-9]{10,13})$";
  patternTwoDecimal: string = "^([0-9]{0,8})(\.[0-9]{0,3})$";
  // twoDecimal: string = "^(?!0+\.00)(?=.{1,9}(\.|$))(?!0(?!\.))\d{1,3}(,\d{3})*(\.\d+)?$";

  onlyTwoDecimalRegExp: RegExp = /[0-9.]/;
  onlyNumberRegExp: RegExp = /[0-9]/;
  onlyOnlyLetterRegExp: RegExp = /[A-Za-zñÑáÁéÉíÍóÓúÚ ]/;
  //emailPatterndRegExp: RegExp = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  //onlyOnlyDateRegExp: RegExp = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$");// /(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}/;
  constructor() { }


  /**
   ** Method que valida si el campo es valido
   * @param field string -> nombre del campo colocado el fieldControlName
   * @returns true o false
   */

  public isValidFieldTouched(form: FormGroup, field: string): boolean | null {
    return (
      // field.invalid &&
      // field.touched
      //form.controls[field].invalid &&
      form.controls[field].errors &&
      form.controls[field].touched
    );
  }

  /**
 ** Method que valida si el campo es valido
 * @param field string -> nombre del campo colocado el fieldControlName
 * @returns true o false
 */
  public isValidFieldRequired(form: FormGroup, field: string): boolean | null {
    return (
      form.controls[field].errors?.['required'] &&
      form.controls[field].touched
    );
  }
  public isValidFieldDateLimitValid(form: FormGroup, field: string): boolean | null {
    return (
      form.controls[field].errors?.['dateLimitValid'] &&
      form.controls[field].touched
    );
  }

  /**
** Method que valida si el campo es valido
* @param field string -> nombre del campo colocado el fieldControlName
* @returns true o false
*/
  public isValidFieldDateOutLimit(form: FormGroup, field: string): boolean | null {
    return (
      form.controls[field].errors?.['dateOutLimit'] &&
      form.controls[field].touched
    );
  }
  /**
       ** Method que valida si el campo cumple con la longitud mínima
       * @param field string -> nombre del campo colocado el fieldControlName
       * @returns true o false
       */
  public isValidFieldMin(form: FormGroup, field: string): boolean | null {
    return (
      form.controls[field].errors?.['min'] &&
      form.controls[field].touched
    );
  }

  /**
   ** Method que valida si el campo cumple con la longitud mínima
   * @param field string -> nombre del campo colocado el fieldControlName
   * @returns true o false
   */
  public isValidFieldMinlength(form: FormGroup, field: string): boolean | null {
    return (
      form.controls[field].errors?.['minlength'] &&
      form.controls[field].touched
    );
  }


  /**
   ** Method que valida si el campo cumple con la longitud mínima
   * @param field string -> nombre del campo colocado el fieldControlName
   * @returns true o false
   */
  public isValidFieldMaxlength(form: FormGroup, field: string): boolean | null {
    return (
      form.controls[field].errors?.['maxlength'] &&
      form.controls[field].touched
    );
  }


  /**
  ** Method que valida si el campo cumple con el patrón establecido
  * @param field string -> nombre del campo colocado el fieldControlName
  * @returns true o false
  */
  public isValidFielPattern(form: FormGroup, field: string): boolean | null {
    return (
      form.controls[field].errors?.['pattern'] &&
      form.controls[field].touched
    );
  }


  /**
** Method que valida si el campo cumple con el patrón establecido
* @param field string -> nombre del campo colocado el fieldControlName
* @returns true o false
*/
  public isValidFielPasswordStrength(form: FormGroup, field: string): boolean | null {
    return (
      form.controls[field].errors?.['passwordStrength'] &&
      form.controls[field].touched
    );
  }

  //   /**
  //  ** Method que valida si el campo cumple con el patrón establecido
  //  * @param field string -> nombre del campo colocado el fieldControlName
  //  * @returns true o false
  //  */
  //   public isValidFielDate(form: FormGroup, field: string): boolean | null {
  //     return (
  //       form.controls[field].errors?.['outDateLimit'] &&
  //       form.controls[field].touched
  //     );
  //   }
  /**
** Method que valida si el campo cumple con el patrón establecido
* @param field string -> nombre del campo colocado el fieldControlName
* @returns true o false
*/
  // public isValidFielPattern1(form: FormGroup, field: string): boolean | null {
  //   return (
  //     form.controls[field].errors?.['pattern'] &&
  //     form.controls[field].touched
  //   );
  // }


  /**
   ** Method que valida si el campo se quiere pegar algun texto no le permite
   *  @param {any} s recibe el evento de los atributos del componente
   */
  public validarPegarTexto(s: any) {
    s.event.returnValue = false;
    if (s.event.preventDefault) {
      s.event.preventDefault();
    }
  }


  /**
   ** Method que valida solo la digitación de solo numeros
   *  @param {any} event recibe el evento del componente
   */
  public validarSoloNumeros(event: any) {
    let key = event.keyCode;
    key = String.fromCharCode(key);
    const regex = this.onlyNumberRegExp;
    if (!regex.test(key)) {
      event.returnValue = false;
      if (event.preventDefault) {
        event.preventDefault();
      }
    }
  }


  /**
   ** Method que valida solo la digitación de solo numeros
   *  @param {any} event recibe el evento del componente
   */
   public validarSoloDecimales(event: any) {
    let key = event.keyCode;
    key = String.fromCharCode(key);
    const regex = this.onlyTwoDecimalRegExp;
    if (!regex.test(key)) {
      event.returnValue = false;
      if (event.preventDefault) {
        event.preventDefault();
      }
    }
  }

  /**
  ** Method que valida solo la digitación de solo letras
  *  @param {any} event recibe el evento del componente
  */
  public validarSoloLetras(event: any) {
    let key = event.keyCode;
    if (key === 60 || key === 62) {
      event.returnValue = false;
      if (event.preventDefault) {
        event.preventDefault();
      }
    } else {
      key = event.keyCode;
      key = String.fromCharCode(key);
    }
    const regex = this.onlyOnlyLetterRegExp;
    if (!regex.test(key)) {
      event.returnValue = false;
      if (event.preventDefault) {
        event.preventDefault();
      }
    }
  }


  /**
  ** Method que valida solo la digitación de solo alfanumericos
  *  @param {any} event recibe el evento del componente
  */
  public validarAlfanumericos(event: any) {
    console.log(event);
    let key = event.keyCode;
    if (key === 60 || key === 62) {
      event.returnValue = false;
      if (event.preventDefault) {
        event.preventDefault();
      }
    }
  }


  onEditorPreparing(event: any) {
    if (event.parentType === "filterRow") {
      event.editorOptions.onKeyPress = function (args: any) {
        var event = args.event;
        if (/[</\\>]/.test(String.fromCharCode(event.keyCode)))
          event.preventDefault();
      }
    }


  }
  onToolbarPreparing(event: any): void {
    console.log("onEditorPreparing", event.toolbarOptions);
    event.toolbarOptions.items.forEach((item: any) => {
      if (item.name === "exportButton") {
        // item.options = {
        //   //icon: "xlsxfile",
        //   //text: "Exportar",
        //   // elementAttr: {
        //   //   "class": "dx-datagrid-export-button"
        //   // },
        //   // onClick: function () {
        //   //   event.component.exportToExcel(true);
        //   // }
        // };
        //item.options.text = 'Exportar';
        item.showText = "always";
      }
    });
  }
  /**
  ** Method que valida cédula con modulo base 10
  *  @param {string} cedula recibe la cedula como parametro
  *  @returns {boolean} true o false
  */
  public validarCedula(cedula: string) {
    // Créditos: Victor Diaz De La Gasca.
    // Autor: Adrián Egüez
    // Url autor: https://gist.github.com/vickoman/7800717
    // Preguntamos si la cedula consta de 10 digitos
    if (cedula.length === 10) {

      // Obtenemos el digito de la region que sonlos dos primeros digitos
      const digitoRegion = cedula.substring(0, 2);

      // Pregunto si la region existe ecuador se divide en 24 regiones
      if (digitoRegion >= String(0) && digitoRegion <= String(24)) {

        // Extraigo el ultimo digito
        const ultimoDigito = Number(cedula.substring(9, 10));

        // Agrupo todos los pares y los sumo
        const pares = Number(cedula.substring(1, 2)) + Number(cedula.substring(3, 4)) + Number(cedula.substring(5, 6)) + Number(cedula.substring(7, 8));

        // Agrupo los impares, los multiplico por un factor de 2, si la resultante es > que 9 le restamos el 9 a la resultante
        let numeroUno: any = cedula.substring(0, 1);
        numeroUno = (numeroUno * 2);
        if (numeroUno > 9) {
          numeroUno = (numeroUno - 9);
        }

        let numeroTres: any = cedula.substring(2, 3);
        numeroTres = (numeroTres * 2);
        if (numeroTres > 9) {
          numeroTres = (numeroTres - 9);
        }

        let numeroCinco: any = cedula.substring(4, 5);
        numeroCinco = (numeroCinco * 2);
        if (numeroCinco > 9) {
          numeroCinco = (numeroCinco - 9);
        }

        let numeroSiete: any = cedula.substring(6, 7);
        numeroSiete = (numeroSiete * 2);
        if (numeroSiete > 9) {
          numeroSiete = (numeroSiete - 9);
        }

        let numeroNueve: any = cedula.substring(8, 9);
        numeroNueve = (numeroNueve * 2);
        if (numeroNueve > 9) {
          numeroNueve = (numeroNueve - 9);
        }

        const impares = numeroUno + numeroTres + numeroCinco + numeroSiete + numeroNueve;

        // Suma total
        const sumaTotal = (pares + impares);

        // extraemos el primero digito
        const primerDigitoSuma = String(sumaTotal).substring(0, 1);

        // Obtenemos la decena inmediata
        const decena = (Number(primerDigitoSuma) + 1) * 10;

        // Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador
        let digitoValidador = decena - sumaTotal;

        // Si el digito validador es = a 10 toma el valor de 0
        if (digitoValidador === 10) {
          digitoValidador = 0;
        }

        // Validamos que el digito validador sea igual al de la cedula
        if (digitoValidador === ultimoDigito) {
          return true;
        } else {
          return false;
        }

      } else {
        // imprimimos en consola si la region no pertenece
        return false;
      }
    } else {
      // Imprimimos en consola si la cedula tiene mas o menos de 10 digitos
      return false;
    }
  }



}

