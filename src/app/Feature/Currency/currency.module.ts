import { NgModule } from '@angular/core';
import { SharedModule } from '@dsc4u/Shared/shared-module';
import { CurrencyRoutingModule } from '@dsc4u/Feature/Currency/currency-routing.module';
import { CreateCurrencyComponent } from '@dsc4u/Feature/Currency/create/create-currency.component';
import { CurrencyComponent } from '@dsc4u/Feature/Currency/currency.component';
import { CurrencyFormComponent } from '@dsc4u/Feature/Currency/create/Currency-Form/currency-form.component';
import { PersonFormComponent } from '@dsc4u/Feature/Currency/create/Person-Form/person-form.component';
import { CurrencySummuryComponent } from '@dsc4u/Feature/Currency/resume/currency-summury.component';

@NgModule({
  imports: [CurrencyRoutingModule, SharedModule],
  exports: [],
  declarations: [CreateCurrencyComponent, CurrencyComponent, CurrencyFormComponent, PersonFormComponent, CurrencySummuryComponent ],
  providers: [],
})
export class CurrencyModule { }
