

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { SkuMasterComponent } from './sku-master.component';
import { UploadCsvComponent } from './upload-csv/upload-csv.component';
import { MatTreeModule } from '@angular/material/tree';
import { AddProductDialogComponent } from './add-product-dialog/add-product-dialog.component';
import { Spec1Component } from './spec1/spec1.component';
import { FinishComponent } from './finish/finish.component';
import { TextureComponent } from './texture/texture.component';
import { ColorComponent } from './color/color.component';
import { ConfigureDialogComponent } from './configure-dialog/configure-dialog.component';
import { AddTextureComponent } from './add-texture/add-texture.component';
import { AddColorComponent } from './add-color/add-color.component';
import { AddFinishComponent } from './add-finish/add-finish.component';
import { Spec3Component } from './spec3/spec3.component';
import { AddSpec3DialogComponent } from './spec3/add-spec3-dialog/add-spec3-dialog.component';




export const routes = [ 
    {path:'',redirectTo:'products',pathMatch:'full'},
    {path:'products',component:Spec1Component},
    {path:'finish',component:FinishComponent},
    {path:'edge',component:TextureComponent},
    {path:'color',component:ColorComponent},
    {path:'spec3',component:Spec3Component}

]

@NgModule({
  declarations: [ SkuMasterComponent,UploadCsvComponent, AddProductDialogComponent, Spec1Component, FinishComponent, TextureComponent, ColorComponent, ConfigureDialogComponent, AddTextureComponent, AddColorComponent, AddFinishComponent, Spec3Component, AddSpec3DialogComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,DndModule,DragDropModule,MglTimelineModule,
    MatTreeModule
  ],
  entryComponents:[DeleteConfirmDialogComponent,
    UploadCsvComponent,AddProductDialogComponent,AddTextureComponent,AddColorComponent,ConfigureDialogComponent,AddFinishComponent,AddSpec3DialogComponent]
})

export class SpecAdminModule { }
