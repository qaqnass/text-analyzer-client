import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoadingService } from './loading/loading-service.service';

export const networkDetectorInterceptor: HttpInterceptorFn = (req, next) => {
  const loaddingService = inject(LoadingService);
  loaddingService.loadingOn();
  // we must return the next handler to complet the api call.
  // we use pipe() to check the completion of the api call
  return next(req).pipe(
    // finally we hide the sppiner when the request finished
      finalize(() => {
        loaddingService.loadingOff()
      })
  );
};
