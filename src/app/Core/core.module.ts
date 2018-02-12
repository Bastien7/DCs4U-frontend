import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Header/header.component';



@NgModule({
    imports: [ CommonModule ],
    exports: [ HeaderComponent ],
    declarations: [ HeaderComponent ],
    providers: [],
})
export class CoreModule { }
