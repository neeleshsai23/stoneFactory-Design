import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-add-member-package',
  templateUrl: './add-member-package.component.html',
  styleUrls: ['./add-member-package.component.scss']
})
export class AddMemberPackageComponent implements OnInit {

  
  constructor(public dialogRef: MatDialogRef<AddMemberPackageComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}

