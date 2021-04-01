import { AddPaymentComponent } from './add-payment/add-payment.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.scss']
})
export class VisitsComponent implements OnInit, AfterViewInit {

  items = [
    {'Date_Time' : '07-Nov-2020', 'Member_Name' : 'Natural Stone Cladding' , 'Package' : 'Platinum', 'Amount' : '$800', 'Reference' : 'FOC-001'},
    
    {'Date_Time' : '16-Oct-2016', 'Member_Name' : 'MB Stone International' , 'Package' : 'Premium', 'Amount' : '$700', 'Reference' : 'LCA-123'},
    
    {'Date_Time' : '22-Jan-2018', 'Member_Name' : 'Norstone' , 'Package' : 'Gold', 'Amount' : '$600', 'Reference' : 'TRA-007'},
    
    {'Date_Time' : '05-Nov-2020', 'Member_Name' : 'Stoneleaf' , 'Package' : 'Silver', 'Amount' : '$500', 'Reference' : 'FOC-332'},
    
    {'Date_Time' : '30-Apr-2020', 'Member_Name' : 'FlexSandStein' , 'Package' : 'Bronze', 'Amount' : '$400', 'Reference' : 'LRA-878'},
    ];
    
    tables = [
      { 'Event_Name' : 'Add Staff User', 'Event_By' : 'John Doe', 'Date_Time' : 'Aug 31,2018', 'Type' : 'Insert', 'Description' : 'Staff user was added sucessfully'},
      { 'Event_Name' : 'Add Package', 'Event_By' : 'Vijay', 'Date_Time' : 'Sep 1,2020', 'Type' : 'Insert', 'Description' : 'Package user was added sucessfully'},
      { 'Event_Name' : 'Add Subscriber', 'Event_By' : 'Raj', 'Date_Time' : 'Oct 21,2013', 'Type' : 'Insert', 'Description' : 'Subscriber user was added sucessfully'},
      { 'Event_Name' : 'Add Subscriber', 'Event_By' : 'Rishi', 'Date_Time' : 'Nov 04,2015', 'Type' : 'Insert', 'Description' : 'Subscriber user was added sucessfully'},
      // tslint:disable-next-line: max-line-length
      { 'Event_Name' : 'Add Package', 'Event_By' : 'Maruthi', 'Date_Time' : 'Aug 1,2014', 'Type' : 'Insert', 'Description' : 'Package user was added sucessfully'},
      ];

      lists= [
        { "Error" : "Error: Error: Invalid login: 535 5.7.8 Error: authentication failed: authentication failure at transporter.sendMail (/home/ec2-user/venue-cloud-backend/lib/cron-jobs.js:309:29) at transporter.send.args (/home/ec2-user/venue-cloud-backend/node_modules/nodemailer/lib/mailer/index.js:224:21) at connection.login.err (/home/ec2-user/venue-cloud-backend/node_modules/nodemailer/lib/smtp-transport/index.js:281:36) at SMTPConnection._actionAUTHComplete (/home/ec2-user/venue-cloud-backend/node_modules/nodemailer/lib/smtp-connection/index.js:1320:20) at SMTPConnection._responseActions.push.str (/home/ec2-user/venue-cloud-backend/node_modules/nodemailer/lib/smtp-connection/index.js:356:26) at SMTPConnection._processResponse (/home/ec2-user/venue-cloud-backend/node_modules/nodemailer/lib/smtp-connection/index.js:747:20) at SMTPConnection._onData (/home/ec2-user/venue-cloud-backend/node_modules/nodemailer/lib/smtp-connection/index.js:543:14) at TLSSocket._socket.on.chunk (/home/ec2-user/venue-cloud-backend/node_modules/nodemailer/lib/smtp-connection/index.js:694:51) at TLSSocket.emit (events.js:198:13) at addChunk (_stream_readable.js:288:12) at readableAddChunk (_stream_readable.js:269:11) at TLSSocket.Readable.push (_stream_readable.js:224:10) at TLSWrap.onStreamRead [as onread] (internal/stream_base_commons.js:94:17)", "Date_Time" : "Dec 22,2018"},
        ]
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }
  data: any[];
  dataone: any[];
  datatwo: any[];
  public filterQuery = '';
  public filterQuery2 = '';
  public filterQuery3 = '';
  aefrom_date: number;
  aetodate: number;
  adminEventFilterForm: FormGroup;
  apfrom_date: number;
  aptodate: number;
  adminPaymenttFilterForm: FormGroup;
  aerfrom_date: number;
  aertodate: number;
  adminErrortFilterForm: FormGroup;
  filterToggle:boolean = false;
  filterToggle1:boolean = false;
  filterToggle2:boolean = false;


  ngOnInit() {
    this.createAdminEventFilterForm();
    this.createpaymentFilterForm();
    this.createAdminErrorFilterForm();
    document.getElementById('button1').className = 'active'

  }

  createAdminEventFilterForm() {
    this.adminEventFilterForm = this.fb.group({
      changeadmineventfromdate: new FormControl('', Validators.required),
      changeadmineventtodate: new FormControl('', Validators.required)
    });

  }
  createAdminErrorFilterForm() {
    this.adminErrortFilterForm = this.fb.group({
      changeadminerrorfromdate: new FormControl('', Validators.required),
      changeadminerrortodate: new FormControl('', Validators.required)
    });

  }
  openPaymentDialog(){
    let dialogRef = this.dialog.open(AddPaymentComponent, {

      height: 'auto',
      width: '800px',
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe(prospects => {
      if (prospects == 'save') {

      }
    });
  }
  createpaymentFilterForm() {
    this.adminPaymenttFilterForm = this.fb.group({
      changeadminpaymentfromdate: new FormControl('', Validators.required),
      changeadminpaymenttodate: new FormControl('', Validators.required)
    });

  }

  ngAfterViewInit(){
    document.getElementById('button2').addEventListener('click',()=>{
      document.getElementById('button3').style.removeProperty('background');
      document.getElementById('button1').style.removeProperty('background');
    })
    document.getElementById('button1').addEventListener('click',()=>{
      document.getElementById('button3').style.removeProperty('background');
      document.getElementById('button2').style.removeProperty('background');
    })
    document.getElementById('button3').addEventListener('click',()=>{
      document.getElementById('button2').style.removeProperty('background');
      document.getElementById('button1').style.removeProperty('background');
    })
  }


}