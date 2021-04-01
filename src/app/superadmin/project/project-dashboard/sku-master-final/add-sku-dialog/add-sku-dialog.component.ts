import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-sku-dialog',
  templateUrl: './add-sku-dialog.component.html',
  styleUrls: ['./add-sku-dialog.component.scss']
})
export class AddSkuDialogComponent implements OnInit, AfterViewInit {

  public form: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddSkuDialogComponent>,public fb: FormBuilder) { 
    this.form = this.fb.group({
      product: [null],
      skuid: [null]
    })
  }

  ngOnInit() {
    document.getElementById('productid').style.display = 'none';
  }

  ngAfterViewInit(){
   
  }

  generateProductID(){
    console.log(this.form.value,"before");
    if(this.form.value.product == 0){
      document.getElementById('productid').style.display = 'block';
      document.getElementById('productidvalue').innerText = 'SF-12345';
      this.form.controls['skuid'].setValue('SF-12345-1');
      console.log(this.form.value,"after");
    }else if(this.form.value.product== 1){
      document.getElementById('productid').style.display = 'block';
      document.getElementById('productidvalue').innerText = 'SF-34545';
      this.form.controls['skuid'].setValue('SF-34545-1');
      console.log(this.form.value,"after");
    }
    else{
      document.getElementById('productid').style.display = 'none';
    }
  }



  close(){
    this.dialogRef.close();
  }

}
