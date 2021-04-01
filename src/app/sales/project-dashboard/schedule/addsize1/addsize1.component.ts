import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addsize1',
  templateUrl: './addsize1.component.html',
  styleUrls: ['./addsize1.component.scss']
})
export class Addsize1Component implements OnInit {

  constructor(public dialogRef: MatDialogRef<Addsize1Component>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}