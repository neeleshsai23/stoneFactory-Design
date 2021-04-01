import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-spec3-dialog',
  templateUrl: './add-spec3-dialog.component.html',
  styleUrls: ['./add-spec3-dialog.component.scss']
})
export class AddSpec3DialogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<AddSpec3DialogComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}

