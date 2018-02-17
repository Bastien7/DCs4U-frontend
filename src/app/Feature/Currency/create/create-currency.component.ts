import { Component, ViewChild } from '@angular/core';
import { AppConstant } from '../../../Shared/Constant/app-constant';
import { CurrencyFormComponent } from './Currency-Form/currency-form.component';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'dcs4u-currency-create',
    templateUrl: './create-currency.component.html',
    styleUrls: ['./create-currency.component.scss']
})

export class CreateCurrencyComponent {

    constructor() { }

    @ViewChild('currency') currency: NgForm;
    private _currencyFormValidity: Boolean = false;
    private _valueFormCurrency = {};
    public appConstant = AppConstant;



    /**
     * @name CreateCurrencyComponent#updateValidityForm
     * @type {function}
     * @param {Object} event
     * Update value of form validity
     */
    updateValidityForm(event: any): void {
        this._valueFormCurrency['name'] = event.name;
        this._currencyFormValidity = event.valid;
    }



    /**
     * @name updateValidityForm#currencyFormValidity
     * @description getter for _currencyFormValidity
     * @return {Boolean}
     */
    public get currencyFormValidity(): Boolean {
        return this._currencyFormValidity;
    }

    /**
     * @name updateValidityForm#valueFormCurrency
     * @description getter for _valueFormCurrency
     * @return {?Object}
     */
    public get valueFormCurrency(): any {
        return this._valueFormCurrency;
    }
}
