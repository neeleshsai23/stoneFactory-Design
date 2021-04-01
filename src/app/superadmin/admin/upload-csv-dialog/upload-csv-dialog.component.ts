import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-upload-csv-dialog',
  templateUrl: './upload-csv-dialog.component.html',
  styleUrls: ['./upload-csv-dialog.component.scss']
})
export class UploadCsvDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UploadCsvDialogComponent>) { }

  ngOnInit() {
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

  close(){
    this.dialogRef.close();
  }

}
