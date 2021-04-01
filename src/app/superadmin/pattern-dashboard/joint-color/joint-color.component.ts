import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {AddJointColorDialogComponent} from './add-joint-color-dialog/add-joint-color-dialog.component';

@Component({
  selector: 'app-joint-color',
  templateUrl: './joint-color.component.html',
  styleUrls: ['./joint-color.component.scss']
})
export class JointColorComponent implements OnInit {

  items=[
    {"raw_image":"assets/image clr1.png","pattern":"Cream Orange","angle":"90 deg","size":"215x65","joint_color":"red","grout_width":"50cm"},
    {"raw_image":"assets/image clr2.png","pattern":"Brown","angle":"80 deg","size":"102x65","joint_color":"orange","grout_width":"60cm"},
    {"raw_image":"assets/image clr3.png","pattern":"Grey Black","angle":"70 deg","size":"215x73","joint_color":"black","grout_width":"30cm"},
    
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public openjointcolorDialog() {

    let dialogRef = this.dialog.open(AddJointColorDialogComponent, {
  
      height: 'auto',
      width: '700px',
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(data => {
  
    });
  
  }

}
