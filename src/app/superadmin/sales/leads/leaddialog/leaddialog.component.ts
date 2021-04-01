import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-leaddialog',
  templateUrl: './leaddialog.component.html',
  styleUrls: ['./leaddialog.component.scss']
})
export class LeaddialogComponent implements OnInit {

  countryList:any;
  stateList:any;
  cityList:any;

  checklistItems = [
      {"criteria":'Has 10 Years of existence ?',"id":1},
      {"criteria":'Presence in minimum 3 Locations ?',"id":2},
      {"criteria":'Has more than 50 employess and not more than 500 ? ',"id":3},
      {"criteria":'Do they have good website ? ',"id":4}
  ];

  industryOptions = ["Mining","Manufacturing"];
  industryOptionSelected: any;

  onIndustryOptionsSelected(event) {
      console.log(event); //option value will be sent as event
  }
  timeOptions = ["GMT","IST","CST","MST","PST","EDT","MDT","PST","PDT"];
  timeOptionSelected: any;

  onTimeOptionsSelected(event){
  console.log(event); //option value will be sent as event
  }

  campaignOptions =["CV","PRODUCTS","SARA","CTO","CEO"];
  bdmsOptions = ["Rohin Sama Reddy","Siva kodali","Srinu Lli","Siva Prakash"]

  prospectsOptions = ["Blue Stone India", "Axess India", "BGR", "SIR","SKY"];
  prospectOptionSelected: any;

  onProspectOptionsSelected(event) {
      console.log(event); //option value will be sent as event
  }

  locationOptions = ["Texas, Houston","Washington, Seattle","oronto, Canada","New York, USA"];
      locationOptionSelected: any;
      onLocationOptionsSelected(event){
      console.log(event); //option value will be sent as event
      }

  

  public form:FormGroup;
  public passwordHide:boolean = true;
  constructor(public dialogRef: MatDialogRef<LeaddialogComponent>,
              @Inject(MAT_DIALOG_DATA) public lead: any,
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
    if(this.lead){
      this.form.setValue(this.lead);
    } 
    else{
      
    } 
  }

  close(): void {
    this.dialogRef.close();
  }

  saveLead() {
    this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }
}
