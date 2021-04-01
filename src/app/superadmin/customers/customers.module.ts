import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddcustomerDialogueComponent } from './addcustomer-dialogue/addcustomer-dialogue.component';
import { CustomersDashboardComponent } from './customers-dashboard/customers-dashboard.component';

export const routes = [
  { path: '', component:CustomersComponent, pathMatch: 'full' },
  { path: 'customer-dashboard', component: CustomersDashboardComponent, loadChildren: './customers-dashboard/customers-dashboard.module#CustomersDashboardModule', data: { breadcrumb: 'Customer Dashboard' } },
];

@NgModule({
  declarations: [CustomersComponent, AddcustomerDialogueComponent,CustomersDashboardComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule
  ],
  entryComponents : [AddcustomerDialogueComponent]
})
export class CustomersModule { }
