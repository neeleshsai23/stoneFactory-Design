import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-addangle1',
  templateUrl: './addangle1.component.html',
  styleUrls: ['./addangle1.component.scss']
})
export class Addangle1Component implements OnInit {
  constructor(public dialogRef: MatDialogRef<Addangle1Component>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}