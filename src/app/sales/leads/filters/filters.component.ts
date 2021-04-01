import { ShwColorComponent } from './shw-color/shw-color.component';
import { ShwWidthComponent } from './shw-width/shw-width.component';
import { ShwAngleComponent } from './shw-angle/shw-angle.component';
import { ShwPatternComponent } from './shw-pattern/shw-pattern.component';
import { ShwSizeComponent } from './shw-size/shw-size.component';
import { MatDialog } from '@angular/material';
import { AddFilterComponent } from './add-filter/add-filter.component';
import { Component, OnInit } from '@angular/core';
MatDialog
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  items=[
    {"category":"External Solutions","product_name":"Bricks","size":"2/5","pattern":"3/5","angle":"3/5","color":"2/5","width":"3/5"},
    {"category":"External Solutions","product_name":"Roman Bricks","size":"1/5","pattern":"3/5","angle":"3/5","color":"1/5","width":"2/5"},
    {"category":"Paving","product_name":"Blocks","size":"3/5","pattern":"3/5","angle":"3/5","color":"2/5","width":"3/5"},
    {"category":"Paving","product_name":"Cobbles","size":"2/5","pattern":"2/5","angle":"2/5","color":"2/5","width":"3/5"},
    {"category":"Paving","product_name":"Flags","size":"2/5","pattern":"3/5","angle":"3/5","color":"3/5","width":"2/5"},
    {"category":"Paving","product_name":"Permeable","size":"2/5","pattern":"2/5","angle":"1/5","color":"2/5","width":"3/5"},
    {"category":"Walling","product_name":"Brick","size":"1/5","pattern":"3/5","angle":"2/5","color":"2/5","width":"3/5"},
    {"category":"Walling","product_name":"Masonry","size":"2/5","pattern":"1/5","angle":"3/5","color":"3/5","width":"2/5"},
    {"category":"Walling","product_name":"Forticrete","size":"2/5","pattern":"3/5","angle":"1/5","color":"2/5","width":"3/5"},


    {"category":"External Solutions","product_name":"Cladding","size":"2/5","pattern":"3/5","angle":"3/5","color":"1/5","width":"3/5"},
    {"category":"External Solutions","product_name":"Paving","size":"3/5","pattern":"1/5","angle":"2/5","color":"2/5","width":"2/5"},
    {"category":"Internal Solutions","product_name":"Floor","size":"2/5","pattern":"3/5","angle":"3/5","color":"3/5","width":"3/5"},
    {"category":"Internal Solutions","product_name":"Wall","size":"3/5","pattern":"2/5","angle":"1/5","color":"2/5","width":"2/5"},
    {"category":"Route","product_name":"Flagstone & Pavers","size":"2/5","pattern":"3/5","angle":"3/5","color":"5/5","width":"3/5"},
    {"category":"Internal Solutions","product_name":"Walling","size":"3/5","pattern":"3/5","angle":"2/5","color":"2/5","width":"2/5"},
  ]

  constructor(public dialog: MatDialog) { }




  ngOnInit() {
  }
  public openSizeDialog() {
    
    let dialogRef = this.dialog.open(ShwSizeComponent, {
    
    height: 'auto',
    width: '800px',
    autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(data => {
    
    });
    
    }

    public openPatternDialog() {
    
      let dialogRef = this.dialog.open(ShwPatternComponent, {
      
      height: 'auto',
      width: '1000px',
      autoFocus: false,
      });
      dialogRef.afterClosed().subscribe(data => {
      
      });
      
      }  


      public openAngleDialog() {
    
        let dialogRef = this.dialog.open(ShwAngleComponent, {
        
        height: 'auto',
        width: '800px',
        autoFocus: false,
        });
        dialogRef.afterClosed().subscribe(data => {
        
        });
        
        }  

        public openWidthDialog() {
    
          let dialogRef = this.dialog.open(ShwWidthComponent, {
          
          height: 'auto',
          width: '500px',
          autoFocus: false,
          });
          dialogRef.afterClosed().subscribe(data => {
          
          });
          
          }

          public openColorDialog() {
    
            let dialogRef = this.dialog.open(ShwColorComponent, {
            
            height: 'auto',
            width: '500px',
            autoFocus: false,
            });
            dialogRef.afterClosed().subscribe(data => {
            
            });
            
            }



}
