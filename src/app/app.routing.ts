import { ConfigComponent } from './sales/config/config.component';
import { EnquiriesComponent } from './superadmin/enquiries/enquiries.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MessagecenterComponent } from './superadmin/messagecenter/messagecenter.component';
import { ShowroomComponent } from './sales/showroom/showroom.component';
import { TestComponent } from './test/test.component';
import { PatternDashboardComponent } from './superadmin/pattern-dashboard/pattern-dashboard.component';
import {MemberProjectDashboardComponent} from './sales/project-dashboard/project-dashboard.component';
import { Test1Component } from './test1/test1.component';

export const routes: Routes = [
  {
    path: 'superadmin',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'analytics', pathMatch: 'full' },
             
      {
        path: 'analytics',
        loadChildren: './superadmin/dashboard/dashboard.module#DashboardModule',
        data: { breadcrumb: 'Analytics' },
      },        
      {
        path: 'members',
        loadChildren: './superadmin/project/project.module#ProjectModule',
        data: { breadcrumb: 'Members' },
      },  
      {
        path: 'packages',
        loadChildren: './superadmin/sales/sales.module#SalesModule',
        data: { breadcrumb: 'Packages' },
      },  
      {
        path: 'agents',
        loadChildren: './superadmin/agents/agents.module#AgentsModule',
        data: { breadcrumb: 'Agents' },
      },  
      {
        path: 'logs',
        loadChildren: './superadmin/visits/visits.module#VisitsModule',
        data: { breadcrumb: 'Payments' },
      },   
      {
        path: 'setup',
        loadChildren: './superadmin/customers/customers.module#CustomersModule',
        data: { breadcrumb: 'Setup' },
      },
      {
        path: 'enquiries',
        component:EnquiriesComponent,
        data: { breadcrumb: 'Enquiries' },
      },
      
      {
        path:"pattern-dashboard",
        component:PatternDashboardComponent,
        loadChildren:'./superadmin/pattern-dashboard/pattern-dashboard.module#PatternDashboardModule',
        data: {breadcrumb:"Pattern Dashboard"}
      },

      {
        path: 'admin',
        loadChildren: './superadmin/admin/admin.module#AdminModule',
        data: { breadcrumb: 'Admin' },
      },   
      {
        path: 'messagecenter',
        component: MessagecenterComponent,
        data: { breadcrumb: 'Message Center' },
      },        
    ],
  },
  {
    path: 'member',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'analytics', pathMatch: 'full' },
             
      {
        path: 'analytics',
        loadChildren: './sales/analytics/analytics.module#AnalyticsModule',
        data: { breadcrumb: 'Analytics' },
      },        
      {
        path: 'setup',
        component:MemberProjectDashboardComponent,
        loadChildren: './sales/project-dashboard/project-dashboard.module#MemberProjectDashboardModule',
        data: { breadcrumb: 'Setup' },
      },  
      {
        path: 'myaccount',
        loadChildren: './sales/team/team.module#TeamModule',
        data: { breadcrumb: 'My Account' },
      },  
      {
        path: 'enquiries',
        loadChildren: './sales/member-enquiry/member-enquiry.module#MemberEnquiryModule',
        data: { breadcrumb: 'Enquiries' },
      },  
      // {
      //   path: "showroom",
      //   loadChildren: './sales/showroom/showroom.module#ShowroomModule',
      //   data: { breadcrumb: "Showroom" },
      // },  
      {
        path: 'products',
        loadChildren: './sales/customers/customers.module#CustomersModule',
        data: { breadcrumb: 'Products' },
      },  
      {
        path: 'sales',
        loadChildren: './sales/sales/sales.module#SalesModule',
        data: { breadcrumb: 'Sales' },
      },   
      {
        path: 'payments',
        loadChildren: './sales/payments/payments.module#PaymentsModule',
        data: { breadcrumb: 'Payments' },
      },  
      {
        path: 'config',
       component:ConfigComponent,
        data: { breadcrumb: 'Config' },
      }     
    ],
    
  },
  {
    path: 'customers',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'transaction', pathMatch: 'full' },
             
      {
        path: 'overview',
        loadChildren: './customer/overview/overview.module#OverviewModule',
        data: { breadcrumb: 'Messages' },
      },        
      {
        path: 'transaction',
        loadChildren: './customer/transaction/transaction.module#TransactionModule',
        data: { breadcrumb: 'Transactions' },
      },    
    ],
    
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'showroom', component: ShowroomComponent, data: { breadcrumb: 'Not found' } },
  { path: 'login', component: LoginComponent, data: { breadcrumb: 'Login' } },
  { path: 'test' , component: TestComponent, data: {breadcrumb: 'Test'}},
  { path: 'test1' , component: Test1Component, data: {breadcrumb: 'Test'}},

  {
    path: '**',
    component: NotFoundComponent,
    data: { breadcrumb: 'Not found' },
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
     preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
  // useHash: true
});
