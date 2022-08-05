import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerOfTheDayComponent } from './player-of-the-day/player-of-the-day.component';
import { HeaderHomeComponent } from './header-home/header-home.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerOfTheDayComponent,
    HeaderHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
