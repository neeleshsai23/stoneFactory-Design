import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patterns',
  templateUrl: './patterns.component.html',
  styleUrls: ['./patterns.component.scss']
})
export class PatternsComponent implements OnInit {

  filterToggle:boolean = false;
  selected = 1;

  image_selected:string = "../../../../../assets/product1BBs1.png";
  images_array=["../../../../../assets/product1BBs1.png","../../../../../assets/product1Stacks1.png","../../../../../assets/product1English.png","../../../../../assets/product1Flemish.png"];
  
  constructor() { }

  ngOnInit() {
  }

  openImage(index){
    this.image_selected = this.images_array[index];
  }

}
