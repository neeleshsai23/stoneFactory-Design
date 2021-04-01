import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enquiryyy',
  templateUrl: './enquiryyy.component.html',
  styleUrls: ['./enquiryyy.component.scss']
})
export class EnquiryyyComponent implements OnInit {
  items = [
  // tslint:disable-next-line: max-line-length
    { "Product" : "Engels:Carbon Stock", "Category" : "External", "Type" : "Bricks", "Filter" : "Color", "Spec" : "DarkGrey/Black","Pattern" : "Broken Bond","Angle" : "0", "Size": "215x65","Color": "Natural","Width" : "6","View" : "Villa Elevation"},
    { "Product" : "Forterra:Blue Rustic Wirecut", "Category" : "External", "Type" : "Bricks", "Filter" : "Color", "Spec" : "DarkGrey/Black","Pattern" : "Stack","Angle" : "90", "Size": "102x65","Color": "Natural","Width" : "6","View" : "House"},
   
    ]
  constructor() { }

  ngOnInit() {
  }

}
