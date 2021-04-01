import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enquiryyyyy',
  templateUrl: './enquiryyyyy.component.html',
  styleUrls: ['./enquiryyyyy.component.scss']
})
export class EnquiryyyyyComponent implements OnInit {
  items = [
      { "Product" : "Engels:Carbon Stock", "Category" : "External", "Type" : "Bricks", "Filter" : "Color", "Spec" : "DarkGrey/Black","Pattern" : "Broken Bond","Angle" : "0", "Size": "215x65","Color": "Natural","Width" : "6","View" : "Villa Elevation"},
      { "Product" : "Forterra:Blue Rustic - Wirecut", "Category" : "External", "Type" : "Bricks", "Filter" : "Color", "Spec" : "DarkGrey/Black","Pattern" : "Stack","Angle" : "90", "Size": "102x65","Color": "Natural","Width" : "6","View" : "House"},
      { "Product" : "Slate:Black-Natural", "Category" : "External", "Type" : "Cladding", "Filter" : "Color", "Spec" : "DarkGrey/Black","Pattern" : "Random","Angle" : "45", "Size": "600x200","Color": "MidGrey","Width" : "8","View" : "Duplex"},
      { "Product" : "Victorian:Faneza-Nero-Matt", "Category" : "Internal", "Type" : "Floor", "Filter" : "Color", "Spec" : "DarkGrey/Black","Pattern" : "Stack","Angle" : "90", "Size": "330x330","Color": "White","Width" : "10","View" : "House"},
     
      ]

  constructor() { }

  ngOnInit() {
  }

}
