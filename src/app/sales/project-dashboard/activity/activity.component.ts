import { Component, OnInit } from '@angular/core';
import { MglTimelineModule } from 'angular-mgl-timeline';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  alternate: boolean = true;
  toggle: boolean = true;
  color: boolean = false;
  size: number = 40;
  expandEnabled: boolean = false;
  public dateTime1: Date;
  public filterToggle : boolean;
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }
  locationOptions = ["Email", "Call", "Text Messages", "Updates", "Linkedin"];
locationOptionSelected: any;
startDate = new Date(1990, 0, 1);
onLocationOptionsSelected(event){
 console.log(event); //option value will be sent as event
}
  entries = [
    {
      class: 'mgl-timeline-entry-dot-event',
      date: 'Wed, 21 Nov 2020 14:10',
      element: 'fa fa-toggle-right',
      dataelement: 'fa fa-flag-o',
      headerClass: 'eventClass',
      header: 'Event',
      content: 'Member meeting is Scheduled'
    },
    {
      class: 'mgl-timeline-entry-dot-notes',
      date: 'Thu, 08 Nov 2020 19:14',
      element: 'fa fa-sticky-note',
      dataelement: 'fa fa-sticky-note-o',
      headerClass: 'notesClass',
      header: 'Notes',
      content: 'Member Intial discussion started'
    },
    {
      class: 'mgl-timeline-entry-dot-notes',
      date: 'Thu, 08 Nov 2020 19:14',
      element: 'fa fa-sticky-note',
      dataelement: 'fa fa-sticky-note-o',
      headerClass: 'notesClass',
      header: 'Notes',
      content: 'Division manager is on leave at the time of Member discussion '
    },
    {
      class: 'mgl-timeline-entry-dot-event',
      date: 'Wed, 21 Nov 2020 14:10',
      element: 'fa fa-toggle-right',
      dataelement: 'fa fa-flag-o',
      headerClass: 'eventClass',
      header: 'Event',
      content: 'Member Intial setup Intiated'
    },
    {
      class: 'mgl-timeline-entry-dot-notes',
      date: 'Thu, 08 Nov 2020 19:14',
      element: 'fa fa-sticky-note',
      dataelement: 'fa fa-sticky-note-o',
      headerClass: 'notesClass',
      header: 'Notes',
      content: 'Site visit scheduled'
    },
    {
      class: 'mgl-timeline-entry-dot-event',
      date: 'Wed, 21 Nov 2020 14:10',
      element: 'fa fa-toggle-right',
      dataelement: 'fa fa-flag-o',
      headerClass: 'eventClass',
      header: 'Event',
      content: 'Initial Member Report is generated'
    },
    {
      class: 'mgl-timeline-entry-dot-notes',
      date: 'Thu, 08 Nov 2020 19:14',
      element: 'fa fa-sticky-note',
      dataelement: 'fa fa-sticky-note-o',
      headerClass: 'notesClass',
      header: 'Notes',
      content: 'Meeting scheduled on 15th Dec to meet a client in Vancouver at 3:30P.M.'
    },
    {
      class: 'mgl-timeline-entry-dot-event',
      date: 'Wed, 21 Nov 2020 14:10',
      element: 'fa fa-toggle-right',
      dataelement: 'fa fa-flag-o',
      headerClass: 'eventClass',
      header: 'Event',
      content: 'Division manager is on leave at the time of Member discussion'
    },
    {
      class: 'mgl-timeline-entry-dot-event',
      date: 'Thu, 08 Nov 2020 19:14',
      element: 'fa fa-toggle-right',
      dataelement: 'fa fa-flag-o',
      headerClass: 'eventClass',
      header: 'Event',
      content: 'site visit intiated'
    },
    {
      class: 'mgl-timeline-entry-dot-notes',
      date: 'Thu, 08 Nov 2020 19:14',
      element: 'fa fa-sticky-note',
      dataelement: 'fa fa-sticky-note-o',
      headerClass: 'notesClass',
      header: 'Notes',
      content: 'Meeting scheduled on 15th Dec to meet a client in Vancouver at 3:30P.M.'
    },
    {
      class: 'mgl-timeline-entry-dot-event',
      date: 'Wed, 21 Nov 2020 14:10',
      element: 'fa fa-toggle-right',
      dataelement: 'fa fa-flag-o',
      headerClass: 'eventClass',
      header: 'Event',
      content: 'Manger is waiting for the site manager response'
    },

    {
      class: 'mgl-timeline-entry-dot-notes',
      date: 'Thu, 08 Nov 2020 19:14',
      element: 'fa fa-sticky-note',
      dataelement: 'fa fa-sticky-note-o',
      headerClass: 'notesClass',
      header: 'Notes',
      content: 'Member Intial setup Intiated'
    },
    {
      class: 'mgl-timeline-entry-dot-event',
      date: 'Wed, 21 Nov 2020 14:10',
      element: 'fa fa-toggle-right',
      dataelement: 'fa fa-flag-o',
      headerClass: 'eventClass',
      header: 'Event',
      content: 'Site visit scheduled'
    },
    {
      class: 'mgl-timeline-entry-dot-notes',
      date: 'Thu, 08 Nov 2020 19:14',
      element: 'fa fa-sticky-note',
      dataelement: 'fa fa-sticky-note-o',
      headerClass: 'notesClass',
      header: 'Notes',
      content: 'Member Intial setup Intiated '
    },
    {
      class: 'mgl-timeline-entry-dot-event',
      date: 'Wed, 21 Nov 2020 14:10',
      element: 'fa fa-toggle-right',
      dataelement: 'fa fa-flag-o',
      headerClass: 'eventClass',
      header: 'Event',
      content: 'Member Intial setup Intiated'
    },

  ]
  removeEntry() {
    this.entries.pop();
  }
  onHeaderClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }
  onDotClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }
  onExpandEntry(expanded, index) {
    console.log(`Expand status of entry #${index} changed to ${expanded}`)
  }

  constructor(public MglTimelineModule: MglTimelineModule) { }

  ngOnInit() {
  }

}
