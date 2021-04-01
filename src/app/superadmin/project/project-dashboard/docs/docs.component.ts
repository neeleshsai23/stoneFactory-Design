import { ShowSizeComponent } from './show-size/show-size.component';
import { ShowPatternComponent} from './show-pattern/show-pattern.component';
import { ShowAngleComponent} from './show-angle/show-angle.component';
import { ShowColorComponent} from './show-color/show-color.component';
import { ShowWidthComponent} from './show-width/show-width.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ShowViewsComponent } from './show-views/show-views.component';
import { AddSubCategoryDilaogComponent } from './add-sub-category-dilaog/add-sub-category-dilaog.component';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {
  items=[
    {"category":"External Solutions","product_name":"Bricks","size":"2/6","pattern":"9/15","view":"4/7","angle":"3/4","color":"2/6","width":"7/12"},
    {"category":"External Solutions","product_name":"Roman Bricks","size":"1/4","pattern":"10/15","view":"3/7","angle":"3/4","color":"1/5","width":"5/12"},
    {"category":"Paving","product_name":"Blocks","size":"3/5","pattern":"13/15","view":"5/7","angle":"3/4","color":"3/5","width":"4/12"},
    {"category":"Paving","product_name":"Cobbles","size":"2/6","pattern":"4/15","view":"2/7","angle":"2/4","color":"2/5","width":"5/12"},
    {"category":"Paving","product_name":"Flags","size":"2/5","pattern":"13/15","view":"1/7","angle":"3/4","color":"3/6","width":"8/12"},
    {"category":"Paving","product_name":"Permeable","size":"2/3","pattern":"12/15","view":"4/7","angle":"1/4","color":"3/5","width":"10/12"},
    {"category":"Walling","product_name":"Brick","size":"1/5","pattern":"3/15","view":"5/7","angle":"2/4","color":"2/4","width":"6/12"},
    {"category":"Walling","product_name":"Masonry","size":"2/4","pattern":"6/15","view":"2/7","angle":"3/4","color":"3/5","width":"9/12"},
    {"category":"Walling","product_name":"Forticrete","size":"2/5","pattern":"8/15","view":"3/7","angle":"1/4","color":"2/6","width":"7/12"},


    {"category":"External Solutions","product_name":"Cladding","size":"2/6","pattern":"9/15","view":"4/7","angle":"3/4","color":"2/6","width":"7/12"},
    {"category":"External Solutions","product_name":"Paving","size":"2/6","pattern":"9/15","view":"5/7","angle":"3/4","color":"2/6","width":"7/12"},
    {"category":"Internal Solutions","product_name":"Floor","size":"2/6","pattern":"9/15","view":"2/7","angle":"3/4","color":"2/6","width":"7/12"},
    {"category":"Internal Solutions","product_name":"Wall","size":"2/6","pattern":"9/15","view":"4/7","angle":"3/4","color":"2/6","width":"7/12"},
    {"category":"Root","product_name":"Flagstone & Pavers","size":"2/6","pattern":"9/15","view":"3/7","angle":"3/4","color":"2/6","width":"7/12"},
    {"category":"Internal Solutions","product_name":"Walling","size":"2/6","pattern":"9/15","view":"2/7","angle":"3/4","color":"2/6","width":"7/12"},
  ]

  
  filesToUpload = [];
  constructor(public dialog: MatDialog) { }
 


  ngOnInit() {
  }
  public openSizeDialog() {
    
    let dialogRef = this.dialog.open(ShowSizeComponent, {
    
    height: 'auto',
    width: '800px',
    autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(data => {
    
    });
    
    }

    public openPatternDialog() {
    
      let dialogRef = this.dialog.open(ShowPatternComponent, {
      
      height: 'auto',
      width: '800px',
      autoFocus: false,
      });
      dialogRef.afterClosed().subscribe(data => {
      
      });
      
      }  
      public openViewDialog() {
    
        let dialogRef = this.dialog.open(ShowViewsComponent, {
        
        height: 'auto',
        width: '800px',
        autoFocus: false,
        });
        dialogRef.afterClosed().subscribe(data => {
        
        });
        
        }  


      public openAngleDialog() {
    
        let dialogRef = this.dialog.open(ShowAngleComponent, {
        
        height: 'auto',
        width: '800px',
        autoFocus: false,
        });
        dialogRef.afterClosed().subscribe(data => {
        
        });
        
        }  

        public openWidthDialog() {
    
          let dialogRef = this.dialog.open(ShowWidthComponent, {
          
          height: 'auto',
          width: '500px',
          autoFocus: false,
          });
          dialogRef.afterClosed().subscribe(data => {
          
          });
          
          }

          public openColorDialog() {
    
            let dialogRef = this.dialog.open(ShowColorComponent, {
            
            height: 'auto',
            width: '500px',
            autoFocus: false,
            });
            dialogRef.afterClosed().subscribe(data => {
            
            });
            
            }

            openSubCategoryDialog(){
              this.dialog.open(AddSubCategoryDilaogComponent,{
                width:"600px",
                height:"auto"
              })
            }



}
