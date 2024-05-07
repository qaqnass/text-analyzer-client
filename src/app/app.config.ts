import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { networkDetectorInterceptor } from './services/network-detector.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        networkDetectorInterceptor
      ])
    ),
  ]
};

// angular -17 use 
// { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },