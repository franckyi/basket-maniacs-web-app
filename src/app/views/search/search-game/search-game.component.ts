import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface GamesData {
  id: number,
  date: string,
  home_team: {
      id: number,
      abbreviation: string,
      city: string,
      conference: string,
      division: string,
      full_name: string,
      name: string
  },
  home_team_score: number,
  period: number,
  postseason: boolean,
  season: number,
  status: string,
  time: string  ,
  visitor_team: {
      id: number,
      abbreviation: string,
      city: string,
      conference: string,
      division: string,
      full_name: string,
      name: string
  },
  visitor_team_score: number
}

@Component({
  selector: 'app-search-game',
  templateUrl: './search-game.component.html',
  styleUrls: ['./search-game.component.scss']
})
export class SearchGameComponent implements OnInit {

  displayedColumns: string[] = ['home_team', 'home_team_score', 'visitor_team', 'visitor_team_score', 'date'];
  dataSource = new MatTableDataSource();

  constructor() { }

  ngOnInit() {
    this.getRemoteData();
  }

  getRemoteData() {
    const remoteGamesData =
    [
      {
          "id": 47179,
          "date": "2019-01-30T00:00:00.000Z",
          "home_team": {
              "id": 2,
              "abbreviation": "BOS",
              "city": "Boston",
              "conference": "East",
              "division": "Atlantic",
              "full_name": "Boston Celtics",
              "name": "Celtics"
          },
          "home_team_score": 126,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": " ",
          "visitor_team": {
              "id": 4,
              "abbreviation": "CHA",
              "city": "Charlotte",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Charlotte Hornets",
              "name": "Hornets"
          },
          "visitor_team_score": 94
      },
      {
          "id": 48751,
          "date": "2019-02-09T00:00:00.000Z",
          "home_team": {
              "id": 2,
              "abbreviation": "BOS",
              "city": "Boston",
              "conference": "East",
              "division": "Atlantic",
              "full_name": "Boston Celtics",
              "name": "Celtics"
          },
          "home_team_score": 112,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 13,
              "abbreviation": "LAC",
              "city": "LA",
              "conference": "West",
              "division": "Pacific",
              "full_name": "LA Clippers",
              "name": "Clippers"
          },
          "visitor_team_score": 123
      },
      {
          "id": 48739,
          "date": "2019-02-08T00:00:00.000Z",
          "home_team": {
              "id": 23,
              "abbreviation": "PHI",
              "city": "Philadelphia",
              "conference": "East",
              "division": "Atlantic",
              "full_name": "Philadelphia 76ers",
              "name": "76ers"
          },
          "home_team_score": 117,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 8,
              "abbreviation": "DEN",
              "city": "Denver",
              "conference": "West",
              "division": "Northwest",
              "full_name": "Denver Nuggets",
              "name": "Nuggets"
          },
          "visitor_team_score": 110
      },
      {
          "id": 48740,
          "date": "2019-02-08T00:00:00.000Z",
          "home_team": {
              "id": 30,
              "abbreviation": "WAS",
              "city": "Washington",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Washington Wizards",
              "name": "Wizards"
          },
          "home_team_score": 119,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 6,
              "abbreviation": "CLE",
              "city": "Cleveland",
              "conference": "East",
              "division": "Central",
              "full_name": "Cleveland Cavaliers",
              "name": "Cavaliers"
          },
          "visitor_team_score": 106
      },
      {
          "id": 48746,
          "date": "2019-02-08T00:00:00.000Z",
          "home_team": {
              "id": 26,
              "abbreviation": "SAC",
              "city": "Sacramento",
              "conference": "West",
              "division": "Pacific",
              "full_name": "Sacramento Kings",
              "name": "Kings"
          },
          "home_team_score": 102,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 16,
              "abbreviation": "MIA",
              "city": "Miami",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Miami Heat",
              "name": "Heat"
          },
          "visitor_team_score": 96
      },
      {
          "id": 48762,
          "date": "2019-02-11T00:00:00.000Z",
          "home_team": {
              "id": 9,
              "abbreviation": "DET",
              "city": "Detroit",
              "conference": "East",
              "division": "Central",
              "full_name": "Detroit Pistons",
              "name": "Pistons"
          },
          "home_team_score": 121,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 30,
              "abbreviation": "WAS",
              "city": "Washington",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Washington Wizards",
              "name": "Wizards"
          },
          "visitor_team_score": 112
      },
      {
          "id": 48745,
          "date": "2019-02-08T00:00:00.000Z",
          "home_team": {
              "id": 19,
              "abbreviation": "NOP",
              "city": "New Orleans",
              "conference": "West",
              "division": "Southwest",
              "full_name": "New Orleans Pelicans",
              "name": "Pelicans"
          },
          "home_team_score": 122,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 18,
              "abbreviation": "MIN",
              "city": "Minnesota",
              "conference": "West",
              "division": "Northwest",
              "full_name": "Minnesota Timberwolves",
              "name": "Timberwolves"
          },
          "visitor_team_score": 117
      },
      {
          "id": 48748,
          "date": "2019-02-09T00:00:00.000Z",
          "home_team": {
              "id": 12,
              "abbreviation": "IND",
              "city": "Indiana",
              "conference": "East",
              "division": "Central",
              "full_name": "Indiana Pacers",
              "name": "Pacers"
          },
          "home_team_score": 105,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 6,
              "abbreviation": "CLE",
              "city": "Cleveland",
              "conference": "East",
              "division": "Central",
              "full_name": "Cleveland Cavaliers",
              "name": "Cavaliers"
          },
          "visitor_team_score": 90
      },
      {
          "id": 48749,
          "date": "2019-02-09T00:00:00.000Z",
          "home_team": {
              "id": 1,
              "abbreviation": "ATL",
              "city": "Atlanta",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Atlanta Hawks",
              "name": "Hawks"
          },
          "home_team_score": 120,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 4,
              "abbreviation": "CHA",
              "city": "Charlotte",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Charlotte Hornets",
              "name": "Hornets"
          },
          "visitor_team_score": 129
      },
      {
          "id": 48747,
          "date": "2019-02-09T00:00:00.000Z",
          "home_team": {
              "id": 29,
              "abbreviation": "UTA",
              "city": "Utah",
              "conference": "West",
              "division": "Northwest",
              "full_name": "Utah Jazz",
              "name": "Jazz"
          },
          "home_team_score": 125,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 27,
              "abbreviation": "SAS",
              "city": "San Antonio",
              "conference": "West",
              "division": "Southwest",
              "full_name": "San Antonio Spurs",
              "name": "Spurs"
          },
          "visitor_team_score": 105
      },
      {
          "id": 48752,
          "date": "2019-02-09T00:00:00.000Z",
          "home_team": {
              "id": 5,
              "abbreviation": "CHI",
              "city": "Chicago",
              "conference": "East",
              "division": "Central",
              "full_name": "Chicago Bulls",
              "name": "Bulls"
          },
          "home_team_score": 125,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 30,
              "abbreviation": "WAS",
              "city": "Washington",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Washington Wizards",
              "name": "Wizards"
          },
          "visitor_team_score": 134
      },
      {
          "id": 48756,
          "date": "2019-02-10T00:00:00.000Z",
          "home_team": {
              "id": 7,
              "abbreviation": "DAL",
              "city": "Dallas",
              "conference": "West",
              "division": "Southwest",
              "full_name": "Dallas Mavericks",
              "name": "Mavericks"
          },
          "home_team_score": 102,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 25,
              "abbreviation": "POR",
              "city": "Portland",
              "conference": "West",
              "division": "Northwest",
              "full_name": "Portland Trail Blazers",
              "name": "Trail Blazers"
          },
          "visitor_team_score": 101
      },
      {
          "id": 48760,
          "date": "2019-02-10T00:00:00.000Z",
          "home_team": {
              "id": 23,
              "abbreviation": "PHI",
              "city": "Philadelphia",
              "conference": "East",
              "division": "Atlantic",
              "full_name": "Philadelphia 76ers",
              "name": "76ers"
          },
          "home_team_score": 143,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 14,
              "abbreviation": "LAL",
              "city": "Los Angeles",
              "conference": "West",
              "division": "Pacific",
              "full_name": "Los Angeles Lakers",
              "name": "Lakers"
          },
          "visitor_team_score": 120
      },
      {
          "id": 48757,
          "date": "2019-02-10T00:00:00.000Z",
          "home_team": {
              "id": 26,
              "abbreviation": "SAC",
              "city": "Sacramento",
              "conference": "West",
              "division": "Pacific",
              "full_name": "Sacramento Kings",
              "name": "Kings"
          },
          "home_team_score": 117,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 24,
              "abbreviation": "PHX",
              "city": "Phoenix",
              "conference": "West",
              "division": "Pacific",
              "full_name": "Phoenix Suns",
              "name": "Suns"
          },
          "visitor_team_score": 104
      },
      {
          "id": 48755,
          "date": "2019-02-09T00:00:00.000Z",
          "home_team": {
              "id": 17,
              "abbreviation": "MIL",
              "city": "Milwaukee",
              "conference": "East",
              "division": "Central",
              "full_name": "Milwaukee Bucks",
              "name": "Bucks"
          },
          "home_team_score": 83,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 22,
              "abbreviation": "ORL",
              "city": "Orlando",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Orlando Magic",
              "name": "Magic"
          },
          "visitor_team_score": 103
      },
      {
          "id": 48754,
          "date": "2019-02-09T00:00:00.000Z",
          "home_team": {
              "id": 11,
              "abbreviation": "HOU",
              "city": "Houston",
              "conference": "West",
              "division": "Southwest",
              "full_name": "Houston Rockets",
              "name": "Rockets"
          },
          "home_team_score": 112,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 21,
              "abbreviation": "OKC",
              "city": "Oklahoma City",
              "conference": "West",
              "division": "Northwest",
              "full_name": "Oklahoma City Thunder",
              "name": "Thunder"
          },
          "visitor_team_score": 117
      },
      {
          "id": 48759,
          "date": "2019-02-10T00:00:00.000Z",
          "home_team": {
              "id": 10,
              "abbreviation": "GSW",
              "city": "Golden State",
              "conference": "West",
              "division": "Pacific",
              "full_name": "Golden State Warriors",
              "name": "Warriors"
          },
          "home_team_score": 120,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 16,
              "abbreviation": "MIA",
              "city": "Miami",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Miami Heat",
              "name": "Heat"
          },
          "visitor_team_score": 118
      },
      {
          "id": 48758,
          "date": "2019-02-10T00:00:00.000Z",
          "home_team": {
              "id": 1,
              "abbreviation": "ATL",
              "city": "Atlanta",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Atlanta Hawks",
              "name": "Hawks"
          },
          "home_team_score": 108,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 22,
              "abbreviation": "ORL",
              "city": "Orlando",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Orlando Magic",
              "name": "Magic"
          },
          "visitor_team_score": 124
      },
      {
          "id": 48766,
          "date": "2019-02-11T00:00:00.000Z",
          "home_team": {
              "id": 11,
              "abbreviation": "HOU",
              "city": "Houston",
              "conference": "West",
              "division": "Southwest",
              "full_name": "Houston Rockets",
              "name": "Rockets"
          },
          "home_team_score": 120,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 7,
              "abbreviation": "DAL",
              "city": "Dallas",
              "conference": "West",
              "division": "Southwest",
              "full_name": "Dallas Mavericks",
              "name": "Mavericks"
          },
          "visitor_team_score": 104
      },
      {
          "id": 48764,
          "date": "2019-02-11T00:00:00.000Z",
          "home_team": {
              "id": 28,
              "abbreviation": "TOR",
              "city": "Toronto",
              "conference": "East",
              "division": "Atlantic",
              "full_name": "Toronto Raptors",
              "name": "Raptors"
          },
          "home_team_score": 127,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 3,
              "abbreviation": "BKN",
              "city": "Brooklyn",
              "conference": "East",
              "division": "Atlantic",
              "full_name": "Brooklyn Nets",
              "name": "Nets"
          },
          "visitor_team_score": 125
      },
      {
          "id": 48770,
          "date": "2019-02-12T00:00:00.000Z",
          "home_team": {
              "id": 1,
              "abbreviation": "ATL",
              "city": "Atlanta",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Atlanta Hawks",
              "name": "Hawks"
          },
          "home_team_score": 117,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 14,
              "abbreviation": "LAL",
              "city": "Los Angeles",
              "conference": "West",
              "division": "Pacific",
              "full_name": "Los Angeles Lakers",
              "name": "Lakers"
          },
          "visitor_team_score": 113
      },
      {
          "id": 48763,
          "date": "2019-02-11T00:00:00.000Z",
          "home_team": {
              "id": 12,
              "abbreviation": "IND",
              "city": "Indiana",
              "conference": "East",
              "division": "Central",
              "full_name": "Indiana Pacers",
              "name": "Pacers"
          },
          "home_team_score": 99,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 4,
              "abbreviation": "CHA",
              "city": "Charlotte",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Charlotte Hornets",
              "name": "Hornets"
          },
          "visitor_team_score": 90
      },
      {
          "id": 48765,
          "date": "2019-02-11T00:00:00.000Z",
          "home_team": {
              "id": 5,
              "abbreviation": "CHI",
              "city": "Chicago",
              "conference": "East",
              "division": "Central",
              "full_name": "Chicago Bulls",
              "name": "Bulls"
          },
          "home_team_score": 99,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 17,
              "abbreviation": "MIL",
              "city": "Milwaukee",
              "conference": "East",
              "division": "Central",
              "full_name": "Milwaukee Bucks",
              "name": "Bucks"
          },
          "visitor_team_score": 112
      },
      {
          "id": 48774,
          "date": "2019-02-12T00:00:00.000Z",
          "home_team": {
              "id": 10,
              "abbreviation": "GSW",
              "city": "Golden State",
              "conference": "West",
              "division": "Pacific",
              "full_name": "Golden State Warriors",
              "name": "Warriors"
          },
          "home_team_score": 115,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 29,
              "abbreviation": "UTA",
              "city": "Utah",
              "conference": "West",
              "division": "Northwest",
              "full_name": "Utah Jazz",
              "name": "Jazz"
          },
          "visitor_team_score": 108
      },
      {
          "id": 48772,
          "date": "2019-02-12T00:00:00.000Z",
          "home_team": {
              "id": 15,
              "abbreviation": "MEM",
              "city": "Memphis",
              "conference": "West",
              "division": "Southwest",
              "full_name": "Memphis Grizzlies",
              "name": "Grizzlies"
          },
          "home_team_score": 107,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 27,
              "abbreviation": "SAS",
              "city": "San Antonio",
              "conference": "West",
              "division": "Southwest",
              "full_name": "San Antonio Spurs",
              "name": "Spurs"
          },
          "visitor_team_score": 108
      },
      {
          "id": 48775,
          "date": "2019-02-13T00:00:00.000Z",
          "home_team": {
              "id": 6,
              "abbreviation": "CLE",
              "city": "Cleveland",
              "conference": "East",
              "division": "Central",
              "full_name": "Cleveland Cavaliers",
              "name": "Cavaliers"
          },
          "home_team_score": 139,
          "period": 7,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 3,
              "abbreviation": "BKN",
              "city": "Brooklyn",
              "conference": "East",
              "division": "Atlantic",
              "full_name": "Brooklyn Nets",
              "name": "Nets"
          },
          "visitor_team_score": 148
      },
      {
          "id": 48771,
          "date": "2019-02-12T00:00:00.000Z",
          "home_team": {
              "id": 23,
              "abbreviation": "PHI",
              "city": "Philadelphia",
              "conference": "East",
              "division": "Atlantic",
              "full_name": "Philadelphia 76ers",
              "name": "76ers"
          },
          "home_team_score": 109,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 2,
              "abbreviation": "BOS",
              "city": "Boston",
              "conference": "East",
              "division": "Atlantic",
              "full_name": "Boston Celtics",
              "name": "Celtics"
          },
          "visitor_team_score": 112
      },
      {
          "id": 48773,
          "date": "2019-02-12T00:00:00.000Z",
          "home_team": {
              "id": 19,
              "abbreviation": "NOP",
              "city": "New Orleans",
              "conference": "West",
              "division": "Southwest",
              "full_name": "New Orleans Pelicans",
              "name": "Pelicans"
          },
          "home_team_score": 88,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 22,
              "abbreviation": "ORL",
              "city": "Orlando",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Orlando Magic",
              "name": "Magic"
          },
          "visitor_team_score": 118
      },
      {
          "id": 48781,
          "date": "2019-02-13T00:00:00.000Z",
          "home_team": {
              "id": 18,
              "abbreviation": "MIN",
              "city": "Minnesota",
              "conference": "West",
              "division": "Northwest",
              "full_name": "Minnesota Timberwolves",
              "name": "Timberwolves"
          },
          "home_team_score": 121,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 11,
              "abbreviation": "HOU",
              "city": "Houston",
              "conference": "West",
              "division": "Southwest",
              "full_name": "Houston Rockets",
              "name": "Rockets"
          },
          "visitor_team_score": 111
      },
      {
          "id": 48787,
          "date": "2019-02-14T00:00:00.000Z",
          "home_team": {
              "id": 19,
              "abbreviation": "NOP",
              "city": "New Orleans",
              "conference": "West",
              "division": "Southwest",
              "full_name": "New Orleans Pelicans",
              "name": "Pelicans"
          },
          "home_team_score": 131,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 21,
              "abbreviation": "OKC",
              "city": "Oklahoma City",
              "conference": "West",
              "division": "Northwest",
              "full_name": "Oklahoma City Thunder",
              "name": "Thunder"
          },
          "visitor_team_score": 122
      },
      {
          "id": 48776,
          "date": "2019-02-13T00:00:00.000Z",
          "home_team": {
              "id": 12,
              "abbreviation": "IND",
              "city": "Indiana",
              "conference": "East",
              "division": "Central",
              "full_name": "Indiana Pacers",
              "name": "Pacers"
          },
          "home_team_score": 97,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 17,
              "abbreviation": "MIL",
              "city": "Milwaukee",
              "conference": "East",
              "division": "Central",
              "full_name": "Milwaukee Bucks",
              "name": "Bucks"
          },
          "visitor_team_score": 106
      },
      {
          "id": 48777,
          "date": "2019-02-13T00:00:00.000Z",
          "home_team": {
              "id": 2,
              "abbreviation": "BOS",
              "city": "Boston",
              "conference": "East",
              "division": "Atlantic",
              "full_name": "Boston Celtics",
              "name": "Celtics"
          },
          "home_team_score": 118,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 9,
              "abbreviation": "DET",
              "city": "Detroit",
              "conference": "East",
              "division": "Central",
              "full_name": "Detroit Pistons",
              "name": "Pistons"
          },
          "visitor_team_score": 110
      },
      {
          "id": 48778,
          "date": "2019-02-13T00:00:00.000Z",
          "home_team": {
              "id": 20,
              "abbreviation": "NYK",
              "city": "New York",
              "conference": "East",
              "division": "Atlantic",
              "full_name": "New York Knicks",
              "name": "Knicks"
          },
          "home_team_score": 111,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 23,
              "abbreviation": "PHI",
              "city": "Philadelphia",
              "conference": "East",
              "division": "Atlantic",
              "full_name": "Philadelphia 76ers",
              "name": "76ers"
          },
          "visitor_team_score": 126
      },
      {
          "id": 48780,
          "date": "2019-02-13T00:00:00.000Z",
          "home_team": {
              "id": 5,
              "abbreviation": "CHI",
              "city": "Chicago",
              "conference": "East",
              "division": "Central",
              "full_name": "Chicago Bulls",
              "name": "Bulls"
          },
          "home_team_score": 122,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 15,
              "abbreviation": "MEM",
              "city": "Memphis",
              "conference": "West",
              "division": "Southwest",
              "full_name": "Memphis Grizzlies",
              "name": "Grizzlies"
          },
          "visitor_team_score": 110
      },
      {
          "id": 48793,
          "date": "2019-02-21T00:00:00.000Z",
          "home_team": {
              "id": 17,
              "abbreviation": "MIL",
              "city": "Milwaukee",
              "conference": "East",
              "division": "Central",
              "full_name": "Milwaukee Bucks",
              "name": "Bucks"
          },
          "home_team_score": 98,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 2,
              "abbreviation": "BOS",
              "city": "Boston",
              "conference": "East",
              "division": "Atlantic",
              "full_name": "Boston Celtics",
              "name": "Celtics"
          },
          "visitor_team_score": 97
      },
      {
          "id": 48806,
          "date": "2019-02-23T00:00:00.000Z",
          "home_team": {
              "id": 6,
              "abbreviation": "CLE",
              "city": "Cleveland",
              "conference": "East",
              "division": "Central",
              "full_name": "Cleveland Cavaliers",
              "name": "Cavaliers"
          },
          "home_team_score": 112,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 15,
              "abbreviation": "MEM",
              "city": "Memphis",
              "conference": "West",
              "division": "Southwest",
              "full_name": "Memphis Grizzlies",
              "name": "Grizzlies"
          },
          "visitor_team_score": 107
      },
      {
          "id": 48796,
          "date": "2019-02-22T00:00:00.000Z",
          "home_team": {
              "id": 22,
              "abbreviation": "ORL",
              "city": "Orlando",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Orlando Magic",
              "name": "Magic"
          },
          "home_team_score": 109,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 5,
              "abbreviation": "CHI",
              "city": "Chicago",
              "conference": "East",
              "division": "Central",
              "full_name": "Chicago Bulls",
              "name": "Bulls"
          },
          "visitor_team_score": 110
      },
      {
          "id": 48779,
          "date": "2019-02-13T00:00:00.000Z",
          "home_team": {
              "id": 28,
              "abbreviation": "TOR",
              "city": "Toronto",
              "conference": "East",
              "division": "Atlantic",
              "full_name": "Toronto Raptors",
              "name": "Raptors"
          },
          "home_team_score": 129,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 30,
              "abbreviation": "WAS",
              "city": "Washington",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Washington Wizards",
              "name": "Wizards"
          },
          "visitor_team_score": 120
      },
      {
          "id": 48782,
          "date": "2019-02-13T00:00:00.000Z",
          "home_team": {
              "id": 7,
              "abbreviation": "DAL",
              "city": "Dallas",
              "conference": "West",
              "division": "Southwest",
              "full_name": "Dallas Mavericks",
              "name": "Mavericks"
          },
          "home_team_score": 101,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 16,
              "abbreviation": "MIA",
              "city": "Miami",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Miami Heat",
              "name": "Heat"
          },
          "visitor_team_score": 112
      },
      {
          "id": 48784,
          "date": "2019-02-13T00:00:00.000Z",
          "home_team": {
              "id": 25,
              "abbreviation": "POR",
              "city": "Portland",
              "conference": "West",
              "division": "Northwest",
              "full_name": "Portland Trail Blazers",
              "name": "Trail Blazers"
          },
          "home_team_score": 129,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 10,
              "abbreviation": "GSW",
              "city": "Golden State",
              "conference": "West",
              "division": "Pacific",
              "full_name": "Golden State Warriors",
              "name": "Warriors"
          },
          "visitor_team_score": 107
      },
      {
          "id": 48791,
          "date": "2019-02-21T00:00:00.000Z",
          "home_team": {
              "id": 23,
              "abbreviation": "PHI",
              "city": "Philadelphia",
              "conference": "East",
              "division": "Atlantic",
              "full_name": "Philadelphia 76ers",
              "name": "76ers"
          },
          "home_team_score": 106,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 16,
              "abbreviation": "MIA",
              "city": "Miami",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Miami Heat",
              "name": "Heat"
          },
          "visitor_team_score": 102
      },
      {
          "id": 48795,
          "date": "2019-02-21T00:00:00.000Z",
          "home_team": {
              "id": 14,
              "abbreviation": "LAL",
              "city": "Los Angeles",
              "conference": "West",
              "division": "Pacific",
              "full_name": "Los Angeles Lakers",
              "name": "Lakers"
          },
          "home_team_score": 111,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 11,
              "abbreviation": "HOU",
              "city": "Houston",
              "conference": "West",
              "division": "Southwest",
              "full_name": "Houston Rockets",
              "name": "Rockets"
          },
          "visitor_team_score": 106
      },
      {
          "id": 48834,
          "date": "2019-02-27T00:00:00.000Z",
          "home_team": {
              "id": 4,
              "abbreviation": "CHA",
              "city": "Charlotte",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Charlotte Hornets",
              "name": "Hornets"
          },
          "home_team_score": 113,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 11,
              "abbreviation": "HOU",
              "city": "Houston",
              "conference": "West",
              "division": "Southwest",
              "full_name": "Houston Rockets",
              "name": "Rockets"
          },
          "visitor_team_score": 118
      },
      {
          "id": 48802,
          "date": "2019-02-22T00:00:00.000Z",
          "home_team": {
              "id": 15,
              "abbreviation": "MEM",
              "city": "Memphis",
              "conference": "West",
              "division": "Southwest",
              "full_name": "Memphis Grizzlies",
              "name": "Grizzlies"
          },
          "home_team_score": 106,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 13,
              "abbreviation": "LAC",
              "city": "LA",
              "conference": "West",
              "division": "Pacific",
              "full_name": "LA Clippers",
              "name": "Clippers"
          },
          "visitor_team_score": 112
      },
      {
          "id": 48829,
          "date": "2019-02-25T00:00:00.000Z",
          "home_team": {
              "id": 19,
              "abbreviation": "NOP",
              "city": "New Orleans",
              "conference": "West",
              "division": "Southwest",
              "full_name": "New Orleans Pelicans",
              "name": "Pelicans"
          },
          "home_team_score": 110,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 23,
              "abbreviation": "PHI",
              "city": "Philadelphia",
              "conference": "East",
              "division": "Atlantic",
              "full_name": "Philadelphia 76ers",
              "name": "76ers"
          },
          "visitor_team_score": 111
      },
      {
          "id": 48833,
          "date": "2019-02-26T00:00:00.000Z",
          "home_team": {
              "id": 8,
              "abbreviation": "DEN",
              "city": "Denver",
              "conference": "West",
              "division": "Northwest",
              "full_name": "Denver Nuggets",
              "name": "Nuggets"
          },
          "home_team_score": 121,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 21,
              "abbreviation": "OKC",
              "city": "Oklahoma City",
              "conference": "West",
              "division": "Northwest",
              "full_name": "Oklahoma City Thunder",
              "name": "Thunder"
          },
          "visitor_team_score": 112
      },
      {
          "id": 48844,
          "date": "2019-02-27T00:00:00.000Z",
          "home_team": {
              "id": 14,
              "abbreviation": "LAL",
              "city": "Los Angeles",
              "conference": "West",
              "division": "Pacific",
              "full_name": "Los Angeles Lakers",
              "name": "Lakers"
          },
          "home_team_score": 125,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 19,
              "abbreviation": "NOP",
              "city": "New Orleans",
              "conference": "West",
              "division": "Southwest",
              "full_name": "New Orleans Pelicans",
              "name": "Pelicans"
          },
          "visitor_team_score": 119
      },
      {
          "id": 48859,
          "date": "2019-03-02T00:00:00.000Z",
          "home_team": {
              "id": 12,
              "abbreviation": "IND",
              "city": "Indiana",
              "conference": "East",
              "division": "Central",
              "full_name": "Indiana Pacers",
              "name": "Pacers"
          },
          "home_team_score": 112,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 22,
              "abbreviation": "ORL",
              "city": "Orlando",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Orlando Magic",
              "name": "Magic"
          },
          "visitor_team_score": 117
      },
      {
          "id": 48845,
          "date": "2019-02-28T00:00:00.000Z",
          "home_team": {
              "id": 12,
              "abbreviation": "IND",
              "city": "Indiana",
              "conference": "East",
              "division": "Central",
              "full_name": "Indiana Pacers",
              "name": "Pacers"
          },
          "home_team_score": 122,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 18,
              "abbreviation": "MIN",
              "city": "Minnesota",
              "conference": "West",
              "division": "Northwest",
              "full_name": "Minnesota Timberwolves",
              "name": "Timberwolves"
          },
          "visitor_team_score": 115
      },
      {
          "id": 48856,
          "date": "2019-03-01T00:00:00.000Z",
          "home_team": {
              "id": 26,
              "abbreviation": "SAC",
              "city": "Sacramento",
              "conference": "West",
              "division": "Pacific",
              "full_name": "Sacramento Kings",
              "name": "Kings"
          },
          "home_team_score": 109,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 13,
              "abbreviation": "LAC",
              "city": "LA",
              "conference": "West",
              "division": "Pacific",
              "full_name": "LA Clippers",
              "name": "Clippers"
          },
          "visitor_team_score": 116
      },
      {
          "id": 48872,
          "date": "2019-03-03T00:00:00.000Z",
          "home_team": {
              "id": 9,
              "abbreviation": "DET",
              "city": "Detroit",
              "conference": "East",
              "division": "Central",
              "full_name": "Detroit Pistons",
              "name": "Pistons"
          },
          "home_team_score": 112,
          "period": 5,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 28,
              "abbreviation": "TOR",
              "city": "Toronto",
              "conference": "East",
              "division": "Atlantic",
              "full_name": "Toronto Raptors",
              "name": "Raptors"
          },
          "visitor_team_score": 107
      },
      {
          "id": 48875,
          "date": "2019-03-04T00:00:00.000Z",
          "home_team": {
              "id": 3,
              "abbreviation": "BKN",
              "city": "Brooklyn",
              "conference": "East",
              "division": "Atlantic",
              "full_name": "Brooklyn Nets",
              "name": "Nets"
          },
          "home_team_score": 127,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 7,
              "abbreviation": "DAL",
              "city": "Dallas",
              "conference": "West",
              "division": "Southwest",
              "full_name": "Dallas Mavericks",
              "name": "Mavericks"
          },
          "visitor_team_score": 88
      },
      {
          "id": 48887,
          "date": "2019-03-05T00:00:00.000Z",
          "home_team": {
              "id": 10,
              "abbreviation": "GSW",
              "city": "Golden State",
              "conference": "West",
              "division": "Pacific",
              "full_name": "Golden State Warriors",
              "name": "Warriors"
          },
          "home_team_score": 95,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 2,
              "abbreviation": "BOS",
              "city": "Boston",
              "conference": "East",
              "division": "Atlantic",
              "full_name": "Boston Celtics",
              "name": "Celtics"
          },
          "visitor_team_score": 128
      },
      {
          "id": 48897,
          "date": "2019-03-06T00:00:00.000Z",
          "home_team": {
              "id": 14,
              "abbreviation": "LAL",
              "city": "Los Angeles",
              "conference": "West",
              "division": "Pacific",
              "full_name": "Los Angeles Lakers",
              "name": "Lakers"
          },
          "home_team_score": 99,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 8,
              "abbreviation": "DEN",
              "city": "Denver",
              "conference": "West",
              "division": "Northwest",
              "full_name": "Denver Nuggets",
              "name": "Nuggets"
          },
          "visitor_team_score": 115
      },
      {
          "id": 48890,
          "date": "2019-03-06T00:00:00.000Z",
          "home_team": {
              "id": 30,
              "abbreviation": "WAS",
              "city": "Washington",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Washington Wizards",
              "name": "Wizards"
          },
          "home_team_score": 132,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 7,
              "abbreviation": "DAL",
              "city": "Dallas",
              "conference": "West",
              "division": "Southwest",
              "full_name": "Dallas Mavericks",
              "name": "Mavericks"
          },
          "visitor_team_score": 123
      },
      {
          "id": 48907,
          "date": "2019-03-08T00:00:00.000Z",
          "home_team": {
              "id": 10,
              "abbreviation": "GSW",
              "city": "Golden State",
              "conference": "West",
              "division": "Pacific",
              "full_name": "Golden State Warriors",
              "name": "Warriors"
          },
          "home_team_score": 122,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 8,
              "abbreviation": "DEN",
              "city": "Denver",
              "conference": "West",
              "division": "Northwest",
              "full_name": "Denver Nuggets",
              "name": "Nuggets"
          },
          "visitor_team_score": 105
      },
      {
          "id": 48903,
          "date": "2019-03-08T00:00:00.000Z",
          "home_team": {
              "id": 16,
              "abbreviation": "MIA",
              "city": "Miami",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Miami Heat",
              "name": "Heat"
          },
          "home_team_score": 126,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 6,
              "abbreviation": "CLE",
              "city": "Cleveland",
              "conference": "East",
              "division": "Central",
              "full_name": "Cleveland Cavaliers",
              "name": "Cavaliers"
          },
          "visitor_team_score": 110
      },
      {
          "id": 48910,
          "date": "2019-03-09T00:00:00.000Z",
          "home_team": {
              "id": 1,
              "abbreviation": "ATL",
              "city": "Atlanta",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Atlanta Hawks",
              "name": "Hawks"
          },
          "home_team_score": 112,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 3,
              "abbreviation": "BKN",
              "city": "Brooklyn",
              "conference": "East",
              "division": "Atlantic",
              "full_name": "Brooklyn Nets",
              "name": "Nets"
          },
          "visitor_team_score": 114
      },
      {
          "id": 48937,
          "date": "2019-03-13T00:00:00.000Z",
          "home_team": {
              "id": 30,
              "abbreviation": "WAS",
              "city": "Washington",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Washington Wizards",
              "name": "Wizards"
          },
          "home_team_score": 100,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 22,
              "abbreviation": "ORL",
              "city": "Orlando",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Orlando Magic",
              "name": "Magic"
          },
          "visitor_team_score": 90
      },
      {
          "id": 48913,
          "date": "2019-03-09T00:00:00.000Z",
          "home_team": {
              "id": 17,
              "abbreviation": "MIL",
              "city": "Milwaukee",
              "conference": "East",
              "division": "Central",
              "full_name": "Milwaukee Bucks",
              "name": "Bucks"
          },
          "home_team_score": 131,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 4,
              "abbreviation": "CHA",
              "city": "Charlotte",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Charlotte Hornets",
              "name": "Hornets"
          },
          "visitor_team_score": 114
      },
      {
          "id": 48919,
          "date": "2019-03-10T00:00:00.000Z",
          "home_team": {
              "id": 15,
              "abbreviation": "MEM",
              "city": "Memphis",
              "conference": "West",
              "division": "Southwest",
              "full_name": "Memphis Grizzlies",
              "name": "Grizzlies"
          },
          "home_team_score": 105,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 22,
              "abbreviation": "ORL",
              "city": "Orlando",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Orlando Magic",
              "name": "Magic"
          },
          "visitor_team_score": 97
      },
      {
          "id": 48915,
          "date": "2019-03-10T00:00:00.000Z",
          "home_team": {
              "id": 9,
              "abbreviation": "DET",
              "city": "Detroit",
              "conference": "East",
              "division": "Central",
              "full_name": "Detroit Pistons",
              "name": "Pistons"
          },
          "home_team_score": 131,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 5,
              "abbreviation": "CHI",
              "city": "Chicago",
              "conference": "East",
              "division": "Central",
              "full_name": "Chicago Bulls",
              "name": "Bulls"
          },
          "visitor_team_score": 108
      },
      {
          "id": 48925,
          "date": "2019-03-11T00:00:00.000Z",
          "home_team": {
              "id": 30,
              "abbreviation": "WAS",
              "city": "Washington",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Washington Wizards",
              "name": "Wizards"
          },
          "home_team_score": 121,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 26,
              "abbreviation": "SAC",
              "city": "Sacramento",
              "conference": "West",
              "division": "Pacific",
              "full_name": "Sacramento Kings",
              "name": "Kings"
          },
          "visitor_team_score": 115
      },
      {
          "id": 48921,
          "date": "2019-03-10T00:00:00.000Z",
          "home_team": {
              "id": 18,
              "abbreviation": "MIN",
              "city": "Minnesota",
              "conference": "West",
              "division": "Northwest",
              "full_name": "Minnesota Timberwolves",
              "name": "Timberwolves"
          },
          "home_team_score": 103,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 20,
              "abbreviation": "NYK",
              "city": "New York",
              "conference": "East",
              "division": "Atlantic",
              "full_name": "New York Knicks",
              "name": "Knicks"
          },
          "visitor_team_score": 92
      },
      {
          "id": 48932,
          "date": "2019-03-12T00:00:00.000Z",
          "home_team": {
              "id": 5,
              "abbreviation": "CHI",
              "city": "Chicago",
              "conference": "East",
              "division": "Central",
              "full_name": "Chicago Bulls",
              "name": "Bulls"
          },
          "home_team_score": 107,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 14,
              "abbreviation": "LAL",
              "city": "Los Angeles",
              "conference": "West",
              "division": "Pacific",
              "full_name": "Los Angeles Lakers",
              "name": "Lakers"
          },
          "visitor_team_score": 123
      },
      {
          "id": 48959,
          "date": "2019-03-16T00:00:00.000Z",
          "home_team": {
              "id": 7,
              "abbreviation": "DAL",
              "city": "Dallas",
              "conference": "West",
              "division": "Southwest",
              "full_name": "Dallas Mavericks",
              "name": "Mavericks"
          },
          "home_team_score": 121,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 6,
              "abbreviation": "CLE",
              "city": "Cleveland",
              "conference": "East",
              "division": "Central",
              "full_name": "Cleveland Cavaliers",
              "name": "Cavaliers"
          },
          "visitor_team_score": 116
      },
      {
          "id": 48947,
          "date": "2019-03-14T00:00:00.000Z",
          "home_team": {
              "id": 29,
              "abbreviation": "UTA",
              "city": "Utah",
              "conference": "West",
              "division": "Northwest",
              "full_name": "Utah Jazz",
              "name": "Jazz"
          },
          "home_team_score": 120,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 18,
              "abbreviation": "MIN",
              "city": "Minnesota",
              "conference": "West",
              "division": "Northwest",
              "full_name": "Minnesota Timberwolves",
              "name": "Timberwolves"
          },
          "visitor_team_score": 100
      },
      {
          "id": 48950,
          "date": "2019-03-15T00:00:00.000Z",
          "home_team": {
              "id": 23,
              "abbreviation": "PHI",
              "city": "Philadelphia",
              "conference": "East",
              "division": "Atlantic",
              "full_name": "Philadelphia 76ers",
              "name": "76ers"
          },
          "home_team_score": 123,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 26,
              "abbreviation": "SAC",
              "city": "Sacramento",
              "conference": "West",
              "division": "Pacific",
              "full_name": "Sacramento Kings",
              "name": "Kings"
          },
          "visitor_team_score": 114
      },
      {
          "id": 49001,
          "date": "2019-03-21T00:00:00.000Z",
          "home_team": {
              "id": 24,
              "abbreviation": "PHX",
              "city": "Phoenix",
              "conference": "West",
              "division": "Pacific",
              "full_name": "Phoenix Suns",
              "name": "Suns"
          },
          "home_team_score": 98,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 9,
              "abbreviation": "DET",
              "city": "Detroit",
              "conference": "East",
              "division": "Central",
              "full_name": "Detroit Pistons",
              "name": "Pistons"
          },
          "visitor_team_score": 118
      },
      {
          "id": 48970,
          "date": "2019-03-17T00:00:00.000Z",
          "home_team": {
              "id": 26,
              "abbreviation": "SAC",
              "city": "Sacramento",
              "conference": "West",
              "division": "Pacific",
              "full_name": "Sacramento Kings",
              "name": "Kings"
          },
          "home_team_score": 129,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 5,
              "abbreviation": "CHI",
              "city": "Chicago",
              "conference": "East",
              "division": "Central",
              "full_name": "Chicago Bulls",
              "name": "Bulls"
          },
          "visitor_team_score": 102
      },
      {
          "id": 48977,
          "date": "2019-03-18T00:00:00.000Z",
          "home_team": {
              "id": 21,
              "abbreviation": "OKC",
              "city": "Oklahoma City",
              "conference": "West",
              "division": "Northwest",
              "full_name": "Oklahoma City Thunder",
              "name": "Thunder"
          },
          "home_team_score": 107,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 16,
              "abbreviation": "MIA",
              "city": "Miami",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Miami Heat",
              "name": "Heat"
          },
          "visitor_team_score": 116
      },
      {
          "id": 48995,
          "date": "2019-03-20T00:00:00.000Z",
          "home_team": {
              "id": 21,
              "abbreviation": "OKC",
              "city": "Oklahoma City",
              "conference": "West",
              "division": "Northwest",
              "full_name": "Oklahoma City Thunder",
              "name": "Thunder"
          },
          "home_team_score": 114,
          "period": 5,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 28,
              "abbreviation": "TOR",
              "city": "Toronto",
              "conference": "East",
              "division": "Atlantic",
              "full_name": "Toronto Raptors",
              "name": "Raptors"
          },
          "visitor_team_score": 123
      },
      {
          "id": 49007,
          "date": "2019-03-22T00:00:00.000Z",
          "home_team": {
              "id": 11,
              "abbreviation": "HOU",
              "city": "Houston",
              "conference": "West",
              "division": "Southwest",
              "full_name": "Houston Rockets",
              "name": "Rockets"
          },
          "home_team_score": 111,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 27,
              "abbreviation": "SAS",
              "city": "San Antonio",
              "conference": "West",
              "division": "Southwest",
              "full_name": "San Antonio Spurs",
              "name": "Spurs"
          },
          "visitor_team_score": 105
      },
      {
          "id": 49062,
          "date": "2019-03-30T00:00:00.000Z",
          "home_team": {
              "id": 9,
              "abbreviation": "DET",
              "city": "Detroit",
              "conference": "East",
              "division": "Central",
              "full_name": "Detroit Pistons",
              "name": "Pistons"
          },
          "home_team_score": 99,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 25,
              "abbreviation": "POR",
              "city": "Portland",
              "conference": "West",
              "division": "Northwest",
              "full_name": "Portland Trail Blazers",
              "name": "Trail Blazers"
          },
          "visitor_team_score": 90
      },
      {
          "id": 49013,
          "date": "2019-03-23T00:00:00.000Z",
          "home_team": {
              "id": 5,
              "abbreviation": "CHI",
              "city": "Chicago",
              "conference": "East",
              "division": "Central",
              "full_name": "Chicago Bulls",
              "name": "Bulls"
          },
          "home_team_score": 83,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 29,
              "abbreviation": "UTA",
              "city": "Utah",
              "conference": "West",
              "division": "Northwest",
              "full_name": "Utah Jazz",
              "name": "Jazz"
          },
          "visitor_team_score": 114
      },
      {
          "id": 49022,
          "date": "2019-03-24T00:00:00.000Z",
          "home_team": {
              "id": 19,
              "abbreviation": "NOP",
              "city": "New Orleans",
              "conference": "West",
              "division": "Southwest",
              "full_name": "New Orleans Pelicans",
              "name": "Pelicans"
          },
          "home_team_score": 90,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 11,
              "abbreviation": "HOU",
              "city": "Houston",
              "conference": "West",
              "division": "Southwest",
              "full_name": "Houston Rockets",
              "name": "Rockets"
          },
          "visitor_team_score": 113
      },
      {
          "id": 49026,
          "date": "2019-03-25T00:00:00.000Z",
          "home_team": {
              "id": 22,
              "abbreviation": "ORL",
              "city": "Orlando",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Orlando Magic",
              "name": "Magic"
          },
          "home_team_score": 119,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 23,
              "abbreviation": "PHI",
              "city": "Philadelphia",
              "conference": "East",
              "division": "Atlantic",
              "full_name": "Philadelphia 76ers",
              "name": "76ers"
          },
          "visitor_team_score": 98
      },
      {
          "id": 49033,
          "date": "2019-03-26T00:00:00.000Z",
          "home_team": {
              "id": 28,
              "abbreviation": "TOR",
              "city": "Toronto",
              "conference": "East",
              "division": "Atlantic",
              "full_name": "Toronto Raptors",
              "name": "Raptors"
          },
          "home_team_score": 112,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 5,
              "abbreviation": "CHI",
              "city": "Chicago",
              "conference": "East",
              "division": "Central",
              "full_name": "Chicago Bulls",
              "name": "Bulls"
          },
          "visitor_team_score": 103
      },
      {
          "id": 49052,
          "date": "2019-03-28T00:00:00.000Z",
          "home_team": {
              "id": 27,
              "abbreviation": "SAS",
              "city": "San Antonio",
              "conference": "West",
              "division": "Southwest",
              "full_name": "San Antonio Spurs",
              "name": "Spurs"
          },
          "home_team_score": 116,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 6,
              "abbreviation": "CLE",
              "city": "Cleveland",
              "conference": "East",
              "division": "Central",
              "full_name": "Cleveland Cavaliers",
              "name": "Cavaliers"
          },
          "visitor_team_score": 110
      },
      {
          "id": 49058,
          "date": "2019-03-29T00:00:00.000Z",
          "home_team": {
              "id": 14,
              "abbreviation": "LAL",
              "city": "Los Angeles",
              "conference": "West",
              "division": "Pacific",
              "full_name": "Los Angeles Lakers",
              "name": "Lakers"
          },
          "home_team_score": 129,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 4,
              "abbreviation": "CHA",
              "city": "Charlotte",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Charlotte Hornets",
              "name": "Hornets"
          },
          "visitor_team_score": 115
      },
      {
          "id": 49070,
          "date": "2019-03-31T00:00:00.000Z",
          "home_team": {
              "id": 19,
              "abbreviation": "NOP",
              "city": "New Orleans",
              "conference": "West",
              "division": "Southwest",
              "full_name": "New Orleans Pelicans",
              "name": "Pelicans"
          },
          "home_team_score": 102,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 14,
              "abbreviation": "LAL",
              "city": "Los Angeles",
              "conference": "West",
              "division": "Pacific",
              "full_name": "Los Angeles Lakers",
              "name": "Lakers"
          },
          "visitor_team_score": 130
      },
      {
          "id": 49076,
          "date": "2019-04-01T00:00:00.000Z",
          "home_team": {
              "id": 2,
              "abbreviation": "BOS",
              "city": "Boston",
              "conference": "East",
              "division": "Atlantic",
              "full_name": "Boston Celtics",
              "name": "Celtics"
          },
          "home_team_score": 110,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 16,
              "abbreviation": "MIA",
              "city": "Miami",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Miami Heat",
              "name": "Heat"
          },
          "visitor_team_score": 105
      },
      {
          "id": 49085,
          "date": "2019-04-02T00:00:00.000Z",
          "home_team": {
              "id": 27,
              "abbreviation": "SAS",
              "city": "San Antonio",
              "conference": "West",
              "division": "Southwest",
              "full_name": "San Antonio Spurs",
              "name": "Spurs"
          },
          "home_team_score": 117,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 1,
              "abbreviation": "ATL",
              "city": "Atlanta",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Atlanta Hawks",
              "name": "Hawks"
          },
          "visitor_team_score": 111
      },
      {
          "id": 49101,
          "date": "2019-04-04T00:00:00.000Z",
          "home_team": {
              "id": 14,
              "abbreviation": "LAL",
              "city": "Los Angeles",
              "conference": "West",
              "division": "Pacific",
              "full_name": "Los Angeles Lakers",
              "name": "Lakers"
          },
          "home_team_score": 90,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 10,
              "abbreviation": "GSW",
              "city": "Golden State",
              "conference": "West",
              "division": "Pacific",
              "full_name": "Golden State Warriors",
              "name": "Warriors"
          },
          "visitor_team_score": 108
      },
      {
          "id": 49098,
          "date": "2019-04-03T00:00:00.000Z",
          "home_team": {
              "id": 25,
              "abbreviation": "POR",
              "city": "Portland",
              "conference": "West",
              "division": "Northwest",
              "full_name": "Portland Trail Blazers",
              "name": "Trail Blazers"
          },
          "home_team_score": 116,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 15,
              "abbreviation": "MEM",
              "city": "Memphis",
              "conference": "West",
              "division": "Southwest",
              "full_name": "Memphis Grizzlies",
              "name": "Grizzlies"
          },
          "visitor_team_score": 89
      },
      {
          "id": 49089,
          "date": "2019-04-03T00:00:00.000Z",
          "home_team": {
              "id": 22,
              "abbreviation": "ORL",
              "city": "Orlando",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Orlando Magic",
              "name": "Magic"
          },
          "home_team_score": 114,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 20,
              "abbreviation": "NYK",
              "city": "New York",
              "conference": "East",
              "division": "Atlantic",
              "full_name": "New York Knicks",
              "name": "Knicks"
          },
          "visitor_team_score": 100
      },
      {
          "id": 49113,
          "date": "2019-04-05T00:00:00.000Z",
          "home_team": {
              "id": 8,
              "abbreviation": "DEN",
              "city": "Denver",
              "conference": "West",
              "division": "Northwest",
              "full_name": "Denver Nuggets",
              "name": "Nuggets"
          },
          "home_team_score": 119,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 25,
              "abbreviation": "POR",
              "city": "Portland",
              "conference": "West",
              "division": "Northwest",
              "full_name": "Portland Trail Blazers",
              "name": "Trail Blazers"
          },
          "visitor_team_score": 110
      },
      {
          "id": 49130,
          "date": "2019-04-07T00:00:00.000Z",
          "home_team": {
              "id": 26,
              "abbreviation": "SAC",
              "city": "Sacramento",
              "conference": "West",
              "division": "Pacific",
              "full_name": "Sacramento Kings",
              "name": "Kings"
          },
          "home_team_score": 129,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 19,
              "abbreviation": "NOP",
              "city": "New Orleans",
              "conference": "West",
              "division": "Southwest",
              "full_name": "New Orleans Pelicans",
              "name": "Pelicans"
          },
          "visitor_team_score": 133
      },
      {
          "id": 49104,
          "date": "2019-04-05T00:00:00.000Z",
          "home_team": {
              "id": 22,
              "abbreviation": "ORL",
              "city": "Orlando",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Orlando Magic",
              "name": "Magic"
          },
          "home_team_score": 149,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 1,
              "abbreviation": "ATL",
              "city": "Atlanta",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Atlanta Hawks",
              "name": "Hawks"
          },
          "visitor_team_score": 113
      },
      {
          "id": 49120,
          "date": "2019-04-07T00:00:00.000Z",
          "home_team": {
              "id": 18,
              "abbreviation": "MIN",
              "city": "Minnesota",
              "conference": "West",
              "division": "Northwest",
              "full_name": "Minnesota Timberwolves",
              "name": "Timberwolves"
          },
          "home_team_score": 126,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 21,
              "abbreviation": "OKC",
              "city": "Oklahoma City",
              "conference": "West",
              "division": "Northwest",
              "full_name": "Oklahoma City Thunder",
              "name": "Thunder"
          },
          "visitor_team_score": 132
      },
      {
          "id": 49133,
          "date": "2019-04-09T00:00:00.000Z",
          "home_team": {
              "id": 6,
              "abbreviation": "CLE",
              "city": "Cleveland",
              "conference": "East",
              "division": "Central",
              "full_name": "Cleveland Cavaliers",
              "name": "Cavaliers"
          },
          "home_team_score": 97,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 4,
              "abbreviation": "CHA",
              "city": "Charlotte",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Charlotte Hornets",
              "name": "Hornets"
          },
          "visitor_team_score": 124
      },
      {
          "id": 49142,
          "date": "2019-04-09T00:00:00.000Z",
          "home_team": {
              "id": 14,
              "abbreviation": "LAL",
              "city": "Los Angeles",
              "conference": "West",
              "division": "Pacific",
              "full_name": "Los Angeles Lakers",
              "name": "Lakers"
          },
          "home_team_score": 101,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 25,
              "abbreviation": "POR",
              "city": "Portland",
              "conference": "West",
              "division": "Northwest",
              "full_name": "Portland Trail Blazers",
              "name": "Trail Blazers"
          },
          "visitor_team_score": 104
      },
      {
          "id": 49143,
          "date": "2019-04-10T00:00:00.000Z",
          "home_team": {
              "id": 1,
              "abbreviation": "ATL",
              "city": "Atlanta",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Atlanta Hawks",
              "name": "Hawks"
          },
          "home_team_score": 134,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 12,
              "abbreviation": "IND",
              "city": "Indiana",
              "conference": "East",
              "division": "Central",
              "full_name": "Indiana Pacers",
              "name": "Pacers"
          },
          "visitor_team_score": 135
      },
      {
          "id": 48788,
          "date": "2019-02-14T00:00:00.000Z",
          "home_team": {
              "id": 22,
              "abbreviation": "ORL",
              "city": "Orlando",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Orlando Magic",
              "name": "Magic"
          },
          "home_team_score": 127,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 4,
              "abbreviation": "CHA",
              "city": "Charlotte",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Charlotte Hornets",
              "name": "Hornets"
          },
          "visitor_team_score": 89
      },
      {
          "id": 48783,
          "date": "2019-02-13T00:00:00.000Z",
          "home_team": {
              "id": 8,
              "abbreviation": "DEN",
              "city": "Denver",
              "conference": "West",
              "division": "Northwest",
              "full_name": "Denver Nuggets",
              "name": "Nuggets"
          },
          "home_team_score": 120,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 26,
              "abbreviation": "SAC",
              "city": "Sacramento",
              "conference": "West",
              "division": "Pacific",
              "full_name": "Sacramento Kings",
              "name": "Kings"
          },
          "visitor_team_score": 118
      },
      {
          "id": 48807,
          "date": "2019-02-23T00:00:00.000Z",
          "home_team": {
              "id": 30,
              "abbreviation": "WAS",
              "city": "Washington",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Washington Wizards",
              "name": "Wizards"
          },
          "home_team_score": 112,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 12,
              "abbreviation": "IND",
              "city": "Indiana",
              "conference": "East",
              "division": "Central",
              "full_name": "Indiana Pacers",
              "name": "Pacers"
          },
          "visitor_team_score": 119
      },
      {
          "id": 48792,
          "date": "2019-02-21T00:00:00.000Z",
          "home_team": {
              "id": 3,
              "abbreviation": "BKN",
              "city": "Brooklyn",
              "conference": "East",
              "division": "Atlantic",
              "full_name": "Brooklyn Nets",
              "name": "Nets"
          },
          "home_team_score": 99,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 25,
              "abbreviation": "POR",
              "city": "Portland",
              "conference": "West",
              "division": "Northwest",
              "full_name": "Portland Trail Blazers",
              "name": "Trail Blazers"
          },
          "visitor_team_score": 113
      },
      {
          "id": 48790,
          "date": "2019-02-21T00:00:00.000Z",
          "home_team": {
              "id": 6,
              "abbreviation": "CLE",
              "city": "Cleveland",
              "conference": "East",
              "division": "Central",
              "full_name": "Cleveland Cavaliers",
              "name": "Cavaliers"
          },
          "home_team_score": 111,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 24,
              "abbreviation": "PHX",
              "city": "Phoenix",
              "conference": "West",
              "division": "Pacific",
              "full_name": "Phoenix Suns",
              "name": "Suns"
          },
          "visitor_team_score": 98
      },
      {
          "id": 48837,
          "date": "2019-02-27T00:00:00.000Z",
          "home_team": {
              "id": 3,
              "abbreviation": "BKN",
              "city": "Brooklyn",
              "conference": "East",
              "division": "Atlantic",
              "full_name": "Brooklyn Nets",
              "name": "Nets"
          },
          "home_team_score": 116,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 30,
              "abbreviation": "WAS",
              "city": "Washington",
              "conference": "East",
              "division": "Southeast",
              "full_name": "Washington Wizards",
              "name": "Wizards"
          },
          "visitor_team_score": 125
      },
      {
          "id": 48799,
          "date": "2019-02-22T00:00:00.000Z",
          "home_team": {
              "id": 12,
              "abbreviation": "IND",
              "city": "Indiana",
              "conference": "East",
              "division": "Central",
              "full_name": "Indiana Pacers",
              "name": "Pacers"
          },
          "home_team_score": 126,
          "period": 4,
          "postseason": false,
          "season": 2018,
          "status": "Final",
          "time": "     ",
          "visitor_team": {
              "id": 19,
              "abbreviation": "NOP",
              "city": "New Orleans",
              "conference": "West",
              "division": "Southwest",
              "full_name": "New Orleans Pelicans",
              "name": "Pelicans"
          },
          "visitor_team_score": 111
      }
    ];

    this.dataSource.data = remoteGamesData;
  }

}

