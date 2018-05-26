import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'dcs4u-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss'],
})

export class TransactionDetailComponent implements OnInit {
  constructor( private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }
}
