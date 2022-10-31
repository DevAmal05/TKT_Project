import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import {MultiSelectModule} from 'primeng/multiselect';
import {TableModule} from 'primeng/table';
import { CompaniesComponent } from './companies/companies.component';


import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    CompanyDetailsComponent,
    CompaniesComponent
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MultiSelectModule,
    TableModule,
    ButtonModule,

    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
