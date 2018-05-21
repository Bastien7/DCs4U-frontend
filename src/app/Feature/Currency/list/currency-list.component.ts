import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Currency } from '@dcs4u/Model/currency.model';
import { CurrencyService } from '@dsc4u/Shared/Service/currency.service';
import { AppConstant } from '@dsc4u/Shared/Constant/app-constant';

@Component({
  selector: 'dcs4u-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss'],
})

export class CurrencyListComponent implements OnInit {

  private _currenciesObservable: Observable<Currency[]>;
  public appConstant = AppConstant;

  constructor( private _currencyService: CurrencyService) { }

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


}
