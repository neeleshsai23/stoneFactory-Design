import { MatDialog } from '@angular/material';
import { AppSettings } from 'src/app/app.settings';
import { Settings } from './../../../app.settings.model';
import { AlertService } from './../../../shared/services/alert.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-master-data',
  templateUrl: './master-data.component.html',
  styleUrls: ['./master-data.component.scss']
})
export class MasterDataComponent implements OnInit {

  
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

  filterToggle: boolean;

  public searchText: string;
  public page: any;
  public settings: Settings;
  constructor(public appSettings: AppSettings,
      public dialog: MatDialog, private alertService: AlertService) {
      this.settings = this.appSettings.settings;
  }

  ngOnInit() {

  }

  tableList = [
    {fat:"Warehousing",status:true},
    {fat:"Manufacturing",status:true},
    {fat:"Construction",status:true},
    {fat:"Healthcare",status:true},
    {fat:"Transportation",status:true},
    {fat:"Infrastructure",status:true},
    // {fat:"Installation",status:true},
    // {fat:"Maintenance and User's Manuals",status:true}
  ]

 


  deleteUser(){
      this.alertService.createAlert('Successfully deleted.', 1);
  }

  saveStatus() {
      this.alertService.createAlert('Successfully saved.', 1);
  }

}