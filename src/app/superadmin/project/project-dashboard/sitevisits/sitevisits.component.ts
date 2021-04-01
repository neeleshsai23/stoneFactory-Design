import { AlertService } from './../../../../shared/services/alert.service';

import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material';

import {PageEvent} from '@angular/material';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-sitevisits',
  templateUrl: './sitevisits.component.html',
  styleUrls: ['./sitevisits.component.scss']
})
export class SitevisitsComponent implements OnInit {

 
items=[
  {"category_name":"External Solutions"},
  {"category_name":"Internal Solutions"},
  {"category_name":"Paving"},
  {"category_name":"Walling"},
  {"category_name":"Root"},
]
drop(event: CdkDragDrop<string[]>) {
  moveItemInArray(this.items, event.previousIndex, event.currentIndex);
}

canCreate:any;
canUpdate:any;
canDelete:any;

canView:any;
canView1:any;
leadsRead: any;
oppRead: any;
propRead: any;
meetRead: any;

public pageSize = parseInt(localStorage.getItem('settings') ? localStorage.getItem('settings') :'5');
public currentPage = 0;
public totalSize = 0;
public steps = [];
pageEvent: PageEvent;
public page: any;

showEmpty : boolean = true;

ngOnInit() {
 

}
public popoverTitle: string = 'Confirm Delete';
public popoverMessage: string = 'Are you sure you want to delete this.?';
public popoverStatusTitle: string = 'Confirm Status Change';
public popoverStatusMessage: string = 'Are you sure you want to change status.?';
public cancelClicked: boolean = false;

constructor( public dialog: MatDialog, private alertService: AlertService) {


}






}