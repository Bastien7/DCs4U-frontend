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
    private currencyFormValidity: Boolean = false;
    private valueFormCurrency = {};
    public appConstant = AppConstant;

    /**
     *
     * @param event
     * Update value of form validity
     */
    updateValidityForm(event: any): void {
        this.valueFormCurrency['name'] = event.name;
        this.currencyFormValidity = event.valid;
    }

    /*********************************************** Getter and Setter***************************************** */

    public get CurrencyFormValidity(): Boolean {
        return this.currencyFormValidity;
    }

    public get ValueFormCurrency(): any {
        return this.valueFormCurrency;
    }
}
