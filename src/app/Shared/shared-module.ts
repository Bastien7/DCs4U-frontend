import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '@dsc4u/Shared/Angular-Material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

@NgModule({
    imports: [ AngularMaterialModule, CommonModule, ReactiveFormsModule],
    exports: [ AngularMaterialModule, CommonModule, ReactiveFormsModule],
    declarations: [],
    providers: [],
})
export class SharedModule { }
