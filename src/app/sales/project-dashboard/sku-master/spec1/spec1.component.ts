import { Component, OnInit } from '@angular/core';
import {ConfigureDialogComponent} from '../configure-dialog/configure-dialog.component';
import {MatDialog} from '@angular/material';
import {AddProductDialogComponent} from '../add-product-dialog/add-product-dialog.component';
import {UploadCsvComponent} from '../upload-csv/upload-csv.component';

@Component({
  selector: 'app-spec1',
  templateUrl: './spec1.component.html',
  styleUrls: ['./spec1.component.scss']
})
export class Spec1Component implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  filterToggle:boolean = false;

  items = [
    { "SKU" : "14", "category":"External Solutions","subcategory":"Bricks","Product_Type" : "Castlestone", "Color" : "Grey", "Finish" : "Rumbled", "Size" : "1/5", "Pattern": "Add",  "Angles" : "2/5", "RawImages" : "Add", "Joint_Width" : "4/5", "Joint_Color" : "Add","Edge":"Hand cut"     },
    { "SKU" : "15", "category":"Internal Solutions","subcategory":"Blocks","Product_Type" : "Granite", "Color" : "Black", "Finish" : "Rough", "Size" : "Add", "Pattern": "2/5", "Angles" : "Add",  "RawImages" : "1/5", "Joint_Width" : "Add", "Joint_Color" : "3/5"     ,"Edge":"Machine Cut"     },
    { "SKU" : "65", "category":"Paving","subcategory":"Floor","Product_Type" : "Huntstown Brick", "Color" : "Red", "Finish" : "Rumbled", "Size" : "2/5", "Pattern": "Add", "Angles" : "3/6", "RawImages" : "Add", "Joint_Width" : "4/5", "Joint_Color" : "Add","Edge":"Hand cut"      },
    { "SKU" : "43", "category":"Walling","subcategory":"Wall","Product_Type" : "Sable", "Color" : "Silver", "Finish" : "Rough", "Size" : "Add", "Pattern" : "Add", "Angles" : "Add", "RawImages" : "3/5", "Joint_Width" : "Add", "Joint_Color" : "3/5"      ,"Edge":"Hand cut"      },
    { "SKU" : "23", "category":"External Solutions","subcategory":"Bricks","Product_Type" : "Sandstone", "Color" : "White", "Finish" : "Rumbled", "Size" : "4/5", "Pattern" : "Add", "Angles" : "2/5", "RawImages" : "Add", "Joint_Width" : "Add", "Joint_Color" : "Add" ,"Edge":"Machine Cut"   },
    ]

    addProductDialog(){
      this.dialog.open(AddProductDialogComponent,{
        width:"600px",
        height:"auto"
      })
    }

    openUploadCSVDialog(){
      this.dialog.open(UploadCsvComponent,{
        width:"600px",
        height:"auto"
      })
    }

    openConfigureDialog(){
      this.dialog.open(ConfigureDialogComponent,{
        width:"400px",
        height:"auto"
      })
    }

}
