import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  constructor() { }

  public isLoading = false;
  public configSnackBarMessage = {
    duration: 2000
  };
}
