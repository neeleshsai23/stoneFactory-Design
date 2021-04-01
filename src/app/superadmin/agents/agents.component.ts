import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/app/app.settings.model';
import { AppSettings } from 'src/app/app.settings';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { FormControl } from '@angular/forms';
import { AddAgentDialogComponent } from './add-agent-dialog/add-agent-dialog.component';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit {

  toppings = new FormControl();
  locationList = ["Texas, Houston","Washington, Seattle","Toronto, Canada","New York, USA"];
  
  
  campaignOptions = ["TDR","CEO","Startup","CV","Audit Automation","F2O","Venue Management"];
  campaignOptionSelected: any;
  onCampaignOptionsSelected(event){
    console.log(event); //option value will be sent as event
  }
  prospectsOptions = ["Blue Stone India", "Axess India", "BGR", "SIR","SKY"];
  prospectOptionSelected: any;
  locationOptions = ["Ontario", "Ottawa", "Vancouver", "New york", "Las Vegas", "Copenhagen", "Aarhus"];
  locationOptionSelected: any;
  onLocationOptionsSelected(event){
    console.log(event); //option value will be sent as event
  }
  /* monthOptions = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  monthOptionSelected: any;
  onMonthOptionsSelected(event){
    console.log(event); 
  } */
  stepsOptions = ["Qualification","Initial Sequence","Conversation","Archives","Potential","Mature Sequence","Opportunity"];
  stepsOptionSelected: any;
  onStepsOptionsSelected(event){
    console.log(event); 
  }
  yearOptions = [2015,2016,2017,2018];
  yearOptionSelected: any;
  onYearOptionsSelected(event){
    console.log(event); //option value will be sent as event
  }
  
  scrollGrid(side) {
    var ele = document.getElementById('grid-table-container');
    if (side == 'right')
    ele.scrollLeft += 210;
    else
    ele.scrollLeft -= 210;
  }
  
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  filterToggle: boolean = false;
  public campaigns: any[];
  tableList: any;
  
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  
  
  
  public searchText: string;
  public page: any;
  public settings: Settings;
  constructor(public appSettings: AppSettings,
    public dialog: MatDialog,
    private alertService: AlertService) {
      this.settings = this.appSettings.settings;
    }
    
    ngOnInit() {
      this.tableList = [
        {campaignName:"Akhil Land Surveyors PM",industry:"Uplevel",segment:"1",country:"India",campaignType:"99839839389",solution:"P-09873",checklist:"Mid Sized CEO Owner Director",leadSample:"IBW Surveyors 1",estimatedLeads:"500",actualLeads:"145",researchLeads:"130",firstLead:"10",secondLead:"1",meetings:"1",prospects:"3",lastUpdated:"22 Day(s) ago",startDate:"2020-08-31",endDate:"2020-09-30",vcStatus:true},
        {campaignName:"Akhil Contractors PM",industry:"Downlevel",segment:"4",country:"Australia",campaignType:"99839839389",solution:"P-09856",checklist:"Mid Sized CEO Owner Director",leadSample:"IBW Surveyors 2",estimatedLeads:"1000",actualLeads:"60",researchLeads:"40",firstLead:"10",secondLead:"5",meetings:"2",prospects:"3",lastUpdated:"20 Day(s) ago",startDate:"2020-09-01",endDate:"2020-09-30",vcStatus:true},
        {campaignName:"Akhil Valve Repair",industry:"Uplevel",segment:"3",country:"Canada",campaignType:"99839839389",solution:"P-09868",checklist:"Audit Automation for Immigration Consultants",leadSample:"EFCO",estimatedLeads:"1500",actualLeads:"641",researchLeads:"400",firstLead:"100",secondLead:"50",meetings:"15",prospects:"10",lastUpdated:"18 Day(s) ago",startDate:"2020-09-05",endDate:"2020-09-30",vcStatus:true},
        {campaignName:"Akhil Contractors FA",industry:"Downlevel",segment:"2",country:"Singapore",campaignType:"99839839389",solution:"P-0986",checklist:"Mid Sized CEO Owner Director",leadSample:"Betchel",estimatedLeads:"500",actualLeads:"205",researchLeads:"100",firstLead:"50",secondLead:"40",meetings:"20",prospects:"10",lastUpdated:"5 Day(s) ago",startDate:"2020-09-08",endDate:"2020-09-30",vcStatus:true},
        {campaignName:"Aadi Hotels Old",industry:"Downlevel",segment:"5",country:"United States",campaignType:"99839839389",solution:"P-09898",checklist:"Mid Sized CEO Owner Director",leadSample:"Green Park Hotels",estimatedLeads:"1000",actualLeads:"10",researchLeads:"5",firstLead:"1",secondLead:"1",meetings:"1",prospects:"1",lastUpdated:"2 Day(s) ago",startDate:"2020-09-12",endDate:"2020-09-30",vcStatus:true}
      ]
    }

    
    

    deleteUser(){ 
      console.log("user");
      this.alertService.createAlert('Successfully deleted.', 1);
    }
    
    saveStatus() {
      this.alertService.createAlert('Successfully saved.', 1);
    }
    
    
    public openUserDialog(id) {
      let dialogRef = this.dialog.open(AddAgentDialogComponent, {
        data: id,
        height: 'auto',
        width: '600px'
      });
      dialogRef.afterClosed().subscribe(data => {
      });
    }
}
