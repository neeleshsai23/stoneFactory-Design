import { EnquiryyyyyComponent } from './../enquiryyyyy/enquiryyyyy.component';
import { EnquiryyyComponent } from './../enquiryyy/enquiryyy.component';
import { EnquiryyyyComponent } from './../enquiryyyy/enquiryyyy.component';
import { EnquiryyComponent } from './../enquiryy/enquiryy.component';
import { AddMemberEnquiryComponent } from './../add-member-enquiry/add-member-enquiry.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MemberEnquiryDashboardComponent } from '../member-enquiry-dashboard/member-enquiry-dashboard.component';
@Component({
  selector: 'app-member-enquiry',
  templateUrl: './member-enquiry.component.html',
  styleUrls: ['./member-enquiry.component.scss']
})
export class MemberEnquiryComponent implements OnInit {

items = [
  { "Name" : "Jeswin John", "Email": "jeswin@gmail.com", "Phone_Number" : "9876785438", "Remarks" : "Need the design for 800sq.ft Villa", "Products" : " 1"},
  { "Name" : "Anna Mary", "Email": "mary@gmail.com", "Phone_Number" : "9458673679", "Remarks" : "Need the design for 500sq.ft House", "Products" : " 2"},
  { "Name" : "Sam Curran", "Email": "sam@gmail.com", "Phone_Number" : "8954328924",  "Remarks" : "Need the design for 700sq.ft Duplex", "Products" : " 3"},
  { "Name" : "Michael Jhonson", "Email": "john@gmail.com", "Phone_Number" : "8659001110", "Remarks" :  "Need the design for 300sq.ft House", "Products" : " 4"},
  { "Name" : "Matthew Wade", "Email": "jeffy@gmail.com", "Phone_Number" : "9866655891",  "Remarks" :"Need the design for 500sq.ft Bungalow", "Products" : " 5"},
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }



  public openIncidentDialog(Products: number) {

    if (Products == 1) {
      let dialogRef = this.dialog.open(EnquiryyComponent, {

        height: 'auto',
        width: '1000px',
        autoFocus: false,
      });
      dialogRef.afterClosed().subscribe(data => {

      });
    }
    if (Products == 2) {
      let dialogRef = this.dialog.open(EnquiryyyComponent, {
        height: 'auto',
        width: '1000px',
        autoFocus: false,
      });
      dialogRef.afterClosed().subscribe(data => {
      });
    }
    if (Products == 3) {
      let dialogRef = this.dialog.open(EnquiryyyyComponent, {
        height: 'auto',
        width: '1000px',
        autoFocus: false,
      });
      dialogRef.afterClosed().subscribe(data => {
      });
    }
    if (Products == 4) {
      let dialogRef = this.dialog.open(EnquiryyyyyComponent, {
        height: 'auto',
        width: '1000px',
        autoFocus: false,
      });
      dialogRef.afterClosed().subscribe(data => {
      });
    }
    if (Products == 5) {
      let dialogRef = this.dialog.open(MemberEnquiryDashboardComponent, {
        height: 'auto',
        width: '1000px',
        autoFocus: false,
      });
      dialogRef.afterClosed().subscribe(data => {
      });
    }
    }
}
