import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Addsize1Component } from '../addsize1/addsize1.component';

@Component({
  selector: 'app-addfinish',
  templateUrl: './addfinish.component.html',
  styleUrls: ['./addfinish.component.scss']
})
export class AddfinishComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddfinishComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
