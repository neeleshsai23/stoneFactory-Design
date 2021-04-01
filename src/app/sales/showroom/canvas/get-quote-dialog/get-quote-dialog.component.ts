import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-get-quote-dialog',
  templateUrl: './get-quote-dialog.component.html',
  styleUrls: ['./get-quote-dialog.component.scss']
})
export class GetQuoteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GetQuoteDialogComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }
}
