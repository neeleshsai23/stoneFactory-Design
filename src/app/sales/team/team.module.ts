import { SettingsComponent } from './settings/settings.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { RouterModule } from '@angular/router';
import { AddteamsComponent } from './addteams/addteams.component';

export const routes = [
  { path: '', redirectTo:"subscription", pathMatch: 'full' },
  { path: 'subscription', component: TeamComponent },
  { path: 'Preferences', component: SettingsComponent }
];


@NgModule({
  declarations: [TeamComponent, AddteamsComponent, SettingsComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    SharedModule, ConfirmationPopoverModule, ReactiveFormsModule, FormsModule
  ],
  entryComponents : [AddteamsComponent]
})
export class TeamModule { }
