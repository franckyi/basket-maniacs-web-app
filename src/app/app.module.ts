import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LatestResultsComponent } from './latest-results/latest-results.component';
import { HomeComponent } from './home/home.component';
import { PlayerOfDayComponent } from './player-of-day/player-of-day.component';
import { HeaderHomeComponent } from './header-home/header-home.component';

@NgModule({
  declarations: [
    AppComponent,
    LatestResultsComponent,
    HomeComponent,
    PlayerOfDayComponent,
    HeaderHomeComponent,
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
