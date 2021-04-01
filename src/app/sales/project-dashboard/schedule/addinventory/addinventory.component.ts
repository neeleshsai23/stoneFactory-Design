import { MatDialogRef } from '@angular/material';
import { Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-addinventory',
  templateUrl: './addinventory.component.html',
  styleUrls: ['./addinventory.component.scss']
})
export class AddinventoryComponent implements OnInit {
  clicked=false;

  constructor(public dialogRef: MatDialogRef<AddinventoryComponent>) { }

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
