import { Component, Input } from '@angular/core';
import { AppConstant } from '../../../../Shared/Constant/app-constant';
import * as moment from 'moment';

@Component({
  selector: 'dcs4u-currency-creation-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})

export class PersonFormComponent {
  constructor() { }

  private _currencyName: string;
  appConstant = AppConstant;

  /**
   * @name PersonFormComponent#onSubmitForm
   * @param {Object} valuesForm
   * @description format correctly the object for the backend and trigger an eventEmitter to call the service in the parent component
   */
  onSubmitForm(valuesForm): void {

  }

  /**
   * @name currencyName
   * @description get value of _currencyName
   * @return {string} _currencyName
   */
  public get currencyName() {
    return this._currencyName;
  }

  /**
   * @name currencyName
   * @type {function}
   * @description setter of private var _currencyName
   * @param {string} currencyName
   */
  @Input() public set currencyName(currencyName: string) {
    this._currencyName = currencyName;
  }


}
