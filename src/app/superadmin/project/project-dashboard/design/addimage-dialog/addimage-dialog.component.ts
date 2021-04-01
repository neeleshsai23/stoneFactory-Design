import { MatDialog, MatDialogRef } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-addimage-dialog',
  templateUrl: './addimage-dialog.component.html',
  styleUrls: ['./addimage-dialog.component.scss']
})
export class AddimageDialogComponent implements OnInit {

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


  constructor(public dialog: MatDialog,private dialogRef: MatDialogRef<any>) { }

  ngOnInit() {
  }

 
  Cancel() {
    this.dialogRef.close();
  }

}
