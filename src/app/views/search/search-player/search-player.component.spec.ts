import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPlayerComponent } from './search-player.component';
import { of } from 'rxjs';
import { ApiService } from 'src/app/API/api.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SearchPlayerComponent', () => {
  let component: SearchPlayerComponent;
  let fixture: ComponentFixture<SearchPlayerComponent>;

  beforeEach(async () => {
    const apiServiceSpy = jasmine.createSpyObj(['searchPlayer']);
    apiServiceSpy.searchPlayer.and.returnValue(of([]));
      
    await TestBed.configureTestingModule({
      declarations: [ SearchPlayerComponent ],
      providers: [ {provide: ApiService, useValue: apiServiceSpy} ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
