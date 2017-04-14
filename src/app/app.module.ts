import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar.component';

import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdIconModule } from '@angular2-material/icon';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdSlideToggleModule } from '@angular2-material/slide-toggle';
import { MdInputModule } from '@angular2-material/input';
import { MdListModule } from '@angular2-material/list';
import { MdTooltipModule } from '@angular2-material/tooltip';

import { MdIconRegistry } from '@angular2-material/icon';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdToolbarModule,
    MdSlideToggleModule,
    MdInputModule,
    MdListModule,
    MdTooltipModule
  ],
  providers: [ MdIconRegistry ],
  bootstrap: [AppComponent]
})
export class AppModule { }
