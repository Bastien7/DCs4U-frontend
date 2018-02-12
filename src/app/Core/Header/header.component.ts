import { Component } from '@angular/core';
import { AppConstant } from '../../Shared/Constant/app-constant';

@Component({
    selector: 'dcs4u-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    constructor() { }

    public appConstant = AppConstant;
}
