import { EnquiryDashboardDialogComponent } from './../enquiry-dashboard-dialog/enquiry-dashboard-dialog.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-enquiry-dashboard',
  templateUrl: './member-enquiry-dashboard.component.html',
  styleUrls: ['./member-enquiry-dashboard.component.scss']
})
export class MemberEnquiryDashboardComponent implements OnInit {
  public filterToggle:boolean;
  public filterToggle1:boolean;
items=[
    { "Product" : "Engels:Carbon Stock", "Category" : "External", "Type" : "Bricks", "Filter" : "Color", "Spec" : "DarkGrey/Black","Pattern" : "Broken Bond","Angle" : "0", "Size": "215x65","Color": "Natural","Width" : "6","View" : "Villa Elevation"},
    { "Product" : "Forterra:Blue Rustic Wirecut", "Category" : "External", "Type" : "Bricks", "Filter" : "Color", "Spec" : "DarkGrey/Black","Pattern" : "Stack","Angle" : "90", "Size": "102x65","Color": "Natural","Width" : "6","View" : "House"},
    { "Product" : "Slate:Black-Natural", "Category" : "External", "Type" : "Cladding", "Filter" : "Color", "Spec" : "DarkGrey/Black","Pattern" : "Random","Angle" : "45", "Size": "600x200","Color": "MidGrey","Width" : "8","View" : "Duplex"},
    { "Product" : "Victorian:Faneza-Nero-Matt", "Category" : "Internal", "Type" : "Floor", "Filter" : "Color", "Spec" : "DarkGrey/Black","Pattern" : "Stack","Angle" : "90", "Size": "330x330","Color": "White","Width" : "10","View" : "House"},
    { "Product" : "Modern:Black-Matt", "Category" : "Internal", "Type" : "Wall", "Filter" : "Color", "Spec" : "DarkGrey/Black","Pattern" : "Stretcher","Angle" : "45", "Size": "100x100","Color": "Grey","Width" : "2","View" : "Bungalow"},
    ]
    
    
    


  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }


  
  public openIncidentDialog(){
    let dialogRef = this.dialog.open(EnquiryDashboardDialogComponent, {
      
      height: 'auto',
      width: '730px',
      autoFocus: false,
    });
    
    dialogRef.afterClosed().subscribe(data => {
    
    });
  }
}
