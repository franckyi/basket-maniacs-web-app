import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamListComponent } from './team-list.component';
import { TeamsService } from 'src/app/services/teams.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('TeamListComponent', () => {
  let component: TeamListComponent;
  let fixture: ComponentFixture<TeamListComponent>;

  beforeEach(async () => {
    const getTeamsSpy = jasmine.createSpyObj(['getTeams']);
    getTeamsSpy.getTeams.and.returnValue(of([]));
    
    await TestBed.configureTestingModule({
      declarations: [ TeamListComponent ],
      providers: [ {provide: TeamsService, useValue: getTeamsSpy} ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
