import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-drawings',
  templateUrl: './drawings.component.html',
  styleUrls: ['./drawings.component.scss']
})
export class DrawingsComponent implements OnInit {

  coreModules = [{dno:"Drawing No: D-01",dname:"Drawing Name: Beam Layout"},{dno:"Drawing No: D-02",dname:"Drawing Name: Structure"},{dno:"Drawing No: D-03",dname:"Drawing Name: Beam layout"},{dno:"Drawing No: D-04",dname:"Drawing Name: Fire Fighting"},{dno:"Drawing No: D-05",dname:"Drawing Name: Plumbing"},{dno:"Drawing No: D-06",dname:"Drawing Name: Electrical"}
  ,{dno:"Drawing No: D-07",dname:"Drawing Name: Beam Layout"}]
  
  
  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }

  public openCoreDialog(lead) {
   
}

}
