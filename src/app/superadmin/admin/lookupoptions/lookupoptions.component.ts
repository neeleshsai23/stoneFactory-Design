import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddlookupDialogueComponent } from './addlookup-dialogue/addlookup-dialogue.component';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';

@Component({
  selector: 'app-lookupoptions',
  templateUrl: './lookupoptions.component.html',
  styleUrls: ['./lookupoptions.component.scss']
})
export class LookupoptionsComponent implements OnInit {

  constructor(public dialog: MatDialog, private alertService: AlertService) { }
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public cancelClicked: boolean = false;

  deleteUser(elementValues){
    console.log(elementValues);
    }

    name:any;

  ngOnInit() {
  }
 
  tableList: Object = [
    { intLookupId: 2,code: 'User Type', options:'Admin'},
    { intLookupId: 3,code: 'User Type', options:'Member'}
  ];

  public openUserDialog(id) {
    let dialogRef = this.dialog.open(AddlookupDialogueComponent, {
        data: id,
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  
  openDeleteDialog(assets) {
    let dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      data: assets,
      height: 'auto',
      width: 'auto',
      autoFocus: false
    });
    
    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }

  deleteLookup() {
    this.alertService.createAlert('Successfully deleted.', 1);
  }

}
