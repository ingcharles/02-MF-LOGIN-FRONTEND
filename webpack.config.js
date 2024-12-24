const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

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
        './MfEventService': './src/data/base/services/mf-event-service.ts'
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
          //"@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
  ],
};
