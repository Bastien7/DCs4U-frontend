import { NgModule } from '@angular/core';
import { TransactionCreationComponent } from '@dsc4u/Feature/Transaction/create/transaction-creation.component';
import { TransactionRoutingModule } from '@dsc4u/Feature/Transaction/transaction-routing.module';
import { TransactionComponent } from '@dsc4u/Feature/Transaction/transaction.component';
import { SharedModule } from '@dsc4u/Shared/shared-module';


@NgModule({
  imports: [TransactionRoutingModule, SharedModule ],
  exports: [],
  declarations: [TransactionComponent, TransactionCreationComponent],
  providers: [],
})
export class TransactionModule { }
