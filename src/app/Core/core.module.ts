import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@dsc4u/Core/Header/header.component';

@NgModule({
    imports: [ CommonModule ],
    exports: [ HeaderComponent ],
    declarations: [ HeaderComponent ],
    providers: [],
})
export class CoreModule { }
