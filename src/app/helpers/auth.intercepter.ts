import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
  private readonly baseUrl: string = 'https://conduit.productionready.io/api';
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const apiReq = req.clone({
      url: `${this.baseUrl}/${req.url}`,
    });
    console.log('Intercepter');
    return next.handle(apiReq);
  }
}
