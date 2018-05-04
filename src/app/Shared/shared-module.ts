import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '@dsc4u/Shared/Angular-Material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CurrencyService } from '@dsc4u/Shared/Service/currency.service';
import { LoaderInterceptor } from '@dsc4u/Shared/Service/loader.interceptor';


@NgModule({
  imports: [AngularMaterialModule, CommonModule, ReactiveFormsModule, HttpClientModule],
  exports: [AngularMaterialModule, CommonModule, ReactiveFormsModule],
  declarations: [],
  providers: [CurrencyService, { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
})
export class SharedModule { }
