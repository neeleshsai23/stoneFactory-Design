import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
// import { SharedModule } from 'primeng/primeng';
import { ShowroomComponent } from './showroom.component';
import { CanvasComponent } from './canvas/canvas.component';
import { GetQuoteDialogComponent } from './canvas/get-quote-dialog/get-quote-dialog.component';
import { ModalModule } from 'ngx-bootstrap';
import { MatDialogModule } from '@angular/material';
import {SharedModule} from '../../shared/shared.module';

// export const routes = [
//   { path: '', component: ShowroomComponent },
// ];

// @NgModule({
//   declarations: [ShowroomComponent,GetQuoteDialogComponent,CanvasComponent],
//   imports: [
//     CommonModule,
//     RouterModule.forChild(routes),
//     SharedModule,
//     ConfirmationPopoverModule,
//     ReactiveFormsModule,
//     FormsModule,
//   ],
//   entryComponents: [GetQuoteDialogComponent]
// })
export class ShowroomModule { }
