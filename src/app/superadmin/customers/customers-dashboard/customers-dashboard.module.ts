import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from 'src/app/customer/overview/overview.component';
import { PropertComponent } from './propert/propert.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OverviewDashboardComponent } from './overview-dashboard/overview-dashboard.component';

export const routes = [ 
  { path: '', redirectTo:"overview", pathMatch:'full' },
  { path: 'overview', component: OverviewDashboardComponent, data: { breadcrumb: 'Customer Dashboard' } },
  { path: 'property', component: PropertComponent, data: { breadcrumb: 'Customer Dashboard' } },
]

@NgModule({
  declarations: [PropertComponent, OverviewDashboardComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule
  ]
})
export class CustomersDashboardModule { }
