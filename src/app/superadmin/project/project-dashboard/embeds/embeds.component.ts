import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';

import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'External Solutions',
    children: [
      {name: 'Bricks'},
      {name: 'Roman Bricks'},
      {name: 'Cladding'},
      {name: 'Paving'}
    ]
  }, 
  {
    name: 'Internal Solutions',
    children: [
      {name: 'Floor'},
      {name: 'Wall'},
      {name: 'Floor and  Wall'},
    ]
  }, 
  {
    name: 'Paving',
    children: [
      {name: 'Blocks'},
      {name: 'Cobbles'},
      {name: 'Flags'},
      {name: 'Permeable'}
    ]
  }, 
  {
    name: 'Walling',
    children: [
      {name: 'Brick'},
      {name: 'Mansonry'},
      {name: 'Forticrete'},
    ]
  },
  {
    name: 'Root',
    children: [
      {name: 'Flagstone and Pavers'},
      {name: 'Walling'},
    
    ]
  },  
  /*{
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussels sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },*/
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-embeds',
  templateUrl: './embeds.component.html',
  styleUrls: ['./embeds.component.scss']
})
export class EmbedsComponent implements OnInit {

  embed:any="<object width=425 height=355><param name=movie value=https://www.youtube.com/v/4_afKAWj2Ek&hl=en></param><param name=wmode value=transparent></param><embed src=https://www.youtube.com/v/4_afKAWj2Ek&hl=en type=application/x-shockwave-flash wmode=transparent width=425 height=355></embed></object>"
private _transformer = (node: FoodNode, level: number) => {
  return {
    expandable: !!node.children && node.children.length > 0,
    name: node.name,
    level: level,
  };
}

treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);  
constructor() {

    this.dataSource.data = TREE_DATA;
   }

  ngOnInit() {
  }
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
