import { TestBed } from '@angular/core/testing';
import { PlayersService } from './players.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('PlayersService', () => {
  let service: PlayersService;

  beforeEach(() => {
    const searchPlayerSpy = jasmine.createSpyObj(['searchPlayer']);
    searchPlayerSpy.searchPlayer.and.returnValue(of([]));

    TestBed.configureTestingModule({
      providers: [ { provide: HttpClient, useValue: searchPlayerSpy }]
    });
    service = TestBed.inject(PlayersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
