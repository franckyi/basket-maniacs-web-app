import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListComponent } from './news-list.component';
import { ApiService } from 'src/app/API/api.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('NewsListComponent', () => {
  let component: NewsListComponent;
  let fixture: ComponentFixture<NewsListComponent>;

  beforeEach(async () => {
    const apiServiceSpy = jasmine.createSpyObj(['getInitialNews']);
    apiServiceSpy.getInitialNews.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [ NewsListComponent ],
      providers: [ {provide: ApiService, useValue: apiServiceSpy} ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a news list', () => {
    expect(component.newsList).toBeTruthy;
  });

});
