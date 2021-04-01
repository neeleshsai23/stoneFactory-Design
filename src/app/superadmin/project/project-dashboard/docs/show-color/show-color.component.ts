import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-show-color',
  templateUrl: './show-color.component.html',
  styleUrls: ['./show-color.component.scss']
})
export class ShowColorComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ShowColorComponent>) { }

  ngOnInit() {
  }

  close(): void{
    this.dialogRef.close();
  }

}
