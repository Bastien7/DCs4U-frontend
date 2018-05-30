import {Component, OnInit} from '@angular/core';
import {AppService} from '@dsc4u/Shared/Service/app.service';

@Component({
  selector: 'dcs4u-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})

export class TransactionComponent implements OnInit{
  constructor(private _appService: AppService) { }

  /**
   * @name TransactionComponent#ngOnInit
   * @type {function}
   * @description Angular lifecucle onInit
   * @public
   */
  ngOnInit(): void {
    this._appService.showPicture = false;
  }
}
