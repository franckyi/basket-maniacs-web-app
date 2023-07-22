import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { GamesService } from './games.service';
import { of } from 'rxjs';

describe('GamesService', () => {
  let service: GamesService;

  beforeEach(() => {
    let getAllGamesSpy = jasmine.createSpyObj(['getAllGames']);
    getAllGamesSpy.getAllGames.and.returnValue(of([]));

    TestBed.configureTestingModule({
      providers: [ { provide: HttpClient, useValue: getAllGamesSpy }]
    });
    service = TestBed.inject(GamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
