import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';


const appRoute: Routes = [
    { path: '', redirectTo: '/currency', pathMatch: 'full'},
    { path: 'currency', loadChildren: 'app/Feature/Currency/currency.module#CurrencyModule'}
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoute)],
    exports: [ RouterModule ],
    declarations: [],
    providers: [],
})
export class AppRoutingModule { }
