import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() { }

  public isLoading = false;
  public showPicture = true;
  public configSnackBarMessage = {
    duration: 2000
  };
  public showCurrencyList: boolean = false; // tslint:disable-line: no-inferrable-types
}
