import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addpattern1',
  templateUrl: './addpattern1.component.html',
  styleUrls: ['./addpattern1.component.scss']
})
export class Addpattern1Component implements OnInit {

  constructor(public dialogRef: MatDialogRef<Addpattern1Component>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}