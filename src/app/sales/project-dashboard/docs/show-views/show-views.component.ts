import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-show-views',
  templateUrl: './show-views.component.html',
  styleUrls: ['./show-views.component.scss']
})
export class ShowViewsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ShowViewsComponent>) { }

  clicked = [];

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

  addSize(event){
    if(this.clicked.includes(event.target.id)){
      document.getElementById(event.target.id+"div").style.removeProperty('background')
      this.clicked = this.clicked.filter(id=>id != event.target.id);
      console.log(this.clicked)
    }else{
      this.clicked.push(event.target.id);
      console.log(this.clicked)
      document.getElementById(event.target.id+"div").style.background = 'rgba(150,150,150,1)'

    }
  }

}
