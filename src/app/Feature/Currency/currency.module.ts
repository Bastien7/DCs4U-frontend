import { NgModule } from '@angular/core';
import { CurrencyFormComponent } from '@dsc4u/Feature/Currency/create/Currency-Form/currency-form.component';
import { PersonFormComponent } from '@dsc4u/Feature/Currency/create/Person-Form/person-form.component';
import { CreateCurrencyComponent } from '@dsc4u/Feature/Currency/create/create-currency.component';
import { CurrencyRoutingModule } from '@dsc4u/Feature/Currency/currency-routing.module';
import { CurrencyComponent } from '@dsc4u/Feature/Currency/currency.component';
import { CurrencyListComponent } from '@dsc4u/Feature/Currency/list/currency-list.component';
import { CurrencySummuryComponent } from '@dsc4u/Feature/Currency/resume/currency-summury.component';
import { SharedModule } from '@dsc4u/Shared/shared-module';

@NgModule({
  imports: [CurrencyRoutingModule, SharedModule],
  exports: [],
  declarations: [CreateCurrencyComponent,
    CurrencyComponent,
    CurrencyFormComponent,
    PersonFormComponent,
    CurrencySummuryComponent,
    CurrencyListComponent],
  providers: [],
})
export class CurrencyModule { }
