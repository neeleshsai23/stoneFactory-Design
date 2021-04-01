import { SpecDashboardComponent } from './spec-dashboard/spec-dashboard.component';

import { AddColorComponent } from './add-color/add-color.component';
import { AddWidthComponent } from './add-width/add-width.component';
import { AddSizeComponent } from './add-size/add-size.component';
import { AddAngleComponent } from './add-angle/add-angle.component';
import { AddSpecComponent } from './spec-dashboard/add-spec/add-spec.component';
import { AddCatComponent } from './add-cat/add-cat.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddFinishComponent } from './add-finish/add-finish.component';

@Component({
  selector: 'app-specs',
  templateUrl: './specs.component.html',
  styleUrls: ['./specs.component.scss']
})
export class SpecsComponent implements OnInit {
  public filterToggle: boolean;
  public filterToggle1: boolean;
  items = [
    { "SKU" : "SF-2345", "category":"External Solutions","subcategory":"Bricks","Product_Type" : "Castlestone", "Color" : "Grey", "Finish" : "Rumbled", "Size" : "1/5", "Pattern": "Add",  "Angles" : "2/5", "RawImages" : "Add", "Joint_Width" : "4/5", "Joint_Color" : "Add","Edge":"Hand cut"     },
    { "SKU" : "SF-1234", "category":"Internal Solutions","subcategory":"Blocks","Product_Type" : "Granite", "Color" : "Black", "Finish" : "Rough", "Size" : "Add", "Pattern": "2/5", "Angles" : "Add",  "RawImages" : "1/5", "Joint_Width" : "Add", "Joint_Color" : "3/5"     ,"Edge":"Machine Cut"     },
    { "SKU" : "SF-7658", "category":"Paving","subcategory":"Floor","Product_Type" : "Huntstown Brick", "Color" : "Red", "Finish" : "Rumbled", "Size" : "2/5", "Pattern": "Add", "Angles" : "3/6", "RawImages" : "Add", "Joint_Width" : "4/5", "Joint_Color" : "Add","Edge":"Hand cut"      },
    { "SKU" : "SF-8256", "category":"Walling","subcategory":"Wall","Product_Type" : "Sable", "Color" : "Silver", "Finish" : "Rough", "Size" : "Add", "Pattern" : "Add", "Angles" : "Add", "RawImages" : "3/5", "Joint_Width" : "Add", "Joint_Color" : "3/5"      ,"Edge":"Hand cut"      },
    { "SKU" : "SF-4598", "category":"External Solutions","subcategory":"Bricks","Product_Type" : "Sandstone", "Color" : "White", "Finish" : "Rumbled", "Size" : "4/5", "Pattern" : "Add", "Angles" : "2/5", "RawImages" : "Add", "Joint_Width" : "Add", "Joint_Color" : "Add" ,"Edge":"Machine Cut"   },
    ]

  

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }


  public openIncidentDialog() {

      let dialogRef = this.dialog.open(AddCatComponent, {

        height: 'auto',
        width: '700px',
        autoFocus: false,
      });
      dialogRef.afterClosed().subscribe(data => {

      });
  
}

public openColorDialog() {

  let dialogRef = this.dialog.open(AddColorComponent, {

    height: 'auto',
    width: '700px',
    autoFocus: false,
  });
  dialogRef.afterClosed().subscribe(data => {

  });

}


public openPatternDialog() {

  let dialogRef = this.dialog.open(AddSpecComponent, {

    height: 'auto',
    width: '700px',
    autoFocus: false,
  });
  dialogRef.afterClosed().subscribe(data => {

  });

}

public openWidthDialog() {

  let dialogRef = this.dialog.open(AddWidthComponent, {

    height: 'auto',
    width: '700px',
    autoFocus: false,
  });
  dialogRef.afterClosed().subscribe(data => {

  });

}

public openfinishDialog() {

  let dialogRef = this.dialog.open(AddFinishComponent, {

    height: 'auto',
    width: '700px',
    autoFocus: false,
  });
  dialogRef.afterClosed().subscribe(data => {

  });

}


public openDialog() {

  let dialogRef = this.dialog.open(AddSpecComponent, {

    height: 'auto',
    width: '700px',
    autoFocus: false,
  });
  dialogRef.afterClosed().subscribe(data => {

  });

}
public openAngleDialog() {

  let dialogRef = this.dialog.open(AddAngleComponent, {

    height: 'auto',
    width: '700px',
    autoFocus: false,
  });
  dialogRef.afterClosed().subscribe(data => {

  });

}
public openSizeDialog() {

  let dialogRef = this.dialog.open(AddSizeComponent, {

    height: 'auto',
    width: '500px',
    autoFocus: false,
  });
  dialogRef.afterClosed().subscribe(data => {

  });

}
}
