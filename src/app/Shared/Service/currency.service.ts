import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@dcs4u/Environments/environment';
import { Currency } from '@dcs4u/Model/currency.model';
import { Observable } from 'rxjs';



@Injectable()

export class CurrencyService {

  constructor(private _httpClient: HttpClient) { }

  /**
   * @name CurrencyService#createCurrency
   * @type {function}
   * @param {Currency} currency
   * @return {Observable<Currency>}
   * @public
   */
  createCurrency(currency: Currency): Observable<Currency> {
    return this._httpClient.post(environment.baseUrl + environment.api.currency, currency);
  }

  /**
   * @name CurrencyService#getCurrencySummury
   * @type {function}
   * @description get details of a currency
   * @param id
   * @public
   */
  getCurrencySummury(id: string): Observable<Currency> {
    return this._httpClient.get<Currency>(`${environment.baseUrl}${environment.api.currency}/${id}`);

  }

  /**
   * @name CurrencyService#getCurrencies
   * @type {function}
   * @description get list of currencies
   * @public
   */
  getCurrencies(): Observable <Currency[]> {
    return this._httpClient.get<Currency[]>(`${environment.baseUrl}${environment.api.currency}`);
  }
}
