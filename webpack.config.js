/*const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  []);

module.exports = {
  output: {
    uniqueName: "02MFADMINPAZSALVO",
    publicPath: "auto",
   //scriptType : 'text/javascript'
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "module" },
      name : "MFADMINPAZSALVO",
      filename : "remoteEntry.js",
      exposes : {
        './PazSalvoModule' : './src/presentation/paz-salvo/paz-salvo.module.ts',
        './TblUsuarioModuloModule' : './src/presentation/tbl-usuario-modulo/tbl-usuario-modulo.module.ts',
        './AdminModule' : './src/presentation/admin.module.ts',
        //'./MfEventService': './src/data/base/services/mf-event-service.ts'
        './TblUsuarioModuloService': './src/data/tbl-usuario-modulo/services/tbl-usuario-modulo.services.ts',
        './ProvideHttpClient': './src/presentation/admin.module.ts',
      },
      //library: { type: "global" },

        // For remotes (please adjust)
        // name: "02MFADMINPAZSALVO",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './/src/app/app.component.ts',
        // },

        // For hosts (please adjust)
        // remotes: {
        //     "mfe1": "http://localhost:3000/remoteEntry.js",

        // },

        shared: share({
          // "primeng/button": { singleton: true, strictVersion: true },
          // "primeng": { singleton: true, strictVersion: true },
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
  ],
};
*/


const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

 // Version 14
 module.exports = withModuleFederationPlugin({

   name: 'MFADMINPAZSALVO',

   exposes: {
     //'./Module': './projects/mfe1/src/app/flights/flights.module.ts',
     './AdminModule' : './src/presentation/admin.module.ts',
     './TblUsuarioModuloService': './src/data/tbl-usuario-modulo/services/tbl-usuario-modulo.services.ts',

   },

   shared: {
     ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
   },

 });
