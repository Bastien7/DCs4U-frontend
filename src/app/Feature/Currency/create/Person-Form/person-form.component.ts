import { Component, Input } from '@angular/core';
import { AppConstant } from '../../../../Shared/Constant/app-constant';

@Component({
  selector: 'dcs4u-currency-creation-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})

export class PersonFormComponent  {
  constructor() { }

  @Input() private _currencyName: string;
  appConstant = AppConstant;


  /**
   * @name currencyName
   * @description get value of _currencyName
   * @return {string} _currencyName
   */
  public get currencyName() {
    return this._currencyName;
  }


}
