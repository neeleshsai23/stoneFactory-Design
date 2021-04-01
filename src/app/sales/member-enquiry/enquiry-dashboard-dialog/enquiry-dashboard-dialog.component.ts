import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-enquiry-dashboard-dialog',
  templateUrl: './enquiry-dashboard-dialog.component.html',
  styleUrls: ['./enquiry-dashboard-dialog.component.scss']
})
export class EnquiryDashboardDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EnquiryDashboardDialogComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
