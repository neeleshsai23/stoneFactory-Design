import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import {AddJointWidthDialogComponent} from './add-joint-width-dialog/add-joint-width-dialog.component';
import { ViewWidthImageDialogComponent } from './view-width-image-dialog/view-width-image-dialog.component';

@Component({
  selector: 'app-joint-width',
  templateUrl: './joint-width.component.html',
  styleUrls: ['./joint-width.component.scss']
})
export class JointWidthComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  widths: string[] = ["2","4","6","8","10","12","14","16","18"]

  openjointwidthDialog(){
    this.dialog.open(AddJointWidthDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

  openViewImageDialog(){
    this.dialog.open(ViewWidthImageDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

}
