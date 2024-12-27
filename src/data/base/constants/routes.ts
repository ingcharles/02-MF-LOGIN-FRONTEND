export const ROUTES_CORE = {
  ADMIN: {
    BASE: '/admin/',
    TBLUSUARIO: {
      INDEX: 'usuario',
      CREATE: 'usuario/create',
      EDIT: (id: String | number) => `usuario/edit/${id}`
    },
    TBLMODULO: {
      INDEX: 'modulo',
      CREATE: '/create',
      EDIT: (id: String | number) => `/edit/${id}`
    },
    TBLMODULOPERFIL: {
      INDEX: (idModulo: String | number) => `modulo-perfil/${idModulo}`,
      CREATE: (idModulo: String | number) => `modulo-perfil/${idModulo}/create`,
      EDIT: (idModulo: String | number, id: String | number) => `modulo-perfil/${idModulo}/edit/${id}`
    },
    TBLUSUARIOMODULO: {
      INDEX: (idUsuario: String | number) => `usuario-modulo/${idUsuario}`,
      INDEXMODULO: (idUsuario: String | number) => `usuario-modulo/modulo/${idUsuario}`,
      CREATE: (idUsuario: String | number) => `usuario-modulo/${idUsuario}/create`,
      EDIT: (idUsuario: String | number, id: String | number) => `usuario-modulo/${idUsuario}/edit/${id}`
    },
    TBLUSUARIOMODULOPERFIL: {
      INDEX: (idUsuarioModulo: String | number) => `usuario-modulo-perfil/${idUsuarioModulo}`,
      CREATE: (idUsuarioModulo: String | number) => `usuario-modulo-perfil/${idUsuarioModulo}/create`,
      EDIT: (idUsuarioModulo: String | number, id: String | number) => `usuario-modulo-perfil/${idUsuarioModulo}/edit/${id}`
    },
    TBLMENU: {
      INDEX: 'menu',
      CREATE: 'menu/create',
      EDIT: (id: String | number) => `menu/edit/${id}`
    },
    TBLACCION: {
      INDEX: 'accion',
      CREATE: 'accion/create',
      EDIT: (id: String | number) => `accion/edit/${id}`
    },
    TBLMENUACCION: {
      INDEX: (idMenu: String | number) => `menu-accion/${idMenu}`,
      CREATE: (idMenu: String | number) => `menu-accion/${idMenu}/create`,
      EDIT: (idMenu: String | number, id: String | number) => `menu-accion/${idMenu}/edit/${id}`
    },
    TBLPERFIL: {
      INDEX: 'perfil',
      CREATE: '/create',
      EDIT: (id: String | number) => `/edit/${id}`
    },
    TBLPERFILMENUACCION: {
      INDEX: (idPerfil: String | number) => `perfil-menu-accion/${idPerfil}`,
      CREATE: (idPerfil: String | number) => `perfil-menu-accion/${idPerfil}/create`,
      EDIT: (idPerfil: String | number, id: String | number) => `perfil-menu-accion/${idPerfil}/edit/${id}`
    },
  }
};
