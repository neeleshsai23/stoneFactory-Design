import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { 

    this.treeData = {
      "data": [
        {
        "label": "P-90874",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-clipboard cs-blue",
        "collapsedIcon": "fa fa-clipboard cs-blue",
        "selectable": false,
        "expanded": true,
        "children": [{
          "label": "Floor 1",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-folder-open dark-blue",
          "collapsedIcon": "fa fa-folder dark-blue",
          "selectable": true,
          "expanded": true,
          "children":[{
            "label": "Beam",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-briefcase red",
            "collapsedIcon": "fa fa-briefcase red",
            "selectable": true,
          },{
            "label": "Column Integration",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-briefcase red",
            "collapsedIcon": "fa fa-briefcase red",
            "selectable": true,
          }]
        }
        ]
      },
      {
        "label": "P-09867",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-clipboard cs-blue",
        "collapsedIcon": "fa fa-clipboard cs-blue",
        "selectable": false,
        "expanded": false,
        "children": [{
          "label": "Floor 1",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-folder-open dark-blue",
          "collapsedIcon": "fa fa-folder dark-blue",
          "selectable": true,
          "expanded": false,
          "children":[{
            "label": "Beam",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-briefcase red",
            "collapsedIcon": "fa fa-briefcase red",
            "selectable": true,
          },{
            "label": "Column Integration",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-briefcase red",
            "collapsedIcon": "fa fa-briefcase red",
            "selectable": true,
          }]
        }
        ]
      },
      {
        "label": "P-098735",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-clipboard cs-blue",
        "collapsedIcon": "fa fa-clipboard cs-blue",
        "selectable": false,
        "expanded": false,
        "children": [{
          "label": "Plumbing",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-folder-open dark-blue",
          "collapsedIcon": "fa fa-folder dark-blue",
          "selectable": true,
          "expanded": false,
          "children":[{
            "label": "Plumbing Plan 1",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-briefcase red",
            "collapsedIcon": "fa fa-briefcase red",
            "selectable": true,
          },{
            "label": "Plumbing Plan 2",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-briefcase red",
            "collapsedIcon": "fa fa-briefcase red",
            "selectable": true,
          }]
        }
        ]
      },
      {
        "label": "P-09876",
        "data": "Documents Folder",
        "expandedIcon": "fa fa-clipboard cs-blue",
        "collapsedIcon": "fa fa-clipboard cs-blue",
        "selectable": false,
        "expanded": false,
        "children": [{
          "label": "Electrical",
          "data": "Documents Folder",
          "expandedIcon": "fa fa-folder-open dark-blue",
          "collapsedIcon": "fa fa-folder dark-blue",
          "selectable": true,
          "expanded": false,
          "children":[{
            "label": "Electrical",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-briefcase red",
            "collapsedIcon": "fa fa-briefcase red",
            "selectable": true,
          },{
            "label": "Electrical",
            "data": "Documents Folder",
            "expandedIcon": "fa fa-briefcase red",
            "collapsedIcon": "fa fa-briefcase red",
            "selectable": true,
          }]
        }
        ]
      },
      ]
    }
  }
  treeData: any;

  public getTreeJSON() {
    return this.treeData;
  }
}
