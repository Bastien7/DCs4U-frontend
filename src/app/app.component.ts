import { Component } from '@angular/core';
import { AppService } from '@dsc4u/Shared/Service/app.service';

@Component({
  selector: 'dcs4u-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _appService: AppService) {}

  /**
   * @name AppComponent#appService
   * @type {function}
   * @description getter of the _appService
   * @return {AppService} _appService
   */
  public get appService(): AppService {
    return this._appService;
  }
}
