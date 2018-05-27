import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {AppConstant} from '@dsc4u/Shared/Constant/app-constant';
import {Transaction} from '@dcs4u/Model/transaction.model';
import {TransactionService} from '@dsc4u/Shared/Service/transaction.service';
import {MatSnackBar, MatSnackBarRef, SimpleSnackBar} from '@angular/material';
import {AppService} from '@dsc4u/Shared/Service/app.service';
import {Currency} from '@dcs4u/Model/currency.model';
import {Observable} from 'rxjs/index';
import {CurrencyService} from '@dsc4u/Shared/Service/currency.service';

@Component({
  selector: 'dcs4u-transaction-creation',
  templateUrl: './transaction-creation.component.html',
  styleUrls: ['./transaction-creation.component.scss']
})

export class TransactionCreationComponent implements OnInit {

  private _currency: string;
  private _currencies: Currency[];
  private _transactionForm: FormGroup;
  appConstant = AppConstant;

  constructor(private _route: ActivatedRoute,
              private _transactionService: TransactionService,
              private _currencyService: CurrencyService,
              private _snackBar: MatSnackBar,
              private _appService: AppService,
              private _router: Router) { }

  /**
   * @name TransactionCreationComponent#ngOnInit
   * @type {function}
   * @description Angular lifecycle OnInit method
   * @public
   */
  ngOnInit(): void {
    this.initPage();
  }

  /**
   * @name TransactionCreationComponent#getQueryParams
   * @type {function}
   * @description get the id of a currency
   * @public
   */
  initPage(): void {
    this._route.queryParams.subscribe((queryParams: Params) => {
      this._currency = queryParams.id;
      if (this._currency) {
        this.createTransactionForm(this._currency);
      } else {
        this._currencyService.getCurrencies().subscribe((currencies: Currency[]) => {
          this._currencies = currencies;
          this.createTransactionForm();
        }, (error) => {
          let snackBarRef: MatSnackBarRef<SimpleSnackBar>;
          snackBarRef = this._snackBar.open(this.appConstant.failedOperation, '', this._appService.configSnackBarMessage);
          snackBarRef.afterDismissed().subscribe(() => {
            this._router.navigate(['/currency/list']);
          });
        });
      }
    });
  }

  /**
   * @name TransactionCreationComponent#createTransactionForm
   * @type {function}
   * @description create the transaction form
   * @public
   */
  createTransactionForm(currency: string = ''): void {
    this._transactionForm = new FormGroup({
      currencyId: new FormControl(currency, Validators.required),
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
    this._transactionService.createTransaction(transaction).subscribe((transactionCreated: Transaction) => {
      snackBarRef = this._snackBar.open(this.appConstant.successOperation, '', this._appService.configSnackBarMessage);
      snackBarRef.afterDismissed().subscribe(() => {
        this._router.navigate(['transaction/detail', transactionCreated.id]);
      });
    }, (error) => {
      snackBarRef = this._snackBar.open(this.appConstant.failedOperation, '', this._appService.configSnackBarMessage);
    });
  }

  /**
   * @name TransactionCreationComponent#currencyId
   * @type {getter}
   * @description get the private var _currencyId
   * @returns {string} _currencyId
   * @public
   */
  get currency(): string {
    return this._currency;
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

  /**
   * @name TransactionCreationComponent#currencies
   * @type {getter}
   * @description getter for the private var _currencies
   * @returns {Observable<Currency[]>} _currencies
   */
  get currencies(): Currency[] {
    return this._currencies;
  }

  /**
   * @name TransactionCreationComponent#currencyId
   * @type {getter}
   * @description getter for the abstract control currencyId
   * @returns {AbstractControl}
   */
  get currencyId(): AbstractControl {
    return this._transactionForm.get('currencyId');
  }
}
