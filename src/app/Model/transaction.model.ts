import {Currency} from '@dcs4u/Model/currency.model';

export class Transaction {
  constructor(id?: string,
              quantity?: number,
              addtionalInformation?: string,
              date?: Date,
              currency?: Currency) {}
}
