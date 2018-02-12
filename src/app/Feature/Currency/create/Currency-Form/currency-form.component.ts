import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { AppConstant } from '../../../../Shared/Constant/app-constant';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'dcs4u-currency-creation-currency-form',
    templateUrl: './currency-form.component.html',
    styleUrls: ['./currency-form.component.scss']
})

export class CurrencyFormComponent {
    constructor() { }
    public appConstant = AppConstant;
    @ViewChild ('currencyForm') currencyForm: NgForm;
    @Output() validityFormEmitter: EventEmitter<Boolean> = new EventEmitter<Boolean>();

    /** Emmit value of form validity when focusout */
    EmitValidityForm(): void {
        this.validityFormEmitter.emit(this.currencyForm.form.valid);
    }
}
