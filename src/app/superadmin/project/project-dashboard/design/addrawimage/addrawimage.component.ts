import { Component, OnInit , Inject} from '@angular/core';
import { FormControl , FormBuilder, FormGroup , Validators} from '@angular/forms';
import { MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material';
import { AppSettings } from 'src/app/app.settings';
import { stringify } from 'querystring';

@Component({
  selector: 'app-addrawimage',
  templateUrl: './addrawimage.component.html',
  styleUrls: ['./addrawimage.component.scss']
})
export class AddrawimageComponent implements OnInit {

  
  constructor(public dialogRef: MatDialogRef<AddrawimageComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
