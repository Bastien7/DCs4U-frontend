import { NgModule } from '@angular/core';
import { TransactionComponent } from '@dsc4u/Feature/Transaction/transaction.component';
import { TransactionRoutingModule } from '@dsc4u/Feature/Transaction/transaction-routing.module';


@NgModule({
  imports: [TransactionRoutingModule],
  exports: [],
  declarations: [TransactionComponent],
  providers: [],
})
export class TransactionModule { }
