import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.scss']
})
export class AddProductDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddProductDialogComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
