import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Currency } from '@dcs4u/Model/currency.model';
import { environment } from '@dcs4u/Environments/environment';



@Injectable()

export class CurrencyService {

  constructor(private _httpClient: HttpClient) { }

  /**
   * @name CurrencyService#createCurrency
   * @type {function}
   * @param {Currency} currency
   * @return {Observable<Currency>}
   */
  createCurrency(currency: Currency): Observable<Currency> {
    return this._httpClient.post(environment.baseUrl + environment.api.currency, currency);
  }

  getCurrencySummury(id: string): Observable<Currency> {
    const params = new HttpParams().set('id', id);
    return this._httpClient.get<Currency>(`${environment.baseUrl}${environment.api}/${id}`);
    // return this._httpClient.get<Currency>(environment.baseUrl + environment.api.currency, { params });
  }
}
