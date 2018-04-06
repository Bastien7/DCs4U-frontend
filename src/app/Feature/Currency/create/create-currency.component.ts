import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AppConstant } from '@dsc4u/Shared/Constant/app-constant';
import { CurrencyService } from '@dsc4u/Shared/Service/currency.service';
import { Currency } from '@dcs4u/Model/currency.model';
import { AppService } from '@dsc4u/Shared/Service/app.service';


@Component({
  selector: 'dcs4u-currency-create',
  templateUrl: './create-currency.component.html',
  styleUrls: ['./create-currency.component.scss']
})

export class CreateCurrencyComponent {

  constructor(private _currencyService: CurrencyService,
    private _snackBarService: MatSnackBar,
    private _appService: AppService,
    private _router: Router) { }

  private _currencyFormValidity: Boolean = false;
  private _valueFormCurrency = {};
  private _idCurrency: string;
  public appConstant = AppConstant;



  /**
   * @name CreateCurrencyComponent#updateValidityForm
   * @type {function}
   * @param {Object} event
   * @description Update value of form validity
   */
  updateValidityForm(event: any): void {
    this._valueFormCurrency['name'] = event.name;
    this._currencyFormValidity = event.valid;
  }

  /**
   * @name CreateCurrencyComponent#saveCurrency
   * @type {function}
   * @description Call the service for saving the currency on the Block Chain
   * @param {Object} personInformation information of the person form
   */
  saveCurrency(personInformation: any): void {
    const owner: any = personInformation;
    this._valueFormCurrency = { ...this._valueFormCurrency, owner };
    this.createCurrency(this._valueFormCurrency);
  }


  /**
   * @name updateValidityForm#currencyFormValidity
   * @type {function}
   * @description getter for _currencyFormValidity
   * @return {Boolean}
   */
  public get currencyFormValidity(): Boolean {
    return this._currencyFormValidity;
  }

  /**
   * @name updateValidityForm#valueFormCurrency
   * @type {function}
   * @description getter for _valueFormCurrency
   * @return {Object}
   */
  public get valueFormCurrency(): any {
    return this._valueFormCurrency;
  }

  /**
   * @name CreateCurrencyComponent#createCurrency
   * @type {function}
   * @description all to the service for currency creation
   * @param {Currency} currency
   */
  createCurrency(currency: Currency) {
    this._currencyService.createCurrency(currency).subscribe((currencyCreated: Currency) => {
      this._idCurrency = currencyCreated.id;
    },
      (error) => {
        this._snackBarService.open(this.appConstant.failedOperation, '', this._appService.configSnackBarMessage);
      },
      () => {
        const successCreationSnackBar = this._snackBarService.open(this.appConstant.successOperation, '', this._appService.configSnackBarMessage); // tslint:disable-line: max-line-length
        successCreationSnackBar.afterDismissed().subscribe(() => {
          this._router.navigate(['currency/summury', this._idCurrency]);
        });
      });
  }
}
