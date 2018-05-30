import {Component, OnInit} from '@angular/core';
import {CurrencyService} from '@dsc4u/Shared/Service/currency.service';
import {AppConstant} from '@dsc4u/Shared/Constant/app-constant';
import {Observable} from 'rxjs/index';
import {Currency} from '@dcs4u/Model/currency.model';
import {MatSelectChange} from '@angular/material';
import {Transaction} from '@dcs4u/Model/transaction.model';
import {TransactionService} from '@dsc4u/Shared/Service/transaction.service';
import {Router} from '@angular/router';

@Component({
  selector: 'dcs4u-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})

export class TransactionListComponent implements OnInit {
  appConstant = AppConstant;
  private _currencyId: string;
  private _currenciesObservable: Observable<Currency[]>;
  private _transactionsObservable: Observable<Transaction[]>;

  constructor( private _currencyService: CurrencyService,
               private _transactionService: TransactionService,
               private _router: Router) {}

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
  getTransaction( { source, value }: MatSelectChange): void {
    this._transactionsObservable = this._transactionService.getTransactionByCurrency(value);
  }

  /**
   * @name TransactionListComponent#navigateToCreateTransaction
   * @type {function}
   * @description navigation to transaction creation
   * @public
   */
  navigateToCreateTransaction(): void {
    this._router.navigate(['transaction/creation'], {queryParams: { id: this._currencyId }});
  }

  /**
   * @name TransactionListComponent#navigateToDetailsTransaction
   * @type {function}
   * @description navigation to details
   * @param {string} id
   * @public
   */
  navigateToDetailsTransaction(id: string): void {
    this._router.navigate(['transaction/detail', id]);
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

  /**
   * @name TransactionListComponent#currencyId
   * @type {getter}
   * @description getter of the private var _currencyId
   * @returns {string}
   * @public
   */
  public get currencyId(): string {
    return this._currencyId;
  }

  /**
   * @name TransactionListComponent#currencyId
   * @type {setter}
   * @description setter of the private var _currencyId
   * @param currencyId
   * @returns {string}
   * @public
   */
  public set currencyId(currencyId) {
    this._currencyId = currencyId;
  }
}
