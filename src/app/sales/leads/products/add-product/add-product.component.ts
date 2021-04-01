import { Component, OnInit , Inject} from '@angular/core';
import { FormControl , FormBuilder, FormGroup , Validators} from '@angular/forms';
import { MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material';
import { AppSettings } from 'src/app/app.settings';
import { stringify } from 'querystring';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddProductComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
