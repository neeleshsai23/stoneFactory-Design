import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-shw-width',
  templateUrl: './shw-width.component.html',
  styleUrls: ['./shw-width.component.scss']
})
export class ShwWidthComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ShwWidthComponent>) { }

  ngOnInit() {
  }

  close(): void{
    this.dialogRef.close();
  }

}
