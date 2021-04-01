import { MatDialog } from '@angular/material';
import { Settings } from './../../../../app.settings.model';
import { AppSettings } from './../../../../app.settings';
import { AlertService } from './../../../../shared/services/alert.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-codes',
  templateUrl: './color-codes.component.html',
  styleUrls: ['./color-codes.component.scss']
})
export class ColorCodesComponent implements OnInit {

  constructor(public appSettings: AppSettings,public dialog: MatDialog,public alertService:AlertService) {
    this.settings = this.appSettings.settings;
   }

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

  filterToggle: boolean;

  public searchText: string;
  public page: any;
  public settings: Settings;
 

  ngOnInit() {

  }

  colorCodes = [
    {id:1,color_code:"#00ff00",color_code_name:"Completed",color_description:"Remove from the list",is_default:0,vcStatus:true},
    {id:2,color_code:"#006680",color_code_name:"In Process",color_description:"Has a need for software development",is_default:1,vcStatus:true},
    {id:3,color_code:"#ffff00",color_code_name:"Pending",color_description:"Profile Requested",is_default:0,vcStatus:true},
    {id:4,color_code:"#929292",color_code_name:"On Hold",color_description:"Contact Later",is_default:0,vcStatus:true},
    {id:5,color_code:"#ff0000",color_code_name:"Delayed",color_description:"Meeting Confirmed",is_default:0,vcStatus:true}
  ]

  updateColorCode(code) {
    for(let i = 0 ; i < this.colorCodes.length ; i++) {
      if(code.id == this.colorCodes[i].id)
      this.colorCodes[i].is_default = 1;
      else
      this.colorCodes[i].is_default = 0;
    }
  }

 

deletColor(){
  this.alertService.createAlert('Successfully deleted.', 1);
}

}
