import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-size-dialog-new',
  templateUrl: './add-size-dialog-new.component.html',
  styleUrls: ['./add-size-dialog-new.component.scss']
})
export class AddSizeDialogNewComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddSizeDialogNewComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
