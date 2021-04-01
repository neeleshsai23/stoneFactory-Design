import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-addjointcolor-dialog',
  templateUrl: './addjointcolor-dialog.component.html',
  styleUrls: ['./addjointcolor-dialog.component.scss']
})
export class AddjointcolorDialogComponent implements OnInit {

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
  constructor() { }

  ngOnInit() {
  }

}
