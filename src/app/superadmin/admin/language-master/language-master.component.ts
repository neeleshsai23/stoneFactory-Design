import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog} from '@angular/material';

import {UploadCsvDialogComponent} from '../upload-csv-dialog/upload-csv-dialog.component';

@Component({
  selector: 'app-language-master',
  templateUrl: './language-master.component.html',
  styleUrls: ['./language-master.component.scss']
})
export class LanguageMasterComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  filterToggle:boolean = false;

  items = [
    {label:"pavage",englishLabel:"Paving",language:"French"},
    {label:"murage",englishLabel:"Walling",language:"French"},
    {label:"ladrillos",englishLabel:"Bricks",language:"Spanish"},
    {label:"stenen",englishLabel:"Stones",language:"Dutch"}
  ]

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

  openUploadCSVDialog(){
    this.dialog.open(UploadCsvDialogComponent,{
      width:"500px",
      height:"auto"
    })
  }

}
