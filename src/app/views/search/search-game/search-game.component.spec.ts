import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGameComponent } from './search-game.component';
import { of } from 'rxjs';
import { ApiService } from 'src/app/API/api.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SearchGameComponent', () => {
  let component: SearchGameComponent;
  let fixture: ComponentFixture<SearchGameComponent>;

  beforeEach(async () => {
    const apiService = jasmine.createSpyObj(['searchGame']);
    apiService.searchGame.and.returnValue(of([]));
    
    await TestBed.configureTestingModule({
      declarations: [ SearchGameComponent ],
      providers: [ {provide: ApiService, useValue: apiService} ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should')
});
