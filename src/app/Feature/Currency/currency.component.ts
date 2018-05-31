import {Component} from '@angular/core';
import {AppService} from '@dsc4u/Shared/Service/app.service';

@Component({
    selector: 'dcs4u-currency',
    templateUrl: './currency.component.html'
})

export class CurrencyComponent {
    constructor( private _appService: AppService) {
      this._appService.showPicture = false;
    }
}
