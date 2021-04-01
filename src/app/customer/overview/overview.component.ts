import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MessagesService } from 'src/app/theme/components/messages/messages.service';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ MessagesService ]
})
export class OverviewComponent implements OnInit {

  

  constructor() { 
     
  }

  ngOnInit() {
    
  }

  

}
