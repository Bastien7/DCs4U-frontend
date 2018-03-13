import { NgModule } from '@angular/core';
import { CurrencyRoutingModule } from './currency-routing.module';
import { SharedModule } from '../../Shared/shared-module';


import { CreateCurrencyComponent } from './create/create-currency.component';
import { CurrencyComponent } from './currency.component';
import { CurrencyFormComponent } from './create/Currency-Form/currency-form.component';
import { PersonFormComponent } from './create/Person-Form/person-form.component';


@NgModule({
  imports: [CurrencyRoutingModule, SharedModule],
  exports: [],
  declarations: [CreateCurrencyComponent, CurrencyComponent, CurrencyFormComponent, PersonFormComponent],
  providers: [],
})
export class CurrencyModule { }
