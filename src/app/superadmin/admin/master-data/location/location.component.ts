import { AlertService } from './../../../../shared/services/alert.service';
import { Settings } from './../../../../app.settings.model';
import { AppSettings } from './../../../../app.settings';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  
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
    {docType:"Factory",status:true},
    {docType:"Warehouses",status:true},
    {docType:"Design Labs",status:true},
    {docType:"Corporate Office",status:true},
    {docType:"Operation Site",status:true},
  ]

 


  deleteUser(){
      this.alertService.createAlert('Successfully deleted.', 1);
  }

  saveStatus() {
      this.alertService.createAlert('Successfully saved.', 1);
  }

}
