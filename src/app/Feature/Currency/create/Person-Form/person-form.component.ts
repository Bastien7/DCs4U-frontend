import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppConstant } from '@dsc4u/Shared/Constant/app-constant';
import * as moment from 'moment';

@Component({
  selector: 'dcs4u-currency-creation-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})

export class PersonFormComponent {
  constructor() { }

  @Output() submitForm: EventEmitter<any> = new EventEmitter<any>();
  private _currencyName: string;
  appConstant = AppConstant;

  /**
   * @name PersonFormComponent#onSubmitForm
   * @type {function}
   * @param {Object} valuesForm
   * @description format correctly the object for the backend and trigger an eventEmitter to call the service in the parent component
   */
  onSubmitForm(valuesForm): void {
    const objectFormated = {
        firstName: valuesForm.firstName,
        lastName: valuesForm.lastName,
        email: valuesForm.email,
        birthday: moment(valuesForm.birthday.toISOString()).format('YYYY-MM-DD')
    };
    this.submitForm.emit(objectFormated);
  }

  /**
   * @name PersonFormComponent#_currencyName
   * @type {function}
   * @description getter value of _currencyName
   * @return {string} _currencyName
   */
  public get currencyName() {
    return this._currencyName;
  }

  /**
   * @name PersonFormComponent#currencyName
   * @type {function}
   * @description setter of private var _currencyName
   * @param {string} currencyName
   */
  @Input() public set currencyName(currencyName: string) {
    this._currencyName = currencyName;
  }
}
