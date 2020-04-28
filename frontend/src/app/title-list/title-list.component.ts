import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title-list',
  templateUrl: './title-list.component.html',
  styleUrls: ['./title-list.component.css'],
  inputs: ['bTitleOpenMenu'],
  outputs: ['nTTitleID', 'sTitleText']
})
export class TitleListComponent {
  bTitleOpenMenu = "0";
  nTTitleID = new EventEmitter <string>();
  sTitleText = new EventEmitter <string>();

  constructor() {}
  // Set titleId for select records
  setTitleList (titleId: string, titleText: string){
    this.nTTitleID.emit(titleId);
    this.sTitleText.emit(titleText);
  }
}
