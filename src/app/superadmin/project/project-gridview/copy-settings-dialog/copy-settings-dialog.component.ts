import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-copy-settings-dialog',
  templateUrl: './copy-settings-dialog.component.html',
  styleUrls: ['./copy-settings-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CopySettingsDialogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<CopySettingsDialogComponent>) { }

  ngOnInit() {
  }

  public popoverMessage1: string = 'Are you sure that you want to do this operation. Please note that all existing settings will be replaced. This action cannot be undone?'
  public popoverStatusTitle1: string = 'Confirm Change';
  public popoverStatusMessage1: string = 'Are you sure you want to change?';
  public cancelClicked1: boolean = false;


  close(){
    this.dialogRef.close()
  }

}
