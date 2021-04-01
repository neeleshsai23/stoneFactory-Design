import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addprospects',
  templateUrl: './addprospects.component.html',
  styleUrls: ['./addprospects.component.scss']
})
export class AddprospectsComponent implements OnInit {

  locationOptions = ["Canada", "India", "USA", "United Kingdom"];
  countryList:any;
  stateList:any;
  cityList:any;
    locationOptionSelected: any;
    public dateTime1: Date;
    onLocationOptionsSelected(event) {
        console.log(event); //option value will be sent as event
    }
    industryOptions = ["Mining","Manufacturing"];
  industryOptionSelected: any;

  onIndustryOptionsSelected(event) {
      console.log(event); //option value will be sent as event
  }
  raOptions = ["Siva","Suresh"];
  raOptionSelected: any;

  onRaOptionsSelected(event) {
      console.log(event); //option value will be sent as event
  }
  timeOptions = ["GMT","IST","CST","MST","PST","EDT","MDT","PST","PDT"];
  timeOptionSelected: any;

  onTimeOptionsSelected(event){
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

    campaignOptions = ["SARA", "Produts", "Custom", "ERP", "EMS"];
    campaignOptionSelected: any;

    onCampaignOptionsSelected(event) {
        console.log(event); //option value will be sent as event
    }


    bdOptions = ["Rohin", "K.Sai", "Srinu", "P.Siva"];
    bdOptionSelected: any;

    onBdOptionsSelected(event) {
        console.log(event); //option value will be sent as event
    }

  constructor(public dialogRef: MatDialogRef<AddprospectsComponent>,
    @Inject(MAT_DIALOG_DATA) public prospect: Prospects) { }

  ngOnInit() {
    if(this.prospect){
    } 
    else{
      this.prospect = new Prospects();
      this.prospect.profile = new ProspectsProfile();
      this.prospect.work = new ProspectsWork();
      this.prospect.contacts = new ProspectsContacts();
      this.prospect.social = new ProspectsSocial();
      this.prospect.settings = new ProspectsSettings();
    } 
  }
  close(): void {
    this.dialogRef.close();
  }

  saveProspect() {
    this.dialogRef.close();
  }
}




export class Prospects {
  id: number;
  username: string;
  password: string;
  ProspectName:string;
  industry: string;
  prospects: number;
  profile: ProspectsProfile;
  work: ProspectsWork;
  contacts: ProspectsContacts;
  social: ProspectsSocial;
  settings: ProspectsSettings;
}

export class ProspectsProfile {
  name: string;
  surname: string;
  birthday: Object;
  gender: string;
  image: string;
}

export class ProspectsWork {
  company: string;
  position: string;
  salary: number;
}

export class ProspectsContacts {
  email: string;
  phone: string;
  address: string;
}

export class ProspectsSocial {
  facebook: string;
  twitter: string;
  google: string;
}

export class ProspectsSettings {
  isActive: boolean;
  isDeleted: boolean;
  registrationDate: Date;
  joinedDate: Date;
}