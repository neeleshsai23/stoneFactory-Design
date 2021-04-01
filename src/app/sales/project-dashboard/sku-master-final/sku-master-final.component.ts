import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ShowPatternComponent } from '../docs/show-pattern/show-pattern.component';
import { Addangle1Component } from '../schedule/addangle1/addangle1.component';
import { Addcolor1Component } from '../schedule/addcolor1/addcolor1.component';
import { AddfinishComponent } from '../schedule/addfinish/addfinish.component';
import { Addpattern1Component } from '../schedule/addpattern1/addpattern1.component';
import { Addsize1Component } from '../schedule/addsize1/addsize1.component';
import { Addwidth1Component } from '../schedule/addwidth1/addwidth1.component';
import { AutocropDialogComponent } from '../schedule/autocrop-dialog/autocrop-dialog.component';

import { AddSkuDialogComponent } from './add-sku-dialog/add-sku-dialog.component';

@Component({
  selector: 'app-sku-master-final',
  templateUrl: './sku-master-final.component.html',
  styleUrls: ['./sku-master-final.component.scss']
})
export class SkuMasterFinalComponent implements OnInit {

  filterToggle: boolean = false;

  items = [
    { "product":"SF-2345","SKU" : "SF-2345-1","src":"../../../../../assets/img1.png" ,"spec1":"-","spec2":"-","spec3":"-","spec4":"-","category":"External Solutions","subcategory":"Bricks","Product_Type" : "Castlestone", "Color" : "Grey", "Finish" : "Tumbled", "Size" : "1/5", "Pattern": "Add",  "Angles" : "2/4", "RawImages" : "Add", "Joint_Width" : "4/5", "Joint_Color" : "Add","Edge":"Hand cut"     },
    { "product":"SF-1234","SKU" : "SF-1234-1","src":"../../../../../assets/img1.png" ,"spec1":"-","spec2":"-","spec3":"-","spec4":"-","category":"Internal Solutions","subcategory":"Blocks","Product_Type" : "Granite", "Color" : "Black", "Finish" : "Rough", "Size" : "Add", "Pattern": "2/5", "Angles" : "Add",  "RawImages" : "1/5", "Joint_Width" : "Add", "Joint_Color" : "3/5"     ,"Edge":"Machine Cut"     },
    { "product":"SF-7658","SKU" : "SF-7658-1","src":"../../../../../assets/img1.png" ,"spec1":"-","spec2":"-","spec3":"-","spec4":"-","category":"Paving","subcategory":"Floor","Product_Type" : "Huntstown Brick", "Color" : "Red", "Finish" : "Tumbled", "Size" : "2/5", "Pattern": "Add", "Angles" : "3/4", "RawImages" : "Add", "Joint_Width" : "4/5", "Joint_Color" : "Add","Edge":"Hand cut"      },
    { "product":"SF-8256","SKU" : "SF-8256-1","src":"../../../../../assets/img1.png" ,"spec1":"-","spec2":"-","spec3":"-","spec4":"-","category":"Walling","subcategory":"Wall","Product_Type" : "Sable", "Color" : "Silver", "Finish" : "Rough", "Size" : "Add", "Pattern" : "Add", "Angles" : "Add", "RawImages" : "3/5", "Joint_Width" : "Add", "Joint_Color" : "3/5"      ,"Edge":"Hand cut"      },
    { "product":"SF-4598","SKU" : "SF-4598-1","src":"../../../../../assets/img1.png" ,"spec1":"-","spec2":"-","spec3":"-","spec4":"-","category":"External Solutions","subcategory":"Bricks","Product_Type" : "Sandstone", "Color" : "White", "Finish" : "Tumbled", "Size" : "4/5", "Pattern" : "Add", "Angles" : "2/4", "RawImages" : "Add", "Joint_Width" : "Add", "Joint_Color" : "Add" ,"Edge":"Machine Cut"   },
    ]

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openSKUDialog(){
    this.dialog.open(AddSkuDialogComponent,{
      width:"600px",
      height:"auto"
    })
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
