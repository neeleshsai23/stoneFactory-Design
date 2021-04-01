import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-angle',
  templateUrl: './add-angle.component.html',
  styleUrls: ['./add-angle.component.scss']
})
export class AddAngleComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddAngleComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
