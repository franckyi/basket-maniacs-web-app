import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Game } from 'src/app/API/Game';
import { GamesResponse } from 'src/app/API/games-response';

@Component({
  selector: 'app-search-game',
  templateUrl: './search-game.component.html',
  styleUrls: ['./search-game.component.scss']
})
export class SearchGameComponent implements OnInit {

    filterValues: any = {};
    dataSource = new MatTableDataSource();
    displayedColumns: string[] = ['home_team', 'home_team_score', 'visitor_team', 'visitor_team_score', 'date'];
    filterSelectObj: any = [];

  constructor() {
    // Object to create Filter for
    this.filterSelectObj = [
        {
            name: 'Home team',
            columnProp: 'home_team',
            options: {}
        }, {
            name: 'Away team',
            columnProp: 'visitor_team',
            options: {}
        },
        {
            name: 'Date',
            columnProp: 'date',
            options: []
        }
        ];

        this.dataSource.filterPredicate = (data: any, filter: string) => {
        const accumulator = (currentTerm: any, key: any) => {
            return this.nestedFilterCheck(currentTerm, data, key);
        };

        const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();

        // Transform the filter by converting it to lowercase and removing whitespace.
        const transformedFilter = filter.trim().toLowerCase();
        return dataStr.indexOf(transformedFilter) !== -1;
        // console.log(transformedFilter);

        };



    }

    nestedFilterCheck(search: any, data: { [x: string]: any; }, key: string) {

      if (typeof data[key] === 'object') {
        for (const k in data[key]) {
          if (data[key][k] !== null) {
            search = this.nestedFilterCheck(search, data[key], k);
          }
        }
      } else {
        search += data[key];
      }

      return search;

   }

  ngOnInit() {
    // this.getRemoteData();
    // Overrride default filter behaviour of Material Datatable
    this.dataSource.filterPredicate = this.createFilter();
  }

  // Get Uniqu values from columns to build filter
  getFilterObject(fullObj: any, key: any) {
    const uniqChk: any[] = [];
    fullObj.filter((obj: { [x: string]: any; }) => {

      if (!uniqChk.includes(obj[key])) {

        if (typeof obj[key] === 'object') {
            uniqChk.push(obj[key]?.full_name);
            // console.log(obj[key]);
        }
        else {
            uniqChk.push(obj[key]);
        }
      }
      return obj;
    });

    return uniqChk;
  }


  // Get remote serve data using HTTP call
  // getRemoteData() {
  // }

  // Called on Filter change
  filterChange(filter: any, event: any) {
    // let filterValues = {}
    this.filterValues[filter.columnProp] = event.target.value.trim().toLowerCase()
    console.log( 'test' + this.filterValues.home_team);
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

