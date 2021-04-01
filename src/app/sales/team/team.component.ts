import { AlertService } from './../../shared/services/alert.service';
import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @ViewChild('packagesModal') public packagesModal: ModalDirective;
  @ViewChild('cancelSubscriptionModal') public cancelSubscriptionModal: ModalDirective;
  @ViewChild('curpackageModal') public curpackageModal: ModalDirective;
  @ViewChild('paytmProceedModal') public paytmProceedModal: ModalDirective;
  @ViewChild('paymentResponseModal') public paymentResponseModal: ModalDirective;
  @ViewChild('renewConfirmationModal') public renewConfirmationModal: ModalDirective;
  @ViewChild('paytmRenewProceedModal') public paytmRenewProceedModal: ModalDirective;


  @ViewChild('navband1') navband1: ElementRef;
  @ViewChild('navband2') navband2: ElementRef;


  data: any[] = [];
  currentpackagedata: any[];
  cur_date = new Date();
  ManageSubForm: FormGroup;
  ManageRenewSubForm: FormGroup;

  permissions_check_list = [];
  show_paytm_toggle = true;
  cur_package_name: any;
  cur_package_start_date: any;
  cur_package_end_date: any;
  cur_sub_satus: any;
  cur_pack_auto_renew: any;
  cur_last_payment_date: any;
  cur_next_payment_date: any;
  cur_package_id: any;
  pack_inf_name: any;
  pack_inf_bill: any;
  pack_inf_dur: any;
  pack_inf_ven: any;
  pay_title: any;
  pay_content: any;
  pay_tx_id: any;
  pay_order_id: any;
  pay_amount: any;
  pay_status: any;
  show_renew_button = false;
  checked = false;
  deletepopoverTitle = '<b>Change Auto Renewal <b>';
  deletepopoverMessage = 'Do you want to change the Auto Renew status?';
  show_auto_renew = false;
  freePackage = false;
  
  items=[
    { "Transaction_Ref" : "FOC-001","Payment_Date" : "03-Nov-2020", "Package_Name" : "Test Package", "Amount" : "0", "Mode_Of_Payment" : "Online", "Status" : "Completed"},
    { "Transaction_Ref" : "","Payment_Date" : "05-Oct-2020", "Package_Name" : "Test Package", "Amount" : "0", "Mode_Of_Payment" : "Online", "Status" : "Pending"},
    { "Transaction_Ref" : "FOC-003","Payment_Date" : "21-Sep-2020", "Package_Name" : "Test Package", "Amount" : "0", "Mode_Of_Payment" : "Online", "Status" : "Completed"},
    { "Transaction_Ref" : "FOC-004","Payment_Date" : "29-Nov-2020", "Package_Name" : "Test Package", "Amount" : "0", "Mode_Of_Payment" : "Online", "Status" : "Completed"},
    { "Transaction_Ref" : "FOC-005","Payment_Date" : "03-Mar-2020", "Package_Name" : "Quarterly Subscription", "Amount" : "0", "Mode_Of_Payment" : "Online", "Status" : "Completed"},
    ]

  // tslint:disable-next-line: max-line-length
  constructor(private location: Location, private activatedRoute: ActivatedRoute,  private router: Router, private alertService: AlertService, private fb: FormBuilder) {


  }

  ngOnInit() {

    this.createManageSubForm();
    this.createRenewManageSubForm();
  }

  closePayModal() {
    this.paymentResponseModal.hide();
  }

  openPaytmConfirm() {
    this.paytmProceedModal.show();
    this.pay_tx_id = '1212125';
    this.pay_order_id = '02546545';
    this.pay_amount = '25';
  }
  openRenewPaytmConfirm() {
    this.renewConfirmationModal.hide();
    this.paytmRenewProceedModal.show();
  }
  closePayConfirmModal() {
    this.paytmProceedModal.hide();
    this.paytmRenewProceedModal.hide();
  }


  closeRenewModal() {
    this.renewConfirmationModal.hide();
  }


  closeCurPackModal() {
    this.curpackageModal.hide();
  }

  createManageSubForm() {
    this.ManageSubForm = this.fb.group({
      managesubpackid: new FormControl('', Validators.required),
      managesubnumven: new FormControl('', Validators.required),
      managesubenableautorenew: new FormControl('', Validators.required),
      managesubstartdate: new FormControl('', Validators.required),
      managesubenddate: new FormControl('', Validators.required),
      managesubprice: new FormControl('', Validators.required),
    });

  }

  createRenewManageSubForm() {
    this.ManageRenewSubForm = this.fb.group({
      managerenewsubpackid: new FormControl('', Validators.required),
      managerenewsubnumven: new FormControl('', Validators.required),
      managerenewsubenableautorenew: new FormControl('', Validators.required),
      managerenewsubstartdate: new FormControl('', Validators.required),
      managerenewsubenddate: new FormControl('', Validators.required),
      managerenewsubprice: new FormControl('', Validators.required),
    });

  }
}
