import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from "./material/material.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LatestResultsComponent } from './components/latest-results/latest-results.component';
import { PlayerOfDayComponent } from './components/player-of-day/player-of-day.component';
import { HeaderHomeComponent } from './components/header-home/header-home.component';
import { HomeComponent } from './views/home/home.component';
import { AllTeamsComponent } from './views/all-teams/all-teams.component';
import { MatchComponent } from './views/match/match.component';
import { NewsComponent } from './views/news/news.component';
import { AllMatchResultsComponent } from './views/all-match-results/all-match-results.component';
import { SearchComponent } from './views/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    LatestResultsComponent,
    HomeComponent,
    PlayerOfDayComponent,
    HeaderHomeComponent,
    AllTeamsComponent,
    MatchComponent,
    NewsComponent,
    AllMatchResultsComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
