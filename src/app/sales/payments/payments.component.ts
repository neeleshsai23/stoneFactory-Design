import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/app/app.settings.model';
import { AppSettings } from 'src/app/app.settings';
import { AlertService } from 'src/app/shared/services/alert.service';
import { MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import { AddpaymentsComponent } from './addpayments/addpayments.component';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

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
              {name:"Sonja",company:"BGR",position:"1,00,000",unit : '2230 sft',phone:"(745) 852-6397",email:"sonja@bgr.com",is_active:true},
              {name:"James",company:"Tcb EMC",position:"1,10,000",unit : '1202 sft',phone:"(745) 589-1475",email:"james@tcb.com",is_active:true},
              {name:"Jesper",company:"Spotful",position:"2,15,000",unit : '3298 sft',phone:"(247) 457-7821",email:"Jesper@spotful.com",is_active:false},
              {name:"Mary",company:"Aca reporting",position:"2,10,000",unit : '2314 sft',phone:"(257) 136-7592",email:"mary@Acareporting.com",is_active:true},
              {name:"Sami",company:"Sky",position:"90,00,000",unit : '2672 sft',phone:"(745) 852-6397",email:"sami@sky.com",is_active:false},
              {name:"Jeff",company:"Concor",position:"3,00,000",unit : '986 dft',phone:"(257) 136-7592",email:"Jeff@concor.com",is_active:true},
              {name:"Leesa",company:"Red Leaf",position:"65,700",unit : '980 sft',phone:"(745) 852-6397",email:"Immaneul@redleaf.com",is_active:true},
              {name:"William",company:"EFCO",position:"1,70,000",unit : '2342 sft',phone:"(249) 397-1287",email:"william@microsoft.com",is_active:false},
              {name:"Kaylee",company:"GMS",position:"1,15,000",unit : '4231 sft',phone:"(247) 457-7821",email:"kaylee@gms.com",is_active:true},
              {name:"Jeff",company:"Blue Stone India",position:"1,30,000",unit : '2189 sft',phone:"(745) 589-1475",email:"Jeff@bluestoneindia.com	",is_active:false},
          ]
      }  
      
      public openpaymentDialog(id) {
          let dialogRef = this.dialog.open(AddpaymentsComponent, {
              data: id,
              height: 'auto',
              width: '600px'
          });
          dialogRef.afterClosed().subscribe(data => {
          });
      }


}
