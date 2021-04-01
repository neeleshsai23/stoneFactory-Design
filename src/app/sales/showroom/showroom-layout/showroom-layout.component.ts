import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-showroom-layout',
  templateUrl: './showroom-layout.component.html',
  styleUrls: ['./showroom-layout.component.scss']
})
export class ShowroomLayoutComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public project: any, public dialogRef: MatDialogRef<ShowroomLayoutComponent>) {

  }

  imgList = [
    { id: 1, url: '../../../assets/brokenbond.PNG',value:'Broken bond' },
    { id: 2, url: '../../../assets/stack.PNG',value:'Stack' },
    { id: 3, url: '../../../assets/flemish.PNG',value:'Flemish' },
    { id: 4, url: '../../../assets/english.PNG',value:'English' }
  ]


  ngOnInit() {

  }

  close(): void {
    this.dialogRef.close();
  }

  selectLayout(id){
    this.dialogRef.close(id);
  }

}
