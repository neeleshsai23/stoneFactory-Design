import {
    Component
} from '@angular/core';
import {
    ActivatedRoute,
    Router,
    ActivatedRouteSnapshot,
    UrlSegment,
    NavigationEnd
} from "@angular/router";
import {
    Title
} from '@angular/platform-browser';
import {
    AppSettings
} from '../../../app.settings';
import {
    Settings
} from '../../../app.settings.model';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

    public pageTitle: string;
    public moduleTitle: string;
    public subTitle: string = "test";
    public test = "sample";
    public description: {};
    public breadcrumbs: {
        name: string;
        url: string
    } [] = [];

    public settings: Settings;
    constructor(public appSettings: AppSettings,
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public title: Title) {
        this.settings = this.appSettings.settings;
        this.description = {
            "Analytics":"The complete overview of the system in graphical format is displayed in this screen.",
            "Members":"Members.",
            "Size" : "Sizes",
            "Rawimage" : "Rawimage",
            "View" : "View",
            "Jointcolor":"Jointcolor",
            "Sales":"To view all the details gathered from sales can be viewed here. The lead data obtained from a prospective purchaser is displayed here followed by the management of accounts and contacts as well.",
            "Agents":"The list of agents allocated to a project is listed here, followed by the flow of that project in relation to the overall team allocated can be tracked here.",
            "Visits":"Visits.",
            "Customers":"The list of customers who have purchased a property are listed here, followed by project details and contact information .",
            "Admin":"This module is meant to set up the basic infrastructure that is needed for the application to run properly.",
            "Packages":"Packages",
            "Setup":"Setup",
            "Config":"Configuration",
            "View Master":"View Master",
            "Pattern Master":"Pattern Master",
            "Enquiries":"Enquiries",
            "Payments":"Payment logs related to all accounts will appear here with an ability to post a payment.",
            "Overview":"Overview",
            "Transactions":"Transactions",
            "Manage Users" : "Manage Users",
            "Settings" : "Settings",
            "Lookup Options" : "Lookup Options",
            "MasterData" : "Masterdata",
            "Member Dashboard":"The planned start and finish date, duration, and resources allocated to each activity are usually included in this module.",
            "Message Center" : "For Internal communication purpose, a chat window is provided where the customer can directly interact with the customer service.",
            "Customer Dashboard" :"Customer Dashboard",
            "My Account" :"My Account",
            "Showroom":"Showroom",
            "Messages" : "For Internal communication purpose, a chat window is provided where the customer can directly interact with the customer service.",
            "Patterns": "This is Patterns Screen",
            "Language Master": "This is language master screen",
            "Pattern Dashboard": "This is Pattern Dashboard Screen",
            "Permissions": "This screen is used to manage user permissions"
        };
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.breadcrumbs = [];
                this.parseRoute(this.router.routerState.snapshot.root);
                this.pageTitle = "";
                this.breadcrumbs.forEach(breadcrumb => {
                    this.pageTitle += ' | ' + breadcrumb.name;
                })
                this.pageTitle ? null : this.pageTitle = " | Dashboard";

                var temp = this.pageTitle.split(' | ');
                if (temp.length > 4) {
                    this.subTitle = temp.pop();
                    this.moduleTitle = temp[temp.length - 1];
                } else if (temp.length > 3) {
                    this.subTitle = temp.pop();
                    this.moduleTitle = temp[temp.length - 1];
                } else {
                    this.moduleTitle = temp.pop();
                }

                if (this.subTitle === 'Permissions') {
                    this.moduleTitle = "Permissions";
                    this.subTitle = "test";
                }
                this.title.setTitle(this.settings.name + this.pageTitle);
            }
        })
    }

    private parseRoute(node: ActivatedRouteSnapshot) {
        if (node.data['breadcrumb']) {
            if (node.url.length) {
                let urlSegments: UrlSegment[] = [];
                node.pathFromRoot.forEach(routerState => {
                    urlSegments = urlSegments.concat(routerState.url);
                });
                let url = urlSegments.map(urlSegment => {
                    return urlSegment.path;
                }).join('/');
                this.breadcrumbs.push({
                    name: node.data['breadcrumb'],
                    url: '/' + url
                })
            }
        }
        if (node.firstChild) {
            this.parseRoute(node.firstChild);
        }
    }

    public closeSubMenus() {
        let menu = document.querySelector(".sidenav-menu-outer");
        if (menu) {
            for (let i = 0; i < menu.children[0].children.length; i++) {
                let child = menu.children[0].children[i];
                if (child) {
                    if (child.children[0].classList.contains('expanded')) {
                        child.children[0].classList.remove('expanded');
                        child.children[1].classList.remove('show');
                    }
                }
            }
        }
    }
}