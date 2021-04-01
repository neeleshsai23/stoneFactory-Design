import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-shw-angle',
  templateUrl: './shw-angle.component.html',
  styleUrls: ['./shw-angle.component.scss']
})
export class ShwAngleComponent implements OnInit {
  constructor( public dialogRef: MatDialogRef<ShwAngleComponent>) { }

  ngOnInit() {
  }

  close(): void{
    this.dialogRef.close();
  }

}
