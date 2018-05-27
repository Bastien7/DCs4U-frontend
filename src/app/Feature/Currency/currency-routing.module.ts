import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCurrencyComponent } from '@dsc4u/Feature/Currency/create/create-currency.component';
import { CurrencyComponent } from '@dsc4u/Feature/Currency/currency.component';
import { CurrencyListComponent } from '@dsc4u/Feature/Currency/list/currency-list.component';
import { CurrencySummuryComponent } from '@dsc4u/Feature/Currency/resume/currency-summury.component';

const currencyRoute: Routes = [
  {
    path: '', component: CurrencyComponent, pathMatch: 'prefix', children: [
      { path: '', pathMatch: 'full', redirectTo: 'list' },
      { path: 'create', component: CreateCurrencyComponent },
      { path: 'summury/:id', component: CurrencySummuryComponent },
      { path: 'list', component: CurrencyListComponent }
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
