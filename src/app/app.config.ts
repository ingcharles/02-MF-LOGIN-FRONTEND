import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MODULE_ROUTES } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/lara';
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
                preset: Lara,
                options: {
                  prefix: 'p',
                  darkModeSelector: 'system',
                  cssLayer: false
              }
            }
        })
  ]
};
