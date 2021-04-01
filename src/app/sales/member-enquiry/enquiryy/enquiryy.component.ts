import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enquiryy',
  templateUrl: './enquiryy.component.html',
  styleUrls: ['./enquiryy.component.scss']
})
export class EnquiryyComponent implements OnInit {
  items = [
  // tslint:disable-next-line: max-line-length
    { 'Product' : 'Engels:Carbon Stock', 'Category' : 'External', 'Type' : 'Bricks', 'Filter' : 'Color', 'Spec' : 'DarkGrey/Black','Pattern' : 'Broken Bond','Angle' : '0', 'Size': '215x65','Color': 'Natural','Width' : '6','View' : 'Villa Elevation'},
   
    ]
  constructor() { }

  ngOnInit() {
  }

}
