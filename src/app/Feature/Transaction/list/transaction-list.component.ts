import {Component, OnInit} from '@angular/core';
import {CurrencyService} from '@dsc4u/Shared/Service/currency.service';
import {AppConstant} from '@dsc4u/Shared/Constant/app-constant';
import {Observable} from 'rxjs/index';
import {Currency} from '@dcs4u/Model/currency.model';
import {MatSelectChange} from '@angular/material';
import {Transaction} from '@dcs4u/Model/transaction.model';

@Component({
  selector: 'dcs4u-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})

export class TransactionListComponent implements OnInit {
  appConstant = AppConstant;
  private _currenciesObservable: Observable<Currency[]>;
  private _transactionsObservable: Observable<Transaction[]>;

  constructor( private _currencyService: CurrencyService) {
  }

  ngOnInit(): void {
    this._currenciesObservable = this._currencyService.getCurrencies();
  }

  /**
   * @name TransactionListComponent#getTransaction
   * @type {function}
   * @description get transaction by currencies
   * @param {string} value
   * @param {MatSelect} source
   * @public
   */
  getTransaction( { source, value }: MatSelectChange) {
  }
  /**
   * @name TransactionListComponent#currenciesObservable
   * @type {getter}
   * @description getter of the private var currenciesObservable
   * @returns {Observable<Currency[]>}
   * @public
   */
  public get currenciesObservable(): Observable<Currency[]> {
    return this._currenciesObservable;
  }

  /**
   * @name TransactionListComponent#transactionObservable
   * @type {getter}
   * @description getter of the private var _transactionObservable
   * @returns {Observable<Transaction[]>}
   * @public
   */
  public get transactionObservable(): Observable<Transaction[]> {
    return this._transactionsObservable;
  }
}
