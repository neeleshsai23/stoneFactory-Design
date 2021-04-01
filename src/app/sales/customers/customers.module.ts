import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesCustomersComponent } from './sales-customers.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddsalescustomerComponent } from './addsalescustomer/addsalescustomer.component';

export const routes = [
  { path: '', component:SalesCustomersComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [SalesCustomersComponent, AddsalescustomerComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule
  ],
  entryComponents :[AddsalescustomerComponent]
})
export class CustomersModule { }
