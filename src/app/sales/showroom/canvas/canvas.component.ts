import { Quote } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild,ViewEncapsulation} from '@angular/core';
import { async } from '@angular/core/testing';
import { MatDialog } from '@angular/material';
import { ShowroomLayoutComponent } from '../showroom-layout/showroom-layout.component';
import { GetQuoteDialogComponent } from './get-quote-dialog/get-quote-dialog.component';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CanvasComponent implements OnInit {

  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;
  @ViewChild('canvas1') canvas1: ElementRef<HTMLCanvasElement>;
  @ViewChild('canvas2') canvas2: ElementRef<HTMLCanvasElement>;
  @ViewChild('canvas3') canvas3: ElementRef<HTMLCanvasElement>;
  @ViewChild('canvas4') canvas4: ElementRef<HTMLCanvasElement>;
  @ViewChild('canvas5') canvas5: ElementRef<HTMLCanvasElement>;
  @ViewChild('canvas6') canvas6: ElementRef<HTMLCanvasElement>;
  @ViewChild('canvas7') canvas7: ElementRef<HTMLCanvasElement>;
  @ViewChild('canvas8') canvas8: ElementRef<HTMLCanvasElement>;
  @ViewChild('canvas9') canvas9: ElementRef<HTMLCanvasElement>;
  @ViewChild('canvas10') canvas10: ElementRef<HTMLCanvasElement>;
  @ViewChild('canvas11') canvas11: ElementRef<HTMLCanvasElement>;
  @ViewChild('canvas12') canvas12:ElementRef<HTMLCanvasElement>;


  @Input() colour: any;
  @Input() layout: any;
  @Input() background: any;
  @Output() newItemEvent = new EventEmitter<boolean>();
  view = false;
  Pattern = false;
  angle = false;
  size = false;
  color = false;
  jointwidth = false;
  perspective1 : boolean = false;
  perspective2 : boolean = false;
  imageid;

  defaultpattern = 0;
  defaultangle = 0;
  defaultsize = 0;
  defaultcolor = 1;
  defaultwidth = 0;
  cart_quantity = Number(window.sessionStorage.getItem('quantity')) ;

  x = 0;
  y = 0;
  count = 0;
  width = window.innerWidth + 15;
  height = window.innerHeight;
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;
  dwidth = window.innerWidth + 15;
  dheight = window.innerHeight;
  
  ctx: CanvasRenderingContext2D;
  ctx1: CanvasRenderingContext2D;
  ctx2: CanvasRenderingContext2D;
  ctx3: CanvasRenderingContext2D;
  ctx4: CanvasRenderingContext2D;
  ctx5: CanvasRenderingContext2D;
  ctx6: CanvasRenderingContext2D;
  ctx7: CanvasRenderingContext2D;
  ctx8: CanvasRenderingContext2D;
  ctx9: CanvasRenderingContext2D;
  ctx10: CanvasRenderingContext2D;
  ctx11: CanvasRenderingContext2D;
  ctx12: CanvasRenderingContext2D;


  image = new Image();
  backgroundCanvas = new Image();
  randomImage = new Image();

  sampleImage = '../../../assets/image1.PNG';
  sampleImage2 = '../../../assets/image2.PNG';

  sizes = [
    {id:0, width:45, height:20},
    {id:1, width:30,height:10} 
  ]


  colors = [
    {id:0, value:'../../../assets/darkgray.jpg'},
    {id:1, value:'../../../assets/midgray.jpg'},
    {id:2, value:'../../../assets/ivory.jpg'},
    {id:3, value:'../../../assets/white.jfif'}
  ]

  widths = [
    {id:0, value:0},
    {id:1, value:2},
    {id:2, value:4},
    {id:3, value:6}
  ]


  patternList = [
    { id: 1, link: '../../../assets/brokenbond.PNG', value: 'Broken bond' },
    { id: 2, link: '../../../assets/stack.PNG', value: 'Stack' },
    { id: 3, link: '../../../assets/flemish.PNG', value: 'Flemish' },
    { id: 4, link: '../../../assets/english.PNG', value: 'English' }
  ]

  colorList = [
    { id: 1, link: '../../../assets/dg.png', value: 'Dark Grey' },
    { id: 2, link: '../../../assets/natural.png', value: 'Natural' },
    { id: 3, link: '../../../assets/buff.png', value: 'Buff' },
    { id: 4, link: '../../../assets/white.png', value: 'White' }
  ]

  widthList = [
    { id: 0, link: '../../../assets/dg.png', value: '0' },
    { id: 2, link: '../../../assets/natural.png', value: '2' },
    { id: 4, link: '../../../assets/buff.png', value: '4' },
    { id: 6, link: '../../../assets/white.png', value: '6' }
  ];

  angleList = [
    {
      "id": "1",
      "link": '../../../assets/0.PNG',
      "value": '0',
      layout: [
        { id: 1, link: '../../../assets/product1BBs1.png', value: 'Broken bond' },
        { id: 2, link: '../../../assets/product1Stacks1.png', value: 'Stack' },
        { id: 3, link: '../../../assets/product1Flemish.png', value: 'Flemish' },
        { id: 4, link: '../../../assets/product1English.png', value: 'English' }
      ]
    },
    {
      "id": "2",
      "link": "../../../assets/45.PNG",
      "value": "45",
      
    },
    {
      "id": "3",
      "link": "../../../assets/-45.PNG",
      "value": "-45",

    },
    {
      "id": "4",
      "link": "../../../assets/90.PNG",
      "value": '90',
      layout: [
        { id: 1, link: '../../../assets/product1BBs190.png', value: 'Broken bond' },
        { id: 2, link: '../../../assets/product1Stacks190.png', value: 'Stack' },
        { id: 3, link: '../../../assets/product1Flemish90.png', value: 'Flemish' },
        { id: 4, link: '../../../assets/product1English90.png', value: 'English' }
      ]
    },
    
  ]

  sizeList = [{
    "id": "1",
    "link": '../../../assets/90.png',
    "value": '215*65',
    "size": [{
      "angle": '0',
      layout: [
        { id: 1, link: '../../../assets/product1BBs1.png', value: 'Broken bond' },
        { id: 2, link: '../../../assets/product1Stacks1.png', value: 'Stack' },
        { id: 3, link: '../../../assets/product1Flemish.png', value: 'Flemish' },
        { id: 4, link: '../../../assets/product1English.png', value: 'English' }
      ]
    },
    {
      "angle": "45" 
    },
    {
      "angle": "-45"
    },
    {
      "angle": '90',
      layout: [
        { id: 1, link: '../../../assets/product1BBs190.png', value: 'Broken bond' },
        { id: 2, link: '../../../assets/product1Stacks190.png', value: 'Stack' },
        { id: 3, link: '../../../assets/product1Flemish90.png', value: 'Flemish' },
        { id: 4, link: '../../../assets/product1English90.png', value: 'English' }
      ]
    }],
  },

  {
    "id": "2",
    "link": "../../../assets/0.png",
    "value": '102*65',
    "size": [{
      "angle": '0',
      layout: [
        { id: 1, link: '../../../assets/product1BBs2.png', value: 'Broken bond' },
        { id: 2, link: '../../../assets/product1Stacks2.png', value: 'Stack' },
        { id: 3, link: '../../../assets/product1Flemish.png', value: 'Flemish' },
        { id: 4, link: '../../../assets/product1English.png', value: 'English' }
      ]
    },
    {
      "angle": "45" 
    },
    {
      "angle": "-45"
    },
    {
      "angle": '90',
      layout: [
        { id: 1, link: '../../../assets/product1BBs290.png', value: 'Broken bond' },
        { id: 2, link: '../../../assets/product1Stacks290.png', value: 'Stack' },
        { id: 3, link: '../../../assets/product1Flemish90.png', value: 'Flemish' },
        { id: 4, link: '../../../assets/product1English90.png', value: 'English' }
      ]
    }],
  },
    // {
    //   "id":"3" ,
    //   "link":"../../../assets/0.png",
    //   "value" :'2 Size Max',
    //   "size" : [{
    //     "angle" : '0',
    //     layout: [
    //       { id: 1, link: '../../../assets/bd-0-2max.png', value: 'Broken bond' },
    //       { id: 2, link: '../../../assets/bd-0-2max.png', value: 'Stack' },
    //       { id: 3, link: '../../../assets/bd-0-2max.png', value: 'Flemish' },
    //       { id: 4, link: '../../../assets/bd-0-2max.png', value: 'English' }
    //     ]
    //   },
    //   {
    //     "angle" : '90',
    //     layout: [
    //       { id: 1, link: '../../../assets/bd-90-2max.png', value: 'Broken bond' },
    //       { id: 2, link: '../../../assets/bd-90-2max.png', value: 'Stack' },
    //       { id: 3, link: '../../../assets/bd-90-2max.png', value: 'Flemish' },
    //       { id: 4, link: '../../../assets/bd-90-2max.png', value: 'English' }
    //     ]
    //   }],
    // } 
  ]
  backgroundImage = [
    // { id: 1, link: '../../../assets/bg1.png' },
    { id: 1, link: '../../../assets/bg2.png' },
    { id: 2, link: '../../../assets/bg3.png' },
    { id: 3, link: '../../../assets/bg4.png' },
    { id: 4, link: '../../../assets/bg5.png' },
    { id: 5, link: '../../../assets/bg6.png' },
    { id: 6, link: '../../../assets/bg7.png' },
  ]

  colourlist = [
    {
      layout: [
        '../../../assets/brick1s1.png',
        '../../../assets/brick1s2.png',
        '../../../assets/brick1s3.png',
        '../../../assets/brick1s4.png'
      ]
    },
    {
      layout: [
        '../../../assets/brick2s1.png',
        '../../../assets/brick2s2.png',
        '../../../assets/brick2s3.png',
        '../../../assets/brick2s4.png'
      ]
    }
  ]
  constructor(public dialog: MatDialog) { }


  selectColour(value: boolean) {
    this.newItemEvent.emit(value);
  }

  openQuoteDialog(Quote){
    const dialogRef = this.dialog.open(GetQuoteDialogComponent,{
      data: Quote,
      height: "auto",
      width: "400px",
      autoFocus: false,


    });
    dialogRef.afterClosed().subscribe(Quote => {
      if (Quote === 'save') {
        
      } else {
      }
    });
  }


  ngOnInit() {
    
    window.sessionStorage.setItem('quantity','0');
    this.imageid = Number(window.sessionStorage.getItem('imageid'));
    this.images1 = this.loadImages([this.sampleImage,this.sampleImage2]);
    if(this.imageid==2){
     this.loadCanvas();
    }else{
      this.loadData();
    }

  }

  getImageId(id) {
  }


  layoutlist =  [   
    [
        {
            id: 0,
            name: "Broken Bond",
            angle: [
              {
                id: 1,
                name: "0",
                size: [
                  {
                    id: 1,
                    name: "215 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product1BBs1.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product1BBs1.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product1BBs1.png" },
                      { id: 4, name: "White", link: "../../../assets/product1BBs1.png" }
                    ]
                  },
                  {
                    id: 2,
                    name: "102 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product1BBs2.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product1BBs2.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product1BBs2.png" },
                      { id: 4, name: "White", link: "../../../assets/product1BBs2.png" }
                    ]
                  },
                ]
              },
              {
                id: 2,
                name: "45",
                size: [
                  {
                    id: 1,
                    name: "215 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product1BBs190.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product1BBs190.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product1BBs190.png" },
                      { id: 4, name: "White", link: "../../../assets/product1BBs190.png" }
                    ]
                  },
                  {
                    id: 2,
                    name: "102 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product1BBs290.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product1BBs290.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product1BBs290.png" },
                      { id: 4, name: "White", link: "../../../assets/product1BBs290.png" }
                    ]
                  },
                 
                ]
              },
              {
                id: 3,
                name: "-45",
                size: [
                  {
                    id: 1,
                    name: "215 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product1BBs190.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product1BBs190.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product1BBs190.png" },
                      { id: 4, name: "White", link: "../../../assets/product1BBs190.png" }
                    ]
                  },
                  {
                    id: 2,
                    name: "102 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product1BBs290.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product1BBs290.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product1BBs290.png" },
                      { id: 4, name: "White", link: "../../../assets/product1BBs290.png" }
                    ]
                  },
                 
                ]
              },
              {
                id: 4,
                name: "90",
                size: [
                  {
                    id: 1,
                    name: "215 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product1BBs190.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product1BBs190.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product1BBs190.png" },
                      { id: 4, name: "White", link: "../../../assets/product1BBs190.png" }
                    ]
                  },
                  {
                    id: 2,
                    name: "102 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product1BBs290.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product1BBs290.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product1BBs290.png" },
                      { id: 4, name: "White", link: "../../../assets/product1BBs290.png" }
                    ]
                  },
                 
                ]
              }
            ]
          },
          {
            id: 2,
            name: "Stack",
            angle: [
              {
                id: 1,
                name: "0",
                size: [
                  {
                    id: 1,
                    name: "215 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product1Stacks1.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product1Stacks1.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product1Stacks1.png" },
                      { id: 4, name: "White", link: "../../../assets/product1Stacks1.png" }
                    ]
                  },
                  {
                    id: 2,
                    name: "102 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product1Stacks2.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product1Stacks2.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product1Stacks2.png" },
                      { id: 4, name: "White", link: "../../../assets/product1Stacks2.png" }
                    ]
                  }
                ]
              },
              {
                id: 2,
                name: "45",
                size: [
                  {
                    id: 1,
                    name: "215 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product1Stacks190.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product1Stacks190.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product1Stacks190.png" },
                      { id: 4, name: "White", link: "../../../assets/product1Stacks190.png" }
                    ]
                  },
                  {
                    id: 2,
                    name: "102 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product1Stacks290.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product1Stacks290.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product1Stacks290.png" },
                      { id: 4, name: "White", link: "../../../assets/product1Stacks290.png" }
                    ]
                  }
                ]
              },
              {
                id: 3,
                name: "-45",
                size: [
                  {
                    id: 1,
                    name: "215 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product1Stacks190.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product1Stacks190.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product1Stacks190.png" },
                      { id: 4, name: "White", link: "../../../assets/product1Stacks190.png" }
                    ]
                  },
                  {
                    id: 2,
                    name: "102 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product1Stacks290.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product1Stacks290.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product1Stacks290.png" },
                      { id: 4, name: "White", link: "../../../assets/product1Stacks290.png" }
                    ]
                  }
                ]
              },
              {
                id: 4,
                name: "90",
                size: [
                  {
                    id: 1,
                    name: "215 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product1Stacks190.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product1Stacks190.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product1Stacks190.png" },
                      { id: 4, name: "White", link: "../../../assets/product1Stacks190.png" }
                    ]
                  },
                  {
                    id: 2,
                    name: "102 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product1Stacks290.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product1Stacks290.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product1Stacks290.png" },
                      { id: 4, name: "White", link: "../../../assets/product1Stacks290.png" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 3,
            name: "Flemish",
            angle: [
              {
                id: 1,
                name: "0",
                size: [
                  {
                    id: 1,
                    name: "215 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product1Flemish.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product1Flemish.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product1Flemish.png" },
                      { id: 4, name: "White", link: "../../../assets/product1Flemish.png" }
                    ]
                  },
                  {
                    id: 2,
                    name: "102 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product1Flemish.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product1Flemish.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product1Flemish.png" },
                      { id: 4, name: "White", link: "../../../assets/product1Flemish.png" }
                    ]
                  }
                ]
              },
              {
                id: 2,
                name: "45",
                size: [
                  {
                    id: 1,
                    name: "215 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product1Flemish90.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product1Flemish90.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product1Flemish90.png" },
                      { id: 4, name: "White", link: "../../../assets/product1Flemish90.png" }
                    ]
                  },
                  {
                    id: 2,
                    name: "102 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product1Flemish90.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product1Flemish90.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product1Flemish90.png" },
                      { id: 4, name: "White", link: "../../../assets/product1Flemish90.png" }
                    ]
                  }
                ]
              },
              {
                id: 3,
                name: "-45",
                size: [
                  {
                    id: 1,
                    name: "215 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product1Flemish90.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product1Flemish90.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product1Flemish90.png" },
                      { id: 4, name: "White", link: "../../../assets/product1Flemish90.png" }
                    ]
                  },
                  {
                    id: 2,
                    name: "102 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product1Flemish90.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product1Flemish90.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product1Flemish90.png" },
                      { id: 4, name: "White", link: "../../../assets/product1Flemish90.png" }
                    ]
                  }
                ]
              },
              {
                id: 4,
                name: "90",
                size: [
                  {
                    id: 1,
                    name: "215 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product1Flemish90.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product1Flemish90.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product1Flemish90.png" },
                      { id: 4, name: "White", link: "../../../assets/product1Flemish90.png" }
                    ]
                  },
                  {
                    id: 2,
                    name: "102 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product1Flemish90.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product1Flemish90.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product1Flemish90.png" },
                      { id: 4, name: "White", link: "../../../assets/product1Flemish90.png" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 4,
            name: "English",
            angle: [
              {
                id: 1,
                name: "0",
                size: [
                  {
                    id: 1,
                    name: "215 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product1English.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product1English.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product1English.png" },
                      { id: 4, name: "White", link: "../../../assets/product1English.png" }
                    ]
                  },
                  {
                    id: 2,
                    name: "102 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product1English.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product1English.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product1English.png" },
                      { id: 4, name: "White", link: "../../../assets/product1English.png" }
                    ]
                  }
                ]
              },
              {
                id: 2,
                name: "45",
                size: [
                  {
                    id: 1,
                    name: "215 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product1English90.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product1English90.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product1English90.png" },
                      { id: 4, name: "White", link: "../../../assets/product1English90.png" }
                    ]
                  },
                  {
                    id: 2,
                    name: "102 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product1English90.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product1English90.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product1English90.png" },
                      { id: 4, name: "White", link: "../../../assets/product1English90.png" }
                    ]
                  }
                ]
              },
              {
                id: 3,
                name: "-45",
                size: [
                  {
                    id: 1,
                    name: "215 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product1English90.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product1English90.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product1English90.png" },
                      { id: 4, name: "White", link: "../../../assets/product1English90.png" }
                    ]
                  },
                  {
                    id: 2,
                    name: "102 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product1English90.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product1English90.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product1English90.png" },
                      { id: 4, name: "White", link: "../../../assets/product1English90.png" }
                    ]
                  }
                ]
              },
              {
                id: 4,
                name: "90",
                size: [
                  {
                    id: 1,
                    name: "215 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product1English90.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product1English90.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product1English90.png" },
                      { id: 4, name: "White", link: "../../../assets/product1English90.png" }
                    ]
                  },
                  {
                    id: 2,
                    name: "102 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product1English90.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product1English90.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product1English90.png" },
                      { id: 4, name: "White", link: "../../../assets/product1English90.png" }
                    ]
                  }
                ]
              }
            ]
          }  
    ],
    [
        {
            id: 1,
            name: "Broken Bond",
            angle: [
              {
                id: 1,
                name: "0",
                size: [
                  {
                    id: 1,
                    name: "215 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product2BBs1.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product2BBs1.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product2BBs1.png" },
                      { id: 4, name: "White", link: "../../../assets/product2BBs1.png" }
                    ]
                  },
                  {
                    id: 2,
                    name: "102 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product2BBs2.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product2BBs2.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product2BBs2.png" },
                      { id: 4, name: "White", link: "../../../assets/product2BBs2.png" }
                    ]
                  },
                ]
              },
              {
                id: 2,
                name: "45",
                size: [
                  {
                    id: 1,
                    name: "215 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product2BBs190.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product2BBs190.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product2BBs190.png" },
                      { id: 4, name: "White", link: "../../../assets/product2BBs190.png" }
                    ]
                  },
                  {
                    id: 2,
                    name: "102 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product2BBs290.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product2BBs290.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product2BBs290.png" },
                      { id: 4, name: "White", link: "../../../assets/product2BBs290.png" }
                    ]
                  },
                 
                ]
              },
              {
                id: 3,
                name: "-45",
                size: [
                  {
                    id: 1,
                    name: "215 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product2BBs190.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product2BBs190.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product2BBs190.png" },
                      { id: 4, name: "White", link: "../../../assets/product2BBs190.png" }
                    ]
                  },
                  {
                    id: 2,
                    name: "102 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product2BBs290.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product2BBs290.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product2BBs290.png" },
                      { id: 4, name: "White", link: "../../../assets/product2BBs290.png" }
                    ]
                  },
                 
                ]
              },
              {
                id: 4,
                name: "90",
                size: [
                  {
                    id: 1,
                    name: "215 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product2BBs190.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product2BBs190.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product2BBs190.png" },
                      { id: 4, name: "White", link: "../../../assets/product2BBs190.png" }
                    ]
                  },
                  {
                    id: 2,
                    name: "102 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product2BBs290.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product2BBs290.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product2BBs290.png" },
                      { id: 4, name: "White", link: "../../../assets/product2BBs290.png" }
                    ]
                  },
                 
                ]
              }
            ]
          },
          {
            id: 2,
            name: "Stack",
            angle: [
              {
                id: 1,
                name: "0",
                size: [
                  {
                    id: 1,
                    name: "215 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product2Stacks1.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product2Stacks1.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product2Stacks1.png" },
                      { id: 4, name: "White", link: "../../../assets/product2Stacks1.png" }
                    ]
                  },
                  {
                    id: 2,
                    name: "102 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product2Stacks2.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product2Stacks2.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product2Stacks2.png" },
                      { id: 4, name: "White", link: "../../../assets/product2Stacks2.png" }
                    ]
                  }
                ]
              },
              {
                id: 2,
                name: "45",
                size: [
                  {
                    id: 1,
                    name: "215 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product2Stacks190.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product2Stacks190.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product2Stacks190.png" },
                      { id: 4, name: "White", link: "../../../assets/product2Stacks190.png" }
                    ]
                  },
                  {
                    id: 2,
                    name: "102 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product2Stacks290.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product2Stacks290.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product2Stacks290.png" },
                      { id: 4, name: "White", link: "../../../assets/product2Stacks290.png" }
                    ]
                  }
                ]
              },
              {
                id: 3,
                name: "-45",
                size: [
                  {
                    id: 1,
                    name: "215 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product2Stacks190.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product2Stacks190.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product2Stacks190.png" },
                      { id: 4, name: "White", link: "../../../assets/product2Stacks190.png" }
                    ]
                  },
                  {
                    id: 2,
                    name: "102 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product2Stacks290.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product2Stacks290.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product2Stacks290.png" },
                      { id: 4, name: "White", link: "../../../assets/product2Stacks290.png" }
                    ]
                  }
                ]
              },
              {
                id: 4,
                name: "90",
                size: [
                  {
                    id: 1,
                    name: "215 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product2Stacks190.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product2Stacks190.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product2Stacks190.png" },
                      { id: 4, name: "White", link: "../../../assets/product2Stacks190.png" }
                    ]
                  },
                  {
                    id: 2,
                    name: "102 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product2Stacks290.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product2Stacks290.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product2Stacks290.png" },
                      { id: 4, name: "White", link: "../../../assets/product2Stacks290.png" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 3,
            name: "Flemish",
            angle: [
              {
                id: 1,
                name: "0",
                size: [
                  {
                    id: 1,
                    name: "215 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product2Flemish.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product2Flemish.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product2Flemish.png" },
                      { id: 4, name: "White", link: "../../../assets/product2Flemish.png" }
                    ]
                  },
                  {
                    id: 2,
                    name: "102 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product2Flemish.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product2Flemish.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product2Flemish.png" },
                      { id: 4, name: "White", link: "../../../assets/product2Flemish.png" }
                    ]
                  }
                ]
              },
              {
                id: 2,
                name: "45",
                size: [
                  {
                    id: 1,
                    name: "215 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product2Flemish90.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product2Flemish90.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product2Flemish90.png" },
                      { id: 4, name: "White", link: "../../../assets/product2Flemish90.png" }
                    ]
                  },
                  {
                    id: 2,
                    name: "102 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product2Flemish90.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product2Flemish90.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product2Flemish90.png" },
                      { id: 4, name: "White", link: "../../../assets/product2Flemish90.png" }
                    ]
                  }
                ]
              },
              {
                id: 3,
                name: "-45",
                size: [
                  {
                    id: 1,
                    name: "215 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product2Flemish90.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product2Flemish90.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product2Flemish90.png" },
                      { id: 4, name: "White", link: "../../../assets/product2Flemish90.png" }
                    ]
                  },
                  {
                    id: 2,
                    name: "102 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product2Flemish90.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product2Flemish90.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product2Flemish90.png" },
                      { id: 4, name: "White", link: "../../../assets/product2Flemish90.png" }
                    ]
                  }
                ]
              },
              {
                id: 4,
                name: "90",
                size: [
                  {
                    id: 1,
                    name: "215 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product2Flemish90.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product2Flemish90.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product2Flemish90.png" },
                      { id: 4, name: "White", link: "../../../assets/product2Flemish90.png" }
                    ]
                  },
                  {
                    id: 2,
                    name: "102 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product2Flemish90.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product2Flemish90.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product2Flemish90.png" },
                      { id: 4, name: "White", link: "../../../assets/product2Flemish90.png" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 4,
            name: "English",
            angle: [
              {
                id: 1,
                name: "0",
                size: [
                  {
                    id: 1,
                    name: "215 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product2English.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product2English.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product2English.png" },
                      { id: 4, name: "White", link: "../../../assets/product2English.png" }
                    ]
                  },
                  {
                    id: 2,
                    name: "102 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product2English.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product2English.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product2English.png" },
                      { id: 4, name: "White", link: "../../../assets/product2English.png" }
                    ]
                  }
                ]
              },
              {
                id: 2,
                name: "45",
                size: [
                  {
                    id: 1,
                    name: "215 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product2English90.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product2English90.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product2English90.png" },
                      { id: 4, name: "White", link: "../../../assets/product2English90.png" }
                    ]
                  },
                  {
                    id: 2,
                    name: "102 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product2English90.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product2English90.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product2English90.png" },
                      { id: 4, name: "White", link: "../../../assets/product2English90.png" }
                    ]
                  }
                ]
              },
              {
                id: 3,
                name: "-45",
                size: [
                  {
                    id: 1,
                    name: "215 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product2English90.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product2English90.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product2English90.png" },
                      { id: 4, name: "White", link: "../../../assets/product2English90.png" }
                    ]
                  },
                  {
                    id: 2,
                    name: "102 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product2English90.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product2English90.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product2English90.png" },
                      { id: 4, name: "White", link: "../../../assets/product2English90.png" }
                    ]
                  }
                ]
              },
              {
                id: 4,
                name: "90",
                size: [
                  {
                    id: 1,
                    name: "215 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product2English90.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product2English90.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product2English90.png" },
                      { id: 4, name: "White", link: "../../../assets/product2English90.png" }
                    ]
                  },
                  {
                    id: 2,
                    name: "102 X 65",
                    joint: [
                      { id: 1, name: "Dark grey", link: "../../../assets/product2English90.png" },
                      { id: 2, name: "Natural", link: "../../../assets/product2English90.png" },
                      { id: 3, name: "Buff", link: "../../../assets/product2English90.png" },
                      { id: 4, name: "White", link: "../../../assets/product2English90.png" }
                    ]
                  }
                ]
              }
            ]
          }
    ],
    
]

  // loadData() {
  //   console.log(this.layout, 'layout');
  //   console.log(this.background, 'background');
  //   if (this.background == 0) {
  //     this.ctx = this.canvas.nativeElement.getContext('2d');
  //     this.image.onload = () => {
  //       this.ctx.clearRect(0, 0, this.width, this.height);
  //       this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  //     }
  //     this.image.src = this.backgroundImage[this.background].link;
  //     this.canvas.nativeElement.style.background = 'url(' + this.sizeList[this.defaultsize].size[this.defaultangle].layout[this.layout].link + ')';
  //   } else {
  //     this.ctx = this.canvas.nativeElement.getContext('2d');
  //     this.image.onload = () => {
  //       this.ctx.clearRect(0, 0, this.width, this.height);
  //       this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  //     }
  //     this.image.src = this.backgroundImage[this.background].link;
  //     this.canvas.nativeElement.style.background = 'url(' + this.sizeList[this.defaultsize].size[this.defaultangle].layout[this.layout].link + ')';

  //   }
  // }

  loadData() {
      console.log(this.layout, 'layout');
      console.log(this.background, 'background');
      console.log(this.defaultangle,'loaddata')
      if (this.background == 0) {
        
        if(this.defaultangle ==1){
          console.log('45')
          this.ctx = this.canvas.nativeElement.getContext('2d');
        this.image.onload = () => {
          this.ctx.clearRect(0, 0, this.width, this.height);
          this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
        this.image.src = this.backgroundImage[this.background].link;
        this.canvas4.nativeElement.style.background = 'url(' + this.layoutlist[this.imageid][this.layout].angle[this.defaultangle].size[this.defaultsize].joint[this.defaultcolor].link + ')';

        this.canvas.nativeElement.style.background = 'none';
        this.canvas5.nativeElement.style.background = 'none';
        this.canvas3.nativeElement.style.background = 'none';
        this.canvas1.nativeElement.style.background = 'none';
        this.canvas2.nativeElement.style.background = 'none';
        this.canvas6.nativeElement.style.background = 'none';
        this.canvas7.nativeElement.style.background = 'none';
        this.canvas8.nativeElement.style.background = 'none';
        this.canvas9.nativeElement.style.background = 'none';
        this.canvas10.nativeElement.style.background = 'none';
        this.canvas11.nativeElement.style.background = 'none';
        
        }else if(this.defaultangle == 2){
          console.log('-45')
          this.ctx = this.canvas.nativeElement.getContext('2d');
        this.image.onload = () => {
          this.ctx.clearRect(0, 0, this.width, this.height);
          this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
        this.image.src = this.backgroundImage[this.background].link;
        this.canvas5.nativeElement.style.background = 'url(' + this.layoutlist[this.imageid][this.layout].angle[this.defaultangle].size[this.defaultsize].joint[this.defaultcolor].link + ')';

        this.canvas.nativeElement.style.background = 'none';
        this.canvas1.nativeElement.style.background = 'none';
        this.canvas2.nativeElement.style.background = 'none';
        this.canvas3.nativeElement.style.background = 'none';
        this.canvas4.nativeElement.style.background = 'none';
        this.canvas6.nativeElement.style.background = 'none';
        this.canvas7.nativeElement.style.background = 'none';
        this.canvas8.nativeElement.style.background = 'none';
        this.canvas9.nativeElement.style.background = 'none';
        this.canvas10.nativeElement.style.background = 'none';
        this.canvas11.nativeElement.style.background = 'none';
        }else{
          this.ctx = this.canvas.nativeElement.getContext('2d');
        this.image.onload = () => {
          this.ctx.clearRect(0, 0, this.width, this.height);
          this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
        this.image.src = this.backgroundImage[this.background].link;
        this.canvas.nativeElement.style.background = 'url(' + this.layoutlist[this.imageid][this.layout].angle[this.defaultangle].size[this.defaultsize].joint[this.defaultcolor].link + ')';
        
        this.canvas1.nativeElement.style.background = 'none';
        this.canvas2.nativeElement.style.background = 'none';
        this.canvas3.nativeElement.style.background = 'none';
        this.canvas4.nativeElement.style.background = 'none';
        this.canvas5.nativeElement.style.background = 'none';
        this.canvas6.nativeElement.style.background = 'none';
        this.canvas7.nativeElement.style.background = 'none';
        this.canvas8.nativeElement.style.background = 'none';
        this.canvas9.nativeElement.style.background = 'none';
        this.canvas10.nativeElement.style.background = 'none';
        this.canvas11.nativeElement.style.background = 'none';
        }
       
        
      } else if (this.background ==3 ){
        
        if(this.defaultangle ==1){
          this.ctx = this.canvas.nativeElement.getContext('2d');
        this.ctx1 = this.canvas1.nativeElement.getContext('2d');
        
        this.canvas6.nativeElement.style.background = 'url(' + this.layoutlist[this.imageid][this.layout].angle[this.defaultangle].size[this.defaultsize].joint[this.defaultcolor].link + ')';
        this.image.onload = () => {
          this.ctx.clearRect(0, 0, this.width, this.height);
          this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
        this.image.src = this.backgroundImage[this.background].link;

        this.canvas1.nativeElement.style.background = 'none';
        this.canvas2.nativeElement.style.background = 'none';
        this.canvas3.nativeElement.style.background = 'none';
        this.canvas4.nativeElement.style.background = 'none';
        this.canvas5.nativeElement.style.background = 'none';
        this.canvas.nativeElement.style.background = 'none';
        this.canvas7.nativeElement.style.background = 'none';
        this.canvas8.nativeElement.style.background = 'none';
        this.canvas9.nativeElement.style.background = 'none';
        this.canvas10.nativeElement.style.background = 'none';
        this.canvas11.nativeElement.style.background = 'none';
        }else if(this.defaultangle == 2){
          this.ctx = this.canvas.nativeElement.getContext('2d');
        this.ctx1 = this.canvas1.nativeElement.getContext('2d');
        
        this.canvas7.nativeElement.style.background = 'url(' + this.layoutlist[this.imageid][this.layout].angle[this.defaultangle].size[this.defaultsize].joint[this.defaultcolor].link + ')';
        this.image.onload = () => {
          this.ctx.clearRect(0, 0, this.width, this.height);
          this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
        this.image.src = this.backgroundImage[this.background].link;

        this.canvas1.nativeElement.style.background = 'none';
        this.canvas2.nativeElement.style.background = 'none';
        this.canvas3.nativeElement.style.background = 'none';
        this.canvas4.nativeElement.style.background = 'none';
        this.canvas5.nativeElement.style.background = 'none';
        this.canvas6.nativeElement.style.background = 'none';
        this.canvas.nativeElement.style.background = 'none';
        this.canvas8.nativeElement.style.background = 'none';
        this.canvas9.nativeElement.style.background = 'none';
        this.canvas10.nativeElement.style.background = 'none';
        this.canvas11.nativeElement.style.background = 'none';
        }else{
          this.ctx = this.canvas.nativeElement.getContext('2d');
        this.ctx1 = this.canvas1.nativeElement.getContext('2d');
        
        this.canvas1.nativeElement.style.background = 'url(' + this.layoutlist[this.imageid][this.layout].angle[this.defaultangle].size[this.defaultsize].joint[this.defaultcolor].link + ')';
        this.image.onload = () => {
          this.ctx.clearRect(0, 0, this.width, this.height);
          this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
        this.image.src = this.backgroundImage[this.background].link;

        this.canvas.nativeElement.style.background = 'none';
        this.canvas2.nativeElement.style.background = 'none';
        this.canvas3.nativeElement.style.background = 'none';
        this.canvas4.nativeElement.style.background = 'none';
        this.canvas5.nativeElement.style.background = 'none';
        this.canvas6.nativeElement.style.background = 'none';
        this.canvas7.nativeElement.style.background = 'none';
        this.canvas8.nativeElement.style.background = 'none';
        this.canvas9.nativeElement.style.background = 'none';
        this.canvas10.nativeElement.style.background = 'none';
        this.canvas11.nativeElement.style.background = 'none';
        }
        

        
      } else if(this.background ==4){
        if(this.defaultangle == 1){
          this.ctx = this.canvas.nativeElement.getContext('2d');
          this.ctx2 = this.canvas2.nativeElement.getContext('2d');
          this.canvas8.nativeElement.style.background = 'url(' + this.layoutlist[this.imageid][this.layout].angle[this.defaultangle].size[this.defaultsize].joint[this.defaultcolor].link + ')';
          this.image.onload = () => {
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
          }
          this.image.src = this.backgroundImage[this.background].link;
  
          this.canvas1.nativeElement.style.background = 'none';
          this.canvas2.nativeElement.style.background = 'none';
          this.canvas3.nativeElement.style.background = 'none';
          this.canvas4.nativeElement.style.background = 'none';
          this.canvas5.nativeElement.style.background = 'none';
          this.canvas6.nativeElement.style.background = 'none';
          this.canvas7.nativeElement.style.background = 'none';
          this.canvas.nativeElement.style.background = 'none';
          this.canvas9.nativeElement.style.background = 'none';
          this.canvas10.nativeElement.style.background = 'none';
          this.canvas11.nativeElement.style.background = 'none';
        }else if(this.defaultangle ==2){
          this.ctx = this.canvas.nativeElement.getContext('2d');
          this.ctx2 = this.canvas2.nativeElement.getContext('2d');
          this.canvas9.nativeElement.style.background = 'url(' + this.layoutlist[this.imageid][this.layout].angle[this.defaultangle].size[this.defaultsize].joint[this.defaultcolor].link + ')';
          this.image.onload = () => {
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
          }
          this.image.src = this.backgroundImage[this.background].link;
  
          this.canvas1.nativeElement.style.background = 'none';
          this.canvas2.nativeElement.style.background = 'none';
          this.canvas3.nativeElement.style.background = 'none';
          this.canvas4.nativeElement.style.background = 'none';
          this.canvas5.nativeElement.style.background = 'none';
          this.canvas6.nativeElement.style.background = 'none';
          this.canvas7.nativeElement.style.background = 'none';
          this.canvas8.nativeElement.style.background = 'none';
          this.canvas.nativeElement.style.background = 'none';
          this.canvas10.nativeElement.style.background = 'none';
          this.canvas11.nativeElement.style.background = 'none';
        }else {
          this.ctx = this.canvas.nativeElement.getContext('2d');
        this.ctx2 = this.canvas2.nativeElement.getContext('2d');
        this.canvas2.nativeElement.style.background = 'url(' + this.layoutlist[this.imageid][this.layout].angle[this.defaultangle].size[this.defaultsize].joint[this.defaultcolor].link + ')';
        this.image.onload = () => {
          this.ctx.clearRect(0, 0, this.width, this.height);
          this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
        this.image.src = this.backgroundImage[this.background].link;

        this.canvas1.nativeElement.style.background = 'none';
        this.canvas.nativeElement.style.background = 'none';
        this.canvas3.nativeElement.style.background = 'none';
        this.canvas4.nativeElement.style.background = 'none';
        this.canvas5.nativeElement.style.background = 'none';
        this.canvas6.nativeElement.style.background = 'none';
        this.canvas7.nativeElement.style.background = 'none';
        this.canvas8.nativeElement.style.background = 'none';
        this.canvas9.nativeElement.style.background = 'none';
        this.canvas10.nativeElement.style.background = 'none';
        this.canvas11.nativeElement.style.background = 'none';

        }
        
        
      }else if(this.background == 5){
        if(this.defaultangle ==1 ){
          this.ctx = this.canvas.nativeElement.getContext('2d');
        this.ctx2 = this.canvas2.nativeElement.getContext('2d');
        this.ctx3 = this.canvas2.nativeElement.getContext('2d');
        this.canvas10.nativeElement.style.background = 'url(' + this.layoutlist[this.imageid][this.layout].angle[this.defaultangle].size[this.defaultsize].joint[this.defaultcolor].link + ')';
        this.image.onload = () => {
          this.ctx.clearRect(0, 0, this.width, this.height);
          this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
        this.image.src = this.backgroundImage[this.background].link;

        this.canvas1.nativeElement.style.background = 'none';
        this.canvas2.nativeElement.style.background = 'none';
        this.canvas3.nativeElement.style.background = 'none';
        this.canvas4.nativeElement.style.background = 'none';
        this.canvas5.nativeElement.style.background = 'none';
        this.canvas6.nativeElement.style.background = 'none';
        this.canvas7.nativeElement.style.background = 'none';
        this.canvas8.nativeElement.style.background = 'none';
        this.canvas9.nativeElement.style.background = 'none';
        this.canvas.nativeElement.style.background = 'none';
        this.canvas11.nativeElement.style.background = 'none';
        }else if(this.defaultangle == 2){
          this.ctx = this.canvas.nativeElement.getContext('2d');
        this.ctx2 = this.canvas2.nativeElement.getContext('2d');
        this.ctx3 = this.canvas2.nativeElement.getContext('2d');
        this.canvas11.nativeElement.style.background = 'url(' + this.layoutlist[this.imageid][this.layout].angle[this.defaultangle].size[this.defaultsize].joint[this.defaultcolor].link + ')';
        this.image.onload = () => {
          this.ctx.clearRect(0, 0, this.width, this.height);
          this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
        this.image.src = this.backgroundImage[this.background].link;

        this.canvas1.nativeElement.style.background = 'none';
        this.canvas2.nativeElement.style.background = 'none';
        this.canvas3.nativeElement.style.background = 'none';
        this.canvas4.nativeElement.style.background = 'none';
        this.canvas5.nativeElement.style.background = 'none';
        this.canvas6.nativeElement.style.background = 'none';
        this.canvas7.nativeElement.style.background = 'none';
        this.canvas8.nativeElement.style.background = 'none';
        this.canvas9.nativeElement.style.background = 'none';
        this.canvas10.nativeElement.style.background = 'none';
        this.canvas.nativeElement.style.background = 'none';
        }else {
          this.ctx = this.canvas.nativeElement.getContext('2d');
        this.ctx2 = this.canvas2.nativeElement.getContext('2d');
        this.ctx3 = this.canvas2.nativeElement.getContext('2d');
        this.canvas3.nativeElement.style.background = 'url(' + this.layoutlist[this.imageid][this.layout].angle[this.defaultangle].size[this.defaultsize].joint[this.defaultcolor].link + ')';
        this.image.onload = () => {
          this.ctx.clearRect(0, 0, this.width, this.height);
          this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
        this.image.src = this.backgroundImage[this.background].link;

        this.canvas1.nativeElement.style.background = 'none';
        this.canvas2.nativeElement.style.background = 'none';
        this.canvas.nativeElement.style.background = 'none';
        this.canvas4.nativeElement.style.background = 'none';
        this.canvas5.nativeElement.style.background = 'none';
        this.canvas6.nativeElement.style.background = 'none';
        this.canvas7.nativeElement.style.background = 'none';
        this.canvas8.nativeElement.style.background = 'none';
        this.canvas9.nativeElement.style.background = 'none';
        this.canvas10.nativeElement.style.background = 'none';
        this.canvas11.nativeElement.style.background = 'none';
        }
        
        
       

      } else {
        

        if(this.defaultangle ==1){
          console.log('45')
          this.ctx = this.canvas.nativeElement.getContext('2d');
        this.image.onload = () => {
          this.ctx.clearRect(0, 0, this.width, this.height);
          this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
        this.image.src = this.backgroundImage[this.background].link;
        this.canvas4.nativeElement.style.background = 'url(' + this.layoutlist[this.imageid][this.layout].angle[this.defaultangle].size[this.defaultsize].joint[this.defaultcolor].link + ')';

        this.canvas1.nativeElement.style.background = 'none';
        this.canvas2.nativeElement.style.background = 'none';
        this.canvas3.nativeElement.style.background = 'none';
        this.canvas.nativeElement.style.background = 'none';
        this.canvas5.nativeElement.style.background = 'none';
        this.canvas6.nativeElement.style.background = 'none';
        this.canvas7.nativeElement.style.background = 'none';
        this.canvas8.nativeElement.style.background = 'none';
        this.canvas9.nativeElement.style.background = 'none';
        this.canvas10.nativeElement.style.background = 'none';
        this.canvas11.nativeElement.style.background = 'none';
        
        }else if(this.defaultangle == 2){
          console.log('-45')
          this.ctx = this.canvas.nativeElement.getContext('2d');
        this.image.onload = () => {
          this.ctx.clearRect(0, 0, this.width, this.height);
          this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
        this.image.src = this.backgroundImage[this.background].link;
        this.canvas5.nativeElement.style.background = 'url(' + this.layoutlist[this.imageid][this.layout].angle[this.defaultangle].size[this.defaultsize].joint[this.defaultcolor].link + ')';

        this.canvas1.nativeElement.style.background = 'none';
        this.canvas2.nativeElement.style.background = 'none';
        this.canvas3.nativeElement.style.background = 'none';
        this.canvas4.nativeElement.style.background = 'none';
        this.canvas.nativeElement.style.background = 'none';
        this.canvas6.nativeElement.style.background = 'none';
        this.canvas7.nativeElement.style.background = 'none';
        this.canvas8.nativeElement.style.background = 'none';
        this.canvas9.nativeElement.style.background = 'none';
        this.canvas10.nativeElement.style.background = 'none';
        this.canvas11.nativeElement.style.background = 'none';
        }else{
          this.ctx = this.canvas.nativeElement.getContext('2d');
        this.image.onload = () => {
          this.ctx.clearRect(0, 0, this.width, this.height);
          this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
        this.image.src = this.backgroundImage[this.background].link;
       
        this.canvas.nativeElement.style.background = 'url(' + this.layoutlist[this.imageid][this.layout].angle[this.defaultangle].size[this.defaultsize].joint[this.defaultcolor].link + ')';
        
        this.canvas1.nativeElement.style.background = 'none';
        this.canvas2.nativeElement.style.background = 'none';
        this.canvas3.nativeElement.style.background = 'none';
        this.canvas4.nativeElement.style.background = 'none';
        this.canvas5.nativeElement.style.background = 'none';
        this.canvas6.nativeElement.style.background = 'none';
        this.canvas7.nativeElement.style.background = 'none';
        this.canvas8.nativeElement.style.background = 'none';
        this.canvas9.nativeElement.style.background = 'none';
        this.canvas10.nativeElement.style.background = 'none';
        this.canvas11.nativeElement.style.background = 'none';
        }


      }
    }

    // loadCanvasBackground(){
    //   this.ctx12 = this.canvas12.nativeElement.getContext('2d');
    //   this.backgroundCanvas.onload = () =>{
    //     this.ctx12.drawImage(this.backgroundCanvas,0,0,this.width,this.height);
    //   }
    //   this.backgroundCanvas.src = this.colors[this.defaultcolor].value;
      
    // }

    
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

  
    //Dynamic BrokenBond Pattern
    
    loadBrokenBondPattern(){
      this.ctx12 = this.canvas12.nativeElement.getContext('2d');
      this.ctx12.clearRect(0,0,this.canvasWidth,this.canvasHeight);
      let imageWidth = this.sizes[this.defaultsize].width;
      let imageHeight = this.sizes[this.defaultsize].height;
      let rowRep = Math.ceil(this.canvasHeight/imageHeight)+1;
      let columnRep = Math.ceil(this.canvasWidth/imageWidth)+1;
      let left = 0;
      let top = 0;
      let i = 0;
      let j = 0;
      this.image.src = this.images1[0].src;
      this.randomImage.src = this.images1[1].src;
      this.randomImage.onload= () =>{
        while(i<rowRep){
          if(i%2 == 0){
            while(j<columnRep){
              let randomInt = Math.floor(Math.random() * 10);
              if(j % randomInt == 0){              
                  this.ctx12.drawImage(this.randomImage,left,top,imageWidth,imageHeight);
                  left += imageWidth+ this.defaultwidth+2;
                  j++;
              }else{
              this.ctx12.drawImage(this.image,left,top,imageWidth,imageHeight);
              left += imageWidth+ this.defaultwidth+2;
              j++;
              }
            }
          // while(j<columnRep){
          //   this.ctx12.drawImage(this.image,left,top,imageWidth,imageHeight);
          //   left += imageWidth+ this.defaultwidth+2;
          //   j++;
          // }
          left = 0;
          j=0;
          top += imageHeight+ this.defaultwidth+2;
          i++;
        }else{
          while(j<columnRep){
            let randomInt = Math.floor(Math.random() * 10);
            if(j % randomInt == 0){              
                this.ctx12.drawImage(this.randomImage,left-imageWidth/2,top,imageWidth,imageHeight);
                left += imageWidth+ this.defaultwidth+2;
                j++;
            }else{
            this.ctx12.drawImage(this.image,left-imageWidth/2,top,imageWidth,imageHeight);
            left += imageWidth+ this.defaultwidth+2;
            j++;
            }
          }
          // while(j<columnRep){
          //   this.ctx12.drawImage(this.image,left-imageWidth/2,top,imageWidth,imageHeight);
          //   left += imageWidth+ this.defaultwidth+2;
          //   j++;
          // }
          left = 0;
          j=0;
          top += imageHeight+ this.defaultwidth+2;
          i++;
        }
        }
      }
     
      this.canvas12.nativeElement.style.background = 'url('+this.colors[this.defaultcolor].value+')';
      this.canvas12.nativeElement.style.backgroundSize = 'cover';
    }

    //Dynamic Stack Pattern

    loadStackPattern(){
      this.ctx12 = this.canvas12.nativeElement.getContext('2d');
      this.ctx12.clearRect(0,0,this.canvasWidth,this.canvasHeight);
      // this.image.onload = () =>{
      //   this.ctx12.drawImage(this.image,0,0,this.canvasWidth,this.canvasHeight);
      // }
      // this.image.src = this.colors[this.defaultcolor].value;
      let imageWidth = this.sizes[this.defaultsize].width;
      let imageHeight = this.sizes[this.defaultsize].height;
      let rowRep = Math.ceil(this.canvasHeight/imageHeight)+1;
      let columnRep = Math.ceil(this.canvasWidth/imageWidth)+1;
      let left = 0;
      let top = 0;
      let i = 0;
      let j = 0;
      this.image.src = this.images1[0].src;
      this.randomImage.src = this.images1[1].src;
      this.randomImage.onload= () =>{
        while(i<rowRep){
          while(j<columnRep){
            let randomInt = Math.floor(Math.random() * 10);
            if(j % randomInt == 0){              
                this.ctx12.drawImage(this.randomImage,left,top,imageWidth,imageHeight);
                left += imageWidth+ this.defaultwidth+2;
                j++;
            }else{
            this.ctx12.drawImage(this.image,left,top,imageWidth,imageHeight);
            left += imageWidth+ this.defaultwidth+2;
            j++;
            }
          }
          left = 0;
          j=0;
          top += imageHeight+ this.defaultwidth+2;
          i++;
        }
      }
      
      
      this.canvas12.nativeElement.style.background = 'url('+this.colors[this.defaultcolor].value+')';
      this.canvas12.nativeElement.style.backgroundSize = 'cover';
    }

    //Generate Canvas
  
    loadCanvas(){
      console.log(this.background,"background in loadcanvas")
      console.log(this.backgroundImage[this.background].link,"backgroundlink in loadcanvas")

      this.ctx = this.canvas.nativeElement.getContext('2d');
      this.backgroundCanvas.onload = () => {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.drawImage(this.backgroundCanvas, this.x, this.y, this.width, this.height);
      }
      this.backgroundCanvas.src = this.backgroundImage[this.background].link;
      // For View 1
      if(this.background == 0){
        if(this.defaultpattern == 0){
          if(this.defaultangle == 0){
            this.canvasWidth = window.innerWidth;
            this.canvasHeight = window.innerHeight;
            this.canvas12.nativeElement.style.removeProperty('transform');
            this.loadBrokenBondPattern();
          }else if(this.defaultangle == 1){
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadBrokenBondPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(2000px) rotateZ(45deg) translateX(-200px)';
          }else if(this.defaultangle == 2){
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadBrokenBondPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(2000px) rotateZ(-45deg) translateY(-200px)';
          }else{
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadBrokenBondPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(2000px) rotateZ(90deg)';
          }
        }
        else if(this.defaultpattern == 1){
          if(this.defaultangle == 0){
            this.canvasWidth = window.innerWidth;
            this.canvasHeight = window.innerHeight;
            this.canvas12.nativeElement.style.removeProperty('transform');
            this.loadStackPattern();
          }else if(this.defaultangle == 1){
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadStackPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(2000px) rotateZ(45deg) translateX(-200px)';
          }else if(this.defaultangle == 2){
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadStackPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(2000px) rotateZ(-45deg) translateY(-200px)';
          }else{
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadStackPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(2000px) rotateZ(90deg)';
          }
        }
      }

      // For View 2

      else if(this.background == 1){
        if(this.defaultpattern == 0){
          if(this.defaultangle == 0){
            this.canvasWidth = window.innerWidth;
            this.canvasHeight = window.innerHeight;
            this.canvas12.nativeElement.style.removeProperty('transform');
            this.loadBrokenBondPattern();
          }else if(this.defaultangle == 1){
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadBrokenBondPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(2000px) rotateZ(45deg) translateX(-450px)';
          }else if(this.defaultangle == 2){
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadBrokenBondPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(2000px) rotateZ(-45deg) translateY(-450px)';
          }else{
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadBrokenBondPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(2000px) rotateZ(90deg)';
          }
        }
        else if(this.defaultpattern == 1){
          if(this.defaultangle == 0){
            this.canvasWidth = window.innerWidth;
            this.canvasHeight = window.innerHeight;
            this.canvas12.nativeElement.style.removeProperty('transform');
            this.loadStackPattern();
          }else if(this.defaultangle == 1){
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadStackPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(2000px) rotateZ(45deg) translateX(-450px)';
          }else if(this.defaultangle == 2){
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadStackPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(2000px) rotateZ(-45deg) translateY(-450px)';
          }else{
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadStackPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(2000px) rotateZ(90deg)';
          }
        }
      }

      // For View 3

      else if(this.background == 2){
        if(this.defaultpattern == 0){
          if(this.defaultangle == 0){
            this.canvasWidth = window.innerWidth;
            this.canvasHeight = window.innerHeight;
            this.canvas12.nativeElement.style.removeProperty('transform');
            this.loadBrokenBondPattern();
          }else if(this.defaultangle == 1){
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadBrokenBondPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(2000px) rotateZ(45deg) translateX(-400px) translateY(-100px)';
          }else if(this.defaultangle == 2){
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadBrokenBondPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(2000px) rotateZ(-45deg) translateY(-400px) translateX(100px)';
          }else{
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadBrokenBondPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(2000px) rotateZ(90deg)';
          }
        }
        else if(this.defaultpattern == 1){
          if(this.defaultangle == 0){
            this.canvasWidth = window.innerWidth;
            this.canvasHeight = window.innerHeight;
            this.canvas12.nativeElement.style.removeProperty('transform');
            this.loadStackPattern();
          }else if(this.defaultangle == 1){
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadStackPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(2000px) rotateZ(45deg) translateX(-400px) translateY(-200px)';
          }else if(this.defaultangle == 2){
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadStackPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(2000px) rotateZ(-45deg) translateY(-400px) translateX(200px)';
          }else{
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadStackPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(2000px) rotateZ(90deg)';
          }
        }
      }

      // For View 4 

      else if(this.background == 3){
        if(this.defaultpattern == 0){
          if(this.defaultangle == 0){
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.canvas12.nativeElement.style.transform = 'perspective(69000px) rotateZ(70deg) rotateX(45deg) rotateY(-50deg) translateX(-900px) translateY(-500px)';
            this.loadBrokenBondPattern();
          }else if(this.defaultangle == 1){
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadBrokenBondPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(69000px) rotateZ(20deg) rotateX(55deg) rotateY(-30deg) translateX(-500px) translateY(-700px)';
          }else if(this.defaultangle == 2){
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadBrokenBondPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(69000px) rotateZ(85deg) rotateX(20deg) rotateY(-56deg) translateX(-500px)';
          }else{
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadBrokenBondPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(69000px) rotateZ(160deg) rotateY(-10deg) rotateX(10deg) skewX(50deg) translateX(-200px) translateY(500px)';
          }
        }
        else if(this.defaultpattern == 1){
          if(this.defaultangle == 0){
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.canvas12.nativeElement.style.transform = 'perspective(69000px) rotateZ(70deg) rotateX(45deg) rotateY(-50deg) translateX(-900px) translateY(-500px)';
            this.loadStackPattern();
          }else if(this.defaultangle == 1){
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadStackPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(69000px) rotateZ(20deg) rotateX(55deg) rotateY(-30deg) translateX(-500px) translateY(-700px)';
          }else if(this.defaultangle == 2){
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadStackPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(69000px) rotateZ(85deg) rotateX(20deg) rotateY(-56deg) translateX(-500px)';
          }else{
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadStackPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(69000px) rotateZ(160deg) rotateY(-10deg) rotateX(10deg) skewX(50deg) translateX(-200px) translateY(500px)';
          }
        }
      }
      
      // For View 5

      else if(this.background == 4){
        if(this.defaultpattern == 0){
          if(this.defaultangle == 0){
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.canvas12.nativeElement.style.transform = 'perspective(2000px) rotateX(40deg) translateX(100px) translateY(-900px) scale(1.3)';
            this.loadBrokenBondPattern();
          }else if(this.defaultangle == 1){
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadBrokenBondPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(2000px) rotateZ(45deg) rotateX(40deg) rotateY(-10deg) translateX(-400px) translateY(-400px)';
          }else if(this.defaultangle == 2){
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadBrokenBondPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(2000px) rotateZ(-45deg) rotateY(40deg) rotateX(10deg) translateX(100px) translateY(-400px)';
          }else{
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadBrokenBondPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(2000px) rotateZ(90deg) rotateY(-25deg) translateX(-200px)';
          }
        }
        else if(this.defaultpattern == 1){
          if(this.defaultangle == 0){
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.canvas12.nativeElement.style.transform = 'perspective(2000px) rotateX(40deg) translateX(100px) translateY(-900px) scale(1.3)';
            this.loadStackPattern();
          }else if(this.defaultangle == 1){
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadStackPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(2000px) rotateZ(45deg) rotateX(40deg) rotateY(-10deg) translateX(-400px) translateY(-400px)';
          }else if(this.defaultangle == 2){
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadStackPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(2000px) rotateZ(-45deg) rotateY(40deg) rotateX(10deg) translateX(100px) translateY(-400px)';
          }else{
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadStackPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(2000px) rotateZ(90deg) rotateY(-25deg) translateX(-200px)';
          }
        }
      }

      // For View 6

      else if(this.background == 5){
        if(this.defaultpattern == 0){
          if(this.defaultangle == 0){
            this.canvasWidth = 4000;
            this.canvasHeight = 4000;
            // this.canvas12.nativeElement.style.transform = 'perspective(18000px) rotateX(60deg) translateY(-2800px) translateX(-1200px)';
            // this.canvas12.nativeElement.style.transform = 'perspective(96000px) rotateX(82deg) translateX(-2000px) translateY(-9200px) scaleY(-3.7) scaleX(1.5)';
            this.canvas12.nativeElement.style.transform = 'perspective(2000px) rotateX(41deg) rotateZ(-3deg) skewX(17deg) scaleX(3) scaleY(4)';

            this.loadBrokenBondPattern();
          }else if(this.defaultangle == 1){
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadBrokenBondPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(2000px) rotateX(41deg) rotateZ(25deg) skewX(-17deg) scaleX(1.2) scaleY(1) translateX(-500px) translateY(-600px)';
          }else if(this.defaultangle == 2){
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadBrokenBondPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(2000px) rotateX(41deg) rotateZ(-25deg) skewX(17deg) scaleX(1.2) scaleY(1) translateX(400px) translateY(-600px)';
          }else{
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadBrokenBondPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(2000px) rotateX(45deg) rotateZ(90deg) translateX(-500px) translateY(400px) scaleY(1.3)';
          }
        }
        else if(this.defaultpattern == 1){
          if(this.defaultangle == 0){
            this.canvasWidth = window.innerWidth;
            this.canvasHeight = window.innerHeight;
            this.canvas12.nativeElement.style.removeProperty('transform');
            this.loadStackPattern();
          }else if(this.defaultangle == 1){
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadStackPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(2000px) rotateZ(45deg) translateX(-200px)';
          }else if(this.defaultangle == 2){
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadStackPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(2000px) rotateZ(-45deg) translateY(-200px)';
          }else{
            this.canvasWidth = 2000;
            this.canvasHeight = 2000;
            this.loadStackPattern();
            this.canvas12.nativeElement.style.transform = 'perspective(2000px) rotateZ(90deg)';
          }
        }
      }

    }


  viewAction(value) {
    this.view = value;
    this.Pattern = false;
    this.angle = false;
    this.size = false;
    this.color = false;
    this.jointwidth = false;
  }

  patternAction(value) {
    this.view = false;
    this.Pattern = value;
    this.angle = false;
    this.size = false;
    this.color = false;
    this.jointwidth = false;
  }

  patternGo(data) {
    this.Pattern = false;
    this.layout = data - 1;
    this.defaultpattern = data -1;
    if(this.imageid ==2){
     this.loadCanvas();
    }else{
      this.loadData();
    }
    console.log("pattern",this.defaultpattern)
  }

  angleAction(value) {
    this.view = false;
    this.Pattern = false;
    this.angle = value;
    this.size = false;
    this.color = false;
    this.jointwidth = false;
  }

  sizeAction(value) {
    this.view = false;
    this.Pattern = false;
    this.angle = false;
    this.size = value;
    this.color = false;
    this.jointwidth = false;
  }

  colorAction(value) {
    this.view = false;
    this.Pattern = false;
    this.angle = false;
    this.size = false;
    this.color = value;
    this.jointwidth = false;
  }

  widthAction(value) {
    this.view = false;
    this.Pattern = false;
    this.angle = false;
    this.size = false;
    this.color = false;
    this.jointwidth = value;
  }

  angleGo(data) {
    this.angle = false;
    this.defaultangle = data - 1;
    console.log('angle',this.defaultangle)
    if(this.imageid ==2){
      this.loadCanvas();
    }else{
      this.loadData();
    }
  }

  sizeGo(data) {
    this.size = false;
    this.defaultsize = data - 1;
    if(this.imageid ==2){
      this.loadCanvas();
    }else{
      this.loadData();
    }
  }

  colorGo(data) {
    console.log(data,"color")
    this.color = false;
    this.defaultcolor = data - 1;
    if(this.imageid ==2){
     this.loadCanvas();
    }else{
      this.loadData();
    }
  }

  widthGo(data) {
    console.log(data,"width")
    this.jointwidth = false;
    this.defaultwidth = data;
    if(this.imageid ==2){
     this.loadCanvas();
    }else{
      this.loadData();
    }
    
  }

  zoomIn() {
    this.count += this.count;
    this.width = this.width * 2;
    this.height = this.height * 2;
    this.x = (this.width / 8) * - 1;
    this.y = (this.height / 8) * - 1;
    console.log(this.x, this.y, "cor");
    if(this.imageid ==2){
      // this.loadCanvas();
     }else{
       this.loadData();
     }
  }

  zoomOut() {
    this.count = 0;
    this.width = this.dwidth;
    this.height = this.dheight;
    this.x = 0;
    this.y = 0;
    if(this.imageid ==2){
      // this.loadCanvas();
     }else{
       this.loadData();
     }
    // }else{
    //   this.count -= this.count;
    //   this.width = this.width / 2;
    //   this.height = this.height / 2;
    //   this.x = (this.width * 8) * - 1;
    //   this.y = (this.height * 8) * - 1;
    //   this.loadData()
    // }

  }

  incQuantity(){
    this.cart_quantity+=1;
    window.sessionStorage.setItem('quantity',this.cart_quantity.toString());
  }

  async selectBackground(bg) {
    this.view = false;
    this.Pattern = false;
    this.angle = false;
    this.size = false;
    this.color = false;
    this.jointwidth = false;
    this.image = await new Image();
    this.background = bg - 1;
    if(this.imageid ==2){
      this.loadCanvas();
     }else{
       this.loadData();
     }
  }

}
