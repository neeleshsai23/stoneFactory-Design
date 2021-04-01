import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentsComponent } from './agents.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddAgentDialogComponent } from './add-agent-dialog/add-agent-dialog.component';

export const routes = [
  { path: '', component:AgentsComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [AgentsComponent, AddAgentDialogComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule
  ],
  entryComponents:[AddAgentDialogComponent]
})
export class AgentsModule { }
