import { NgModule } from '@angular/core';
import { TransactionCreationComponent } from '@dsc4u/Feature/Transaction/create/transaction-creation.component';
import { TransactionRoutingModule } from '@dsc4u/Feature/Transaction/transaction-routing.module';
import { TransactionComponent } from '@dsc4u/Feature/Transaction/transaction.component';


@NgModule({
  imports: [TransactionRoutingModule],
  exports: [],
  declarations: [TransactionComponent, TransactionCreationComponent],
  providers: [],
})
export class TransactionModule { }
