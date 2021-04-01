import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-show-size',
  templateUrl: './show-size.component.html',
  styleUrls: ['./show-size.component.scss']
})
export class ShowSizeComponent implements OnInit {


  items:any =[
    {"size":" +"},
    {"size":" 120 x 65"},
    {"size":" 140 x 65"},
    {"size":" 160 x 65"},
  
  ]
  constructor( public dialogRef: MatDialogRef<ShowSizeComponent>) { }

  ngOnInit() {
  }

  close(): void{
    this.dialogRef.close();
  }

}
