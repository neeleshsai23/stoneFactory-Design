import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-sub-category-dilaog',
  templateUrl: './add-sub-category-dilaog.component.html',
  styleUrls: ['./add-sub-category-dilaog.component.scss']
})
export class AddSubCategoryDilaogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddSubCategoryDilaogComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
