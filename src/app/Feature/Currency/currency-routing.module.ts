import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyComponent } from '@dsc4u/Feature/Currency/currency.component';
import { CreateCurrencyComponent } from '@dsc4u/Feature/Currency/create/create-currency.component';

const currencyRoute: Routes = [
    { path: '', component: CurrencyComponent, pathMatch: 'prefix', children: [
        { path: '', redirectTo: '/currency/create', pathMatch: 'full' },
        { path: 'create', component: CreateCurrencyComponent  }
    ]}
];

@NgModule({
    imports: [ RouterModule.forChild(currencyRoute)],
    exports: [ RouterModule ],
    declarations: [],
    providers: [],
})
export class CurrencyRoutingModule { }
