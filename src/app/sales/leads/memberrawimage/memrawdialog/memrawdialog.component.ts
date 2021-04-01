import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-memrawdialog',
  templateUrl: './memrawdialog.component.html',
  styleUrls: ['./memrawdialog.component.scss']
})
export class MemrawdialogComponent implements OnInit {

  
  constructor(public dialogRef: MatDialogRef<MemrawdialogComponent>) { }

  ngOnInit() {
  }

  Cancel() {
    this.dialogRef.close();
  }
}
