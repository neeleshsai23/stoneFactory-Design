import { AddSpecComponent } from './add-spec/add-spec.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
MatDialog
@Component({
  selector: 'app-spec-dashboard',
  templateUrl: './spec-dashboard.component.html',
  styleUrls: ['./spec-dashboard.component.scss']
})
export class SpecDashboardComponent implements OnInit {

 items=[
   {"raw_image":"image1.png","pattern":"Pattern-1","angle":"90 deg","size":"215x65","joint_color":"red","grout_width":"50cm"},
   {"raw_image":"image2.png","pattern":"Pattern-2","angle":"80 deg","size":"102x65","joint_color":"orange","grout_width":"60cm"},
   {"raw_image":"image3.png","pattern":"Pattern-3","angle":"70 deg","size":"215x73","joint_color":"black","grout_width":"30cm"},
   {"raw_image":"image4.png","pattern":"Pattern-4","angle":"60 deg","size":"189x48","joint_color":"blue","grout_width":"70cm"},
   {"raw_image":"image5.png","pattern":"Pattern-5","angle":"50 deg","size":"102x73","joint_color":"green","grout_width":"40cm"},
 ]
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }



  public openIncidentDialog(){
    let dialogRef = this.dialog.open(AddSpecComponent, {
      
      height: 'auto',
      width: '730px',
      autoFocus: false,
    });
    
    dialogRef.afterClosed().subscribe(data => {
    
    });
  }



}