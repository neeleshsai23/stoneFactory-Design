import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  data: any[];
  dataone: any[];
  datatwo: any[];
  public filterQuery = "";
  public filterQuery2 = "";
  public filterQuery3 = "";
  aefrom_date: number;
  aetodate: number;
  adminEventFilterForm: FormGroup;
  apfrom_date: number;
  aptodate: number;
  adminPaymenttFilterForm: FormGroup;
  aerfrom_date: number;
  aertodate: number;
  adminErrortFilterForm: FormGroup;

  ngOnInit() {
    this.createAdminEventFilterForm();
    this.createpaymentFilterForm();
    this.createAdminErrorFilterForm();
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
  createpaymentFilterForm() {
    this.adminPaymenttFilterForm = this.fb.group({
      changeadminpaymentfromdate: new FormControl('', Validators.required),
      changeadminpaymenttodate: new FormControl('', Validators.required)
    });
  
  }
 
  
}
