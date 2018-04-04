import { Component } from '@angular/core';
import { AppService } from '@dsc4u/Shared/Service/app.service';

@Component({
  selector: 'dcs4u-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})

export class LoaderComponent {
  constructor( private _appService: AppService) { }

  /**
   * @name LoaderComponent#appService
   * @type {function}
   * @description getter to user private _appService on dom
   * @return {AppService}
   */
  public get appService(): AppService {
    return this._appService;
  }
}
