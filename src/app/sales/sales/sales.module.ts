import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddsalesComponent } from './addsales/addsales.component';

export const routes = [
  { path: '', component:SalesComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [SalesComponent, AddsalesComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule
  ],
  entryComponents : [AddsalesComponent]
})
export class SalesModule { }
