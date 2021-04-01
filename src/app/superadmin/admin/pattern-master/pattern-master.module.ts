import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { RawImagesComponent } from './raw-images/raw-images.component';
import { SizesComponent } from './sizes/sizes.component';
import { JointWidthComponent } from './joint-width/joint-width.component';
import { JointColorComponent } from './joint-color/joint-color.component';
import { PreviewComponent } from './preview/preview.component';
import { AddJointColorDialogComponent } from './joint-color/add-joint-color-dialog/add-joint-color-dialog.component';
import { AddJointWidthDialogComponent } from './joint-width/add-joint-width-dialog/add-joint-width-dialog.component';
import { AddSizesDialogComponent } from './sizes/add-sizes-dialog/add-sizes-dialog.component';
import { AddRawImageDialogComponent } from './raw-images/add-raw-image-dialog/add-raw-image-dialog.component';
import { ViewWidthImageDialogComponent } from './joint-width/view-width-image-dialog/view-width-image-dialog.component';

export const routes = [
    {path:"",redirectTo:"raw-images",pathMatch:"full"},
    {path:"raw-images",component:RawImagesComponent},
    {path:"sizes",component:SizesComponent},
    {path:"joint-width",component:JointWidthComponent},
    {path:"joint-color",component:JointColorComponent},
    {path:"preview",component:PreviewComponent}
];

@NgModule({
  declarations: [RawImagesComponent, SizesComponent, JointWidthComponent, JointColorComponent, PreviewComponent, AddJointColorDialogComponent, AddJointWidthDialogComponent, AddSizesDialogComponent, AddRawImageDialogComponent, ViewWidthImageDialogComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule
  ],
  entryComponents: [ AddJointColorDialogComponent, AddJointWidthDialogComponent, AddSizesDialogComponent, AddRawImageDialogComponent,ViewWidthImageDialogComponent]
})
export class PatternMasterModule { }
