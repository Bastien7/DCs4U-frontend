import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params} from '@angular/router';
import {AppConstant} from '@dsc4u/Shared/Constant/app-constant';
import {Transaction} from '@dcs4u/Model/transaction.model';
import {TransactionService} from '@dsc4u/Shared/Service/transaction.service';
import {MatSnackBar, MatSnackBarRef, SimpleSnackBar} from '@angular/material';
import {AppService} from '@dsc4u/Shared/Service/app.service';

@Component({
  selector: 'dcs4u-transaction-creation',
  templateUrl: './transaction-creation.component.html',
  styleUrls: ['./transaction-creation.component.scss']
})

export class TransactionCreationComponent implements OnInit {

  private _currencyId: string;
  private _transactionForm: FormGroup;
  appConstant = AppConstant;

  constructor(private _route: ActivatedRoute,
              private _transactionService: TransactionService,
              private _snackBar: MatSnackBar,
              private _appService: AppService) { }

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
   * @name TransactionCreationComponent#createTransaction
   * @type {function}
   * @description call the service for creating the transaction
   * @param {Transaction} transaction
   * @public
   */
  createTransaction(transaction: Transaction): void {
    let snackBarRef: MatSnackBarRef<SimpleSnackBar>;
    this._transactionService.createTransaction(transaction).subscribe((idTransaction: string) => {
      snackBarRef = this._snackBar.open(this.appConstant.successOperation, '', this._appService.configSnackBarMessage);
    }, (error) => {
      snackBarRef = this._snackBar.open(this.appConstant.failedOperation, '', this._appService.configSnackBarMessage);
    }, () => {
      snackBarRef.afterDismissed().subscribe(() => {
        this._transactionForm.reset();
      });
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

  /**
   * @name TransactionCreationComponent#quantity
   * @type {getter}
   * @description getter for the quantity
   * @returns {AbstractControl} quantity
   * @public
   */
  get quantity(): AbstractControl {
    return this.transactionForm.get('quantity');
  }
}
