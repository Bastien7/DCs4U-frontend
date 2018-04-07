import { Component } from '@angular/core';
import { AppConstant } from '@dsc4u/Shared/Constant/app-constant';

@Component({
  selector: 'dcs4u-menu-bar',
  templateUrl: 'menu-bar.component.html',
  styleUrls: ['menu-bar.component.scss']
})

export class MenuBarComponent {
  constructor() { }

  public appConstant = AppConstant;
}
