import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addview-dialog',
  templateUrl: './addview-dialog.component.html',
  styleUrls: ['./addview-dialog.component.scss']
})
export class AddviewDialogComponent implements OnInit {

  public filterToggle: boolean;

  constructor(private dialogRef: MatDialogRef<any>) { }

  ngOnInit() {
  }

  Cancel() {
    this.dialogRef.close();
  }

}
