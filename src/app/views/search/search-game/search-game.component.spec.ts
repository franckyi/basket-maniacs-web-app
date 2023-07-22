import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchGameComponent } from './search-game.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('SearchGameComponent', () => {
  let component: SearchGameComponent;
  let fixture: ComponentFixture<SearchGameComponent>;

  beforeEach(async () => {
    const fetchTeamSpy = jasmine.createSpyObj(['fetchTeam']);
    fetchTeamSpy.fetchTeam.and.returnValue(of([]));
    
    await TestBed.configureTestingModule({
      declarations: [ SearchGameComponent ],
      providers: [ {provide: HttpClient, useValue: fetchTeamSpy} ],
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
