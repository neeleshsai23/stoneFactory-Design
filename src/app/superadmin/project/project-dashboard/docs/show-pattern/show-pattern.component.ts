import { Component, OnInit,AfterViewInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-show-pattern',
  templateUrl: './show-pattern.component.html',
  styleUrls: ['./show-pattern.component.scss']
})
export class ShowPatternComponent implements OnInit, AfterViewInit {

  selected: string[] = [];
  showSizes:boolean = false;

  constructor( public dialogRef: MatDialogRef<ShowPatternComponent>,public route:Router) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    
  }

  close(): void{
    this.dialogRef.close();
  }

  openPatternDashboard(){
    this.route.navigate([]).then(result => {  window.open('/#/superadmin/pattern-dashboard', '_blank'); });

  }

  selectPattern(event){
    if(this.selected.includes(event.target.id)){
      document.getElementById(event.target.id).style.removeProperty('background')
      this.selected = this.selected.filter(id=>id != event.target.id);
      console.log(this.selected)
    }else{
      this.selected.push(event.target.id);
      console.log(this.selected)
      document.getElementById(event.target.id).style.background = 'rgba(150,150,150,1)'

    }
  }


}
