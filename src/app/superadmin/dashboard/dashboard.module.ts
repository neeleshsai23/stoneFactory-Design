import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ChartModule } from 'angular-highcharts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

export const routes = [
  { path: '', component:DashboardComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),ChartModule,NgxChartsModule,
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule
  ]
})
export class DashboardModule { }
