import { Component, OnInit } from '@angular/core';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-closure',
  templateUrl: './closure.component.html',
  styleUrls: ['./closure.component.scss']
})
export class ClosureComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  isInception: boolean = true;
  isControl: boolean = false;
  isTests: boolean = false;

  isExcavation: boolean = true;
  isPCC: boolean = false;
  isPilling: boolean = false;
  isFolding: boolean = false;
  isConcrete: boolean = false;
  isRein: boolean = false;
  isPost: boolean = false;
  isReports: boolean = false;

  excavations = [{Performed:"Compressive strength",result:"28 N/mm2",site :"site-001",dn :"D-01" ,isCode:"IS 12-0934",deviation:"Yes",obs:"05" ,cat_name:"Earth Work",sitereportno:"report-01",check:"Excavation",report: true,insecby:"sai",inse:"8/9",date:"02-09-2020"},
  {site :"site-001",Performed:"Slump clone",dn :"D-01" ,result:"15 N/mm2",obs:"06" ,isCode:"IS 14-9876",deviation:"NO",sitereportno:"report-02",cat_name:"Concrete",check:"Excavation",report: false,insecby:"sai",inse:"0/9",date:"02-09-2020"}]

  reports = [{is_selected:false,Section:"Excavation"},{is_selected:false,Section:"PCC"},{is_selected:false,Section:"Pilling"}]
  ngOnInit() {

  }

  fnInception() {
    this.isInception = true;
    this.isControl = false;
    this.isTests = false;
  }

  fnTest() {
    this.isInception = false;
    this.isControl = false;
    this.isTests = true;
  }

  fnControl() {
    this.isInception = false;
    this.isControl = true;
    this.isTests = false;
  }

  fnExcavation() {
  this.isExcavation = true;
  this.isPCC = false;
  this.isPilling = false;
  this.isFolding = false;
  this.isConcrete = false;
  this.isRein = false;
  this.isPost = false;
  this.isReports = false;
  }

  fnPCC() {
    this.isExcavation = false;
    this.isPCC = true;
    this.isPilling = false;
    this.isFolding = false;
    this.isConcrete = false;
    this.isRein = false;
    this.isPost = false;
    this.isReports = false;
  }

  fnPilling() {
    this.isExcavation = false;
    this.isPCC = false;
    this.isPilling = true;
    this.isFolding = false;
    this.isConcrete = false;
    this.isRein = false;
    this.isPost = false;
    this.isReports = false;
  }
  fnFolding() {
    this.isExcavation = false;
    this.isPCC = false;
    this.isPilling = false;
    this.isFolding = true;
    this.isConcrete = false;
    this.isRein = false;
    this.isPost = false;
    this.isReports = false;
  }
  fnConcrete() {
    this.isExcavation = false;
    this.isPCC = false;
    this.isPilling = false;
    this.isFolding = false;
    this.isConcrete = true;
    this.isRein = false;
    this.isPost = false;
    this.isReports = false;
  }
  fnRein() {
    this.isExcavation = false;
    this.isPCC = false;
    this.isPilling = false;
    this.isFolding = false;
    this.isConcrete = false;
    this.isRein = true;
    this.isPost = false;
    this.isReports = false;
  }
  fnPost() {
    this.isExcavation = false;
    this.isPCC = false;
    this.isPilling = false;
    this.isFolding = false;
    this.isConcrete = false;
    this.isRein = false;
    this.isPost = true;
    this.isReports = false;
  }

  fnReports() {
    this.isExcavation = false;
    this.isPCC = false;
    this.isPilling = false;
    this.isFolding = false;
    this.isConcrete = false;
    this.isRein = false;
    this.isPost = false;
    this.isReports = true;
  }

  openQualityDialog(item){
    
  }

  openTestDialog(item){
    
  }

  openDeleteDialog(assets) {
    let dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      data: assets,
      height: 'auto',
      width: 'auto',
      autoFocus: false
    });
    
    dialogRef.afterClosed().subscribe(data => {
      if (data != null && data !== undefined) {
      }
    });
  }
}
