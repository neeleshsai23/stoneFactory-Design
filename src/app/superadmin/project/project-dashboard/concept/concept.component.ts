import { Component, OnInit } from '@angular/core';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-concept',
  templateUrl: './concept.component.html',
  styleUrls: ['./concept.component.scss']
})
export class ConceptComponent implements OnInit {
  items=[
    {"category_name":"External Solutions","product_name":"Bricks" ,"filter":"product"             },
    {"category_name":"External Solutions","product_name":"Roman Bricks","filter":"color"       },
    {"category_name":"External Solutions","product_name":"Cladding","filter":"finish"         },
    {"category_name":"External Solutions","product_name":"Paving","filter":"Size"        },
    {"category_name":"Internal Solutions","product_name":"Floor","filter":"color"         },
    {"category_name":"Internal Solutions","product_name":"Wall","filter":"product"          },
  ]

  
  constructor(public dialog: MatDialog) { }
  filesToUpload = [];
  concept = [{cat_name :"Field Test",item:"Atterberg limits" ,quantity:"5",Unit:10 ,Rate :"10,000",total:"12,347"},
  {cat_name :"Laboratory Test",item:"Compaction Factor" ,quantity:"2",Unit:4 ,Rate :"5,000",total:"6,448"}]
  isInception: boolean = true;
  isControl: boolean = false;
  isTests: boolean = false;
  isSchedule: boolean = false;

  ngOnInit() {

  }

  handleFileSelect(event) {
    this.filesToUpload.push(event.target.files[0])
  }

fnInception() {
    this.isInception = true;
    this.isControl = false;
    this.isTests = false;
    this.isSchedule = false;
  }

  fnTest() {
    this.isInception = false;
    this.isControl = false;
    this.isTests = true;
    this.isSchedule = false;
  }

  fnControl() {
    this.isInception = false;
    this.isControl = true;
    this.isTests = false;
    this.isSchedule = false;

  }
  
  fnSchedule(){
    this.isInception = false;
    this.isControl = false;
    this.isTests = false;
    this.isSchedule = true;
  }

  openConceptDialog(item){
  
  }
  openDeleteDialog(assets) {
    let dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      data: assets,
      height: 'auto',
      width: 'auto',
      autoFocus: false
    });
    
    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }

}
