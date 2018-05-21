import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from '@dsc4u/Feature/Transaction/transaction.component';
import { TransactionCreationComponent } from '@dsc4u/Feature/Transaction/create/transaction-creation.component';


const routes: Routes = [
  { path: '', component: TransactionComponent, pathMatch: 'prefix', children: [
    { path: 'creation', component: TransactionCreationComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionRoutingModule { }
