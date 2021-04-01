import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-view-width-image-dialog',
  templateUrl: './view-width-image-dialog.component.html',
  styleUrls: ['./view-width-image-dialog.component.scss']
})
export class ViewWidthImageDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ViewWidthImageDialogComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close()
  }

}
