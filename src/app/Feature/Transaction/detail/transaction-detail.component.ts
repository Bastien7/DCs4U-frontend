import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {TransactionService} from '@dsc4u/Shared/Service/transaction.service';
import {Observable} from 'rxjs/index';
import {Transaction} from '@dcs4u/Model/transaction.model';
import {AppConstant} from '@dsc4u/Shared/Constant/app-constant';

@Component({
  selector: 'dcs4u-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss'],
})

export class TransactionDetailComponent implements OnInit {
  appConstant = AppConstant;
  private _transaction: Observable<Transaction>;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _transactionService: TransactionService) {
  }

  ngOnInit(): void {
   this.initPage();
  }

  /**
   * @name TransactionDetailComponent#initPage
   * @type {function}
   * @description init the page to provide the detail of transaction for the view
   * @public
   */
  initPage(): void {
    this._route.paramMap.subscribe((params: ParamMap) => {
      this._transaction = this._transactionService.getDetailTransaction(params.get('id'));
    });
  }

  /**
   * @name TransactionDetailComponent#navigateToListOfCurrency
   * @type {function}
   * @description return to the list of currency
   * @public
   */
  navigateToListOfCurrency(): void {
    this._router.navigate(['/currency/list']);
  }

  /**
   * @name TransactionDetailComponent#transaction
   * @type {getter}
   * @description getter for private var _transaction
   * @returns {Observable<Transaction>} _transaction
   * @public
   */
  get transaction(): Observable<Transaction> {
    return this._transaction;
  }
}
