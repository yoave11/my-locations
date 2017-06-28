import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoryListComponent } from './category-list/category-list.component';
import {CategoryService} from "./category.service";
import { AddCategoryComponent } from './category-list/add-category/add-category.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { LocationListComponent } from './location-list/location-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    AddCategoryComponent,
    LocationListComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
