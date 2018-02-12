import { NgModule } from '@angular/core';
import { MatCardModule, MatStepperModule, MatInputModule } from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [ MatCardModule, MatStepperModule, MatInputModule ],
    exports: [ MatCardModule, MatStepperModule, MatInputModule ],
    declarations: [],
    providers: [],
})
export class AngularMaterialModule { }
