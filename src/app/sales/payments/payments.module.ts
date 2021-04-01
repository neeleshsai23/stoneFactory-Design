import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddpaymentsComponent } from './addpayments/addpayments.component';

export const routes = [
  { path: '', component:PaymentsComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [PaymentsComponent, AddpaymentsComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule
  ],
  entryComponents :[AddpaymentsComponent]
})
export class PaymentsModule { }
