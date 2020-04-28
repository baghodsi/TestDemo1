import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  outputs: ['sInTitleList']
})
export class TopBarComponent {

  sInTitleList = new EventEmitter <boolean>();
  bInTitleList = true;
  // Constructor
  constructor() {
  }
  // Set Collapse left menu sidebar
  setTitleList (){
    this.bInTitleList = !this.bInTitleList;
    this.sInTitleList.emit(this.bInTitleList);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/