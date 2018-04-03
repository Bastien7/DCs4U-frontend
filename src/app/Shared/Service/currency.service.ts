import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Currency } from '@dcs4u/Model/currency.model';
import { environment } from '@dcs4u/Environments/environment';


@Injectable()

export class CurrencyService {

  constructor(private _httpClient: HttpClient) { }

  /**
   * @name CurrencyService#createCurrency
   * @type {funcrion}
   * @param {Currency} currency
   * @return {Observable<Currency>}
   */
  createCurrency(currency: Currency): Observable<Currency> {
    return this._httpClient.post(environment.baseUrl + environment.api.currency, currency);
  }
}
