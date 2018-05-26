import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TransactionComponent} from '@dsc4u/Feature/Transaction/transaction.component';
import {TransactionCreationComponent} from '@dsc4u/Feature/Transaction/create/transaction-creation.component';
import {TransactionDetailComponent} from '@dsc4u/Feature/Transaction/detail/transaction-detail.component';


const routes: Routes = [
  { path: '', component: TransactionComponent, pathMatch: 'prefix', children: [
    { path: 'creation', component: TransactionCreationComponent},
    { path: 'detail/:id', component: TransactionDetailComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionRoutingModule { }
