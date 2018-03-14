import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { AppConstant } from '@dsc4u/Shared/Constant/app-constant';
import * as moment from 'moment';


@Component({
  selector: 'dcs4u-currency-creation-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})

export class PersonFormComponent implements OnInit {
  constructor() { }

  @Output() submitForm: EventEmitter<any> = new EventEmitter<any>();
  private _currencyName: string;
  private _personForm: FormGroup;
  appConstant = AppConstant;


  /**
   * @name PersonFormComponent#ngOnInit
   * @type {function}
   * @description Lifecycle Angular for init the view
   */
  ngOnInit(): void {
    this.createPersonForm();
  }

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

  /**
   * @name PersonFormComponent#personForm
   * @type {function}
   * @description getter of _personForm
   * @return {FormGroup} _personForm;
   */
  public get personForm(): FormGroup {
    return this._personForm;
  }

  /**
   * @name PersonFormComponent#createPersonForm
   * @type {function}
   * @description create the personForm
   */
  createPersonForm() {
    this._personForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      birthday: new FormControl('', Validators.required)
    });
  }

  /**
   * @name PersonFormComponent#fistName
   * @type {function}
   * @description getter abstract Control firstName
   * @return {AbstractControl} firstName
   */
  public get firstName(): AbstractControl {
    return this._personForm.get('firstName');
  }

  /**
   * @name PersonFormComponent#lastName
   * @type {function}
   * @description getter abstract Control lastName
   * @return {AbstractControl} lastName
   */
  public get lastName(): AbstractControl {
    return this._personForm.get('lastName');
  }

  /**
   * @name PersonFormComponent#email
   * @type {function}
   * @description getter abstract Control email
   * @return {AbstractControl} email
   */
  public get email(): AbstractControl {
    return this._personForm.get('email');
  }

  /**
   * @name PersonFormComponent#birthday
   * @type {function}
   * @description getter abstract Control birthday
   * @return {AbstractControl} birthday
   */
  public get birthday(): AbstractControl {
    return this._personForm.get('birthday');
  }

}
