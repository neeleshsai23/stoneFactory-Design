import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-joint-color-dialog',
  templateUrl: './add-joint-color-dialog.component.html',
  styleUrls: ['./add-joint-color-dialog.component.scss']
})
export class AddJointColorDialogComponent implements OnInit {

  @ViewChild('fileInput')
  fileInput;

  file: File | null = null;

  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
  }

  onChangeFileInput(): void {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];
  }
  constructor(public dialogRef: MatDialogRef<AddJointColorDialogComponent>) { }

  ngOnInit() {
  }

  Cancel() {
    this.dialogRef.close();
  }

}
