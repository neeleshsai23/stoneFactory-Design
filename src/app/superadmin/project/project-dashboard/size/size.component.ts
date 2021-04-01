import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddsizeeDialogComponent } from './addsizee-dialog/addsizee-dialog.component';
import {AddSizeDialogNewComponent} from './add-size-dialog-new/add-size-dialog-new.component';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent implements OnInit {

  items=[
   { "size": "120 x 65 (2)","color":"assets/img1.png"},
   { "size": "140 x 65 (3)","color":"assets/img2.png"},
   { "size": "120 x 65 (2)","color":"assets/img3.png"},
  ]
  items1 = [
    {"raw_image":"assets/brick1.PNG","pattern":"Engels Carbon-Stock","angle":"90 deg","size":"215x65","joint_color":"red","grout_width":"50cm"},
    {"raw_image":"assets/brick2.PNG","pattern":"Forterra Blue Rustic","angle":"80 deg","size":"102x65","joint_color":"orange","grout_width":"60cm"},
    {"raw_image":"assets/brick3.PNG","pattern":"Vande Moortel Crea 7021","angle":"70 deg","size":"215x73","joint_color":"black","grout_width":"30cm"},
    {"raw_image":"assets/brick4.PNG","pattern":"Vandersanden Lithium","angle":"60 deg","size":"189x48","joint_color":"blue","grout_width":"70cm"},
    // tslint:disable-next-line: whitespace
    {"raw_image":"assets/brick5.PNG","pattern":"Wienerberger Wirecut","angle":"50 deg","size":"102x73","joint_color":"green","grout_width":"40cm"},
  ]

  
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public openAddSizeeDialog() {

    let dialogRef = this.dialog.open(AddsizeeDialogComponent, {
  
      height: '800px',
      width: '1100px',
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(data => {
  
    });
  
  }

  openAddSize(){
    this.dialog.open(AddSizeDialogNewComponent,{
      width:"600px",
      height:"auto"
    })
  }
}
