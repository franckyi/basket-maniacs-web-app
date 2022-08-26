import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from "./material/material.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LatestScoresComponent } from './components/latest-scores/latest-scores.component';
import { LatestScoreItemComponent } from './components/latest-score-item/latest-score-item.component';
import { PlayerOfDayComponent } from './components/player-of-day/player-of-day.component';
import { HeaderHomeComponent } from './components/header-home/header-home.component';
import { HomeComponent } from './views/home/home.component';
import { TeamsComponent } from './views/teams/teams.component';
import { NewsComponent } from './views/news/news.component';
import { SearchComponent } from './views/search/search.component';
import { GameScoresComponent } from './views/game-scores/game-scores.component';
import { GameComponent } from './views/game/game.component';
import { HeaderSearchComponent } from './components/header-search/header-search.component';
import { HeaderTeamsComponent } from './components/header-teams/header-teams.component';
import { HeaderScoresComponent } from './components/header-scores/header-scores.component';
import { HeaderGameComponent } from './components/header-game/header-game.component';
import { HeaderNewsComponent } from './components/header-news/header-news.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import { AllScoresComponent } from './components/all-scores/all-scores.component';
import { AllPlayersComponent } from './components/all-players/all-players.component';
import { AllPlayersItemComponent } from './components/all-players-item/all-players-item.component';
import { AllTeamsComponent } from './components/all-teams/all-teams.component';
import { AllTeamsItemComponent } from './components/all-teams-item/all-teams-item.component';
import { AllStatsComponent } from './components/all-stats/all-stats.component';
import { AllStatsItemComponent } from './components/all-stats-item/all-stats-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LatestScoresComponent,
    LatestScoreItemComponent,
    HomeComponent,
    PlayerOfDayComponent,
    HeaderHomeComponent,
    TeamsComponent,
    NewsComponent,
    SearchComponent,
    GameScoresComponent,
    HeaderSearchComponent,
    HeaderTeamsComponent,
    HeaderScoresComponent,
    HeaderGameComponent,
    HeaderNewsComponent,
    FooterComponent,
    AllScoresComponent,
    AllPlayersComponent,
    AllPlayersItemComponent,
    AllTeamsComponent,
    AllTeamsItemComponent,
    AllStatsComponent,
    AllStatsItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }