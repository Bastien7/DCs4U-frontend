import { NgModule } from '@angular/core';
import { MatCardModule,
  MatStepperModule,
  MatInputModule,
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule} from '@angular/material';

@NgModule({
  imports: [ MatCardModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule],

  exports: [ MatCardModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule],

  declarations: [],
  providers: [],
})
export class AngularMaterialModule { }
