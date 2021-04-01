import { AddsizeDialogComponent } from './addsize-dialog/addsize-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-size1',
  templateUrl: './size1.component.html',
  styleUrls: ['./size1.component.scss']
})
export class Size1Component implements OnInit {

  
  items=[
    { "size": "120 x 65 (2)","color":"assets/img1.png"},
    { "size": "140 x 65 (3)","color":"assets/img2.png"},
    { "size": "120 x 65 (2)","color":"assets/img3.png"},
   ]
  constructor( public dialog: MatDialog) { }

  ngOnInit() {
  }

  public openAddSizeDialog() {

    let dialogRef = this.dialog.open(AddsizeDialogComponent, {
  
      height: '800px',
      width: '1100px',
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(data => {
  
    });
  
  }
}
