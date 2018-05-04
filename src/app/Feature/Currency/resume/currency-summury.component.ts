import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CurrencyService } from '@dsc4u/Shared/Service/currency.service';
import { Currency } from '@dcs4u/Model/currency.model';
import { Observable } from 'rxjs';
import { AppConstant } from '@dsc4u/Shared/Constant/app-constant';



@Component({
  selector: 'dcs4u-currency-summury',
  templateUrl: 'currency-summary.component.html',
  styleUrls: ['currency-summary.component.scss']
})

export class CurrencySummuryComponent implements OnInit {
  constructor( private _route: ActivatedRoute,
    private _currencyService: CurrencyService) { }

    private _currencyObservable: Observable<Currency>;
    public appConstant = AppConstant;

  /**
   * @name CurrencySummuryComponent#ngOnInit
   * @type {function}
   * @description On init lifecycle Angular
   */
  ngOnInit(): void {
    this.initPage();
  }

  /**
   * @name CurrencySummuryComponent#initPage
   * @type {function}
   * @description init the page to display the summury of the currency
   */
  initPage(): void {
   this._route.paramMap.subscribe((params: ParamMap) => {
    this._currencyObservable = this._currencyService.getCurrencySummury(params.get('id'));
   },
    (error) => {
      console.error(error);
    });
  }

  /**
   * @name CurrencySummuryComponent#currency
   * @type {function}
   * @return {Observable<Currency>}
   */
  public get currencyObservable(): Observable<Currency> {
    return this._currencyObservable;
  }
}
