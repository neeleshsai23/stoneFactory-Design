import { MatDialogRef } from '@angular/material';
import { AlertService } from './../../../shared/services/alert.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import * as moment from 'moment';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.scss']
})
export class AddPaymentComponent implements OnInit {

  @ViewChild('addfileTag') public addfileTag: any;
  startingDate: any;
  endingDate: any;
  packageValue: any;
  constructor(private alertService: AlertService, private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute,public dialogRef: MatDialogRef<AddPaymentComponent> ) { }
  showPayDiv: boolean = false;
  packval = 1;
  maxVenues: number = 1;
  showStartDate = true;
  subscriber_id: any;
  subscribers_packages = [];

  manageSubForm: FormGroup;
  show_paytm_toggle = true;
  cur_date = new Date();
  filesToUpload: Array<File> = [];
  subscribers_data = [];
  get_actual_packages = [];
  ngOnInit() {
    this.startingDate = new Date(moment('01-07-2018').format("DD-MMM-YYYY"));
    this.endingDate = new Date(moment('10-07-2018').format("DD-MMM-YYYY"));
    this.createManageSubForm();
   
  }


  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    if (this.filesToUpload.length !== 0) {
      let valToLower = this.filesToUpload[0].name.toLowerCase();
      let regex = new RegExp("(.*?)\.(jpg|png|jpeg)$"); //add or remove required extensions here
      let regexTest = regex.test(valToLower);
      if (!regexTest)
        this.alertService.createAlert('Unsupported file. Please Select Image file.', 0);
    }
  }


  createManageSubForm() {
    this.manageSubForm = this.fb.group({
      managesubsubscriberid: new FormControl('', [Validators.required]),
      managesubpropertyid: new FormControl(''),
      managesubpropertyname: new FormControl(''),
      managesubpackageid: new FormControl('', [Validators.required]),
      managesubpackageprice: new FormControl('', [Validators.maxLength(6), Validators.required]),
      managesubpackagenumven: new FormControl('', Validators.required),
      managesubpackagestartdate: new FormControl('', Validators.required),
      managesubpackageenddate: new FormControl('', Validators.required),
      managesubreference: new FormControl('', Validators.required),
      managesubremarks: new FormControl('', Validators.required),
      managesubcheck: new FormControl('')
    });
    this.manageSubForm.controls['managesubpackagestartdate'].setValue(new Date());
    this.manageSubForm.controls['managesubcheck'].setValue(true);
  }
 
 
  loadPermissionsFilter(e) {
    this.subscribers_packages = [];
    for (let i = 0; i < this.get_actual_packages.length; i++) {
      if (this.get_actual_packages[i].is_private != 0) {
        if (e)
          this.subscribers_packages.push(this.get_actual_packages[i]);
      } else {
        this.subscribers_packages.push(this.get_actual_packages[i]);
      }
    }

  }
  packageChange(e) {
    let selVal = e.target.value;
    if (selVal != '') {
      let i = this.subscribers_packages.findIndex(x => x.package_id == selVal);
      this.manageSubForm.controls['managesubpackagenumven'].setValue(this.subscribers_packages[i].max_no_venues);
      this.manageSubForm.controls['managesubpackageprice'].setValue(this.subscribers_packages[i].per_month_billing);
      let stDt = this.manageSubForm.controls['managesubpackagestartdate'].value;
      if (this.subscribers_packages[i].frequency == 1) {
        this.manageSubForm.controls['managesubpackageenddate'].setValue(this.addMonthsUTC(stDt, this.subscribers_packages[i].duration));
      } else {

        this.manageSubForm.controls['managesubpackageenddate'].setValue(this.addDays(stDt, this.subscribers_packages[i].duration));
      }
      if (this.subscribers_packages[i].per_month_billing == 0) {
        this.show_paytm_toggle = false;
      } else {
        this.show_paytm_toggle = true;
      }
      this.showPayDiv = true;
    } else {
      this.manageSubForm.controls['managesubpackagenumven'].setValue(null);
      this.manageSubForm.controls['managesubpackageprice'].setValue(null);
      this.manageSubForm.controls['managesubpackageenddate'].setValue(null);
      this.showPayDiv = false;
    }

  }
  showOfflineDivs: boolean = true;

  paymentMode(b) {
    this.showOfflineDivs = b;
  }

  onStartDateChange() {
    let selVal = this.manageSubForm.controls['managesubpackageid'].value;
    if (selVal != null && selVal != "") {
      let i = this.subscribers_packages.findIndex(x => x.package_id == selVal);
      let stDt = this.manageSubForm.controls['managesubpackagestartdate'].value;
      if (this.subscribers_packages[i].frequency == 1) {
        let ndt = this.addMonthsUTC(stDt, this.subscribers_packages[i].duration);
        this.manageSubForm.controls['managesubpackageenddate'].setValue(ndt);
      } else {
        let ndt = this.addDays(stDt, this.subscribers_packages[i].duration)
        this.manageSubForm.controls['managesubpackageenddate'].setValue(ndt);
      }
      this.manageSubForm.controls['managesubpackageenddate'].updateValueAndValidity();
    }
  }

  close(): void {
    this.dialogRef.close();
  }
  addMonthsUTC(date, count) {
    if (date && count) {
      var m, d = (date = new Date(+date)).getUTCDate()
      date.setUTCMonth(date.getUTCMonth() + count, 1)
      m = date.getUTCMonth()
      date.setUTCDate(d)
      if (date.getUTCMonth() !== m) date.setUTCDate(0)
    }
    return date
  }
  addDays(aDate, numberOfDays) {
    let dt = new Date(aDate)
    dt.setDate(dt.getDate() + numberOfDays);
    return dt;
  }
  removeDays(aDate, numberOfDays) {
    let dt = new Date(aDate)
    dt.setDate(dt.getDate() - numberOfDays);
    return dt;
  }
}
