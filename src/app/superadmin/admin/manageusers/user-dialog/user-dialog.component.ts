import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {

 
  constructor(public dialogRef: MatDialogRef<UserDialogComponent>,private alertService: AlertService,) { }

  ngOnInit() {
  }

  saveUser() {
    this.dialogRef.close();
  }


  close(): void {
    this.dialogRef.close();
  }

}
