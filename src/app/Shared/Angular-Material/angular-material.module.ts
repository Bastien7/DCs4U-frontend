import { NgModule } from '@angular/core';
import { MatCardModule,
  MatStepperModule,
  MatInputModule,
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule } from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [ MatCardModule, MatStepperModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule ],
    exports: [ MatCardModule, MatStepperModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule ],
    declarations: [],
    providers: [],
})
export class AngularMaterialModule { }
