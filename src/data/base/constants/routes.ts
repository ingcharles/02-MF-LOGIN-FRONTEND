export const ROUTES_CORE = {
  ADMIN: {
    BASE: '/admin/',
    TBLMODULO: {
      INDEX: 'modulo',
      CREATE: 'modulo/create',
      EDIT: (id: String | number) => `modulo/edit/${id}`
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
      CREATE: 'perfil/create',
      EDIT: (id: String | number) => `perfil/edit/${id}`
    },
    TBLPERFILMENUACCION: {
      INDEX: (idPerfil: String | number) => `perfil-menu-accion/${idPerfil}`,
      CREATE: (idPerfil: String | number) => `perfil-menu-accion/${idPerfil}/create`,
      EDIT: (idPerfil: String | number, id: String | number) => `perfil-menu-accion/${idPerfil}/edit/${id}`
    },
  }
};
