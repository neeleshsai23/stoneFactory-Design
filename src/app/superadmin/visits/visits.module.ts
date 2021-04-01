import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitsComponent } from './visits.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddPaymentComponent } from './add-payment/add-payment.component';

export const routes = [
  { path: '', component:VisitsComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [VisitsComponent, AddPaymentComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule
  ],
  entryComponents:[AddPaymentComponent]
})
export class VisitsModule { }
