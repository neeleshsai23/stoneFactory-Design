import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddtransactionComponent } from './addtransaction/addtransaction.component';

export const routes = [
  { path: '', component:TransactionComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [TransactionComponent, AddtransactionComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule
  ],
  entryComponents : [AddtransactionComponent]

})
export class TransactionModule { }
