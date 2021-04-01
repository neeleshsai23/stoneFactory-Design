import { AddMemberPackageComponent } from './add-member-package/add-member-package.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import {PatternsDialogComponent} from './patterns-dialog/patterns-dialog.component';
import {ViewsDialogComponent} from './views-dialog/views-dialog.component';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  filterToggle:boolean;

  items=[
    {patterns:"10/15",views:"3/7","package_name":"Platinum","max_products":"15","vendors":"2","max_users":"200","effective_date":"12/10/2019","Expiry_date":"12/12/2020","duration":"1 Month","price":"$900"},
    {patterns:"7/15",views:"3/7","package_name":"Premium","max_products":"8","vendors":"2","max_users":"150","effective_date":"21/1/2019","Expiry_date":"2/10/2020","duration":"6 Months","price":"$800"},
    {patterns:"6/15",views:"2/7","package_name":"Gold","max_products":"7","vendors":"2","max_users":"100","effective_date":"1/3/2019","Expiry_date":"12/12/2020","duration":"1 Year","price":"$700"},
    {patterns:"3/15",views:"3/7","package_name":"Silver","max_products":"5","vendors":"2","max_users":"50","effective_date":"13/8/2019","Expiry_date":"16/8/2020","duration":"2 Months","price":"$600"},
    {patterns:"7/15",views:"4/7","package_name":"Bronze","max_products":"8","vendors":"2","max_users":"25","effective_date":"18/10/2019","Expiry_date":"22/12/2020","duration":"3 Months","price":"$500"},
    ]
    
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }



  public openIncidentDialog(){
    let dialogRef = this.dialog.open(AddMemberPackageComponent, {
      
      height: 'auto',
      width: '730px',
      autoFocus: false,
    });
    
    dialogRef.afterClosed().subscribe(data => {
    
    });
  }

  openPatternsDialog(){
    this.dialog.open(PatternsDialogComponent,{
      width:"950px",
      height:"auto"
    })
  }

  openViewsDialog(){
    this.dialog.open(ViewsDialogComponent,{
      width:"800px",
      height:"auto"
    })
  }



}