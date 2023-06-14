import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Player } from 'src/app/API/Player';
import { Observable } from "rxjs";
import { PlayersResponse } from 'src/app/API/players-response';
import { TeamsComponent } from '../../teams/teams.component';
import { ApiService } from 'src/app/API/api.service';

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-search-player',
  templateUrl: './search-player.component.html',
  styleUrls: ['./search-player.component.scss']
})

export class SearchPlayerComponent implements OnInit {

  SearchPlayerResults: Observable<PlayersResponse>;
  filterValues: any = {};
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['first_name', 'last_name', 'team'];
  filterSelectObj: any = [];

  constructor(private api: ApiService) {

    this.SearchPlayerResults = api.getPlayers();

    // Array of filters
    this.filterSelectObj = [
        {
          name: 'First or last name',
          columnProp: 'name',
          options: []
        },
        {
          name: 'Player ID',
          columnProp: 'player_id',
          options: {}
        }
      ]
   }

  ngOnInit() {
    // this.getRemoteData();
    // Overrride default filter behaviour of Material Datatable
    this.dataSource.filterPredicate = this.createFilter();
  }

  // Called on Filter change
  filterChange(filter: any, event: any) {
    this.filterValues[filter.columnProp] = event.target.value.trim().toLowerCase()
    this.dataSource.filter = JSON.stringify(this.filterValues)
  }

  // Custom filter method fot Angular Material Datatable
  createFilter() {
    let filterFunction = function (data: any, filter: any): boolean {
      let searchTerms = JSON.parse(filter);
      let isFilterSet = false;

      for (const col in searchTerms) {

        if (searchTerms[col].toString() === '')
             { delete searchTerms[col]; }
        else { isFilterSet = true; }

        // console.log(data[col].full_name);  // TEAM CONTENT

      }

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

  searchPlayerByName () {
    console.log('called searchPlayerByName()')
  }
  
  
  // Reset table filters
  resetFilters() {
    console.log('called resetFilters()')
    this.filterValues = {}
    this.filterSelectObj.forEach((value: any, key: number) => {
      value.modelValue = undefined;
    })
    this.dataSource.filter = "";
  }


}

