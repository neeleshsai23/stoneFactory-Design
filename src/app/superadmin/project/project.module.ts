import { AddsizeeDialogComponent } from './project-dashboard/size/addsizee-dialog/addsizee-dialog.component';
import { SizeComponent } from './project-dashboard/size/size.component';
import { AddimageDialogComponent } from './project-dashboard/design/addimage-dialog/addimage-dialog.component';
import { AddjointcolorDialogComponent } from './project-dashboard/jointcolor/addjointcolor-dialog/addjointcolor-dialog.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProjectGridviewComponent } from './project-gridview/project-gridview.component';
import { ProjectMapviewComponent } from './project-mapview/project-mapview.component';
import { ProjectKanbanviewComponent } from './project-kanbanview/project-kanbanview.component';
import { DragDropModule } from 'primeng/primeng';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { DndModule } from 'ngx-drag-drop';
import { AlertService } from 'src/app/shared/services/alert.service';
import { DragulaService } from 'ng2-dragula';
import { MatTreeModule } from '@angular/material/tree';

import { ProjectGridcolumnsComponent } from './project-gridview/project-gridcolumns/project-gridcolumns.component';
import { AddprojectDialogueComponent } from './project-gridview/addproject-dialogue/addproject-dialogue.component';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { ProjectDashboardComponent } from './project-dashboard/project-dashboard.component';
import { ProjectScheduleComponent } from './project-schedule/project-schedule.component';
import { ScheduleComponent } from './project-dashboard/schedule/schedule.component';
import { AddincentiveComponent } from './project-gridview/addincentive/addincentive.component';
import { DesignComponent } from './project-dashboard/design/design.component';
import { JointcolorComponent } from './project-dashboard/jointcolor/jointcolor.component';
import { PatternsComponent } from './project-dashboard/patterns/patterns.component';
import { AddSizeDialogNewComponent } from './project-dashboard/size/add-size-dialog-new/add-size-dialog-new.component';
import { CopySettingsDialogComponent } from './project-gridview/copy-settings-dialog/copy-settings-dialog.component';



export const routes = [
  { path: '', redirectTo: 'gridview', pathMatch: 'full' },
  { path: 'gridview', component: ProjectGridviewComponent, data: {breadcrumb: ''} },
  { path: 'gridview/grid-coloums', component: ProjectGridcolumnsComponent, data: {breadcrumb: ''} },

    { path: 'kanbanview', component: ProjectKanbanviewComponent, data: { breadcrumb: '' } },
    { path: 'mapview', component: ProjectMapviewComponent, data: { breadcrumb: '' } } ,
    { path: 'schedule', component: ProjectScheduleComponent, data: { breadcrumb: '' } } ,
    { path: 'member-dashboard', component: ProjectDashboardComponent, loadChildren: './project-dashboard/project-dashboard.module#ProjectDashboardModule', data: { breadcrumb: 'Member Dashboard' } },
    { path: 'images', component: DesignComponent, data: { breadcrumb:'Rawimage'} },
    { path: 'jointcolor', component: JointcolorComponent, data: { breadcrumb: 'Jointcolor' } },
    { path: 'size', component: SizeComponent, data: { breadcrumb: 'Size' } },
    {path: 'patterns', component: PatternsComponent, data: { breadcrumb: 'Patterns'}},
];

@NgModule({
  declarations: [PatternsComponent,ProjectComponent, JointcolorComponent,AddsizeeDialogComponent,SizeComponent,AddjointcolorDialogComponent,ProjectGridviewComponent,DesignComponent, ProjectMapviewComponent, ProjectKanbanviewComponent, ProjectGridcolumnsComponent,AddprojectDialogueComponent,AddimageDialogComponent,ProjectDashboardComponent, ProjectScheduleComponent, AddincentiveComponent,AddSizeDialogNewComponent, CopySettingsDialogComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,AgmCoreModule, AgmJsMarkerClustererModule,DndModule,DragDropModule,
    MatTreeModule
  ],
  providers: [AlertService,DragulaService],
  entryComponents: [ProjectGridcolumnsComponent,SizeComponent,AddsizeeDialogComponent,AddimageDialogComponent,AddjointcolorDialogComponent,DeleteConfirmDialogComponent,AddprojectDialogueComponent,AddincentiveComponent,AddSizeDialogNewComponent,CopySettingsDialogComponent]
})
export class ProjectModule { }
