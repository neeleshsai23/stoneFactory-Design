import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProspectsComponent } from './prospects/prospects.component';
import { LeadsComponent } from './leads/leads.component';
import { ConstantContactsComponent } from './constant-contacts/constant-contacts.component';
import { AddvisitsComponent } from './prospects/addvisits/addvisits.component';
import { AddprospectsComponent } from './prospects/addprospects/addprospects.component';
import { DragDropModule } from 'primeng/primeng';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { DndModule } from 'ngx-drag-drop';
import { AlertService } from 'src/app/shared/services/alert.service';
import { DragulaService } from 'ng2-dragula';
import { LeaddialogComponent } from './leads/leaddialog/leaddialog.component';
import { LeadsGridcolumnsComponent } from './leads/leads-gridcolumns/leads-gridcolumns.component';
import { GridcolumnsComponent } from './prospects/gridcolumns/gridcolumns.component';
import { AddMemberPackageComponent } from './add-member-package/add-member-package.component';
import { PatternsDialogComponent } from './patterns-dialog/patterns-dialog.component';
import { ViewsDialogComponent } from './views-dialog/views-dialog.component';

export const routes = [
  { path: '', redirectTo: 'packages', pathMatch: 'full' },
     { path: 'packages', component: SalesComponent, data: { breadcrumb: '' } },
    // { path: 'constantcontacts', component: ConstantContactsComponent, data: { breadcrumb: '' } },
    // { path: 'prospects', component: ProspectsComponent, data: { breadcrumb: '' } } ,
];

@NgModule({
  declarations: [SalesComponent, ProspectsComponent, LeadsComponent, ConstantContactsComponent, AddvisitsComponent, AddprospectsComponent, LeaddialogComponent,GridcolumnsComponent,LeadsGridcolumnsComponent, AddMemberPackageComponent, PatternsDialogComponent, ViewsDialogComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,AgmCoreModule, AgmJsMarkerClustererModule,DndModule,DragDropModule
  ],
  providers: [AlertService,DragulaService],
  entryComponents:[AddvisitsComponent,AddprospectsComponent,AddMemberPackageComponent,LeaddialogComponent,GridcolumnsComponent,LeadsGridcolumnsComponent,ViewsDialogComponent,PatternsDialogComponent]
})
export class SalesModule { }
