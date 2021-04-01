import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {MatDialog} from '@angular/material';

import {AddSizesDialogComponent} from '../../add-sizes-dialog/add-sizes-dialog.component';
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  filterToggle:boolean = false;
  selected = 1;

  image_selected:string = "assets/product1BBs1.png";
  images_array=["assets/product1BBs1.png","assets/product1Stacks1.png","assets/product1English.png","assets/product1Flemish.png","assets/random4size.png","assets/coursed.png","assets/randomCoursed.png","assets/herringbone.png"];
  
  constructor(private route: Router,public dialog:MatDialog) { }

  ngOnInit() {
  }

  openImage(index){
    this.image_selected = this.images_array[index];
  }

  openPatternDashboard(){
    this.route.navigate([]).then(result => {  window.open('/#/superadmin/pattern-dashboard', '_blank'); });
  }

  openAddSizesDialog(){
    this.dialog.open(AddSizesDialogComponent,{
      width:"400px",
      height:"auto"
    })
  }
}
