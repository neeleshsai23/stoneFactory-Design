import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import {MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-show-angle',
  templateUrl: './show-angle.component.html',
  styleUrls: ['./show-angle.component.scss']
})
export class ShowAngleComponent implements OnInit, AfterViewInit {
  clicked:string[] = [];

  constructor( public dialogRef: MatDialogRef<ShowAngleComponent>) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    
  }

  addSize(event){
    if(this.clicked.includes(event.target.id)){
      document.getElementById(event.target.id).style.removeProperty('background')
      this.clicked = this.clicked.filter(id=>id != event.target.id);
      console.log(this.clicked)
    }else{
      this.clicked.push(event.target.id);
      console.log(this.clicked)
      document.getElementById(event.target.id).style.background = 'rgba(150,150,150,1)'

    }
  }

  close(): void{
    this.dialogRef.close();
  }

}
