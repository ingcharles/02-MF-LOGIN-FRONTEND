// export interface IModulo {
//   idSistema:number;
//   rutaSistema:string;
//   nombreSistema:string;
//   colorSistema:string;
//   iconoSistema:string;
//   descripcionSistema:string;
// }

export interface IModuloUsuario {
  estado: string;
  idUsuario: number;
  idUsuarioModulo: number;
  modulo: IModulo;
}

export interface IModulo {
  color: string;
  descripcion: string;
  estado: string;
  idModulo: number;
  imagen: string;
  nemonico: string;
  nombre: string;
  numeroVisita: number;
  ruta: string;
  version: string;
}
