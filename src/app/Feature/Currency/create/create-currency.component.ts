import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppConstant } from '@dsc4u/Shared/Constant/app-constant';

@Component({
    selector: 'dcs4u-currency-create',
    templateUrl: './create-currency.component.html',
    styleUrls: ['./create-currency.component.scss']
})

export class CreateCurrencyComponent {

    constructor() { }

    private _currencyFormValidity: Boolean = false;
    private _valueFormCurrency = {};
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
      this._valueFormCurrency = {...this._valueFormCurrency, owner};
      console.log(this._valueFormCurrency);
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
}
