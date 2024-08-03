import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { MF_ADMIN_PAZ_SALVO_ROUTES } from '../presentation/paz-salvo/paz-salvo.routing';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(MF_ADMIN_PAZ_SALVO_ROUTES),importProvidersFrom(BrowserAnimationsModule), provideClientHydration(),provideHttpClient(withFetch())]
};
