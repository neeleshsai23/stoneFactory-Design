import { AddfinishComponent } from './addfinish/addfinish.component';
import { Addsize1Component } from './addsize1/addsize1.component';
import { Addangle1Component } from './addangle1/addangle1.component';
import { Addpattern1Component } from './addpattern1/addpattern1.component';
import { Addwidth1Component } from './addwidth1/addwidth1.component';
import { Addcolor1Component } from './addcolor1/addcolor1.component';
import { AddinventoryComponent } from './addinventory/addinventory.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import {ShowPatternComponent} from '../docs/show-pattern/show-pattern.component';
import {AutocropDialogComponent} from './autocrop-dialog/autocrop-dialog.component';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  filterToggle:boolean = false;

  items1=[
    {"basics":"Forterra ","patterns":"Broken Bond ","angle":"90 deg ","sizes":" 215x65","joint_color":" None","joint_width":"2 "},
    {"basics":"Engels ","patterns":" Stack","angle":"80 deg","sizes":"102x65 ","joint_color":"Dark Grey ","joint_width":"4 "},
    {"basics":"Traviso ","patterns":"Flemish ","angle":"0 deg ","sizes":"200x60 ","joint_color":"Mild Grey ","joint_width":" 6"},
    {"basics":"vandersanden ","patterns":"English ","angle":"90 deg ","sizes":"150x65 ","joint_color":"Buff ","joint_width":" 8"},
    {"basics":"Vande Moortel ","patterns":"French","angle":"45 deg ","sizes":"215x65 ","joint_color":" Ivory","joint_width":" 10"},
    ]

    items = [
      { "product":"SF-2345","SKU" : "SF-2345-1","src":"../../../../../assets/img1.png" ,"spec1":"-","spec2":"-","spec3":"-","spec4":"-","category":"External Solutions","subcategory":"Bricks","Product_Type" : "Castlestone", "Color" : "Grey", "Finish" : "Tumbled", "Size" : "1/5", "Pattern": "Add",  "Angles" : "2/4", "RawImages" : "Add", "Joint_Width" : "4/5", "Joint_Color" : "Add","Edge":"Hand cut"     },
      { "product":"SF-1234","SKU" : "SF-1234-1","src":"../../../../../assets/img1.png" ,"spec1":"-","spec2":"-","spec3":"-","spec4":"-","category":"Internal Solutions","subcategory":"Blocks","Product_Type" : "Granite", "Color" : "Black", "Finish" : "Rough", "Size" : "Add", "Pattern": "2/5", "Angles" : "Add",  "RawImages" : "1/5", "Joint_Width" : "Add", "Joint_Color" : "3/5"     ,"Edge":"Machine Cut"     },
      { "product":"SF-7658","SKU" : "SF-7658-1","src":"../../../../../assets/img1.png" ,"spec1":"-","spec2":"-","spec3":"-","spec4":"-","category":"Paving","subcategory":"Floor","Product_Type" : "Huntstown Brick", "Color" : "Red", "Finish" : "Tumbled", "Size" : "2/5", "Pattern": "Add", "Angles" : "3/4", "RawImages" : "Add", "Joint_Width" : "4/5", "Joint_Color" : "Add","Edge":"Hand cut"      },
      { "product":"SF-8256","SKU" : "SF-8256-1","src":"../../../../../assets/img1.png" ,"spec1":"-","spec2":"-","spec3":"-","spec4":"-","category":"Walling","subcategory":"Wall","Product_Type" : "Sable", "Color" : "Silver", "Finish" : "Rough", "Size" : "Add", "Pattern" : "Add", "Angles" : "Add", "RawImages" : "3/5", "Joint_Width" : "Add", "Joint_Color" : "3/5"      ,"Edge":"Hand cut"      },
      { "product":"SF-4598","SKU" : "SF-4598-1","src":"../../../../../assets/img1.png" ,"spec1":"-","spec2":"-","spec3":"-","spec4":"-","category":"External Solutions","subcategory":"Bricks","Product_Type" : "Sandstone", "Color" : "White", "Finish" : "Tumbled", "Size" : "4/5", "Pattern" : "Add", "Angles" : "2/4", "RawImages" : "Add", "Joint_Width" : "Add", "Joint_Color" : "Add" ,"Edge":"Machine Cut"   },
      ]

    
  coreModules = [{dno:"D1703",dname:"1500 sft"},{dno:"D1704",dname:"1800sft"},{dno:"D1209",dname:"909 sft"},{dno:"D324",dname:"2800 sft"},{dno:"D3256",dname:"3000 sft"},{dno:"D3245",dname:"3245 sft"}
  ,{dno:"D2312",dname:"3200 sft"}]

  
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }



  public openIncidentDialog(){
    let dialogRef = this.dialog.open(AddinventoryComponent, {
      
      height: 'auto',
      width: '730px',
      autoFocus: false,
    });
    
    dialogRef.afterClosed().subscribe(data => {
    
    });
  }

  public openPatternDialog(){
    let dialogRef = this.dialog.open(ShowPatternComponent, {
      
      height: 'auto',
      width: '800px',
      autoFocus: false,
    });
    
    dialogRef.afterClosed().subscribe(data => {
    
    });
  }


    
    public openColorDialog() {
    
    let dialogRef = this.dialog.open(Addcolor1Component, {
    
    height: 'auto',
    width: '700px',
    autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(data => {
    
    });
    
    }

    public openfinishDialog() {
    
      let dialogRef = this.dialog.open(AddfinishComponent, {
      
      height: 'auto',
      width: '700px',
      autoFocus: false,
      });
      dialogRef.afterClosed().subscribe(data => {
      
      });
      
      }
    
    public openWidthDialog() {
    
    let dialogRef = this.dialog.open(Addwidth1Component, {
    
    height: 'auto',
    width: '700px',
    autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(data => {
    
    });
    
    }
    
    
    public openDialog() {
    
    let dialogRef = this.dialog.open(Addpattern1Component, {
    
    height: 'auto',
    width: '700px',
    autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(data => {
    
    });
    
    }
    public openAngleDialog() {
    
    let dialogRef = this.dialog.open(Addangle1Component, {
    
    height: 'auto',
    width: '700px',
    autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(data => {
    
    });
    
    }
    public openSizeDialog() {
    
    let dialogRef = this.dialog.open(Addsize1Component, {
    
    height: 'auto',
    width: '500px',
    autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(data => {
    
    });
    
    }

    openAutoCropDialog(){
      this.dialog.open(AutocropDialogComponent,{
        width:"400px",
        height:"auto"
      })
    }



}

