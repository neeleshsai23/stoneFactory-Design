import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-upload-csv',
  templateUrl: './upload-csv.component.html',
  styleUrls: ['./upload-csv.component.scss']
})
export class UploadCsvComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UploadCsvComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

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

}
