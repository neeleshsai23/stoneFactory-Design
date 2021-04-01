import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from 'src/app/app.settings';
import { Settings } from 'src/app/app.settings.model';

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.scss']
})
export class ShowroomComponent implements OnInit {

  width = window.innerWidth;
  height = window.innerHeight;
  ctx: CanvasRenderingContext2D;
  image = new Image();
  public userImage = '../../../assets/bg1.png';
  showroom = false;

  selected: any;
  colour = 1;
  layout = 0;
  background = 0;

  brickList = [
    {id:0, head: "Forterra", subhead: "Blue Smooth - Wirecut", link: "../../../assets/brick3.PNG" },
    {id:1, head: "Forterra", subhead: "Blue Rustic - Wirecut", link: "../../../assets/brick2.PNG" },
    {id:2, head: "Forterra", subhead: "Dark Moroccan Rustic - Wirecut", link: "../../../assets/brick4.PNG" },
    {id:1 ,head: "Forterra", subhead: "Dark Moroccan Smooth - Wirecut", link: "../../../assets/brick5.PNG" },
    {id:1 ,head: "Vande Moortel", subhead: "Crea 7021 - Stock", link: "../../../assets/brick6.PNG" },
    {id:1 ,head: "Vandersanden", subhead: "Brama - Handmade", link: "../../../assets/brick7.PNG" },
    {id:1 ,head: "Vandersanden", subhead: "Lithium - Handmade", link: "../../../assets/brick8.PNG" },
    {id:1 ,head: "Vandersanden", subhead: "Livorno - Handmade", link: "../../../assets/brick9.PNG" },
    {id:1 ,head: "Vandersanden", subhead: "Traviso - Handmade", link: "../../../assets/brick10.PNG" },
    {id:1 ,head: "Wienerberger", subhead: "Forum Smoked Branco - Handmade", link: "../../../assets/brick11.PNG" },
    {id:1 ,head: "Wienerberger", subhead: "Staffordshire Blue - Wirecut", link: "../../../assets/brick12.PNG" },
    {id:1 ,head: "Engels", subhead: "Carbon - Stock", link: "../../../assets/brick1.PNG" },


  ]


  selectedImg = 'f5';
  public settings: Settings;

  constructor(public dialog: MatDialog, public appSettings: AppSettings,) {
    this.settings = this.appSettings.settings;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    console.log(window.innerHeight)
  }

  ngOnInit() {
    console.log(this.width, this.height, "screen");
  }
  ngAfterViewInit() {
    setInterval(() => {
      this.settings.loadingSpinner = false;
    }, 500);
  }
  getImageId(id) {
  }

  selectBrick(num) {
    console.log(num,"image id");
    this.colour = num;
    this.selected = num;
    this.showroom = true;
    window.sessionStorage.setItem('imageid',this.selected)
  }

  selectColour() {
    this.showroom = false;
  }

}
