import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CorrelationInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const correlationId = crypto.randomUUID();
    const cloned = req.clone({
      setHeaders: { 'X-Correlation-Id': correlationId },
    });
    return next.handle(cloned);
  }
}
