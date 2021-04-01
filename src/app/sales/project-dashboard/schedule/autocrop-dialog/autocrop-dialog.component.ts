import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-autocrop-dialog',
  templateUrl: './autocrop-dialog.component.html',
  styleUrls: ['./autocrop-dialog.component.scss']
})
export class AutocropDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AutocropDialogComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
