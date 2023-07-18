import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from "./components/common/material/material.module";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameListItemComponent } from './components/game-list/game-list-item/game-list-item.component';
import { HomeComponent } from './views/home/home.component';
import { TeamsComponent } from './views/teams/teams.component';
import { SearchComponent } from './views/search/search.component';
import { GamesViewComponent } from './views/games/games-view.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { AllPlayersComponent } from './components/all-players/all-players.component';
import { AllPlayersItemComponent } from './components/all-players/all-players-item/all-players-item.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { TeamListItemComponent } from './components/team-list/team-list-item/team-list-item.component';
import { SearchFiltersComponent } from './views/search/search-filters/search-filters.component';
import { SearchPlayerComponent } from './views/search/search-player/search-player.component';
import { SearchTeamComponent } from './views/search/search-team/search-team.component';
import { SearchGameComponent } from './views/search/search-game/search-game.component';
import { RandomPlayerComponent } from './components/all-players/random-player/random-player.component';
import { NewsComponent } from './views/news/news.component';
import { NavigationComponent } from './components/common/navigation/navigation.component';
import { HeaderComponent } from './components/common/header/header.component';
import { PaginatorComponent } from './components/common/paginator/paginator.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { LogoComponent } from './components/common/logo/logo.component';
import { SpinnerComponent } from './components/common/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameListItemComponent,
    HomeComponent,
    TeamsComponent,
    SearchComponent,
    GamesViewComponent,
    FooterComponent,
    AllPlayersComponent,
    AllPlayersItemComponent,
    TeamListComponent,
    TeamListItemComponent,
    SearchFiltersComponent,
    SearchPlayerComponent,
    SearchTeamComponent,
    SearchGameComponent,
    RandomPlayerComponent,
    NewsComponent,
    NavigationComponent,
    HeaderComponent,
    PaginatorComponent,
    NewsListComponent,
    LogoComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
