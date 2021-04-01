

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDashboardComponent } from './project-dashboard.component';
import { ActivityComponent } from './activity/activity.component';
import { OverviewComponent } from './overview/overview.component';
import { SitevisitsComponent } from './sitevisits/sitevisits.component';
import { DocsComponent } from './docs/docs.component';
import { ConceptComponent } from './concept/concept.component';
import { ScheduleComponent } from './schedule/schedule.component';

import { DrawingsComponent } from './drawings/drawings.component';
import { ConstructionComponent } from './construction/construction.component';
import { ClosureComponent } from './closure/closure.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { DndModule } from 'ngx-drag-drop';
import { DragDropModule } from 'primeng/dragdrop';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { AddrawimageComponent } from './design/addrawimage/addrawimage.component';
import { AddinventoryComponent } from './schedule/addinventory/addinventory.component';
import { Addangle1Component } from './schedule/addangle1/addangle1.component';
import { Addcolor1Component } from './schedule/addcolor1/addcolor1.component';
import { Addsize1Component } from './schedule/addsize1/addsize1.component';
import { Addwidth1Component } from './schedule/addwidth1/addwidth1.component';
import { Addpattern1Component } from './schedule/addpattern1/addpattern1.component';
import { ViewComponent } from './view/view.component';
import { AddviewDialogComponent } from './view/addview-dialog/addview-dialog.component';

import { EditComponent } from './view/edit/edit.component';
import { AddfinishComponent } from './schedule/addfinish/addfinish.component';
import { AddlayoutComponent } from './schedule/addlayout/addlayout.component';
import { ShowSizeComponent } from './docs/show-size/show-size.component';
import { ShowPatternComponent } from './docs/show-pattern/show-pattern.component';
import { ShowAngleComponent } from './docs/show-angle/show-angle.component';
import { ShowColorComponent } from './docs/show-color/show-color.component';
import { ShowWidthComponent } from './docs/show-width/show-width.component';
import { EmbedsComponent } from './embeds/embeds.component';
import { MatTreeModule } from '@angular/material/tree';
import { ShowViewsComponent } from './docs/show-views/show-views.component';
import { AddSubCategoryDilaogComponent } from './docs/add-sub-category-dilaog/add-sub-category-dilaog.component';
import { AutocropDialogComponent } from './schedule/autocrop-dialog/autocrop-dialog.component';
import { AddSizeDialogNewComponent } from './size/add-size-dialog-new/add-size-dialog-new.component';
import { ThemeComponent } from './theme/theme.component';
import { ChangeColorDialogComponent } from './theme/change-color-dialog/change-color-dialog.component';
import { SkuMasterFinalComponent } from './sku-master-final/sku-master-final.component';
import { AddSkuDialogComponent } from './sku-master-final/add-sku-dialog/add-sku-dialog.component';




export const routes = [ 
  { path: '', redirectTo:"sub-categories", pathMatch:'full' },
  { path: 'activity', component: ActivityComponent, data: { breadcrumb: 'Memebr Dashboard' } },
  { path: 'overview', component: OverviewComponent, data: { breadcrumb: 'Member Dashboard' } },
  { path: 'categories', component: SitevisitsComponent, data: { breadcrumb: 'Member Dashboard' } },
  { path: 'sub-categories', component: DocsComponent, data: { breadcrumb: 'Member Dashboard' } },
  { path: 'filters', component: ConceptComponent, data: { breadcrumb: 'Member Dashboard' } },
  { path:'sku-master', component: SkuMasterFinalComponent, data: {breadcrumb: 'Member Dashboard'}},
  { path: 'products', component: ScheduleComponent, data: { breadcrumb: 'Member Dashboard' } },
  { path: 'view', component: ViewComponent, data: { breadcrumb: 'View' } },
  { path: 'specs', loadChildren:'./sku-master/sku-master.module#SpecAdminModule',data:{ breadcrumb: 'Member Dashboard'}},
  { path: 'embeds', component: EmbedsComponent, data:{ breadcrumb: 'Memebr Dashboard'}},
  
  
  { path: 'drawing', component: DrawingsComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'closure', component: ClosureComponent, data: { breadcrumb: 'Project Dashboard' } },
  { path: 'construction', component: ConstructionComponent, data: { breadcrumb: 'Project Dashboard' } },
  {path:'theme', component: ThemeComponent}
 
]

@NgModule({
  declarations: [ ActivityComponent,OverviewComponent,Addpattern1Component,EditComponent, AddviewDialogComponent,SitevisitsComponent, DocsComponent, ConceptComponent, ScheduleComponent, DrawingsComponent, ConstructionComponent, ClosureComponent, AddrawimageComponent, AddinventoryComponent, Addangle1Component, Addcolor1Component, Addsize1Component, Addwidth1Component, Addpattern1Component, ViewComponent, AddviewDialogComponent, EditComponent, AddfinishComponent, AddlayoutComponent, ShowSizeComponent, ShowPatternComponent, ShowAngleComponent, ShowColorComponent, ShowWidthComponent,  EmbedsComponent,  ShowViewsComponent, AddSubCategoryDilaogComponent, AutocropDialogComponent, ThemeComponent, ChangeColorDialogComponent, SkuMasterFinalComponent, AddSkuDialogComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,DndModule,DragDropModule,MglTimelineModule,
    MatTreeModule
  ],
  entryComponents:[DeleteConfirmDialogComponent,Addpattern1Component,AddfinishComponent,EditComponent,AddviewDialogComponent,AddrawimageComponent,AddinventoryComponent, Addangle1Component, Addcolor1Component, Addsize1Component, Addwidth1Component, Addpattern1Component,
    ShowSizeComponent, ShowPatternComponent, ShowAngleComponent, ShowColorComponent, ShowWidthComponent,ShowViewsComponent,AddSubCategoryDilaogComponent,AddfinishComponent,AutocropDialogComponent,ChangeColorDialogComponent, AddSkuDialogComponent]
})

export class ProjectDashboardModule { }
