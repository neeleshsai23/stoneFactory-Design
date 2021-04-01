import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-sizes-dialog',
  templateUrl: './add-sizes-dialog.component.html',
  styleUrls: ['./add-sizes-dialog.component.scss']
})
export class AddSizesDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddSizesDialogComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
