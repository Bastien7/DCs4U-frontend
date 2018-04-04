import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyComponent } from '@dsc4u/Feature/Currency/currency.component';
import { CreateCurrencyComponent } from '@dsc4u/Feature/Currency/create/create-currency.component';
import { CurrencySummuryComponent } from '@dsc4u/Feature/Currency/resume/currency-summury.component';

const currencyRoute: Routes = [
  {
    path: '', component: CurrencyComponent, pathMatch: 'prefix', children: [
      { path: '', pathMatch: 'full', redirectTo: 'create' },
      { path: 'create', component: CreateCurrencyComponent },
      { path: 'summury/:id', component: CurrencySummuryComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(currencyRoute)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class CurrencyRoutingModule { }
