import { MatDialogRef } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-addview-dialog',
  templateUrl: './addview-dialog.component.html',
  styleUrls: ['./addview-dialog.component.scss']
})
export class AddviewDialogComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<any>) { }
  @ViewChild('fileInput')
  fileInput;

  file: File | null = null;

  public filterToggle: boolean;

  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
  }

  onChangeFileInput(): void {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];
  }

  ngOnInit() {
  }

  Cancel() {
      this.dialogRef.close();
    }

}
