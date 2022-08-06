import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerOfTheDayComponent } from './player-of-the-day/player-of-the-day.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LatestResultsComponent } from './latest-results/latest-results.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerOfTheDayComponent,
    HeaderHomeComponent,
    LatestResultsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
