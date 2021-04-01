import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addcolor1',
  templateUrl: './addcolor1.component.html',
  styleUrls: ['./addcolor1.component.scss']
})
export class Addcolor1Component implements OnInit {

  constructor(public dialogRef: MatDialogRef<Addcolor1Component>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}