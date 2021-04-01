import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-permissions',
  templateUrl: './user-permissions.component.html',
  styleUrls: ['./user-permissions.component.scss']
})
export class UserPermissionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  values1:object[] = [
    {name:"Analytics"},
    {name:"Members"},
    {name:"Member Dashboard > Activity"},
    {name:"Member Dashboard > Categories"},
    {name:"Member Dashboard > Views"},
    {name:"Member Dashboard > Suv-Categories"},
    {name:"Member Dashboard > SKU Master"},
    {name:"Member Dashboard > Products"},
    {name:"Member Dashboard > Embed"},
    {name:"Packages"},
    {name:"Logs > Account Payment Log"},
    {name:"Logs > Event Log"},
    {name:"Logs > Error Log"},
    {name:"Admin > Users"},
    {name:"Admin > Settings"},
    {name:"Admin > Lookup Options"},
    {name:"Admin > Master Data"},
    {name:"Admin > View Master"},
    {name:"Admin > Pattern Master"},
    {name:"Admin > Language Master"}
  ]

  values2:object[] = [
    {name:"Analytics"},
    {name:"Members"},
    {name:"Setup > Activity"},
    {name:"Setup > Categories"},
    {name:"Setup > Views"},
    {name:"Setup > Suv-Categories"},
    {name:"Setup > SKU Master"},
    {name:"Setup > Products"},
    {name:"Setup > Embed"},
    {name:"My Account > Subscription"},
    {name:"My Account > Preferences"},
    {name:"Enquiries"},
    {name:"Showroom"}
   
  ]
}
