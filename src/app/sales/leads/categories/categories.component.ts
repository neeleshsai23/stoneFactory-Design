import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  items=[
    {"category_name":"External Solutions"},
    {"category_name":"Internal Solutions"},
    {"category_name":"Paving"},
    {"category_name":"Walling"},
    {"category_name":"Route"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
