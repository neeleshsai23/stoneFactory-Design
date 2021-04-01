import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/app/app.settings.model';
import { AppSettings } from 'src/app/app.settings';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { FormControl } from '@angular/forms';
import { AddcustomerDialogueComponent } from './addcustomer-dialogue/addcustomer-dialogue.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  toppings = new FormControl();
    contacts:any;
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
            this.contacts = [
                {name:"Sonja",company:"BGR",position:"Product Designer",unit : '2',phone:"(745) 852-6397",email:"sonja@bgr.com",is_active:true},
                {name:"James",company:"Tcb EMC",position:"Sales Manager",unit : '1',phone:"(745) 589-1475",email:"james@tcb.com",is_active:true},
                {name:"Jesper",company:"Spotful",position:"Product Manager",unit : '3',phone:"(247) 457-7821",email:"Jesper@spotful.com",is_active:false},
                {name:"Mary",company:"Aca reporting",position:"Sales Manager",unit : '4',phone:"(257) 136-7592",email:"mary@Acareporting.com",is_active:true},
                {name:"Sami",company:"Sky",position:"Office Manager",unit : '2',phone:"(745) 852-6397",email:"sami@sky.com",is_active:false},
                {name:"Jeff",company:"Concor",position:"Sales Manager",unit : '6',phone:"(257) 136-7592",email:"Jeff@concor.com",is_active:true},
                {name:"Leesa",company:"Red Leaf",position:"Software Developer",unit : '7',phone:"(745) 852-6397",email:"Immaneul@redleaf.com",is_active:true},
                {name:"William",company:"EFCO",position:"Sales Manager",unit : '8',phone:"(249) 397-1287",email:"william@microsoft.com",is_active:false},
                {name:"Kaylee",company:"GMS",position:"Software Developer",unit : '1',phone:"(247) 457-7821",email:"kaylee@gms.com",is_active:true},
                {name:"Jeff",company:"Blue Stone India",position:"Sales Manager",unit : '0',phone:"(745) 589-1475",email:"Jeff@bluestoneindia.com	",is_active:false},
            ]
        }  
        
        public opencontactDialog(id) {
            let dialogRef = this.dialog.open(AddcustomerDialogueComponent, {
                data: id,
                height: 'auto',
                width: '600px'
            });
            dialogRef.afterClosed().subscribe(data => {
            });
        }
}
