import { EditComponent } from './edit/edit.component';

import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { AddviewDialogComponent } from 'src/app/superadmin/project/project-dashboard/view/addview-dialog/addview-dialog.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  public filterToggle:boolean;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  items = [
    {"raw_image":"assets/img 11.png","pattern":"Front Elevation","angle":"90 deg","size":"215x65","joint_color":"red","grout_width":"50cm"},
    {"raw_image":"assets/img 22.png","pattern":"Garden View Perspective","angle":"80 deg","size":"102x65","joint_color":"orange","grout_width":"60cm"},
    {"raw_image":"assets/img 33.png","pattern":"Living Room Elevation","angle":"70 deg","size":"215x73","joint_color":"black","grout_width":"30cm"},
    {"raw_image":"assets/img 111.png","pattern":"Dinning Room Elevation","angle":"60 deg","size":"189x48","joint_color":"blue","grout_width":"70cm"},
    {"raw_image":"assets/view4.png","pattern":"Path View Perspective","angle":"60 deg","size":"189x48","joint_color":"blue","grout_width":"70cm"},
    {"raw_image":"assets/view5.png","pattern":"Swimming Pool Perspective","angle":"60 deg","size":"189x48","joint_color":"blue","grout_width":"70cm"},
    {"raw_image":"assets/planview.png","pattern":"Plan View Perspective","angle":"60 deg","size":"189x48","joint_color":"blue","grout_width":"70cm"},

  ]

  public openViewDialog() {

    let dialogRef = this.dialog.open(AddviewDialogComponent, {
  
      height: 'auto',
      width: '700px',
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(data => {
  
    });
  
  }

  public openEditNameDialog() {

    let dialogRef = this.dialog.open(EditComponent, {
  
      height: 'auto',
      width: '700px',
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(data => {
  
    });
  
  }
}
