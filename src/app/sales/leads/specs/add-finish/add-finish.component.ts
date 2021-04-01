
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-finish',
  templateUrl: './add-finish.component.html',
  styleUrls: ['./add-finish.component.scss']
})
export class AddFinishComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddFinishComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
