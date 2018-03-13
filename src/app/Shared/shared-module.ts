import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '@dsc4u/Shared/Angular-Material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

@NgModule({
    imports: [ AngularMaterialModule, FormsModule, CommonModule, ReactiveFormsModule],
    exports: [ AngularMaterialModule, FormsModule, CommonModule, ReactiveFormsModule],
    declarations: [],
    providers: [],
})
export class SharedModule { }
