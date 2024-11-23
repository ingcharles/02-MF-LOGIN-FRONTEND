export interface IModulo {
  idModulo: number;
  nemonico: string;
  nombre: string;
  numeroVersion: string;
  ruta: string;
  descripcion: string;
  estado: string;
  fechaRegistro: string; // ISO string format
  idUsuarioRegistro: number | null;
}
