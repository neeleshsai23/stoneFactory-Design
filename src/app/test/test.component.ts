import { Component, OnInit, ElementRef, ViewChild, AfterViewInit  } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {FormGroup, FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit,AfterViewInit {

  properties: FormGroup;
  setPositionForm: FormGroup;
  generatedImageURL: any;
  link: any;
  srcData : SafeResourceUrl;
  selectedWidth: any;
  selectedColor: any;

  jointWidths: object[] = [
    {id:0,width:2},
    {id:1,width:4},
    {id:2,width:6},
    {id:3,width:8},
    {id:4,width:10}
  ]

  jointColors: object[] = [
    {id:0, color:"Dark Gray", img:"../../assets/darkgray.jpg"},
    {id:1, color:"Mid Gray", img:"../../assets/midgray.jpg"},
    {id:2, color:"Ivory",img:"../../assets/ivory.jpg"},
    {id:3, color:"Buff",img:"../../assets/buff.jpg"},
    {id:4, color:"White",img:"../../assets/white.jfif"},
    {id:5, color:"Brown Red",img:"../../assets/brownred.jpg"}
  ]

  stoneImages: object[] = [
    {id:0, name:"Stone 1", img:"../../assets/img1.png"},
    {id:1, name:"Stone 2", img:"../../assets/img2.png"},
    {id:2, name:"Stone 3", img:"../../assets/img3.png"}
  ]
  
  @ViewChild('patternCanvas') patternCanvas : ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;
  image = new Image();



  imageSources: string[] = [
    "../../assets/img1.png",
    "../../assets/img2.png",
    "../../assets/img3.png"
  ]

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.properties = new FormGroup({
      jointWidth : new FormControl(),
      jointColor : new FormControl(),
    })

    this.setPositionForm = new FormGroup({
      row1: new FormGroup({
        stoneName: new FormControl(),
        leftPosition: new FormControl(),
        topPosition: new FormControl()
      }),
      row2: new FormGroup({
        stoneName: new FormControl(),
        leftPosition: new FormControl(),
        topPosition: new FormControl()
      }),
      row3: new FormGroup({
        stoneName: new FormControl(),
        leftPosition: new FormControl(),
        topPosition: new FormControl()
      }),
      row4: new FormGroup({
        stoneName: new FormControl(),
        leftPosition: new FormControl(),
        topPosition: new FormControl()
      }),
      row5: new FormGroup({
        stoneName: new FormControl(),
        leftPosition: new FormControl(),
        topPosition: new FormControl()
      }),
      row6: new FormGroup({
        stoneName: new FormControl(),
        leftPosition: new FormControl(),
        topPosition: new FormControl()
      }),
      row7: new FormGroup({
        stoneName: new FormControl(),
        leftPosition: new FormControl(),
        topPosition: new FormControl()
      }),
      row8: new FormGroup({
        stoneName: new FormControl(),
        leftPosition: new FormControl(),
        topPosition: new FormControl()
      }),
      row9: new FormGroup({
        stoneName: new FormControl(),
        leftPosition: new FormControl(),
        topPosition: new FormControl()
      }),
      row10: new FormGroup({
        stoneName: new FormControl(),
        leftPosition: new FormControl(),
        topPosition: new FormControl()
      }),
      row11: new FormGroup({
        stoneName: new FormControl(),
        leftPosition: new FormControl(),
        topPosition: new FormControl()
      }),
      row12: new FormGroup({
        stoneName: new FormControl(),
        leftPosition: new FormControl(),
        topPosition: new FormControl()
      }),

    })


    let download = document.getElementById('download');
    download.style.display = 'none';

    this.ctx = this.patternCanvas.nativeElement.getContext('2d');
    // this.image.onload = () => {
    //   this.ctx.drawImage(this.image, 10,20);
    // }
    // this.image.src = this.imageSources[0];
    
  }

  onSubmit(){
    console.log(this.properties.value);
    this.selectedWidth = this.properties.value.jointWidth;
    this.selectedColor = this.properties.value.jointColor;
    this.changeCanvasBackground(this.selectedColor);
  }

  row1Inputs(){
    let leftPos = this.setPositionForm.value.row1.leftPosition;
    let topPos = this.setPositionForm.value.row1.topPosition;
    let imageIndex = this.setPositionForm.value.row1.stoneName;
    this.image.onload = () => {
      // this.ctx.clearRect(10,20,600,300);
      this.ctx.drawImage(this.image, leftPos,topPos);
    }
    this.image.src = this.imageSources[imageIndex];
    console.log(this.setPositionForm.value.row1,imageIndex)
  }

  row2Inputs(){
    let leftPos = this.setPositionForm.value.row2.leftPosition;
    let topPos = this.setPositionForm.value.row2.topPosition;
    let imageIndex = this.setPositionForm.value.row2.stoneName;
    this.image.onload = () => {
      // this.ctx.clearRect(10,20,600,300);
      this.ctx.drawImage(this.image, leftPos,topPos);
    }
    this.image.src = this.imageSources[imageIndex];
    console.log(this.setPositionForm.value.row1,imageIndex)
  }

  row3Inputs(){
    let leftPos = this.setPositionForm.value.row3.leftPosition;
    let topPos = this.setPositionForm.value.row3.topPosition;
    let imageIndex = this.setPositionForm.value.row3.stoneName;
    this.image.onload = () => {
      // this.ctx.clearRect(10,20,600,300);
      this.ctx.drawImage(this.image, leftPos,topPos);
    }
    this.image.src = this.imageSources[imageIndex];
    console.log(this.setPositionForm.value.row3,imageIndex)
  }

  row4Inputs(){
    let leftPos = this.setPositionForm.value.row4.leftPosition;
    let topPos = this.setPositionForm.value.row4.topPosition;
    let imageIndex = this.setPositionForm.value.row4.stoneName;
    this.image.onload = () => {
      // this.ctx.clearRect(10,20,600,300);
      this.ctx.drawImage(this.image, leftPos,topPos);
    }
    this.image.src = this.imageSources[imageIndex];
    console.log(this.setPositionForm.value.row4,imageIndex)
  }

  row5Inputs(){
    let leftPos = this.setPositionForm.value.row5.leftPosition;
    let topPos = this.setPositionForm.value.row5.topPosition;
    let imageIndex = this.setPositionForm.value.row5.stoneName;
    this.image.onload = () => {
      // this.ctx.clearRect(10,20,600,300);
      this.ctx.drawImage(this.image, leftPos,topPos);
    }
    this.image.src = this.imageSources[imageIndex];
    console.log(this.setPositionForm.value.row5,imageIndex)
  }

  row6Inputs(){
    let leftPos = this.setPositionForm.value.row6.leftPosition;
    let topPos = this.setPositionForm.value.row6.topPosition;
    let imageIndex = this.setPositionForm.value.row6.stoneName;
    this.image.onload = () => {
      // this.ctx.clearRect(10,20,600,300);
      this.ctx.drawImage(this.image, leftPos,topPos);
    }
    this.image.src = this.imageSources[imageIndex];
    console.log(this.setPositionForm.value.row6,imageIndex)
  }

  row7Inputs(){
    let leftPos = this.setPositionForm.value.row7.leftPosition;
    let topPos = this.setPositionForm.value.row7.topPosition;
    let imageIndex = this.setPositionForm.value.row7.stoneName;
    this.image.onload = () => {
      // this.ctx.clearRect(10,20,600,300);
      this.ctx.drawImage(this.image, leftPos,topPos);
    }
    this.image.src = this.imageSources[imageIndex];
    console.log(this.setPositionForm.value.row7,imageIndex)
  }

  row8Inputs(){
    let leftPos = this.setPositionForm.value.row8.leftPosition;
    let topPos = this.setPositionForm.value.row8.topPosition;
    let imageIndex = this.setPositionForm.value.row8.stoneName;
    this.image.onload = () => {
      // this.ctx.clearRect(10,20,600,300);
      this.ctx.drawImage(this.image, leftPos,topPos);
    }
    this.image.src = this.imageSources[imageIndex];
    console.log(this.setPositionForm.value.row8,imageIndex)
  }

  row9Inputs(){
    let leftPos = this.setPositionForm.value.row9.leftPosition;
    let topPos = this.setPositionForm.value.row9.topPosition;
    let imageIndex = this.setPositionForm.value.row9.stoneName;
    this.image.onload = () => {
      // this.ctx.clearRect(10,20,600,300);
      this.ctx.drawImage(this.image, leftPos,topPos);
    }
    this.image.src = this.imageSources[imageIndex];
    console.log(this.setPositionForm.value.row9,imageIndex)
  }

  row10Inputs(){
    let leftPos = this.setPositionForm.value.row10.leftPosition;
    let topPos = this.setPositionForm.value.row10.topPosition;
    let imageIndex = this.setPositionForm.value.row10.stoneName;
    this.image.onload = () => {
      // this.ctx.clearRect(10,20,600,300);
      this.ctx.drawImage(this.image, leftPos,topPos);
    }
    this.image.src = this.imageSources[imageIndex];
    console.log(this.setPositionForm.value.row10,imageIndex)
  }

  row11Inputs(){
    let leftPos = this.setPositionForm.value.row11.leftPosition;
    let topPos = this.setPositionForm.value.row11.topPosition;
    let imageIndex = this.setPositionForm.value.row11.stoneName;
    this.image.onload = () => {
      // this.ctx.clearRect(10,20,600,300);
      this.ctx.drawImage(this.image, leftPos,topPos);
    }
    this.image.src = this.imageSources[imageIndex];
    console.log(this.setPositionForm.value.row11,imageIndex)
  }

  row12Inputs(){
    let leftPos = this.setPositionForm.value.row12.leftPosition;
    let topPos = this.setPositionForm.value.row12.topPosition;
    let imageIndex = this.setPositionForm.value.row12.stoneName;
    this.image.onload = () => {
      // this.ctx.clearRect(10,20,600,300);
      this.ctx.drawImage(this.image, leftPos,topPos);
    }
    this.image.src = this.imageSources[imageIndex];
    console.log(this.setPositionForm.value.row12,imageIndex)
  }

  changeCanvasBackground(color){
    console.log(this.jointColors[color]["img"]);
    this.image.onload = () => {
      // this.ctx.clearRect(10,20,600,300);
      this.ctx.drawImage(this.image, 0,0,1500,1500);
    }
    this.image.src = this.jointColors[color]["img"];
    // this.patternCanvas.nativeElement.style.background= 'url('+this.jointColors[color]["img"]+')';
    // this.patternCanvas.nativeElement.style.backgroundSize = "100% 100%";
    
  }

  
  selectStone(event){
    console.log(event);
  }

  renderImage(x,y){
    console.log(this.link)
  }


  generateImage(){
    this.patternCanvas.nativeElement.toBlob(async (blob)=>{
      this.srcData = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(blob));
      this.link =await URL.createObjectURL(blob);
      console.log(this.link);
      let download = document.getElementById('download');
      download.style.display = "block";
      // let link = document.createElement("a");
      // link.download = "image.png";
      // link.href = URL.createObjectURL(blob);
      // link.click();
    })
    
    // document.getElementById("download").onclick = function() {

    //   var link = document.createElement("a");
    //   link.download = "image.png";
    
      

    //   this.patternCanvas.nativeElement.toBlob(function(blob){
    //     link.href = URL.createObjectURL(blob);
    //     console.log(blob);
    //   },'image/png');
    
    //   console.log(link.href);
    //   link.click();
    
    // }
  }

  ngAfterViewInit(){
    // document.getElementById('download').addEventListener('click',()=>{
    //   var link = document.getElementById('link');
    //   this.patternCanvas.nativeElement.toBlob((blob)=>{
        
    //   })
    // })
  }

  public configStage: Observable<any> = of({
    width:200,
    height:300
  });

  public configCircle: Observable<any> = of({
    x: 100,
    y: 100,
    radius: 70,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4,
    draggable: true,

  });
  

  

  
  

 

}
