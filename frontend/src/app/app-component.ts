import {Component, Inject, ViewChild} from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-component',
  templateUrl: 'app-component.html',
  styleUrls: ['app-component.css'],
})
export class AppComponent {
  // Fields of we need in AppComponent
  sAppTitleList = "1";
  nAppRecId = 0;
  nAppTitleId = "10001";
  nAppTitleText = "Inbox";
  @ViewChild('child', {static: true}) private child: ProductListComponent;
  // Constractor with 
  constructor() {}
  // Onchange method for detail events
  onChanged(sr: string) {
    this.nAppRecId = 0; 
    this.child.ngOnChanges();
  }
}
