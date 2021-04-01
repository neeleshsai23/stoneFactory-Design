import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-change-color-dialog',
  templateUrl: './change-color-dialog.component.html',
  styleUrls: ['./change-color-dialog.component.scss']
})
export class ChangeColorDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ChangeColorDialogComponent>) { }

  ngOnInit() {
    this.description.nativeElement.value = "Main Background Color"
  }

  @ViewChild('description') description: ElementRef;

  close(){
    this.dialogRef.close()
  }

}
