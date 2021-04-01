import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-add-texture',
  templateUrl: './add-texture.component.html',
  styleUrls: ['./add-texture.component.scss']
})
export class AddTextureComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<AddTextureComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
