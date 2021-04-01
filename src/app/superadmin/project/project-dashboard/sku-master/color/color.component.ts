import { Component, OnInit } from '@angular/core';
import {ConfigureDialogComponent} from '../configure-dialog/configure-dialog.component';
import {MatDialog} from '@angular/material';
import {AddColorComponent} from '../add-color/add-color.component';
import { UploadCsvComponent } from '../upload-csv/upload-csv.component';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  filterToggle:boolean = false;


  ngOnInit() {
  }

  items = [
    {color:"Gray","SKU" : "14", "category":"External Solutions","subcategory":"Bricks","Product_Type" : "Castlestone", "Color" : "Grey", "Finish" : "Rumbled", "Size" : "1/5", "Pattern": "Add",  "Angles" : "2/5", "RawImages" : "Add", "Joint_Width" : "4/5", "Joint_Color" : "Add","Edge":"Hand cut"     },
    {color:"Black","SKU" : "15", "category":"Internal Solutions","subcategory":"Blocks","Product_Type" : "Granite", "Color" : "Black", "Finish" : "Rough", "Size" : "Add", "Pattern": "2/5", "Angles" : "Add",  "RawImages" : "1/5", "Joint_Width" : "Add", "Joint_Color" : "3/5"     ,"Edge":"Machine Cut"     },
    {color:"Red","SKU" : "65", "category":"Paving","subcategory":"Floor","Product_Type" : "Huntstown Brick", "Color" : "Red", "Finish" : "Rumbled", "Size" : "2/5", "Pattern": "Add", "Angles" : "3/6", "RawImages" : "Add", "Joint_Width" : "4/5", "Joint_Color" : "Add","Edge":"Hand cut"      },
    {color:"Silver","SKU" : "43", "category":"Walling","subcategory":"Wall","Product_Type" : "Sable", "Color" : "Silver", "Finish" : "Rough", "Size" : "Add", "Pattern" : "Add", "Angles" : "Add", "RawImages" : "3/5", "Joint_Width" : "Add", "Joint_Color" : "3/5"      ,"Edge":"Hand cut"      },
    {color:"White","SKU" : "23", "category":"External Solutions","subcategory":"Bricks","Product_Type" : "Sandstone", "Color" : "White", "Finish" : "Rumbled", "Size" : "4/5", "Pattern" : "Add", "Angles" : "2/5", "RawImages" : "Add", "Joint_Width" : "Add", "Joint_Color" : "Add" ,"Edge":"Machine Cut"   },
    ]

  openConfigureDialog(){
    this.dialog.open(ConfigureDialogComponent,{
      width:"400px",
      height:"auto"
    })
  }

  addColorDialog(){
    this.dialog.open(AddColorComponent,{
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
