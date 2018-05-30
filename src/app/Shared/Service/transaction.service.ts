import {Injectable} from '@angular/core';
import {environment} from '@dcs4u/Environments/environment';
import {HttpClient} from '@angular/common/http';
import {Transaction} from '@dcs4u/Model/transaction.model';
import {Observable} from 'rxjs/index';

@Injectable()
export class TransactionService {
  constructor(private _httpClient: HttpClient) {
  }
  /**
   * @name TransactionService#createTransaction
   * @type{function}
   * @description create the transaction
   * @param {Transaction} transaction
   * @returns {Observable<string>}
   */
  createTransaction(transaction: Transaction): Observable<Transaction> {
    return this._httpClient.post<Transaction>(`${environment.baseUrl}${environment.api.transaction}`, transaction);
  }

  /**
   * @name TransactionService#getDetailTransaction
   * @type {function}
   * @param transactionId
   * @returns {Observable<Transaction>}
   * @public
   */
  getDetailTransaction(transactionId: string): Observable<Transaction> {
    return this._httpClient.get<Transaction>(`${environment.baseUrl}${environment.api.transaction}/${transactionId}`);
  }

  /**
   * @name TransactionService#getTransactionByCurrency
   * @type {function}
   * @param currencyId
   * @returns {Observable<Transaction>}
   * @public
   */
  getTransactionByCurrency(currencyId): Observable<Transaction[]> {
    return this._httpClient.
    get<Transaction[]>(`${environment.baseUrl}${environment.api.transaction}/${environment.api.currency}/${currencyId}`);
  }
}
