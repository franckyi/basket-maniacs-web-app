import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChangeFiltersService } from './services/change-filters.service';
import { Filter } from './services/filter';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  currentFilter$: Observable <Filter>;   

  constructor(private filterService: ChangeFiltersService) {
    this.currentFilter$ = filterService.getCurrentFilter$();
     }

  ngOnInit(): void {
  }

}
