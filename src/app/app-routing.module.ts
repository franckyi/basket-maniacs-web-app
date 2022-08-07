import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameScoresComponent } from './views/game-scores/game-scores.component';
import { HomeComponent } from './views/home/home.component';
import { SearchComponent } from './views/search/search.component';
import { NewsComponent } from './views/news/news.component';
import { TeamsComponent } from './views/teams/teams.component';
import { GameComponent } from './views/game/game.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'teams',
    component: TeamsComponent
  },
  {
    path: 'game-scores',
    component: GameScoresComponent
  },
  {
    path: 'game',
    component: GameComponent
  },
  {
    path: 'news',
    component: NewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
