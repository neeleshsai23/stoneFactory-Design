import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addvisits',
  templateUrl: './addvisits.component.html',
  styleUrls: ['./addvisits.component.scss']
})
export class AddvisitsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddvisitsComponent>) { }

  ngOnInit() {

  }
  data:any;

  close(): void {
    this.dialogRef.close();
  }


}
