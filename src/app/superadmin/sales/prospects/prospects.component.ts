import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GridcolumnsComponent } from './gridcolumns/gridcolumns.component';
import { AddprospectsComponent } from './addprospects/addprospects.component';
import { AddvisitsComponent } from './addvisits/addvisits.component';

@Component({
  selector: 'app-prospects',
  templateUrl: './prospects.component.html',
  styleUrls: ['./prospects.component.scss']
})
export class ProspectsComponent implements OnInit {

  draggedItem: any;
    isInception: boolean = true;
    isControl: boolean = false;
    isTests: boolean = false;
    filterToggle : boolean;
    public popoverTitle: string = 'Confirm Delete';
    public popoverMessage: string = 'Are you sure you want to delete lead.?';
    public popoverStatusTitle: string = 'Confirm Status Change';
    public popoverStatusMessage: string = 'Are you sure you want to change lead status.?';
    public cancelClicked: boolean = false;

  localData: any[] = [
    { id:"kanban_table_1",collapsed:false, style:{'background-color':'rgb(189, 215, 238)'}, stage:'Concept ', header: 'Concept  (2)', data : [{ id: 'kanban_item_1161', name: '5-35151', info: 'Updates: 5', colorCode: 'Green', percentage: 'Completion: 70%',campaign: '',projectcode:"Hydro One", actions: 'Schedule: 4 / 12',budget: 'Budget: $ 542/700',tasks:'Schedule: 2 / 5',duedate:'Completion Date: 17-08-19',updateddate:'last updated : 1 day ago', hex: '#FFFFFF',clientName:"Dhawal",stage:"Stage: Architecture",cost:"Cost:12.8 cr/15.9 cr",colorcode1:"rgb(122 ,173, 22)",colorcode2:"rgb(165, 42, 42)",project_name:"Corner Center",project_number:"888",physicalfeed:"15%",endOfProject:"August 2021"}, 
    { id:'kanban_item_1163', collapsed:false,name: 'Reference Plan',  info: 'Updates: 2', colorCode: 'Green', campaign: 'Delpark Homes | Dave',projectcode:"Mearns Aviations ", actions: 'Schedule: 8/10',budget: 'Budget: $ 560/800',tasks:'Schedule: 57/100',duedate:'Completion Date: 26-05-19',percentage: 'Completion: 94%', hex: '#FFFFFF',clientName:"Siva",stage:"Stage: Plumbing",cost:"Cost:13.09 cr/20.09 cr",updateddate:'last updated: 3 days ago',colorcode2:"rgb(122 ,173, 22)",colorcode1:"rgb(165, 42, 42)",project_name:"Graphic Center",project_number:"235",physicalfeed:"15%",endOfProject:"June 2021"}]},
    { id:"kanban_table_2",collapsed:false, style:{'background-color':'rgb(189, 215, 238)'}, stage:'Tender', header: 'Tender (1)', data : [{ id: 'kanban_item_1162', name: 'Topographic',  info: 'Updates: 7', colorCode: 'Red',percentage: 'Completion: 85%', campaign: 'Hydro One | Dave',projectcode:"DRL", actions: 'Schedule: 6/10',budget: 'Budget: $ 542/700',tasks:'Schedule: 59/100',duedate:'Completion Date: 19-03-20', hex: '#FFFFFF',clientName:"Navin" ,stage:"Stage: Structure",cost:"Cost:13.09 cr/20.09 cr",updateddate:'last updated : 10 days ago',colorcode1:"rgb(122 ,173, 22)",colorcode2:"rgb(165, 42, 42)",project_name:"The Wheel",project_number:"645",physicalfeed:"15%",endOfProject:"May 2021"}]},
    { id:"kanban_table_3", collapsed:false,style:{'background-color':'rgb(189, 215, 238)'}, stage:'Design', header: 'Design (1)', data : [{ id: 'kanban_item_1166', name: 'TRPR', info: 'Updates: 6', colorCode: 'Green',percentage: 'Completion: 75%', campaign: 'Sandbank | Dwayne',projectcode:"Sai Constructions", actions: 'Schedule: 9/10',budget: 'Budget: $ 652/750',tasks:'Schedule: 78/100',duedate:'Completion Date: 20-04-21', hex: '#FFFFFF',clientName:"Tharun",stage:"Stage: Electrical",cost:"Cost:12 cr/14.09 cr",updateddate:'last updated : 1 day ago',colorcode2:"rgb(122 ,173, 22)",colorcode1:"rgb(165, 42, 42)",project_name:"Insurgents 700",project_number:"786",physicalfeed:"15%",endOfProject:"September 2021"}]},
    { id:"kanban_table_4", collapsed:false,style:{'background-color':'rgb(189, 215, 238)'}, stage:'Drawings', header: 'Drawings (1)', data : [{ id: 'kanban_item_1164', name: 'Survey',  info: 'Updates: 2', colorCode: 'Green',percentage: 'Completion: 88%', campaign: 'Valleymede | Dave',projectcode:"Siva Infra" , actions: 'Schedule: 7/10',budget: 'Budget: $ 425/650',tasks:'Schedule: 85/100',duedate:'Completion Date: 18-11-21', hex: '#FFFFFF',clientName:"Kalyan",stage:"Stage: Fire Fighting",cost:"Cost:10 cr/11 cr",updateddate:'last updated : 1 month ago',colorcode1:"rgb(122 ,173, 22)",colorcode2:"rgb(165, 42, 42)",project_name:"Victory",project_number:"456",physicalfeed:"15%",endOfProject:"October 2021"}]},
    { id:"kanban_table_5",collapsed:false, style:{'background-color':'rgb(189, 215, 238)'}, stage:'Structure', header: 'Structure (1)', data : [{ id: 'kanban_item_1166', name: 'SRPR', info: 'Updates: 3', colorCode: 'Green',percentage: 'Completion: 80%', campaign: 'AECOM | Dwayne',projectcode:"Navin Estates", actions: 'Schedule: 9/10',budget: 'Budget: $ 752/900',tasks:'Schedule: 66/100',duedate:'Completion Date: 27-09-19', hex: '#FFFFFF',clientName:"Dheeraj",stage:"Stage: Plumbing",cost:"Cost:09 cr/20 cr",updateddate:'last updated : 2 month ago',colorcode2:"rgb(122 ,173, 22)",colorcode1:"rgb(165, 42, 42)",project_name:"Corner Center",project_number:"888",physicalfeed:"15%",endOfProject:"August 2021"}]},
    { id:"kanban_table_6", collapsed:false,style:{'background-color':'rgb(189, 215, 238)'}, stage:'Architecture', header: 'Architecture (0)', data : []},
    { id:"kanban_table_7",collapsed:false, style:{'background-color':'rgb(189, 215, 238)'}, stage:'Electrical', header: 'Electrical (0)', data : []},
    { id:"kanban_table_8",collapsed:false, style:{'background-color':'rgb(189, 215, 238)'}, stage:'Plumbing', header: 'Plumbing (0)', data : []},
    { id:"kanban_table_9",collapsed:false, style:{'background-color':'rgb(189, 215, 238)'}, stage:'Fire Safety', header: 'Fire Safety (0)', data : []},
    { id:"kanban_table_10",collapsed:false, style:{'background-color':'rgb(189, 215, 238)'}, stage:'Closed', header: 'Closed (0)', data : []},
    { id:"kanban_table_11",collapsed:false,style:{'background-color':'rgb(189, 215, 238)'}, stage:'Cancelled', header: 'Cancelled (0)', data : []},
    { id:"kanban_table_12", collapsed:false,style:{'background-color':'rgb(189, 215, 238)'}, stage:'On Hold', header: 'On Hold (0)', data : []}
];

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

leads = [
  {tag:"",tag_name:"Initial",lead_name:"Selec Controls Pvt.",url:"",contact_name:"Vijay Kambe",campaign_name:"Aadi Manuf",campaign_type:"Invite",now:"sent 1st msg",next:"waiting for reply",notes:"3/5",reports:'3',lead_sample:"Purchase",segment:"All Manufacturing",country:"India",city:"Kozhikode",solution:"Purchase Automation",industry:"Manufacturing",bdName:"Aadi",followupDate:"25-Sep-2020",headCount:"Mid Sized (200-1000)",email:0,whatsapp:1,call:0,lin:1,con:"0",status:true},
  {tag:"",tag_name:"Initial",lead_name:"Continental Engineer",url:"",contact_name:"Aaditya Pancharya",campaign_name:"Aadi Hospi",campaign_type:"Invite",now:"sent 1st msg",next:"waiting for reply",notes:"3/5",reports:'Add',lead_sample:"Green Park Hotels",segment:"Hotels",country:"India",city:"East Siang",solution:"Audit Automation for Hospitality Industry",industry:"Hospitality",bdName:"Aadi",followupDate:"25-Sep-2020",headCount:"Mid Sized (200-1000)",email:0,whatsapp:1,call:1,lin:1,con:"0",status:true},
  {tag:"",tag_name:"Initial",lead_name:"Rayon Illuminations",url:"",contact_name:"Rohit N",campaign_name:"Aadi Manuf",campaign_type:"Invite",now:"sent 1st msg",next:"waiting for reply",notes:"3/5",lead_sample:"Purchase",reports:'2',segment:"All Manufacturing",country:"India",city:"Vijaywada",solution:"Purchase Automation",industry:"Manufacturing",bdName:"Aadi",followupDate:"25-Sep-2020",headCount:"Mid Sized (200-1000)",email:0,whatsapp:1,call:0,lin:0,con:"0",status:true},
  {tag:"",tag_name:"Initial",lead_name:"Varada Instruments",url:"",contact_name:"Viraj Kulkarni",campaign_name:"Aadi Manuf",campaign_type:"Invite",now:"sent 1st msg",next:"waiting for reply",notes:"3/5",lead_sample:"Green Park Hotels",reports:'4',segment:"Hotels",country:"India",city:"Mumbai",solution:"Audit Automation for Hospitality Industry",industry:"Hospitality",bdName:"Aadi",followupDate:"25-Sep-2020",headCount:"Mid Sized (200-1000)",email:1,whatsapp:0,call:1,lin:1,con:"0",status:true},
  {tag:"",tag_name:"Initial",lead_name:"power 8",url:"",contact_name:"abishek p",campaign_name:"Harsha Oth",campaign_type:"Invite",now:"sent 1st msg",next:"waiting for reply",notes:"3/5",lead_sample:"Purchase",segment:"All Manufacturing",reports:'Add',country:"India",city:"Mumbai",solution:"Purchase Automation",industry:"Manufacturing",bdName:"Aadi",followupDate:"25-Sep-2020",headCount:"Mid Sized (200-1000)",email:1,whatsapp:0,call:1,lin:0,con:"0",status:true}
]

  constructor(public dialog: MatDialog,) { }

  ngOnInit() {

  }
fnInception() {
    this.isInception = true;
    this.isControl = false;
    this.isTests = false;
    
  }

  openGridColumnsDialog(stat) {
    let dialogRef = this.dialog.open(GridcolumnsComponent, {
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

  openAddDialog(stat) {
    let dialogRef = this.dialog.open(AddprospectsComponent, {
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

  fnTest() {
    this.isInception = false;
    this.isControl = false;
    this.isTests = true;
   
  }

  fnControl() {
    this.isInception = false;
    this.isControl = true;
    this.isTests = false;
    
  }
dragStart(event, item, sourceKanbanId) {
  this.draggedItem = item;
  this.draggedItem.kanbanId = sourceKanbanId;
}

drag(item) {
  document.getElementById(item.id).style.display = "none";
}

drop(event) {
  if (this.draggedItem && this.draggedItem.kanbanId && event.event.path[3]['id']) {
      this.moveItem(this.draggedItem, event.event.path[3]['id']);
      this.draggedItem = null;
  }
}

dragEnd(event, item) {
  document.getElementById(item.id).style.display = "table-row";
  this.draggedItem = null;
}

  moveItem(draggedItem, kanbanId) {
  for (let i = 0; i < this.localData.length; i++) {
    if (kanbanId === this.localData[i].id) {
      if (i % 2 === 0) {
        draggedItem.hex = "#FFFFFF";
      } else {
        draggedItem.hex = "#E0E0E0";
      }
      this.localData[i].data.push(draggedItem);
      this.localData[i].header = "";
      this.localData[i].header =
        this.localData[i].stage + " (" + this.localData[i].data.length + ")";
    }
    if (draggedItem.kanbanId === this.localData[i].id) {
      var temp = this.localData[i].data;
      for (let j = 0; j < temp.length; j++) {
        if (temp[j].id === draggedItem.id) {
          this.localData[i].data.splice(j, 1);
          this.localData[i].header = "";
          this.localData[i].header =
            this.localData[i].stage + " (" + this.localData[i].data.length + ")";
        }
      }
    }
  }
   }

changestatus(index){
  this.localData[index].collapsed=!this.localData[index].collapsed;
}
scrollGrid(side) {
  var ele = document.getElementById('grid-table-container');
  if (side == 'right')
  ele.scrollLeft += 210;
  else
  ele.scrollLeft -= 210;
   }

}


