import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

import {ChangeColorDialogComponent} from './change-color-dialog/change-color-dialog.component'

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  colorCodes = [
    {id:1,color_code:"rgba(255,255,255,1)",color_code_name:"Excluded",color_description:"Main Background Color",is_default:0},
    {id:2,color_code:"rgba(255,255,255,1)",color_code_name:"Interested",color_description:"Header Background Color",is_default:1},
    {id:3,color_code:"rgba(200,200,200,1)",color_code_name:"Profile",color_description:"Menu Background Color",is_default:0},
    {id:4,color_code:"rgba(105,105,107,1)",color_code_name:"Maybe Later",color_description:"Main Highlight Color",is_default:0},
    {id:5,color_code:"rgba(180,180,180,1)",color_code_name:"Meeting",color_description:"Header Highlight Color",is_default:0},
    
    {id:1,color_code:"rgba(145,145,145,1)",color_code_name:"Excluded",color_description:"Menu Highlight Color",is_default:0},
    {id:2,color_code:"rgba(0,0,0,1)",color_code_name:"Interested",color_description:"Main Text Color",is_default:1},
    {id:3,color_code:"rgba(0,0,0,1)",color_code_name:"Profile",color_description:"Header Text Color",is_default:0},
    {id:4,color_code:"rgba(0,0,0,1)",color_code_name:"Maybe Later",color_description:"Menu Text Color",is_default:0},
    {id:5,color_code:"rgba(255,255,255,1)",color_code_name:"Meeting",color_description:"Main Text Highlight Color",is_default:0},
    {id:1,color_code:"rgba(255,255,255,1)",color_code_name:"Excluded",color_description:"Header Text Highlight Color",is_default:0},
    {id:2,color_code:"rgba(255,255,255,1)",color_code_name:"Interested",color_description:"Menu Text Highlight Color",is_default:1},
  ]

  openColorDialog(){
    this.dialog.open(ChangeColorDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

}
