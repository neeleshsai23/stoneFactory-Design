import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-addsalescustomer',
  templateUrl: './addsalescustomer.component.html',
  styleUrls: ['./addsalescustomer.component.scss']
})
export class AddsalescustomerComponent implements OnInit {

  prospectsOptions = ["Blue Stone India", "Axess India", "BGR", "SIR","SKY"];
  prospectOptionSelected: any;

  onProspectOptionsSelected(event) {
      console.log(event); //option value will be sent as event
  }
  countryOptions = ["India","Canada","Australia","USA"];
  countryOptionSelected: any;

  onCountryOptionsSelected(event){
  console.log(event); //option value will be sent as event
  }
  stateOptions = ["Telangana","Mumbai","Ottawa","Toronto"];
  stateOptionSelected: any;

  onStateOptionsSelected(event){
  console.log(event); //option value will be sent as event
  }
  cityOptions = ["Hyderabad","Vijayawada","New York","Texas"];
  cityOptionSelected: any;

  onCityOptionsSelected(event){
  console.log(event); //option value will be sent as event
  }
  timeOptions = ["GMT","IST","CST","MST","PST","EDT","MDT","PST","PDT"];
  timeOptionSelected: any;

  onTimeOptionsSelected(event){
  console.log(event); //option value will be sent as event
  }
 
  public form:FormGroup;
  public passwordHide:boolean = true;
  constructor(public dialogRef: MatDialogRef<AddsalescustomerComponent>,
              @Inject(MAT_DIALOG_DATA) public contact: any,
              public fb: FormBuilder, private alertService: AlertService) {
    this.form = this.fb.group({
      id: null,
      username: [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],       
      profile: this.fb.group({
        name: null,
        surname: null,  
        birthday: null,
        gender: null,
        image: null
      }),
      work: this.fb.group({
        company: null,
        position: null,
        salary: null
      }),
      contacts: this.fb.group({
        email: null,
        phone: null,
        address: null          
      }),
      social: this.fb.group({
        facebook: null,
        twitter: null,
        google: null
      }),
      settings: this.fb.group({
        isActive: null,
        isDeleted: null,
        registrationDate: null,
        joinedDate: null
      })
    });
  }

  ngOnInit() {
    if(this.contact){
      this.form.setValue(this.contact);
    } 
    else{
      // this.contact = new Sales();
      // this.contact.profile = new SalesProfile();
      // this.contact.work = new SalesWork();
      // this.contact.contacts = new SalesContacts();
      // this.contact.social = new SalesSocial();
      // this.contact.settings = new SalesSettings();
    } 
  }

  close(): void {
    this.dialogRef.close();
  }

  

  saveContact() {
    this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

}
