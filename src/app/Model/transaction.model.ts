import {Currency} from '@dcs4u/Model/currency.model';

export class Transaction {
  constructor(
    public id?: string,
    public quantity?: number,
    public addtionalInformation?: string,
    public date?: Date,
    public currency?: Currency) {}
}
