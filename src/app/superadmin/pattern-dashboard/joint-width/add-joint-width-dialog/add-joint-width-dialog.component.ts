import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-joint-width-dialog',
  templateUrl: './add-joint-width-dialog.component.html',
  styleUrls: ['./add-joint-width-dialog.component.scss']
})
export class AddJointWidthDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddJointWidthDialogComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
