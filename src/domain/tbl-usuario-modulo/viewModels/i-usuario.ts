export interface IUsuario {
  idUsuario: number;
  usuario: string;
  idCatalogoIdentificacion: number;
  identificacion: string;
  nombreCompleto: string;
  nombre: string;
  apellido: string;
  contrasenia: string;
  codigoTemporal: string;
  ipCreaRegistro: string;
  fechaModificacionContrasenia: string; // ISO string format
  fechaUltimoAcceso: string; // ISO string format
  ipUltimoAcceso: string;
  estado: string;
  fechaRegistro: string; // ISO string format
  idUsuarioRegistro: number;
}
