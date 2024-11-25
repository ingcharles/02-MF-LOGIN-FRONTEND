export const ROUTES_CORE = {
  ADMIN: {
    BASE: 'admin',
    MODULO: {
      INDEX: 'modulo',
      CREATE: 'modulo/create',
      EDIT: (id: String | number) => `modulo/edit/${id}`
    }
  }
};
