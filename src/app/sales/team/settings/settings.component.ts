import { AlertService } from './../../../shared/services/alert.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private alertService: AlertService) { }
  public popoverStatusTitle: string = 'Confirm Save Change';
  public popoverStatusMessage: string = 'Are you sure you want to save changes.?';
  public cancelClicked: boolean = false;

  tableList: Object[] = [
    { intSettingsId: 1, name: 'Prospect Follow-up Days', description: 'Prospect Follow-up Days', old_value: '10'},
    { intSettingsId: 2, name: 'Project Follow-up Days', description: 'Opportunity Follow-up Days', old_value: '10'},
    { intSettingsId: 3, name: 'Grid Length', description: 'Default Grid Length', old_value: '10'},
    { intSettingsId: 4, name: 'Notification Email', description: 'Default Admin Notification Email	', old_value: 'sg@optionmatrix.com'},
    { intSettingsId: 5, name: 'Time Zone', description: 'Default Time Zone', old_value: 'EDT'},

  ];

  ngOnInit() {
  }

  saveSettings() {
    this.alertService.createAlert('Successfully Saved.', 1);
  }




}
