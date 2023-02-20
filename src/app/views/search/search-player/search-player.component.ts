import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Player } from 'src/app/API/Player';
import { PlayersResponse } from 'src/app/API/players-response';
import { TeamsComponent } from '../../teams/teams.component';

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-search-player',
  templateUrl: './search-player.component.html',
  styleUrls: ['./search-player.component.scss']
})

export class SearchPlayerComponent implements OnInit {

    filterValues: any = {};
    dataSource = new MatTableDataSource();
    displayedColumns: string[] = ['first_name', 'last_name', 'team'];

    filterSelectObj: any = [];

  constructor() {

    // Object to create Filter for
    this.filterSelectObj = [
        {
          name: 'First Name',
          columnProp: 'first_name',
          options: []
        }, {
          name: 'Last name',
          columnProp: 'last_name',
          options: []
        },
        {
          name: 'Team',
          columnProp: 'team',
          options: {}
        }
      ]
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
        // console.log('OUTSIDE');

        if(typeof obj[key] === 'object') {
            uniqChk.push(obj[key].full_name);
            // console.log('TEST TEAMS AS OPTIONS');
        }
        else {
            uniqChk.push(obj[key]);
        }
      }
      return obj;
    //   console.log(obj[key].full_name);
    });

    return uniqChk;
    // console.log(uniqChk[key].full_name);
  }

  // Get remote serve data using HTTP call
  // getRemoteData() {
  // }

  // Called on Filter change
  filterChange(filter: any, event: any) {
    // let filterValues = {}
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


  // Reset table filters
  resetFilters() {
    this.filterValues = {}
    this.filterSelectObj.forEach((value: any, key: number) => {
      value.modelValue = undefined;
    })
    this.dataSource.filter = "";
  }


}

