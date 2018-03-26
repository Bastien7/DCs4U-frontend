import { Injectable } from '@angular/core';
import { AppService } from '@dsc4u/Shared/Service/app.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';



@Injectable()
export class LoadingService implements HttpInterceptor {
  constructor(private _appService: AppService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._appService.isLoading = true;
    return next.handle(request)
    .do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        this._appService.isLoading = false;
      }
    },
    (error: any) => {
      this._appService.isLoading = false;
    });
  }
}
