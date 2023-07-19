import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from 'src/app/API/api.service';
import { SearchTeamComponent } from './search-team.component';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SearchTeamComponent', () => {
  let component: SearchTeamComponent;
  let fixture: ComponentFixture<SearchTeamComponent>;

  beforeEach(async () => {
    const apiServiceSpy = jasmine.createSpyObj(['searchTeam']);
    apiServiceSpy.searchTeam.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [ SearchTeamComponent ],
      providers: [ {provide: ApiService, useValue: apiServiceSpy} ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
