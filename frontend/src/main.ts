import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './app/material-module';
import { UsersComponent } from './app/users/users.component';
import { UserComponent } from './app/users/user/user.component';
import { UserListComponent } from './app/users/user-list/user-list.component';
import { TopBarComponent } from './app/top-bar/top-bar.component';
import { SearchComponent } from './app/search/search.component';
import { TitleListComponent } from './app/title-list/title-list.component';
import { ProductListComponent } from './app/product-list/product-list.component';
import { ProductDtlComponent } from './app/product-dtl/product-dtl.component';

import {AppComponent} from './app/app-component';

@NgModule({
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, HttpClientModule,
    DemoMaterialModule, MatNativeDateModule, ReactiveFormsModule,
  ],
  entryComponents: [AppComponent],
  declarations: [AppComponent, UsersComponent, UserComponent, 
    UserListComponent, TopBarComponent, SearchComponent, TitleListComponent, 
    ProductDtlComponent, ProductListComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */