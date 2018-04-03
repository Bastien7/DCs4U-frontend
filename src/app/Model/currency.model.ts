import { Owner } from '@dcs4u/Model/owner.model';

export class Currency {
  constructor(
    private _id?: string,
    private name?: string,
    private symbol?: string,
    private owner?: Owner,
  ) {}
}
