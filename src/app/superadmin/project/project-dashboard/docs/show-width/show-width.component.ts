import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-show-width',
  templateUrl: './show-width.component.html',
  styleUrls: ['./show-width.component.scss']
})
export class ShowWidthComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ShowWidthComponent>) { }

  ngOnInit() {
  }

  close(): void{
    this.dialogRef.close();
  }

}
