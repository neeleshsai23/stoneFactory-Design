import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {Router} from '@angular/router';


@Component({
  selector: 'app-shw-pattern',
  templateUrl: './shw-pattern.component.html',
  styleUrls: ['./shw-pattern.component.scss']
})
export class ShwPatternComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ShwPatternComponent>,public route:Router) { }

  ngOnInit() {
  }

  close(): void{
    this.dialogRef.close();
  }

  openPatternDashboard(){
    this.route.navigate([]).then(result => {  window.open('/#/superadmin/pattern-dashboard', '_blank'); });

  }

}
