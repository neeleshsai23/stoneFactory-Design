import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddvisitsComponent } from '../prospects/addvisits/addvisits.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-constant-contacts',
  templateUrl: './constant-contacts.component.html',
  styleUrls: ['./constant-contacts.component.scss']
})
export class ConstantContactsComponent implements OnInit {

  tableLists:any;
  completeTableData = [];
  constructor(public alertService : AlertService,public dialog: MatDialog) { }
  
  ngOnInit() {
    this.tableLists = [
      {research:'Omaxe', first:'Terrago', second:'AmiBios', prosp:'Kingston', oppurtunities:'ABC Solutions',d1:'3', d2:'10', d3:'5', d4:'7', d5:'8'},
      {research:'Xyz Solutions', first:'Terrago', second:'AmiBios', prosp:'Kingston', oppurtunities:'ABC Solutions' ,d1:'5', d2:'6', d3:'3', d4:'3', d5:'7'},
      {research:'DT Solutions', first:'SD Frameworks', second:'IBW', prosp:'F2O', oppurtunities:'SDF Solutions' ,d1:'11', d2:'2', d3:'3', d4:'6', d5:'3'},
      {research:'Omaxe', first:'Terrago', second:'AmiBios', prosp:'Kingston', oppurtunities:'123 Solutions' ,d1:'14', d2:'6', d3:'16', d4:'11', d5:'6'},
      
    ];
  }

  conversations = [
    {lead_name:"Relocare global moving service",days:"25 days to ago",color:false},
    {lead_name:"Ardour Pack Pvt Ltd",days:"10 days to go",color:false},
    {lead_name:"Wat-a-Burger",days:"5 days ago",color:true},
    {lead_name:"Bharat Freight Group of Compan",days:"10 days ago",color:true},
    {lead_name:"Rightways Air Logistics Privat",days:"15 days ago",color:true},
    {lead_name:"Relocare global moving service",days:"25 days to ago",color:false},
    {lead_name:"Ardour Pack Pvt Ltd",days:"10 days to go",color:false},
    {lead_name:"Wat-a-Burger",days:"5 days ago",color:true},
    {lead_name:"Bharat Freight Group of Compan",days:"10 days ago",color:true},
    {lead_name:"Rightways Air Logistics Privat",days:"15 days ago",color:true},
    {lead_name:"Relocare global moving service",days:"25 days to ago",color:false},
    {lead_name:"Ardour Pack Pvt Ltd",days:"10 days to go",color:false},
    {lead_name:"Wat-a-Burger",days:"5 days ago",color:true},
    {lead_name:"Bharat Freight Group of Compan",days:"10 days ago",color:true},
    {lead_name:"Rightways Air Logistics Privat",days:"15 days ago",color:true},
    {lead_name:"Relocare global moving service",days:"25 days to ago",color:false},
    {lead_name:"Ardour Pack Pvt Ltd",days:"10 days to go",color:false},
    {lead_name:"Wat-a-Burger",days:"5 days ago",color:true},
    {lead_name:"Bharat Freight Group of Compan",days:"10 days ago",color:true},
    {lead_name:"Rightways Air Logistics Privat",days:"15 days ago",color:true},
    {lead_name:"Relocare global moving service",days:"25 days to ago",color:false},
    {lead_name:"Ardour Pack Pvt Ltd",days:"10 days to go",color:false},
    {lead_name:"Wat-a-Burger",days:"5 days ago",color:true},
    {lead_name:"Bharat Freight Group of Compan",days:"10 days ago",color:true},
    {lead_name:"Rightways Air Logistics Privat",days:"15 days ago",color:true},
  ]

  projectBreif = [
    {lead_name:"Ganymede Business Ventures",days:"16 days to ago",color:false},
    {lead_name:"Centre Point Group of Hotels",days:"9 days to go",color:false},
    {lead_name:"Nishal Group (Real Estate Deve",days:"3 days to go",color:false},
    {lead_name:"Dawn of Prosperity Immigration",days:"15 days ago",color:true},
    {lead_name:"Suri Agro Fresh Private Limite",days:"20 days ago",color:true},
    {lead_name:"Ganymede Business Ventures",days:"16 days to ago",color:false},
    {lead_name:"Centre Point Group of Hotels",days:"9 days to go",color:false},
    {lead_name:"Nishal Group (Real Estate Deve",days:"3 days to go",color:false},
    {lead_name:"Dawn of Prosperity Immigration",days:"15 days ago",color:true},
    {lead_name:"Suri Agro Fresh Private Limite",days:"20 days ago",color:true},
    {lead_name:"Ganymede Business Ventures",days:"16 days to ago",color:false},
    {lead_name:"Centre Point Group of Hotels",days:"9 days to go",color:false},
    {lead_name:"Nishal Group (Real Estate Deve",days:"3 days to go",color:false},
  ]

  samples = [
    {lead_name:"Bharat Freight Group of Compan",days:"20 days to ago",color:false},
    {lead_name:"Rightways Air Logistics Privat",days:"18 days to go",color:false},
    {lead_name:"Relocare global moving service",days:"10 days ago",color:false},
    {lead_name:"Ardour Pack Pvt Ltd",days:"2 days to go",color:false},
    {lead_name:"Wat-a-Burger",days:"1 day to go",color:false},
    {lead_name:"Bharat Freight Group of Compan",days:"20 days to ago",color:false},
    {lead_name:"Rightways Air Logistics Privat",days:"18 days to go",color:false},
    {lead_name:"Relocare global moving service",days:"10 days ago",color:false},
    {lead_name:"Ardour Pack Pvt Ltd",days:"2 days to go",color:false},
    {lead_name:"Wat-a-Burger",days:"1 day to go",color:false},
  ]

  feedback = [
    {lead_name:"Rightways Air Logistics Privat",days:"16 days to ago",color:false},
    {lead_name:"Ardour Pack Pvt Ltd",days:"9 days to go",color:false},
    {lead_name:"Wat-a-Burger",days:"3 days ago",color:true},
    {lead_name:"Relocare global moving service",days:"2 days to go",color:true},
    {lead_name:"Bharat Freight Group of Compan",days:"1 day to go",color:true},
    {lead_name:"Relocare global moving service",days:"16 days to ago",color:false},
    {lead_name:"Ardour Pack Pvt Ltd",days:"9 days to go",color:false},
    {lead_name:"Wat-a-Burger",days:"3 days ago",color:true},
    {lead_name:"Bharat Freight Group of Compan",days:"2 days to go",color:true},
  ]

  tracking = [
    {lead_name:"Ardour Pack Pvt Ltd",days:"16 days to ago",color:false , visit :'3'},
    {lead_name:"Bharat Freight Group of Compan",days:"9 days to go",color:false,visit :'5'},
    {lead_name:"Wat-a-Burger",days:"3 days ago",color:true,visit :'4'},
    {lead_name:"Relocare global moving service",days:"15 days ago",color:true,visit :'add'},
    {lead_name:"Rightways Air Logistics Privat",days:"20 days ago",color:true,visit :'3'},
  ]

  public addVisit(lead) {
    let dialogRef = this.dialog.open(AddvisitsComponent, {
        data: lead,
        height: 'auto',
        width: '750px',
    });
  
    dialogRef.afterClosed().subscribe(lead => {
        if (lead) {
            // (lead.id) ? this.updatelead(lead) : this.addlead(lead);
        }
    });
  }
  
  getRecords(place,value) {
    if(place == 'opprotunity')
    this.conversations = this.conversations.concat(this.feedback);
    if(place == 'lead')
    this.projectBreif = this.projectBreif.concat(this.feedback);
    if(place == 'le')
    this.samples = this.samples.concat(this.feedback);
  }


}
