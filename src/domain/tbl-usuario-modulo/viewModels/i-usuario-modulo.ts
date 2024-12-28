import { IModulo } from "./i-modulo";
import { IUsuario } from "./i-usuario";

export interface IUsuarioModulo {
  idUsuarioModulo: number;
  usuario: IUsuario;
  modulo: IModulo;
  colorModulo: string;
  iconoModulo: string;
  numeroVisitaModulo: number;
  numeroNotificaciones: number;
  estado: string;
  fechaRegistro: string; // ISO string format
  idUsuarioRegistro: number | null;
}
