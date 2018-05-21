import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dcs4u-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})

export class TransactionComponent implements OnInit {
  constructor( private _router: Router) { }

  /**
   * @name TransactionComponent#ngOnInit
   * @type {function}
   * @description Angular lifecycle onInit method
   * @public
   */
  ngOnInit(): void {
    this._router.navigate(['/currency/list']);
   }
}
