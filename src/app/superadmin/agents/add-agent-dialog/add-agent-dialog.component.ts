import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-add-agent-dialog',
  templateUrl: './add-agent-dialog.component.html',
  styleUrls: ['./add-agent-dialog.component.scss']
})
export class AddAgentDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddAgentDialogComponent>,private alertService: AlertService,) { }

  ngOnInit() {
  }

  saveUser() {
    this.dialogRef.close();
  }


  close(): void {
    this.dialogRef.close();
  }

}
