import { Component } from '@angular/core';
import { AppConstant } from '@dsc4u/Shared/Constant/app-constant';
import { AppService } from '@dsc4u/Shared/Service/app.service';

@Component({
  selector: 'dcs4u-menu-bar',
  templateUrl: 'menu-bar.component.html',
  styleUrls: ['menu-bar.component.scss']
})

export class MenuBarComponent {
  constructor( private _appService: AppService) { }

  public appConstant = AppConstant;

  /**
   * @name MenuBarComponent#appService
   * @type {getter} getter for private var _appService
   * @description get the private var _appService
   * @returns {AppService}_appService
   * @public
   */
  get appService(): AppService {
    return this._appService;
  }
}
