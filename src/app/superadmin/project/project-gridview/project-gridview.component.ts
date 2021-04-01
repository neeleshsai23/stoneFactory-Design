import { Settings } from './../../../app.settings.model';
import { AppSettings } from './../../../app.settings';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent, MatDialog } from '@angular/material';
import { ProjectGridcolumnsComponent } from './project-gridcolumns/project-gridcolumns.component';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { AddprojectDialogueComponent } from './addproject-dialogue/addproject-dialogue.component';
import { AddincentiveComponent } from './addincentive/addincentive.component';
import {CopySettingsDialogComponent} from './copy-settings-dialog/copy-settings-dialog.component';

@Component({
  selector: 'app-project-gridview',
  templateUrl: './project-gridview.component.html',
  styleUrls: ['./project-gridview.component.scss']
})
export class ProjectGridviewComponent implements OnInit {
  public single: any[];
  public multi: any[];
  public triple: any[];
  public showLegend = false;
  public gradient = false;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00']
  }; 
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;
  
  pageEvent: PageEvent;
  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;
  filterToggle = false;
  status = [{'status_id':'1','status_name':'Active'},
  {'status_id':'2','status_name':'Inactive'}]
  
  public status_filter = ""; 
  contactName = new FormControl();
  clientName = new FormControl();
  jobTitle = new FormControl();
  startendDate = new FormControl();
  startdueDate = new FormControl();
  activityDate = new FormControl();
  contactNumber = new FormControl();
  statu = new FormControl();
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;
  totalProjects = [{projectNumber: "P12007",PE:"24%",streetAddress: "AJAX",industry:"Marketing",clientName: "2314535 Ontario Limited (The King Street Condos)",struct:"38/97",arch:"33/45",plumbing:"3",ele:"47/98",fire:"99/123",
  projectType: "Engineering",fm:"Finch",projectManager: "Monika Amasa",strDueDate: "2020-07-20",strFollowUpDate: "2020-07-18",strProjectAwaredDate: "2020-07-17",pm:"David",logs:3,
  awardedAmount: "$10000.00",bt_status: true},
  {struct:"23/97",arch:"32/48",fm:"Michale",plumbing:"7",PE:"15%",ele:"67/98",fire:"54/103",industry:"Finance",projectNumber: "P12002",streetAddress: "Alabama",clientName: "1799882 Ontario Inc.",pm:"Stokes",
  projectType: "Construction",projectManager: "Akhil Reddy",strDueDate: "2019-12-20",strFollowUpDate: "2019-07-18",strProjectAwaredDate: "2020-05-17",logs:2,
  awardedAmount: "$24590.00",bt_status: true},
  {struct:"28/97",arch:"12/48",fm:"Usman",plumbing:"1",PE:"8%",ele:"27/198",fire:"24/113",industry:"Hospitality",projectNumber: "P12300",streetAddress: "AJAX",clientName: "The King Street Condos",pm:"Woakes",
  projectType: "Engineering",projectManager: "Sai",strDueDate: "2020-07-20",strFollowUpDate: "2020-07-18",strProjectAwaredDate: "2020-07-17",logs:5,
  awardedAmount: "$1000.00",bt_status: true},
  {struct:"38/97",arch:"43/48",fm:"Pollard",plumbing:"10",PE:"35%",ele:"78/98",fire:"64/103",industry:"Mining",projectNumber: "P2390",streetAddress: "Canada #240",clientName: "2314535 Ontario Limited",pm:"Archer",
  projectType: "Machine Work",projectManager: "Raj",strDueDate: "2020-07-20",strFollowUpDate: "2020-07-18",strProjectAwaredDate: "2020-07-17",logs:7,
  awardedAmount: "$32980.00",bt_status: true},
  {struct:"11/12",arch:"32/48",fm:"Parnell",plumbing:"25",PE:"54%",ele:"67/98",fire:"54/103",industry:"Hospitality",projectNumber: "P12374",streetAddress: "AJAX",clientName: "The King Street Condos",pm:"Watson",
  projectType: "Engineering",projectManager: "Siva",strDueDate: "2020-07-20",strFollowUpDate: "2020-07-18",strProjectAwaredDate: "2020-07-17",logs:3,
  awardedAmount: "$23410.00",bt_status: true},
  {struct:"09/12",arch:"33/48",fm:"Rabada",plumbing:"17",PE:"1%",ele:"56/76",fire:"74/103",industry:"Marketing",projectNumber: "P12009",streetAddress: "AJAX",clientName: "2314535 Ontario Limited (The King Street Condos)",pm:"smith",
  projectType: "Engineering",projectManager: "RK",strDueDate: "2020-07-20",strFollowUpDate: "2020-07-18",strProjectAwaredDate: "2020-07-17",logs:1,
  awardedAmount: "$78610.00",bt_status: true},
  {struct:"01/09",arch:"32/48",fm:"Nortje",plumbing:"7",PE:"90%",ele:"67/98",fire:"54/103",industry:"Finance",projectNumber: "P12092",streetAddress: "AJAX",clientName: "The Street Condos",pm:"Marsh",
  projectType: "Engineering",projectManager: "Praveen",strDueDate: "2020-07-20",strFollowUpDate: "2020-07-18",strProjectAwaredDate: "2020-07-17",logs:10,
  awardedAmount: "$7650.00",bt_status: true},
  {struct:"10/97",arch:"48/48",fm:"Tom Banton",plumbing:"2",PE:"74%",ele:"78/98",fire:"98/99",industry:"Billing",projectNumber: "P12007",streetAddress: "AJAX",clientName: "The King Street",pm:"Curran",
  projectType: "Engineering",projectManager: "Monika Amasa",strDueDate: "2020-07-20",strFollowUpDate: "2020-07-18",strProjectAwaredDate: "2020-07-17",logs:4,
  awardedAmount: "0.00",bt_status: true},
  {struct:"38/97",arch:"32/48",fm:"Lynn",plumbing:"5",ele:"67/98",PE:"98%",fire:"54/103",industry:"Banking",projectNumber: "9-12007",streetAddress: "AJAX",clientName: " Ontario Limited ",pm:"Hussey",
  projectType: "Engineering",projectManager: "Naveen",strDueDate: "2020-07-20",strFollowUpDate: "2020-07-18",strProjectAwaredDate: "2020-07-17",logs:10,
  awardedAmount: "$23120.00",bt_status: true},
  {struct:"18/87",arch:"32/48",fm:"Abbot",plumbing:"4",ele:"67/98",PE:"61%",fire:"54/103",industry:"Hospitality",projectNumber: "10-12007",streetAddress: "AJAX",clientName: "2314535 Ontario Limited (The King Street Condos)",pm:"Marshal",
  projectType: "Engineering",projectManager: "Nikhil",strDueDate: "2020-07-20",strFollowUpDate: "2020-07-18",strProjectAwaredDate: "2020-07-17",logs:6,
  awardedAmount: "$98710.00",bt_status: true}];



  items=[
    { "Property_Name" : "Stone Factory","ContactName" : "Prasanth","Email" : "prasanth@gmail.com", "Phone_Number" : "4567898768","Added_By" : "Admin", "Created_Date" : "02-May-2020","Subscription_Start_Date":"02-May-2020","Subscription_Expiry_Date" : "N/A", "Eula" : "Yes","Status":"Active","package":"Platinum"},

    { "Property_Name" : "Natural Stone Cladding","ContactName" : "Prasanth","Email" : "prasanth@gmail.com", "Phone_Number" : "4567898768","Added_By" : "Admin", "Created_Date" : "02-May-2020","Subscription_Start_Date":"02-May-2020","Subscription_Expiry_Date" : "N/A", "Eula" : "Yes","Status":"Active","package":"Platinum"},
    
    { "Property_Name" : "MB Stone International","ContactName" : "Siddhant","Email" : "siddant@gmail.com", "Phone_Number" : "9835736729","Added_By" : "Admin", "Created_Date" : "02-May-2020","Subscription_Start_Date":"N/A","Subscription_Expiry_Date" : "N/A", "Eula" : "No","Status":"Active","package":"Premium"},
    { "Property_Name" : "Norstone","ContactName" : "Tripati","Email" : "tripati@gmail.com", "Phone_Number" : "6763792782","Added_By" : "Admin", "Created_Date" : "02-May-2020","Subscription_Start_Date":"N/A","Subscription_Expiry_Date" : "N/A", "Eula" : "No","Status":"Active","package":"Gold"},
    
    { "Property_Name" : "Stoneleaf","ContactName" : "Dhawal","Email" : "dhawal@gmail.com", "Phone_Number" : "8889624563","Added_By" : "Admin", "Created_Date" : "02-May-2020","Subscription_Start_Date":"N/A","Subscription_Expiry_Date" : "N/A", "Eula" : "No","Status":"Active","package":"Silver"},
    
    { "Property_Name" : "FlexsandStein","ContactName" : "Manoj","Email" : "manoj@gmail.com", "Phone_Number" : "9900886555","Added_By" : "Admin", "Created_Date" : "02-May-2020","Subscription_Start_Date":"N/A","Subscription_Expiry_Date" : "N/A", "Eula" : "No","Status":"Active","package":"Bronze"},
    ]
  
  constructor(public dialog: MatDialog,public appSettings:AppSettings) {
    const single = [
      {
        name: 'Here',
        value: 40
      },
      {
        name: 'Novotel Hotel',
        value: 49
      },
      {
        name: 'caravala beach resort',
        value: 36
      },
      {
        name: 'Park Hyatt',
        value: 52
      },
      {
        name: 'Marriot Resort',
        value: 27
      }
    ];
    const multi = [
      {
        name: 'Active',
        value: 66
      },
      {
        name: 'Inactive',
        value: 34
      },
     
    ];
    const triple = [
      {
        name: 'India',
        value: 147
      },
      {
        name: 'Vietnam',
        value: 224
      },
      {
        name: 'Taiwan',
        value: 211
      },
      // {
      //   name: 'Connecticut',
      //   value: 132
      // },
      // {
      //   name: 'Texas',
      //   value: 90
      // },
      // {
      //   name: 'Florida',
      //   value: 55
      // },
      // {
      //   name: 'Washington',
      //   value: 298
      // },
      // {
      //   name: 'Arizona',
      //   value: 150
      // },
    ];
    this.settings = this.appSettings.settings; 
    Object.assign(this, {single,multi,triple}); 
  }

  public onSelect(event) {
    console.log(event);
  }
  
  ngOnInit() {
    
  }
  
  opengridcoloum() {
    let dialogRef = this.dialog.open(ProjectGridcolumnsComponent, {
  
      height: 'auto',
      width: 'auto',
      autoFocus: false
    });
    
    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }
  
  openDeleteDialog(assets) {
    let dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      data: assets,
      height: 'auto',
      width: 'auto',
      autoFocus: false
    });
    
    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }
  fliterSearch() {}
  clearFilters() {
    this.contactName.setValue([]);
    this.clientName.setValue([]);
    this.jobTitle.setValue([]);
    this.startendDate.setValue([]);
    this.startdueDate.setValue([]);
    this.activityDate.setValue([]);
    this.contactNumber.setValue([]);
    this.statu.setValue([]);
    this.status_filter = '';
  }
  scrollGrid(side) {
    var ele = document.getElementById('grid-table-container');
    if (side == 'right')
    ele.scrollLeft += 210;
    else
    ele.scrollLeft -= 210;
  }
  openProjectDialog(){
    let dialogRef = this.dialog.open(AddprojectDialogueComponent, {
    
      height: 'auto',
      width: '750px',
      autoFocus: false,
    });
    
    dialogRef.afterClosed().subscribe(prospects => {
      if(prospects == 'save') {
        
      }
    });
  }
  openGridColumnsDialog(stat) {
    let dialogRef = this.dialog.open(ProjectGridcolumnsComponent, {
      data: stat,
      height: 'auto',
      width: '600px',
      autoFocus: false,
    });
    
    dialogRef.afterClosed().subscribe(prospects => {
      if (prospects == 'save') {
        
      }
    });
  }

  openCopySettingsDialog(){
    this.dialog.open(CopySettingsDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }
}
