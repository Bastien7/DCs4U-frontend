import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '@dsc4u/Shared/Service/app.service';

@Component({
  selector: 'dcs4u-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})

export class TransactionComponent implements OnInit {
  constructor(private _router: Router, private _appService: AppService) { }

  /**
   * @name TransactionComponent#ngOnInit
   * @type {function}
   * @description Angular lifecycle onInit method
   * @public
   */
  ngOnInit(): void {
    if (this._appService.showCurrencyList) {
      this._router.navigate(['/currency/list']);
    }
  }
}
