import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { Observable } from "rxjs";
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { UserComponent } from '../user/user.component';
import { User } from '../../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnChanges {
  users: Object;
  myArray: Array<any>;
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ["fullName", "email", "mobile", "city", "actions"];
  dataSource: MatTableDataSource < Element[] > ;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  searchKey: string;
  // Constractor with two argument UserService & MatDialog
  constructor(private service: UserService, private dialog: MatDialog) { }
  // Initialize method only reload list
  ngOnInit() {
    this.reloadData();
  }
  // Reload list
  reloadData(){
    this.service.getUsers().subscribe( 
      data => {
        this.listData = new MatTableDataSource(<any>data);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
        this.users = data;
      }); 
      this.service.users = this.listData;
  }
  // Reload list when update and create
  ngOnChanges(){
    this.reloadData();
  }
  // Create new user with open popup detail fields
  onCreate(){
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    this.dialog.open(UserComponent, dialogConfig).afterClosed().subscribe(redult => {this.reloadData();});
  }
  // Edit user with open popup detail fields
  onEdit(element: any){
    this.service.populateForm(element);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    this.dialog.open(UserComponent, dialogConfig).afterClosed().subscribe(redult => {this.reloadData();});
  }
  // Delete slected user record
  onDelete(element: any){
    this.service.deleteUser(element).subscribe(data => this.reloadData());
  }
  // Clear search field & refresh list
  onSearchClear(){
    this.searchKey = "";
    this.reloadData();
    this.applyFilter();
  }
  // Filter on list
  applyFilter(){
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
}
