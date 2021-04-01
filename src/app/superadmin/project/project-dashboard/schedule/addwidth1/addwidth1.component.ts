import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addwidth1',
  templateUrl: './addwidth1.component.html',
  styleUrls: ['./addwidth1.component.scss']
})
export class Addwidth1Component implements OnInit {

  constructor(public dialogRef: MatDialogRef<Addwidth1Component>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
