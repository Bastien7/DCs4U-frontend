import { Component, ViewChild, Output, EventEmitter, OnInit } from '@angular/core';
import { AppConstant } from '@dsc4u/Shared/Constant/app-constant';
import { NgForm, FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';


@Component({
    selector: 'dcs4u-currency-creation-currency-form',
    templateUrl: './currency-form.component.html',
    styleUrls: ['./currency-form.component.scss']
})

export class CurrencyFormComponent implements OnInit {

    constructor() { }

    @Output() validityFormEmitter: EventEmitter<any> = new EventEmitter<any>();
    public appConstant = AppConstant;
    private _currencyForm: FormGroup;

    /**
     * @name CurrencyFormComponent#ngOnInit
     * @type {function}
     * @description Lifecycle Angular
     */
    ngOnInit(): void {
      this.createCurrencyForm();
    }

    /**
     * @name CurrencyFormComponent#emitValidityForm
     * @description Emit an event with the valididty of the form and the value of the form
     */
    emitValidityForm(): void {
        const objectToEmit = { name: this._currencyForm.value.currencyName, valid: this._currencyForm.valid };
        this.validityFormEmitter.emit(objectToEmit);
    }

    /**
     * @name CurrencyFormComponent#createCurrencyForm
     * @type {function}
     * @description create the form for currency
     */
    createCurrencyForm() {
      this._currencyForm = new FormGroup({
        currencyName:  new FormControl('', Validators.required)
      });
    }

    /**
     * @name CurrencyFormComponent#currencyForm
     * @type {function}
     * @description getter of currency Form
     */
    public get currencyForm(): FormGroup {
      return this._currencyForm;
    }
}
