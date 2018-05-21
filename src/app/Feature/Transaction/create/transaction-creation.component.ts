import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'dcs4u-transaction-creation',
  templateUrl: './transaction-creation.component.html',
  styleUrls: ['./transaction-creation.component.scss']
})

export class TransactionCreationComponent implements OnInit {

  private _currencyId: string;
  private _transactionForm: FormGroup;

  constructor(private _route: ActivatedRoute) { }

  /**
   * @name TransactionCreationComponent#ngOnInit
   * @type {function}
   * @description Angular lifecycle OnInit method
   * @public
   */
  ngOnInit(): void {
    this.getQueryParams();
  }

  /**
   * @name TransactionCreationComponent#getQueryParams
   * @type {function}
   * @description get the id of a currency
   * @public
   */
  getQueryParams(): void {
    this._route.queryParams.subscribe((queryParams: Params) => {
      this._currencyId = queryParams.id;
      this.createTransactionForm(this._currencyId);
    });
  }

  /**
   * @name TransactionCreationComponent#createTransactionForm
   * @type {function}
   * @description create the transaction form
   * @public
   */
  createTransactionForm(currencyId): void {
    this._transactionForm = new FormGroup({
      currencyId: new FormControl(currencyId, Validators.required),
      quantity: new FormControl('', [Validators.required]),
      additionalInformation: new FormControl(''),
    });
  }

  /**
   * @name TransactionCreationComponent#currencyId
   * @type {getter}
   * @description get the private var _currencyId
   * @returns {string} _currencyId
   * @public
   */
  get currencyId(): string {
    return this._currencyId;
  }

  /**
   * @name TransactionCreationComponent#transactionForm
   * @type {getter}
   * @description getter for the var _transactionForm
   * @return {FormGroup} _transactionForm
   * @public
   */
  get transactionForm (): FormGroup {
    return this._transactionForm;
  }
}
