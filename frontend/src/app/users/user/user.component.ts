
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Output() onChanged = new EventEmitter<string>();
  // Constractor with two argument UserService & MatDialog
  constructor(private service: UserService, public dialogRef: MatDialogRef<UserComponent>) { }
  // Hard code data for department
  departments = [
    { id: 3, value: 'Dep 1' },
    { id: 2, value: 'Dep 2' },
    { id: 3, value: 'Dep 3' }];
  // Initialize method without action
  ngOnInit() {
  }
  // Clear all field in form
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
  // Submit & save data create & edit stat
  onSubmit() {
    if(this.service.form.valid){
      if(this.service.form.value.$id == null)
        this.service.addUsers(this.service.form.value);
      else
        this.service.editUsers(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.onClose();
      this.onChanged.emit("true");
    }
  }
  // Close popup dialog
  onClose(){
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
}
