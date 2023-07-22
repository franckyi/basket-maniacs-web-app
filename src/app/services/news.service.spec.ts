import { TestBed } from '@angular/core/testing';
import { NewsService } from './news.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('NewsService', () => {
  let service: NewsService;

  beforeEach(() => {
    let getNewsSpy = jasmine.createSpyObj(['getNews']);
    getNewsSpy.getNews.and.returnValue(of([]));

    TestBed.configureTestingModule({
      providers: [ { provide: HttpClient, useValue: getNewsSpy } ]
    });
    service = TestBed.inject(NewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
