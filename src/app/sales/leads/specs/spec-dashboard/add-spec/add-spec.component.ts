import { Component, OnInit , Inject} from '@angular/core';
import { FormControl , FormBuilder, FormGroup , Validators} from '@angular/forms';
import { MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material';
import { AppSettings } from 'src/app/app.settings';
import { stringify } from 'querystring';

@Component({
  selector: 'app-add-spec',
  templateUrl: './add-spec.component.html',
  styleUrls: ['./add-spec.component.scss']
})
export class AddSpecComponent implements OnInit {

 
  constructor(public dialogRef: MatDialogRef<AddSpecComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
