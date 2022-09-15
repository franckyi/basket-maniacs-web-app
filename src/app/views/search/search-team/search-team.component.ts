import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface TeamsData {
  "id": number,
  "abbreviation": string,
  "city": string,
  "conference": string,
  "division": string,
  "full_name": string,
  "name": string
}

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-search-team',
  templateUrl: './search-team.component.html',
  styleUrls: ['./search-team.component.scss']
})
export class SearchTeamComponent implements OnInit {

    filterValues: any = {};
    dataSource = new MatTableDataSource();
    displayedColumns: string[] = ['full_name', 'abbreviation', 'city'];
  
    filterSelectObj: any = [];

  constructor() { 

      // Object to create Filter for
      this.filterSelectObj = [
        {
          name: 'Team Name',
          columnProp: 'full_name',
          options: []
        },
        {
          name: 'City',
          columnProp: 'city',
          options: []
        }
      ]  
   }

  ngOnInit() {
    this.getRemoteData();

    // Overrride default filter behaviour of Material Datatable
    this.dataSource.filterPredicate = this.createFilter();
  }

    // Get Uniqu values from columns to build filter
    getFilterObject(fullObj: any, key: any) {
        const uniqChk: any[] = [];
        fullObj.filter((obj: { [x: string]: any; }) => {
          if (!uniqChk.includes(obj[key])) {
            uniqChk.push(obj[key]);
          }
          return obj;
        });
        return uniqChk;
      }

  // TODO: Get remote serve data using HTTP call
  getRemoteData() {
    const TeamsRemoteData =
[
  {
      "id": 1,
      "abbreviation": "ATL",
      "city": "Atlanta",
      "conference": "East",
      "division": "Southeast",
      "full_name": "Atlanta Hawks",
      "name": "Hawks"
  },
  {
      "id": 2,
      "abbreviation": "BOS",
      "city": "Boston",
      "conference": "East",
      "division": "Atlantic",
      "full_name": "Boston Celtics",
      "name": "Celtics"
  },
  {
      "id": 3,
      "abbreviation": "BKN",
      "city": "Brooklyn",
      "conference": "East",
      "division": "Atlantic",
      "full_name": "Brooklyn Nets",
      "name": "Nets"
  },
  {
      "id": 4,
      "abbreviation": "CHA",
      "city": "Charlotte",
      "conference": "East",
      "division": "Southeast",
      "full_name": "Charlotte Hornets",
      "name": "Hornets"
  },
  {
      "id": 5,
      "abbreviation": "CHI",
      "city": "Chicago",
      "conference": "East",
      "division": "Central",
      "full_name": "Chicago Bulls",
      "name": "Bulls"
  },
  {
      "id": 6,
      "abbreviation": "CLE",
      "city": "Cleveland",
      "conference": "East",
      "division": "Central",
      "full_name": "Cleveland Cavaliers",
      "name": "Cavaliers"
  },
  {
      "id": 7,
      "abbreviation": "DAL",
      "city": "Dallas",
      "conference": "West",
      "division": "Southwest",
      "full_name": "Dallas Mavericks",
      "name": "Mavericks"
  },
  {
      "id": 8,
      "abbreviation": "DEN",
      "city": "Denver",
      "conference": "West",
      "division": "Northwest",
      "full_name": "Denver Nuggets",
      "name": "Nuggets"
  },
  {
      "id": 9,
      "abbreviation": "DET",
      "city": "Detroit",
      "conference": "East",
      "division": "Central",
      "full_name": "Detroit Pistons",
      "name": "Pistons"
  },
  {
      "id": 10,
      "abbreviation": "GSW",
      "city": "Golden State",
      "conference": "West",
      "division": "Pacific",
      "full_name": "Golden State Warriors",
      "name": "Warriors"
  },
  {
      "id": 11,
      "abbreviation": "HOU",
      "city": "Houston",
      "conference": "West",
      "division": "Southwest",
      "full_name": "Houston Rockets",
      "name": "Rockets"
  },
  {
      "id": 12,
      "abbreviation": "IND",
      "city": "Indiana",
      "conference": "East",
      "division": "Central",
      "full_name": "Indiana Pacers",
      "name": "Pacers"
  },
  {
      "id": 13,
      "abbreviation": "LAC",
      "city": "LA",
      "conference": "West",
      "division": "Pacific",
      "full_name": "LA Clippers",
      "name": "Clippers"
  },
  {
      "id": 14,
      "abbreviation": "LAL",
      "city": "Los Angeles",
      "conference": "West",
      "division": "Pacific",
      "full_name": "Los Angeles Lakers",
      "name": "Lakers"
  },
  {
      "id": 15,
      "abbreviation": "MEM",
      "city": "Memphis",
      "conference": "West",
      "division": "Southwest",
      "full_name": "Memphis Grizzlies",
      "name": "Grizzlies"
  },
  {
      "id": 16,
      "abbreviation": "MIA",
      "city": "Miami",
      "conference": "East",
      "division": "Southeast",
      "full_name": "Miami Heat",
      "name": "Heat"
  },
  {
      "id": 17,
      "abbreviation": "MIL",
      "city": "Milwaukee",
      "conference": "East",
      "division": "Central",
      "full_name": "Milwaukee Bucks",
      "name": "Bucks"
  },
  {
      "id": 18,
      "abbreviation": "MIN",
      "city": "Minnesota",
      "conference": "West",
      "division": "Northwest",
      "full_name": "Minnesota Timberwolves",
      "name": "Timberwolves"
  },
  {
      "id": 19,
      "abbreviation": "NOP",
      "city": "New Orleans",
      "conference": "West",
      "division": "Southwest",
      "full_name": "New Orleans Pelicans",
      "name": "Pelicans"
  },
  {
      "id": 20,
      "abbreviation": "NYK",
      "city": "New York",
      "conference": "East",
      "division": "Atlantic",
      "full_name": "New York Knicks",
      "name": "Knicks"
  },
  {
      "id": 21,
      "abbreviation": "OKC",
      "city": "Oklahoma City",
      "conference": "West",
      "division": "Northwest",
      "full_name": "Oklahoma City Thunder",
      "name": "Thunder"
  },
  {
      "id": 22,
      "abbreviation": "ORL",
      "city": "Orlando",
      "conference": "East",
      "division": "Southeast",
      "full_name": "Orlando Magic",
      "name": "Magic"
  },
  {
      "id": 23,
      "abbreviation": "PHI",
      "city": "Philadelphia",
      "conference": "East",
      "division": "Atlantic",
      "full_name": "Philadelphia 76ers",
      "name": "76ers"
  },
  {
      "id": 24,
      "abbreviation": "PHX",
      "city": "Phoenix",
      "conference": "West",
      "division": "Pacific",
      "full_name": "Phoenix Suns",
      "name": "Suns"
  },
  {
      "id": 25,
      "abbreviation": "POR",
      "city": "Portland",
      "conference": "West",
      "division": "Northwest",
      "full_name": "Portland Trail Blazers",
      "name": "Trail Blazers"
  },
  {
      "id": 26,
      "abbreviation": "SAC",
      "city": "Sacramento",
      "conference": "West",
      "division": "Pacific",
      "full_name": "Sacramento Kings",
      "name": "Kings"
  },
  {
      "id": 27,
      "abbreviation": "SAS",
      "city": "San Antonio",
      "conference": "West",
      "division": "Southwest",
      "full_name": "San Antonio Spurs",
      "name": "Spurs"
  },
  {
      "id": 28,
      "abbreviation": "TOR",
      "city": "Toronto",
      "conference": "East",
      "division": "Atlantic",
      "full_name": "Toronto Raptors",
      "name": "Raptors"
  },
  {
      "id": 29,
      "abbreviation": "UTA",
      "city": "Utah",
      "conference": "West",
      "division": "Northwest",
      "full_name": "Utah Jazz",
      "name": "Jazz"
  },
  {
      "id": 30,
      "abbreviation": "WAS",
      "city": "Washington",
      "conference": "East",
      "division": "Southeast",
      "full_name": "Washington Wizards",
      "name": "Wizards"
  }
];

this.dataSource.data =  TeamsRemoteData;
    this.filterSelectObj.filter((o: { options: any[]; columnProp: any; }) => {
        o.options = this.getFilterObject(  TeamsRemoteData, o.columnProp);
      });
  }

  // Called on Filter change
  filterChange(filter: any, event: any) {
    // let filterValues = {}
    this.filterValues[filter.columnProp] = event.target.value.trim().toLowerCase()
    this.dataSource.filter = JSON.stringify(this.filterValues)
  }

  // Custom filter method fot Angular Material Datatable
  createFilter() {
    let filterFunction = function (data: any, filter: string): boolean {
      let searchTerms = JSON.parse(filter);
      let isFilterSet = false;
      for (const col in searchTerms) {
        if (searchTerms[col].toString() !== '') {
          isFilterSet = true;
        } else {
          delete searchTerms[col];
        }
      }

      console.log(searchTerms);

      let nameSearch = () => {
        let found = false;
        if (isFilterSet) {
          for (const col in searchTerms) {
            searchTerms[col].trim().toLowerCase().split(' ').forEach((word: any) => {
              if (data[col].toString().toLowerCase().indexOf(word) != -1 && isFilterSet) {
                found = true
              }
            });
          }
          return found
        } else {
          return true;
        }
      }
      return nameSearch()
    }
    return filterFunction
  }


  // Reset table filters
  resetFilters() {
    this.filterValues = {}
    this.filterSelectObj.forEach((value: any, key: number) => {
      value.modelValue = undefined;
    })
    this.dataSource.filter = "";
  }
}