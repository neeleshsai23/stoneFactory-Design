import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    this.images1 = this.loadImages([this.sampleImage]);
    this.loadCanvas();
    this.loadCanvas1();
    this.loadCanvas2();
    this.loadCanvas3();
    console.log(this.images1[0].src);
  }

  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;
  @ViewChild('canvas1') canvas1: ElementRef<HTMLCanvasElement>;
  @ViewChild('canvas2') canvas2: ElementRef<HTMLCanvasElement>;
  @ViewChild('canvas3') canvas3: ElementRef<HTMLCanvasElement>;


  ctx:CanvasRenderingContext2D;
  ctx1:CanvasRenderingContext2D;
  ctx2:CanvasRenderingContext2D;
  ctx3:CanvasRenderingContext2D;
  image = new Image();
  image1 = new Image();
  image2 = new Image();
  image3 = new Image();


  width = 300;
  height = 200;

  sampleImage = '../assets/handcut.jpg';
  sampleImage1 = '../assets/handcut.jpg';
  sampleImage2 = '../assets/handcut.jpg';


  loadCanvas(){
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.image.onload = () =>{
      this.ctx.beginPath();
      this.ctx.moveTo(1,5);
      this.ctx.lineTo(10,4);
      this.ctx.lineTo(20,2);
      this.ctx.lineTo(30,3);
      this.ctx.lineTo(40,0);
      this.ctx.lineTo(50,4);
      this.ctx.lineTo(100,6);
      this.ctx.lineTo(120,4);
      this.ctx.lineTo(150,0);
      this.ctx.lineTo(170,3);
      this.ctx.lineTo(180,2);
      this.ctx.lineTo(190,1);
      this.ctx.lineTo(200,3);
      this.ctx.lineTo(210,4);
      this.ctx.lineTo(220,2);
      this.ctx.lineTo(230,3);
      this.ctx.lineTo(240,5);
      this.ctx.lineTo(250,3);
      this.ctx.lineTo(260,2);
      this.ctx.lineTo(270,3);
      this.ctx.lineTo(280,1);
      this.ctx.lineTo(300,1);
      this.ctx.lineTo(298,4);
      this.ctx.lineTo(299,8);
      this.ctx.lineTo(300,10);
      this.ctx.lineTo(298,20);
      this.ctx.lineTo(297,30);
      this.ctx.lineTo(296,40);
      this.ctx.lineTo(298,50);
      this.ctx.lineTo(295,100);
      this.ctx.lineTo(297,110);
      this.ctx.lineTo(296,120);
      this.ctx.lineTo(297,130);
      this.ctx.lineTo(300,140);
      this.ctx.lineTo(299,150);
      this.ctx.lineTo(297,160);
      this.ctx.lineTo(299,170);
      this.ctx.lineTo(298,180);
      this.ctx.quadraticCurveTo(300,200,295,198);
      // this.ctx.lineTo(296,190);
      // this.ctx.lineTo(298,200);
      // this.ctx.lineTo(299,199);
      // this.ctx.lineTo(295,198);
      this.ctx.lineTo(290,197);
      this.ctx.lineTo(280,196);
      this.ctx.lineTo(270,198);
      this.ctx.lineTo(260,196);
      this.ctx.lineTo(250,197);
      this.ctx.lineTo(200,198);
      this.ctx.lineTo(170,197);
      this.ctx.lineTo(160,196);
      this.ctx.lineTo(140,195);
      this.ctx.lineTo(130,196);
      this.ctx.lineTo(120,195);
      this.ctx.lineTo(100,196);
      this.ctx.lineTo(80,197);
      this.ctx.lineTo(50,199);
      this.ctx.lineTo(40,198);
      this.ctx.lineTo(30,196);
      this.ctx.lineTo(20,197);
      this.ctx.lineTo(10,196);
      this.ctx.quadraticCurveTo(0,200,4,190);
      // this.ctx.lineTo(7,197);
      // this.ctx.lineTo(6,197);
      // this.ctx.lineTo(5,197);
      // this.ctx.lineTo(4,198);
      // this.ctx.lineTo(2,198);
      // this.ctx.lineTo(3,195);
      // this.ctx.lineTo(4,190);
      this.ctx.lineTo(3,180);
      this.ctx.lineTo(2,170);
      this.ctx.lineTo(4,160);
      this.ctx.lineTo(3,150);
      this.ctx.lineTo(3,140);
      this.ctx.lineTo(3,130);
      this.ctx.lineTo(2,120);
      this.ctx.lineTo(4,110);
      this.ctx.lineTo(5,100);
      this.ctx.lineTo(2,90);
      this.ctx.lineTo(3,80);
      this.ctx.lineTo(3,70);
      this.ctx.lineTo(2,60);
      this.ctx.lineTo(1,50);
      this.ctx.lineTo(3,40);
      this.ctx.lineTo(3,30);
      this.ctx.lineTo(4,20);
      this.ctx.lineTo(2,10);
      // this.ctx.quadraticCurveTo(0,0,1,5);
      this.ctx.lineTo(1,5);
      // this.ctx.lineTo(0,0)
      this.ctx.clip();
      this.ctx.drawImage(this.image,0,0,300,200);
      this.ctx.restore();
    }
    this.image.src = this.images1[0].src;
   
  
  }

  loadCanvas1(){
    this.ctx1 = this.canvas1.nativeElement.getContext('2d');
    this.image1.onload = () =>{
      this.ctx1.beginPath();
      // this.ctx1.moveTo(1,5);
      this.ctx1.moveTo(10,4);
      this.ctx1.lineTo(20,6);
      this.ctx1.lineTo(30,7);
      this.ctx1.lineTo(40,8);
      this.ctx1.lineTo(50,5);
      this.ctx1.lineTo(60,4);
      this.ctx1.lineTo(70,8);
      this.ctx1.lineTo(80,7);
      this.ctx1.lineTo(90,5);
      this.ctx1.lineTo(100,6);
      this.ctx1.lineTo(120,4);
      this.ctx1.lineTo(150,3);
      this.ctx1.lineTo(170,1);
      this.ctx1.lineTo(180,4);
      this.ctx1.lineTo(190,5);
      this.ctx1.lineTo(200,6);
      this.ctx1.lineTo(210,8);
      this.ctx1.lineTo(220,4);
      this.ctx1.lineTo(230,8);
      this.ctx1.lineTo(240,7);
      this.ctx1.lineTo(250,9);
      this.ctx1.lineTo(260,2);
      this.ctx1.lineTo(270,3);
      // this.ctx1.lineTo(280,1);
      // this.ctx1.lineTo(300,1);
      // this.ctx1.lineTo(298,4);
      // this.ctx1.lineTo(299,8);
      this.ctx1.quadraticCurveTo(300,0,298,20);
      // this.ctx1.lineTo(300,10);
      // this.ctx1.lineTo(298,20);
      this.ctx1.lineTo(297,30);
      this.ctx1.lineTo(295,40);
      this.ctx1.lineTo(298,50);
      this.ctx1.lineTo(293,100);
      this.ctx1.lineTo(297,110);
      this.ctx1.lineTo(295,120);
      this.ctx1.lineTo(297,130);
      this.ctx1.lineTo(294,140);
      this.ctx1.lineTo(299,150);
      this.ctx1.lineTo(297,160);
      // this.ctx1.lineTo(299,170);
      // this.ctx1.lineTo(298,180);
      this.ctx1.quadraticCurveTo(300,200,250,198);
      // this.ctx1.lineTo(296,190);
      // this.ctx1.lineTo(298,200);
      // this.ctx1.lineTo(299,199);
      // this.ctx1.lineTo(295,198);
      // this.ctx1.lineTo(290,197);
      // this.ctx1.lineTo(280,196);
      // this.ctx1.lineTo(270,198);
      // this.ctx1.lineTo(260,196);
      this.ctx1.lineTo(250,197);
      this.ctx1.lineTo(200,198);
      this.ctx1.lineTo(170,194);
      this.ctx1.lineTo(160,196);
      this.ctx1.lineTo(140,193);
      this.ctx1.lineTo(130,196);
      this.ctx1.lineTo(120,192);
      this.ctx1.lineTo(100,196);
      this.ctx1.lineTo(80,193);
      this.ctx1.lineTo(50,195);
      this.ctx1.lineTo(40,194);
      this.ctx1.lineTo(30,196);
      this.ctx1.lineTo(20,192);
      this.ctx1.lineTo(10,196);
      this.ctx1.quadraticCurveTo(0,200,4,170);
      // this.ctx1.lineTo(7,197);
      // this.ctx1.lineTo(6,197);
      // this.ctx1.lineTo(5,197);
      // this.ctx1.lineTo(4,198);
      // this.ctx1.lineTo(2,198);
      // this.ctx1.lineTo(3,195);
      // this.ctx1.lineTo(4,190);
      // this.ctx1.lineTo(3,180);
      // this.ctx1.lineTo(2,170);
      this.ctx1.lineTo(4,160);
      this.ctx1.lineTo(3,150);
      this.ctx1.lineTo(7,140);
      this.ctx1.lineTo(5,130);
      this.ctx1.lineTo(2,120);
      this.ctx1.lineTo(8,110);
      this.ctx1.lineTo(5,100);
      this.ctx1.lineTo(6,90);
      this.ctx1.lineTo(3,80);
      this.ctx1.lineTo(4,70);
      this.ctx1.lineTo(2,60);
      this.ctx1.lineTo(1,50);
      // this.ctx1.lineTo(3,40);
      // this.ctx1.lineTo(5,30);
      // this.ctx1.lineTo(7,20);
      // this.ctx1.lineTo(2,10);
      // this.ctx1.quadraticCurveTo(0,0,1,5);
      this.ctx1.quadraticCurveTo(0,0,10,4);
      // this.ctx1.lineTo(1,5);
      // this.ctx1.lineTo(0,0)
      this.ctx1.clip();
      this.ctx1.drawImage(this.image1,0,0,300,200);
      this.ctx1.restore();
    }
    this.image1.src = this.images1[0].src;
  }

  loadCanvas2(){
    this.ctx2 = this.canvas2.nativeElement.getContext('2d');
    this.image2.onload = () =>{
      this.ctx2.beginPath();
      this.ctx2.moveTo(40,2);
      // this.ctx2.lineTo(10,4);
      // this.ctx2.lineTo(20,2);
      // this.ctx2.lineTo(30,3);
      // this.ctx2.lineTo(40,0);
      this.ctx2.lineTo(50,4);
      this.ctx2.lineTo(60,4);
      this.ctx2.lineTo(70,2);
      this.ctx2.lineTo(80,6);
      this.ctx2.lineTo(90,4);
      this.ctx2.lineTo(100,6);
      this.ctx2.lineTo(120,4);
      this.ctx2.lineTo(150,5);
      this.ctx2.lineTo(170,3);
      this.ctx2.lineTo(180,2);
      this.ctx2.lineTo(190,1);
      this.ctx2.lineTo(200,3);
      this.ctx2.lineTo(210,4);
      this.ctx2.lineTo(220,2);
      this.ctx2.lineTo(230,3);
      this.ctx2.lineTo(240,5);
      this.ctx2.lineTo(250,3);
      this.ctx2.lineTo(260,2);
      this.ctx2.lineTo(270,3);
      this.ctx2.quadraticCurveTo(300,0,297,50)
      // this.ctx2.lineTo(280,1);
      // this.ctx2.lineTo(300,1);
      // this.ctx2.lineTo(298,4);
      // this.ctx2.lineTo(299,8);
      // this.ctx2.lineTo(300,10);
      // this.ctx2.lineTo(298,20);
      // this.ctx2.lineTo(297,30);
      // this.ctx2.lineTo(296,40);
      this.ctx2.lineTo(298,60);
      this.ctx2.lineTo(294,70);
      this.ctx2.lineTo(295,80);
      this.ctx2.lineTo(297,90);
      this.ctx2.lineTo(295,100);
      this.ctx2.lineTo(297,110);
      this.ctx2.lineTo(296,120);
      this.ctx2.lineTo(297,130);
      this.ctx2.lineTo(295,140);
      this.ctx2.lineTo(294,150);
      this.ctx2.lineTo(297,160);
      this.ctx2.lineTo(296,170);
      // this.ctx2.lineTo(294,180);
      this.ctx2.quadraticCurveTo(300,200,280,198);
      // this.ctx2.lineTo(296,190);
      // this.ctx2.lineTo(298,200);
      // this.ctx2.lineTo(299,199);
      // this.ctx2.lineTo(295,198);
      // this.ctx2.lineTo(290,197);
      // this.ctx2.lineTo(280,196);
      this.ctx2.lineTo(270,198);
      this.ctx2.lineTo(260,196);
      this.ctx2.lineTo(250,197);
      this.ctx2.lineTo(200,198);
      this.ctx2.lineTo(170,197);
      this.ctx2.lineTo(160,196);
      this.ctx2.lineTo(140,195);
      this.ctx2.lineTo(130,196);
      this.ctx2.lineTo(120,195);
      this.ctx2.lineTo(100,196);
      this.ctx2.lineTo(80,197);
      this.ctx2.lineTo(50,199);
      this.ctx2.lineTo(40,198);
      // this.ctx2.lineTo(30,196);
      // this.ctx2.lineTo(20,197);
      // this.ctx2.lineTo(10,196);
      this.ctx2.quadraticCurveTo(0,200,4,160);
      // this.ctx2.lineTo(7,197);
      // this.ctx2.lineTo(6,197);
      // this.ctx2.lineTo(5,197);
      // this.ctx2.lineTo(4,198);
      // this.ctx2.lineTo(2,198);
      // this.ctx2.lineTo(3,195);
      // this.ctx2.lineTo(4,190);
      // this.ctx2.lineTo(3,180);
      // this.ctx2.lineTo(2,170);
      // this.ctx2.lineTo(4,160);
      this.ctx2.lineTo(3,150);
      this.ctx2.lineTo(5,140);
      this.ctx2.lineTo(6,130);
      this.ctx2.lineTo(4,120);
      this.ctx2.lineTo(2,110);
      this.ctx2.lineTo(7,100);
      this.ctx2.lineTo(4,90);
      this.ctx2.lineTo(7,80);
      this.ctx2.lineTo(5,70);
      this.ctx2.lineTo(2,60);
      // this.ctx2.lineTo(1,50);
      // this.ctx2.lineTo(3,40);
      // this.ctx2.lineTo(3,30);
      // this.ctx2.lineTo(4,20);
      // this.ctx2.lineTo(2,10);
      this.ctx2.quadraticCurveTo(0,0,20,2);
      // this.ctx2.lineTo(1,5);
      // this.ctx2.lineTo(0,0)
      this.ctx2.clip();
      this.ctx2.drawImage(this.image2,0,0,300,200);
      this.ctx2.restore();
    }
    this.image2.src = this.images1[0].src;
  }

  // Rounded Corner Canvas

  loadCanvas3(){
    
    this.ctx3 = this.canvas3.nativeElement.getContext('2d');
    this.image3.onload = () =>{
      this.ctx3.save();
      this.roundedImage(0,0,this.width,this.height,10);
      this.ctx3.clip();
      this.ctx3.drawImage(this.image3,0,0,this.width,this.height);
      this.ctx3.restore();
    }
    this.image3.src = this.images1[0].src;
  
  }

  roundedImage(x,y,width,height,radius){
    this.ctx3.beginPath();
    this.ctx3.moveTo(x + radius, y);
    this.ctx3.lineTo(x + width - radius, y);
    this.ctx3.quadraticCurveTo(x + width, y, x + width, y + radius);
    this.ctx3.lineTo(x + width, y + height - radius);
    this.ctx3.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    this.ctx3.lineTo(x + radius, y + height);
    this.ctx3.quadraticCurveTo(x, y + height, x, y + height - radius);
    this.ctx3.lineTo(x, y + radius);
    this.ctx3.quadraticCurveTo(x, y, x + radius, y);
    this.ctx3.closePath();
  }

  loadcount = 0;
  loadtotal = 0;
  preloaded = false;
  images1:any;
  
  // Load images
  loadImages(imagefiles) {
      // Initialize variables
      this.loadcount = 0;
      this.loadtotal = imagefiles.length;
      this.preloaded = false;
  
      // Load the images
      var loadedimages = [];
      for (var i=0; i<imagefiles.length; i++) {
          // Create the image object
          var image = new Image();
  
          // Add onload event handler
          image.onload = () => {
              this.loadcount++;
              if (this.loadcount == this.loadtotal) {
                  // Done loading
                  this.preloaded = true;
              }
          };
  
          // Set the source url of the image
          image.src = imagefiles[i];
  
          // Save to the image array
          loadedimages[i] = image;
      }
  
      // Return an array of images
      return loadedimages;
  }


  


}
