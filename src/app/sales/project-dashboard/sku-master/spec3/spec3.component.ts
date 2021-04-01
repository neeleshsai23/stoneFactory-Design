import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfigureDialogComponent } from '../configure-dialog/configure-dialog.component';
import { UploadCsvComponent } from '../upload-csv/upload-csv.component';
import { AddSpec3DialogComponent } from './add-spec3-dialog/add-spec3-dialog.component';

@Component({
  selector: 'app-spec3',
  templateUrl: './spec3.component.html',
  styleUrls: ['./spec3.component.scss']
})
export class Spec3Component implements OnInit {

  constructor(public dialog:MatDialog) { }

  filterToggle:boolean = false;


  ngOnInit() {
  }

  items = [
    { finish:"Tumbled","SKU" : "14", "category":"External Solutions","subcategory":"Bricks","Product_Type" : "Castlestone", "Color" : "Grey", "Finish" : "Rumbled", "Size" : "1/5", "Pattern": "Add",  "Angles" : "2/5", "RawImages" : "Add", "Joint_Width" : "4/5", "Joint_Color" : "Add","Edge":"Hand cut"     },
    { finish:"Rounded","SKU" : "15", "category":"Internal Solutions","subcategory":"Blocks","Product_Type" : "Granite", "Color" : "Black", "Finish" : "Rough", "Size" : "Add", "Pattern": "2/5", "Angles" : "Add",  "RawImages" : "1/5", "Joint_Width" : "Add", "Joint_Color" : "3/5"},
    { finish:"Tumbled","SKU" : "65", "category":"Paving","subcategory":"Floor","Product_Type" : "Huntstown Brick", "Color" : "Red", "Finish" : "Rumbled", "Size" : "2/5", "Pattern": "Add", "Angles" : "3/6", "RawImages" : "Add", "Joint_Width" : "4/5", "Joint_Color" : "Add","Edge":"Hand cut"      },
    { finish:"Rounded","SKU" : "43", "category":"Walling","subcategory":"Wall","Product_Type" : "Sable", "Color" : "Silver", "Finish" : "Rough", "Size" : "Add", "Pattern" : "Add", "Angles" : "Add", "RawImages" : "3/5", "Joint_Width" : "Add", "Joint_Color" : "3/5"      ,"Edge":"HRounded"   },
    { finish:"Tumbled","SKU" : "23", "category":"External Solutions","subcategory":"Bricks","Product_Type" : "Sandstone", "Color" : "White", "Finish" : "Rumbled", "Size" : "4/5", "Pattern" : "Add", "Angles" : "2/5", "RawImages" : "Add", "Joint_Width" : "Add", "Joint_Color" : "Add" ,"Edge":"Machine Cut"   },
    ]

  openConfigureDialog(){
    this.dialog.open(ConfigureDialogComponent,{
      width:"400px",
      height:"auto"
    })
  }

  addSpec3Dialog(){
    this.dialog.open(AddSpec3DialogComponent,{
      width:'600px',
      height:'auto'
    })
  }

  openUploadCSVDialog(){
    this.dialog.open(UploadCsvComponent,{
      width:"600px",
      height:"auto"
    })
  }

}