import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatStepperModule,
  MatSelectModule,
} from '@angular/material';


@NgModule({
  imports: [
    MatCardModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule],

  exports: [
    MatCardModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule],

  declarations: [],
  providers: [],
})
export class AngularMaterialModule { }
