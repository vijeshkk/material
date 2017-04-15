import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HostCard } from './card.component';

import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdIconModule } from '@angular2-material/icon';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdSlideToggleModule } from '@angular2-material/slide-toggle';
import { MdInputModule } from '@angular2-material/input';
import { MdListModule } from '@angular2-material/list';
import { MdTooltipModule } from '@angular2-material/tooltip';
import { MdTabsModule } from '@angular2-material/tabs';

import { MdIconRegistry } from '@angular2-material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HostCard
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
    MdTooltipModule,
    MdTabsModule
  ],
  providers: [ MdIconRegistry ],
  bootstrap: [AppComponent]
})
export class AppModule { }
