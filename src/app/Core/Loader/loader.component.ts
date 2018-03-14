import { Component, Input} from '@angular/core';

@Component({
  selector: 'dcs4u-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})

export class LoaderComponent {
  constructor() { }

  private _isLoading: boolean;

  /**
   * @name LoaderComponent#isLoading
   * @type {function}
   * @description setter of _isLoading
   * @param {boolean} loading
   */
  @Input() public set isLoading(loading) {
    this._isLoading = loading;
  }

  /**
   * @name LoaderComponent#isLoading
   * @type {function}
   * @description getter of _isLoading
   * @return {boolean} _isLoading
   */
  public get isLoading(): boolean {
    return this._isLoading;
  }
}
