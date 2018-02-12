import { NgModule } from '@angular/core';
import { MatCardModule, MatStepperModule, MatInputModule, MatButtonModule } from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [ MatCardModule, MatStepperModule, MatInputModule, MatButtonModule ],
    exports: [ MatCardModule, MatStepperModule, MatInputModule, MatButtonModule ],
    declarations: [],
    providers: [],
})
export class AngularMaterialModule { }
