import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Cropper from "cropperjs";
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-addsizee-dialog',
  templateUrl: './addsizee-dialog.component.html',
  styleUrls: ['./addsizee-dialog.component.scss']
})
export class AddsizeeDialogComponent implements OnInit, AfterViewInit {
  public filterToggle1:boolean;
public filterToggle2:boolean;
public filterToggle3:boolean;
public filterToggle4:boolean;
public selected : string = "assets/image stone1.png";
public images_array = ["assets/image stone1.png","assets/rawstone11.png","assets/rawstone4.png","assets/rawstone2.png"];

@ViewChild("image")
public imageElement: ElementRef;
public imageDestination: string;
private cropper: Cropper;
public constructor(public dialogRef: MatDialogRef<AddsizeeDialogComponent>) { 
  this.imageDestination = ""
}

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  loadImage(value){
    this.selected = this.images_array[parseInt(value)];
    console.log(this.selected);
    this.cropper.replace(this.selected);
  }

  public ngAfterViewInit()  {
    this.cropper = new Cropper(this.imageElement.nativeElement, {
      zoomable: true,
      scalable: true,
      aspectRatio: 1,
      crop:() => {
        const canvas = this.cropper.getCroppedCanvas();
        this.imageDestination = canvas.toDataURL("image/png")
      }
    })
    
  }

  hello(){
    this.cropper.setData(({}))
  }

 

  setDragMode(mode){
    this.cropper.setDragMode(mode);
  }

  zoomIn(){
    this.cropper.zoom(0.1)
  }

  zoomOut(){
    this.cropper.zoom(-0.1)
  }

  move(num1,num2){
    this.cropper.move(num1,num2);
  }

  rotate(num){
    this.cropper.rotate(num);
  }

  scaleX(){
    this.cropper.scaleX(-1);
  }

  scaleY(){
    this.cropper.scaleY(-1);
  }

  crop(){
    this.cropper.crop();
  }

  clear(){
    this.cropper.clear();
  }

  disable(){
    this.cropper.disable();
  }

  enable(){
    this.cropper.enable();
  }

  reset(){
    this.cropper.reset();
  }

  destroy(){
    this.cropper.destroy();
  }

  getCroppedCanvas1(){
    this.cropper.getCroppedCanvas({
      maxWidth:4096,
      maxHeight:4096
    })
  }

  getCroppedCanvas2(){
    this.cropper.getCroppedCanvas({
      width:160,
      height:90
    })
  }

  getCroppedCanvas3(){
    this.cropper.getCroppedCanvas({
      width:320,
      height:180
    })
  }

  getData(){
    this.cropper.getData();
  }

  setData(data){
    this.cropper.setData(data);
  }

  getContainerData(){
    this.cropper.getContainerData();
  }


  setAspectRatio(data){
    this.cropper.setAspectRatio(data);
  }



}

