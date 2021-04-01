import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-addteams',
  templateUrl: './addteams.component.html',
  styleUrls: ['./addteams.component.scss']
})
export class AddteamsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddteamsComponent>,private alertService: AlertService,) { }

  ngOnInit() {
  }

  saveUser() {
    this.dialogRef.close();
  }


  close(): void {
    this.dialogRef.close();
  }

}
