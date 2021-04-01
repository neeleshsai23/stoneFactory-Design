import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-add-member-enquiry',
  templateUrl: './add-member-enquiry.component.html',
  styleUrls: ['./add-member-enquiry.component.scss']
})
export class AddMemberEnquiryComponent implements OnInit {

  
  constructor(public dialogRef: MatDialogRef<AddMemberEnquiryComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
