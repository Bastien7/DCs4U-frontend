import {Component} from '@angular/core';
import {AppService} from '@dsc4u/Shared/Service/app.service';

@Component({
  selector: 'dcs4u-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})

export class TransactionComponent {
  constructor(private _appService: AppService) {
    this._appService.showPicture = false;
  }
}
