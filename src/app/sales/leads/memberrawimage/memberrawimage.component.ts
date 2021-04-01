import { EditNameDialogComponent } from './edit-name-dialog/edit-name-dialog.component';
import { MemrawdialogComponent } from './memrawdialog/memrawdialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-memberrawimage',
  templateUrl: './memberrawimage.component.html',
  styleUrls: ['./memberrawimage.component.scss']
})
export class MemberrawimageComponent implements OnInit {

  
  items = [
    {"raw_image":"assets/rawstone2.png","pattern":"Engels Carbon-Stock","angle":"90 deg","size":"215x65","joint_color":"red","grout_width":"50cm"},
    {"raw_image":"assets/rawstone4.png","pattern":"Forterra Blue Rustic","angle":"80 deg","size":"102x65","joint_color":"orange","grout_width":"60cm"},
    {"raw_image":"assets/rawstone11.png","pattern":"Vande Moortel Crea 7021","angle":"70 deg","size":"215x73","joint_color":"black","grout_width":"30cm"},
    {"raw_image":"assets/rawstone22.png","pattern":"Vandersanden Lithium","angle":"60 deg","size":"189x48","joint_color":"blue","grout_width":"70cm"},
    // tslint:disable-next-line: whitespace
    {"raw_image":"assets/rawstone55.png","pattern":"Wienerberger Wirecut","angle":"50 deg","size":"102x73","joint_color":"green","grout_width":"40cm"},
  ]


 constructor(public dialog: MatDialog) { }
 
   ngOnInit() {
   }
 
 
 
   public openAddImageDialog(){
     let dialogRef = this.dialog.open(MemrawdialogComponent, {
       
       height: 'auto',
       width: '730px',
       autoFocus: false,
     });
     
     dialogRef.afterClosed().subscribe(data => {
     
     });
   }

   public openEditNameDialog(){
    let dialogRef = this.dialog.open(EditNameDialogComponent, {
      
      height: 'auto',
      width: '730px',
      autoFocus: false,
    });
    
    dialogRef.afterClosed().subscribe(data => {
    
    });
  }
  }