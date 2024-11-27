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
    }
  }
};
