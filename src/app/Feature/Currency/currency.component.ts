import {Component, OnInit} from '@angular/core';
import {AppService} from '@dsc4u/Shared/Service/app.service';

@Component({
    selector: 'dcs4u-currency',
    templateUrl: './currency.component.html'
})

export class CurrencyComponent implements OnInit {
    constructor( private _appService: AppService) { }

  /**
   * @name CurrencyComponent#ngOnInit
   * @type {function}
   * @description Angular lifecycle onInit
   * @public
   */
  ngOnInit(): void {
    this._appService.showPicture = false;
  }
}
