import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-raw-image-dialog',
  templateUrl: './add-raw-image-dialog.component.html',
  styleUrls: ['./add-raw-image-dialog.component.scss']
})
export class AddRawImageDialogComponent implements OnInit {

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


  constructor(private dialogRef: MatDialogRef<AddRawImageDialogComponent>) { }

  ngOnInit() {
  }

 
  Cancel() {
    this.dialogRef.close();
  }

}
