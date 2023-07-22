import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Filter } from './filter';

@Injectable({
  providedIn: 'root'
})
export class ChangeFiltersService {
  private currentFilter$ = new BehaviorSubject(Filter.player); 
  constructor() {}

  setFilter(filter: Filter): void {
    this.currentFilter$.next(filter);
  }

  getCurrentFilter$() {
    return this.currentFilter$.asObservable();
  }
}
