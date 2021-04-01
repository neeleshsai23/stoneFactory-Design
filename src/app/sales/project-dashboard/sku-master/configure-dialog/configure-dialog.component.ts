import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-configure-dialog',
  templateUrl: './configure-dialog.component.html',
  styleUrls: ['./configure-dialog.component.scss']
})
export class ConfigureDialogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<ConfigureDialogComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
