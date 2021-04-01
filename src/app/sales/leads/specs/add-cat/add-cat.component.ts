import { AlertService } from './../../../../shared/services/alert.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.scss']
})
export class AddCatComponent implements OnInit {
  
  clicked=false;
  constructor(public dialogRef: MatDialogRef<AddCatComponent>) { }

  ngOnInit() {
  }
  @ViewChild('options') options: ElementRef;

  clickedBox(){
    if(this.options.nativeElement.checked == true){
      this.clicked = true;
    }else{
      this.clicked = false;
    }
    
  }
  close(): void {
    this.dialogRef.close();
  }

}
