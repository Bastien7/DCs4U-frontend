import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '@dsc4u/Shared/Angular-Material/angular-material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [ AngularMaterialModule, FormsModule, CommonModule],
    exports: [ AngularMaterialModule, FormsModule, CommonModule],
    declarations: [],
    providers: [],
})
export class SharedModule { }
