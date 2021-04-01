import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberEnquiryComponent } from './member-enquiry/member-enquiry.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddMemberEnquiryComponent } from './add-member-enquiry/add-member-enquiry.component';
import { MemberEnquiryDashboardComponent } from './member-enquiry-dashboard/member-enquiry-dashboard.component';
import { EnquiryDashboardDialogComponent } from './enquiry-dashboard-dialog/enquiry-dashboard-dialog.component';
import { EnquiryyComponent } from './enquiryy/enquiryy.component';
import { EnquiryyyComponent } from './enquiryyy/enquiryyy.component';
import { EnquiryyyyComponent } from './enquiryyyy/enquiryyyy.component';
import { EnquiryyyyyComponent } from './enquiryyyyy/enquiryyyyy.component';



export const routes = [
  { path: '', component: MemberEnquiryComponent, pathMatch: 'full' },
  { path: 'enquiry-dashboard', component: MemberEnquiryDashboardComponent},
];

@NgModule({
  declarations: [MemberEnquiryComponent, AddMemberEnquiryComponent, MemberEnquiryDashboardComponent, EnquiryDashboardDialogComponent, EnquiryyComponent, EnquiryyyComponent, EnquiryyyyComponent, EnquiryyyyyComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    SharedModule, ConfirmationPopoverModule, ReactiveFormsModule, FormsModule
  ],
  entryComponents: [AddMemberEnquiryComponent, EnquiryDashboardDialogComponent, EnquiryyComponent, EnquiryyyComponent, EnquiryyyyComponent, EnquiryyyyyComponent]
})
export class MemberEnquiryModule { }
