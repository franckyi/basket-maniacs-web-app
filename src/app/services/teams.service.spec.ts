import { TestBed } from '@angular/core/testing';
import { TeamsService } from './teams.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('TeamsService', () => {
  let service: TeamsService;

  beforeEach(() => {
    let getTeamsSpy = jasmine.createSpyObj(['getTeams']);
    getTeamsSpy.getTeams.and.returnValue(of([]));
    
    TestBed.configureTestingModule({
      providers: [ { provide: HttpClient, useValue: getTeamsSpy } ]
    });
    service = TestBed.inject(TeamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
