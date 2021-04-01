import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/app/app.settings.model';
import { AppSettings } from 'src/app/app.settings';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  public single: any[];
  public sizes: any[];
  public colors: any[];
  public width: any[];
  public countries: any[];
  public singles: any[];
  public multi: any[];
  public analytics: any[];
  public showLegend = true;
  public showLegends = false;
  public gradient = true;
  public showXAxis = true;
  public showYAxis = true;
  public showXAxisLabel = false;
  public xAxisLabel = 'Year';
  public showYAxisLabel = false;
  public yAxisLabel = 'Population';
  public filterToggle:boolean;
  public filterToggle1:boolean;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  }; 
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;
  public autoScale = true;

  items1=[
    {"month":"January","year":"2008"},
    {"month":"febrauary","year":"2009"},
    {"month":"March","year":"2010"},
    {"month":"April","year":"2011"},
    {"month":"May","year":"2012"},
    {"month":"June","year":"2013"},
    {"month":"July","year":"2014"},
    {"month":"August","year":"2015"},
    {"month":"September","year":"2016"},
    {"month":"October","year":"2017"},
    {"month":"November","year":"2018"},
    {"month":"December","year":"2019"},
  ]

  constructor(public appSettings:AppSettings) {
    this.settings = this.appSettings.settings; 
    const single = [
      {
        name: 'Pattern-1',
        value: 20
      },
      {
        name: 'Pattern-2',
        value: 10
      },
      {
        name: 'Pattren-3',
        value: 15
      },
      {
        name: 'Pattern-4',
        value: 30
      },
      {
        name: 'Pattern-5',
        value: 2
      },
    ];
    const singles = [
      {
        name: '90 deg',
        value: 20
      },
      {
        name: '45 deg',
        value: 33
      },
      {
        name: '30 deg',
        value: 21
      },
      {
        name: '55 deg',
        value: 18
      },
      {
        name: '75 deg',
        value: 19
      }
    ];
    const sizes = [
      {
        name: '215x65',
        value: 30
      },
      {
        name: '102x65',
        value: 23
      },
      {
        name: '215x73',
        value: 7
      },
      {
        name: '189x48',
        value: 20
      },
      {
        name: '103x73',
        value: 20
      }
    ];
    const colors = [
      {
        name: 'blue',
        value: 20
      },
      {
        name: 'red',
        value: 33
      },
      {
        name: 'green',
        value: 21
      },
      {
        name: 'skyblue',
        value: 18
      },
      {
        name: 'orange',
        value: 19
      }
    ];
    const width = [
      {
        name: '100cm',
        value: 25
      },
      {
        name: '90cm',
        value: 15
      },
      {
        name: '80cm',
        value: 21
      },
      {
        name: '70cm',
        value: 20
      },
      {
        name: '60cm',
        value: 15
      }
    ];
    const countries = [
      {
        name: 'India',
        value: 20
      },
      {
        name: 'bangladesh',
        value: 40
      },
      {
        name: 'srilanka',
        value: 20
      },
      {
        name: 'nepal',
        value: 10
      },
      {
        name: 'china',
        value: 10
      }
    ];
    const analytics = [
      {
        name:"Subscribed",series: [
          {
            name: 'January',
            value: 10
          },
          {
            name: 'February',
            value: 15
          },
          {
            name: 'March',
            value: 8
          },
          {
            name: 'April',
            value: 20
          },
          {
            name: 'May',
            value: 25
          },
          {
            name: 'June',
            value: 35
          },
          {
            name: 'July',
            value: 55
          },
          {
            name: 'August',
            value: 30
          },
          {
            name: 'September',
            value: 26
          },
          {
            name: 'October',
            value: 10
          },
          {
            name: 'November',
            value: 26
          },
          {
            name: 'December',
            value: 10
          }
        ]
      }
    ]
    Object.assign(this, {single,singles,analytics,sizes,colors,width,countries}); 
  }
  
  public onSelect(event) {
    console.log(event);
  }
  conversations = [
    {lead_name:"Srinu",days:"Rs.3,00,000 -/-",color:false},
    {lead_name:"Raj",days:"Rs.2,95,000 -/-",color:false},
    {lead_name:"Navin",days:"Rs.2,90,000 -/-",color:true},
    {lead_name:"Shiva",days:"Rs.2,60,000 -/-",color:true},
    {lead_name:"Sai",days:"Rs.2,50,000 -/-",color:true},
   
  ]
  ngOnInit() {

  }

}
