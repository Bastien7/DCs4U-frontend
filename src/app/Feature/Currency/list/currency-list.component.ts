import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Currency } from '@dcs4u/Model/currency.model';
import { AppConstant } from '@dsc4u/Shared/Constant/app-constant';
import { AppService } from '@dsc4u/Shared/Service/app.service';
import { CurrencyService } from '@dsc4u/Shared/Service/currency.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'dcs4u-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss'],
})

export class CurrencyListComponent implements OnInit {

  private _currenciesObservable: Observable<Currency[]>;
  public appConstant = AppConstant;

  constructor( private _currencyService: CurrencyService, private _router: Router, private _appService: AppService) { }

  /**
   * @name CurrencyListComponent#ngOnInit
   * @type {function}
   * @description Angular lifecycle OnInit method
   * @public
   */
  ngOnInit(): void {
    this._currenciesObservable = this._currencyService.getCurrencies();
  }

  /**
   * @name CurrencyListComponent#currenciesObservable
   * @type {getter}
   * @description getter for private var _currenciesObservable
   * @returns {Observable<Currency[]>} _currenciesObservable
   * @public
   */
  get currenciesObservable(): Observable<Currency[]> {
    return this._currenciesObservable;
  }

  /**
   * @name CurrencyListComponent#goToTransactionCreation
   * @type {function}
   * @description Navigation to the creation of a transaction
   * @public
   */
  goToTransactionCreation(id: string): void {
    this._appService.showCurrencyList = false;
    this._router.navigate(['transaction/creation'], {queryParams: {id}});
  }

  goToDetailsCurrency(id: string): void {
    this._router.navigate(['/currency/summury', id]);
  }


}
