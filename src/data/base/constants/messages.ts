import { SweetAlertIcon } from "sweetalert2";
export const isWarning: SweetAlertIcon = 'warning';
export const isInfo: SweetAlertIcon = 'info';
export const isSuccess: SweetAlertIcon = 'success';
export const isError: SweetAlertIcon = 'error';
let date: Date = new Date();
export const messages = {
  // los links en local host
  required: 'El campo es obligatorio',
  twoDecimal: 'El valor debe tener máximo dos decimales',
  twoDecimalMayorCero: 'El valor debe ser mayor a 0',
  min10Character: 'Debe contener mínimo 10 caracteres.',
  min8Character: 'Debe contener mínimo 8 caracteres.',
  passwordLogin: 'Su contraseña debe tener minúsculas, mayúsculas y caracteres numéricos.',
  max500Character: 'Debe contener máximo 500 caracteres',
  max100Character: 'Debe contener máximo 100 caracteres',
  invalidFormatMail: 'Formato de correo electrónico incorrecto',
  dniValid: "Ingrese una cédula o ruc válido",
  aportanteNoExist: "Aportante no registrado, por favor registrelo",
  camposVacios: "Debe completar todos los campos",
  warningTitle: "¡Advertencia!",
  informativeTitle: "¡Informativo!",
  successTitle: "¡Éxito!",
  confirmationTitle: "¡Confirmación!",
  documentosRespaldosVacios: "Cargue los documentos de respaldo",
  documentoExcelVacio: "Registre de afiliados o adherentes",
  registrosGastoActivoFijoVacio: "Registre los de gastos o activos fijos",
  confirmSave: "¿Está seguro de guardar la información?",
  signSaveConfirm: "¿Está seguro de firmar el documento digitalmente y guardar la información?",
  confirmUpdate: "¿Está seguro de guardar los cambios?",
  confirmCancel: "Los cambios no se guardarán ¿Está seguro de cancelar? ",
  confirmClean: "Los datos del formulario se limpiarán ¿Está seguro de limpiar? ",
  onlyOneSupportFile: "Solo puede agregar un documento de soporte",
  selectOneAddFile: "Debe seleccionar un documento para poder agregarlo",
  TypeFilenNotAllowed: "Tipo de archivo no está permitido",
  exceed5MBFile: "Tamaño supera los 5MB",
  confirmAnular: "¿Está seguro de anular el registro?",
  serviceFail: "Acceso denegado al servicio",
  serviceNotFound: "Servicio no disponible",
  isWarning: isWarning,
  isSuccess: isSuccess,
  isInfo: isInfo,
  isError: isError,

  successSave: 'registro guardado exitosamente',
  successUpdate: 'registro actualizado exitosamente',


}
