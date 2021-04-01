import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-color',
  templateUrl: './add-color.component.html',
  styleUrls: ['./add-color.component.scss']
})
export class AddColorComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<AddColorComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
