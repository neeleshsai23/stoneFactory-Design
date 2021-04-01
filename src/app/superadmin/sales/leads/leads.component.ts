import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/app/app.settings.model';
import { AppSettings } from 'src/app/app.settings';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { LeaddialogComponent } from './leaddialog/leaddialog.component';
import { LeadsGridcolumnsComponent } from './leads-gridcolumns/leads-gridcolumns.component';


@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent implements OnInit {

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete lead.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change lead status.?';
  public cancelClicked: boolean = false;

  filterToggle: boolean = false;
  // constructor() { }

  // ngOnInit() {
  // }

  // tableList: Object[] = [
  //   { intCompanyId: 1, companyName: 'Asterix Healtcare Ltd', contactPerson: 'Henry Dan', contactNumber: '1-604-555-5555', timeline: '2/6', Location: 'Vancouver(CA)', Industry: 'Healthcare', prospects: '3' },
  //   { intCompanyId: 2, companyName: 'ACE Financial Ltd', contactPerson: 'Paul Ray', contactNumber: '1-284-295-5682', timeline: '4/6', Location: 'British Columbia(CA)', Industry: 'Finance', prospects: '4' },
  //   { intCompanyId: 3, companyName: 'DYN Infrastructures', contactPerson: 'Steven Kell', contactNumber: '1-334-206-5632', timeline: '3/6', Location: 'Ontario(CA)', Industry: 'Infrastructure', prospects: '5' }
  // ];

    isInception: boolean = true;
    isControl: boolean = false;
    isTests: boolean = false;
    isInception1: boolean = false;
    isControl1: boolean = false;

  public searchText: string;
  public page: any;
  public settings: Settings;
  public selectedAll : any;
  constructor(public appSettings: AppSettings,
      public dialog: MatDialog,
      private _activatedRoute : ActivatedRoute) {
      this.settings = this.appSettings.settings;
  }

  leads = [
      {tag:"",tag_name:"Initial",lead_name:"Selec Controls Pvt.",url:"",contact_name:"Vijay Kambe",campaign_name:"Aadi Manuf",campaign_type:"Invite",now:"sent 1st msg",next:"waiting for reply",notes:"3/5",reports:'3',fb:'3',lead_sample:"Purchase",segment:"All Manufacturing",country:"India",city:"Kozhikode",solution:"Purchase Automation",industry:"Manufacturing",bdName:"Aadi",followupDate:"25-Sep-2020",headCount:"Mid Sized (200-1000)",email:0,whatsapp:1,call:0,lin:1,con:"0",status:true,convDate:"10-Sep-2020",briefDate:"12-Sep-2020",sampleDate:"15-Sep-2020",feedDate:"19-Sep-2020",trackDate:"22-Sep-2020"},
      {tag:"",tag_name:"Initial",lead_name:"Continental Engineer",url:"",contact_name:"Aaditya Pancharya",campaign_name:"Aadi Hospi",campaign_type:"Invite",now:"sent 1st msg",next:"waiting for reply",notes:"3/5",reports:'Add',fb:'2',lead_sample:"Green Park Hotels",segment:"Hotels",country:"India",city:"East Siang",solution:"Audit Automation for Hospitality Industry",industry:"Hospitality",bdName:"Aadi",followupDate:"25-Sep-2020",headCount:"Mid Sized (200-1000)",email:0,whatsapp:1,call:1,lin:1,con:"0",status:true,convDate:"12-Sep-2020",briefDate:"15-Sep-2020",sampleDate:"18-Sep-2020",feedDate:"20-Sep-2020",trackDate:"23-Sep-2020"},
      {tag:"",tag_name:"Initial",lead_name:"Rayon Illuminations",url:"",contact_name:"Rohit N",campaign_name:"Aadi Manuf",campaign_type:"Invite",now:"sent 1st msg",next:"waiting for reply",notes:"3/5",lead_sample:"Purchase",reports:'2',fb:'4',segment:"All Manufacturing",country:"India",city:"Vijaywada",solution:"Purchase Automation",industry:"Manufacturing",bdName:"Aadi",followupDate:"25-Sep-2020",headCount:"Mid Sized (200-1000)",email:0,whatsapp:1,call:0,lin:0,con:"0",status:true,convDate:"15-Sep-2020",briefDate:"18-Sep-2020",sampleDate:"20-Sep-2020",feedDate:"25-Sep-2020",trackDate:"30-Sep-2020"},
      {tag:"",tag_name:"Initial",lead_name:"Varada Instruments",url:"",contact_name:"Viraj Kulkarni",campaign_name:"Aadi Manuf",campaign_type:"Invite",now:"sent 1st msg",next:"waiting for reply",notes:"3/5",lead_sample:"Green Park Hotels",fb:'1',reports:'4',segment:"Hotels",country:"India",city:"Mumbai",solution:"Audit Automation for Hospitality Industry",industry:"Hospitality",bdName:"Aadi",followupDate:"25-Sep-2020",headCount:"Mid Sized (200-1000)",email:1,whatsapp:0,call:1,lin:1,con:"0",status:true,convDate:"17-Sep-2020",briefDate:"20-Sep-2020",sampleDate:"22-Sep-2020",feedDate:"25-Sep-2020",trackDate:"27-Sep-2020"},
      {tag:"",tag_name:"Initial",lead_name:"power 8",url:"",contact_name:"abishek p",campaign_name:"Harsha Oth",campaign_type:"Invite",now:"sent 1st msg",next:"waiting for reply",notes:"3/5",lead_sample:"Purchase",segment:"All Manufacturing",fb:'4',reports:'Add',country:"India",city:"Mumbai",solution:"Purchase Automation",industry:"Manufacturing",bdName:"Aadi",followupDate:"25-Sep-2020",headCount:"Mid Sized (200-1000)",email:1,whatsapp:0,call:1,lin:0,con:"0",status:true,convDate:"18-Sep-2020",briefDate:"22-Sep-2020",sampleDate:"25-Sep-2020",feedDate:"30-Sep-2020",trackDate:"5-Oct-2020"}
  ]

  ngOnInit() {
  }

  scrollGrid(side) {
      var ele = document.getElementById('grid-table-container');
      if (side == 'right')
      ele.scrollLeft += 210;
      else
      ele.scrollLeft -= 210;
    }

  colorOptions = ["Green", "Blue", "Gray", "Red"];
  colorOptionSelected: any;

  onColorOptionsSelected(event) {
      console.log(event); //option value will be sent as event
  }
  
  prospectsOptions = ["Blue Stone India", "Axess India", "BGR", "SIR","SKY"];
  prospectOptionSelected: any;

  onProspectOptionsSelected(event) {
      console.log(event); //option value will be sent as event
  }

  campaignOptions = ["TDR","CEO","Startup","CV","Audit Automation","F2O","Venue Management"];
  campaignOptionSelected: any;

  onCampaignOptionsSelected(event) {
      console.log(event); //option value will be sent as event
  }

  locationOptions = ["Ontario", "Ottawa", "Vancouver", "New york", "Las Vegas", "Copenhagen", "Aarhus"];
  locationOptionSelected: any;
  onLocationOptionsSelected(event){
  console.log(event); //option value will be sent as event
  }




  public onPageChanged(event) {
      this.page = event;
    
      if (this.settings.fixedHeader) {
          document.getElementById('main-content').scrollTop = 0;
      }
      else {
          document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
      }
  }

  public openleadDialog(lead) {
      let dialogRef = this.dialog.open(LeaddialogComponent, {
          data: lead,
          height: 'auto',
          width: '600px',
      });

      dialogRef.afterClosed().subscribe(lead => {
          if (lead) {
              // (lead.id) ? this.updatelead(lead) : this.addlead(lead);
          }
      });
  }

  openGridColumnsDialog(stat) {
      let dialogRef = this.dialog.open(LeadsGridcolumnsComponent, {
          data: stat,
          height: 'auto',
          width: '850px',
          autoFocus: false,
      });
      
      dialogRef.afterClosed().subscribe(prospects => {
          if (prospects == 'save') {
              
          }
      });
  }

  public addVisit(lead) {
      // let dialogRef = this.dialog.open('', {
      //     data: lead,
      //     height: 'auto',
      //     width: '750px',
      // });

      // dialogRef.afterClosed().subscribe(lead => {
      //     if (lead) {
      //         // (lead.id) ? this.updatelead(lead) : this.addlead(lead);
      //     }
      // });
  }

  public addNotes(lead) {
      // let dialogRef = this.dialog.open('', {
      //     data: lead,
      //     height: 'auto',
      //     width: '600px',
      // });

      // dialogRef.afterClosed().subscribe(lead => {
      //     if (lead) {
      //         // (lead.id) ? this.updatelead(lead) : this.addlead(lead);
      //     }
      // });
  }
  public addActive(lead) {
      // let dialogRef = this.dialog.open('', {
      //     data: lead,
      //     height: 'auto',
      //     width: '700px',
      // });

      // dialogRef.afterClosed().subscribe(lead => {
      //     if (lead) {
      //         // (lead.id) ? this.updatelead(lead) : this.addlead(lead);
      //     }
      // });
  }
  public openConfirmDialog(action,value,name) {
      
  }

  fnInception() {
    this.isInception = true;
    this.isControl = false;
    this.isTests = false;
    this.isInception1 = false;
    this.isControl1 = false;
    this.searchText = 'con'
  }

  fnTest() {
    this.isInception = false;
    this.isControl = false;
    this.isTests = true;
    this.isInception1 = false;
    this.isControl1 = false;
    this.searchText = 'projectbrief'
  }
  fnControl() {
    this.isInception = false;
    this.isControl = true;
    this.isTests = false;
    this.isInception1 = false;
    this.isControl1 = false;
    this.searchText = 'samples'
  }

 fnInception1() {
    this.isInception = false;
    this.isControl = false;
    this.isTests = false;
    this.isInception1 = true;
    this.isControl1 = false;
    this.searchText = 'feedback'
  }

  fnControl1() {
    this.isInception = false;
    this.isControl = false;
    this.isTests = false;
    this.isInception1 = false;
    this.isControl1 = true;
    this.searchText = 'tracking'
  }


  checkIfAllSelected() {
      this.selectedAll = this.leads.every(function(item:any) {
          return item.selected == true;
      })
  }

}
