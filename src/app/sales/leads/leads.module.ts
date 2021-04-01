import { Addjointcolor1DialogComponent } from './jointcolor1/addjointcolor1-dialog/addjointcolor-dialog.component';


import { MglTimelineModule } from 'angular-mgl-timeline';
import { AddCatComponent } from './specs/add-cat/add-cat.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadsComponent } from './leads.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { FiltersComponent } from './filters/filters.component';
import { SpecsComponent } from './specs/specs.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { AddFilterComponent } from './filters/add-filter/add-filter.component';
import { SpecDashboardComponent } from './specs/spec-dashboard/spec-dashboard.component';
import { AddSpecComponent } from './specs/spec-dashboard/add-spec/add-spec.component';
import { MemberviewComponent } from './memberview/memberview.component';
import { MemberrawimageComponent } from './memberrawimage/memberrawimage.component';
import { MemrawdialogComponent } from './memberrawimage/memrawdialog/memrawdialog.component';
import { AddAngleComponent } from './specs/add-angle/add-angle.component';
import { AddSizeComponent } from './specs/add-size/add-size.component';
import { AddColorComponent } from './specs/add-color/add-color.component';
import { AddWidthComponent } from './specs/add-width/add-width.component';
import { ViewsComponent } from './views/views.component';
import { AddviewDialogComponent } from './views/addview-dialog/addview-dialog.component';
import { EditDialogComponent } from './views/edit-dialog/edit-dialog.component';
import { EditNameDialogComponent } from './memberrawimage/edit-name-dialog/edit-name-dialog.component';
import { AddFinishComponent } from './specs/add-finish/add-finish.component';
import { Jointcolor1Component } from './jointcolor1/jointcolor1.component';
import { Size1Component } from './size1/size1.component';
import { AddsizeDialogComponent } from './size1/addsize-dialog/addsize-dialog.component';
import { PatternsComponent } from './patterns/patterns.component';
import { ShwSizeComponent } from './filters/shw-size/shw-size.component';
import { ShwPatternComponent } from './filters/shw-pattern/shw-pattern.component';
import { ShwAngleComponent } from './filters/shw-angle/shw-angle.component';
import { ShwColorComponent } from './filters/shw-color/shw-color.component';
import { ShwWidthComponent } from './filters/shw-width/shw-width.component';

export const routes = [
  { path: '', redirectTo:"subcategories", pathMatch: 'full' },
  { path: 'category', component: CategoriesComponent},
  { path: 'overview', component: ProductsComponent },
  { path: 'subcategories', component: FiltersComponent },
  { path: 'products', component: SpecsComponent, },
  { path: 'specs/spec-dashboard', component: SpecDashboardComponent, },
  { path: 'activity', component: MemberviewComponent },
  { path: 'raw-images', component: MemberrawimageComponent, data: { breadcrumb: 'Rawimage' } },
  { path: 'joint-color', component: Jointcolor1Component, data: { breadcrumb: 'Jointcolor' } },
  { path: 'views', component: ViewsComponent, data:{ breadcrumb: 'View' } },
  { path: 'sizes', component: Size1Component, data: { breadcrumb: 'Size' } },
  { path: 'patterns', component: PatternsComponent, data: {breadcrumb: 'Patterns'}}
];

@NgModule({
  declarations: [LeadsComponent, AddSizeComponent,AddsizeDialogComponent,Size1Component,AddFinishComponent,Addjointcolor1DialogComponent,EditNameDialogComponent,AddviewDialogComponent,AddColorComponent,AddWidthComponent,AddAngleComponent,CategoriesComponent, AddSpecComponent,ProductsComponent, FiltersComponent, SpecsComponent, AddProductComponent, AddFilterComponent, SpecDashboardComponent,AddCatComponent ,AddSpecComponent, MemberviewComponent, MemberrawimageComponent, MemrawdialogComponent, AddAngleComponent, AddSizeComponent, AddColorComponent, AddWidthComponent, ViewsComponent, AddviewDialogComponent, EditDialogComponent, EditNameDialogComponent, AddFinishComponent, Jointcolor1Component, Size1Component, AddsizeDialogComponent, PatternsComponent, ShwSizeComponent, ShwPatternComponent, ShwAngleComponent, ShwColorComponent, ShwWidthComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    SharedModule, ConfirmationPopoverModule, ReactiveFormsModule, FormsModule, MglTimelineModule
  ],
  entryComponents: [AddProductComponent, AddviewDialogComponent,AddsizeDialogComponent
    , ShwSizeComponent, ShwPatternComponent, ShwAngleComponent, ShwColorComponent, ShwWidthComponent,AddFinishComponent,Addjointcolor1DialogComponent,EditNameDialogComponent,AddColorComponent,AddWidthComponent,AddAngleComponent,AddSizeComponent,AddCatComponent, AddFilterComponent, AddSpecComponent, MemrawdialogComponent]
})
export class LeadsModule { }
