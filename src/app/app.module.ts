import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SplitButtonDemoRoutingModule } from './routing.module';
import {MenuItem} from 'primeng/api';                 //api

import { AccordionModule, GrowlModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { CheckboxModule } from 'primeng/primeng';
import { SplitButtonModule } from 'primeng/primeng';




import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DataComponent } from './data/data.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DataComponent,
    
  ],
  imports: [
    HttpClientModule,
    SplitButtonDemoRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    CheckboxModule,
    SplitButtonModule,
    GrowlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
