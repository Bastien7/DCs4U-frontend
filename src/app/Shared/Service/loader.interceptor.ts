import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpErrorResponse, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { AppService } from '@dsc4u/Shared/Service/app.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private _appService: AppService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._appService.isLoading = true;

    return next.handle(request).
    do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        this._appService.isLoading = false;
      }
      return event;
    })
    .catch((response) => {
      if ( response instanceof HttpErrorResponse ) {
        this._appService.isLoading = false;
      }
      return Observable.throw(response);
    });
  }
}
