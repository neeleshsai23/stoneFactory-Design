import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { AppSettings } from "../../../../app.settings";
import { Settings } from "../../../../app.settings.model";
import { MenuService } from "../menu.service";
import { MatMenuTrigger, MatDialog } from "@angular/material";
import { TourService } from "ngx-tour-ngx-bootstrap";

@Component({
  selector: "app-horizontal-menu",
  templateUrl: "./horizontal-menu.component.html",
  styleUrls: ["./horizontal-menu.component.scss"],
  encapsulation: ViewEncapsulation.None,
  providers: [MenuService],
})
export class HorizontalMenuComponent implements OnInit {
  @Input("menuParentId") menuParentId;
  public menuItems: Array<any>;
  public settings: Settings;
  public currentYear: String;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  constructor(
    public appSettings: AppSettings,
    public dialog: MatDialog,
    public menuService: MenuService,
    public router: Router,
    public tourService: TourService
  ) {
    this.settings = this.appSettings.settings;
    this.tourService.initialize(
      [
        {
          anchorId: '1',
          content: 'The complete overview of the system in graphical format is displayed in this screen.',
          placement: 'bottom',
          title: 'Analytics'
        },
        {
          anchorId: '2',
          content:'Scheduling a project and assigning the list of planned tasks, deliverables and milestones is maintained here in the screen. ',
          placement: 'bottom',
          title: 'Projects'
        },
        {
          anchorId: '3',
          content: 'To view all the details gathered from sales can be viewed here. The lead data obtained from a prospective purchaser is displayed here followed by the management of accounts and contacts as well.',
          placement: 'bottom',
          title: 'Sales'
        },
        {
          anchorId: '4',
          content: "The list of agents allocated to a project is listed here, followed by the flow of that project in relation to the overall team allocated can be tracked here.",
          placement: 'bottom',
          title: 'Agents'
        },
        {
          anchorId: '6',
          content: 'The list of customers who have purchased a property are listed here, followed by project details and contact information .',
          placement: 'bottom',
          title: 'Customers'
        },
        {
          anchorId: '7',
          content: 'This module is meant to set up the basic infrastructure that is needed for the application to run properly.',
          placement: 'bottom',
          title: 'Admin'
        },
      ],
      {
        route: '/superadmin/analytics'
      }
    );
    // this.tourService.start();
  }

  ngOnInit() {
    this.currentYear = "" + new Date().getFullYear();
    if (localStorage.getItem("loginUser") == "admin@stonefactory.in") {
      this.menuItems = this.menuService.getAdminMenuItems();
    }
    else if (localStorage.getItem("loginUser") == "admin@member.com") {
      this.menuItems = this.menuService.getSalesMenuItems();
    }
    else if (localStorage.getItem("loginUser") == "customer@bt.com") {
      this.menuItems = this.menuService.getCustomerMenuItems();
    }
    this.menuItems = this.menuItems.filter(
      (item) => item.parentId == this.menuParentId
    );
  }

  ngAfterViewInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.settings.fixedHeader) {
          let mainContent = document.getElementById("main-content");
          if (mainContent) {
            mainContent.scrollTop = 0;
          }
        } else {
          document.getElementsByClassName(
            "mat-drawer-content"
          )[0].scrollTop = 0;
        }
      }
    });
  }

  checkMenuLink(menuId,data) {
   console.log(data);
  }
}
