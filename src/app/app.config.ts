import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MODULE_ROUTES } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import { MyTheme } from './my-theme';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(MODULE_ROUTES),
    importProvidersFrom(BrowserAnimationsModule),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    //provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: MyTheme,
                options: {
                  prefix: 'p',
                  darkModeSelector: 'system',
                  cssLayer: false,
                  variables: {
                    'primary-color': '#007bff', // Azul estándar
                    'primary-color-text': '#ffffff', // Color de texto sobre azul
                  },
              }
            }
        })
  ]
};
