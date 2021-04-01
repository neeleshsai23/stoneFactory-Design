import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-width',
  templateUrl: './add-width.component.html',
  styleUrls: ['./add-width.component.scss']
})
export class AddWidthComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddWidthComponent>) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }
}
