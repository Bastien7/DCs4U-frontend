import { Owner } from '@dcs4u/Model/owner.model';

export class Currency {
  constructor(
    public id?: string,
    public name?: string,
    public symbol?: string,
    public owner?: Owner,
  ) {}
}
