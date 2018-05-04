import {throwError as observableThrowError, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpRequest, HttpResponse, HttpErrorResponse, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {AppService} from '@dsc4u/Shared/Service/app.service';
import {tap, catchError} from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private _appService: AppService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._appService.isLoading = true;

    return next.handle(request)
      .pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this._appService.isLoading = false;
          }
          return event;
        }),
        catchError((response) => {
          if (response instanceof HttpErrorResponse) {
            this._appService.isLoading = false;
            return observableThrowError(response);
          }
        }));
  }
}
