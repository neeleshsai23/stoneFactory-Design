import { PatternMasterComponent } from './pattern-master/pattern-master.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { SettingsComponent } from './settings/settings.component';
import { LookupoptionsComponent } from './lookupoptions/lookupoptions.component';
import { UserDialogComponent } from './manageusers/user-dialog/user-dialog.component';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { AddlookupDialogueComponent } from './lookupoptions/addlookup-dialogue/addlookup-dialogue.component';
import { MasterDataComponent } from './master-data/master-data.component';
import { ColorCodesComponent } from './master-data/color-codes/color-codes.component';
import { IndustryMasterComponent } from './master-data/industry-master/industry-master.component';
import { LocationComponent } from './master-data/location/location.component';
import { ViewMasterComponent } from './view-master/view-master.component';
import { AddViewmasterComponent } from './view-master/add-viewmaster/add-viewmaster.component';
import { LanguageMasterComponent } from './language-master/language-master.component';
import { UploadCsvDialogComponent } from './upload-csv-dialog/upload-csv-dialog.component';
import { AddSizesDialogComponent } from './add-sizes-dialog/add-sizes-dialog.component';
import { UserPermissionsComponent } from './manageusers/user-permissions/user-permissions.component';

export const routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'lookup', component: LookupoptionsComponent, data: { breadcrumb: 'Lookup Options' } },
  { path: 'users', component: ManageusersComponent, data: { breadcrumb: 'Manage Users' } },
  {path:'users/permissions',component:UserPermissionsComponent,data:{breadcrumb:"Permissions"}},
  { path: 'settings', component: SettingsComponent, data: { breadcrumb: 'Settings' } },
  { path: 'view-master', component: ViewMasterComponent , data: { breadcrumb: 'View Master' } },
  { path: 'pattern-master', component: PatternMasterComponent, loadChildren:'./pattern-master/pattern-master.module#PatternMasterModule',data: { breadcrumb: 'Pattern Master' } },
  { path: 'masterdata/industry', component: MasterDataComponent, data: { breadcrumb: 'MasterData' } },
  { path: 'masterdata/countries', component: LocationComponent, data: { breadcrumb: 'MasterData' } },
  { path: 'masterdata/color', component: ColorCodesComponent, data: { breadcrumb: 'MasterData' } },
  { path: 'language-master', component:LanguageMasterComponent, data: {breadcrumb:"Language Master"}}
];

@NgModule({
  declarations: [AdminComponent, ManageusersComponent, SettingsComponent, LookupoptionsComponent, UserDialogComponent, AddlookupDialogueComponent, MasterDataComponent, ColorCodesComponent, IndustryMasterComponent, LocationComponent, ViewMasterComponent, AddViewmasterComponent,PatternMasterComponent, LanguageMasterComponent, UploadCsvDialogComponent, AddSizesDialogComponent, UserPermissionsComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule
  ],
  entryComponents: [UserDialogComponent,DeleteConfirmDialogComponent,AddlookupDialogueComponent, AddViewmasterComponent, UploadCsvDialogComponent,AddSizesDialogComponent]
})
export class AdminModule { }
