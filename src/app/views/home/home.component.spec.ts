import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { GamesService } from 'src/app/services/games.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    const apiServiceSpy = jasmine.createSpyObj(['getLastGames']);
    apiServiceSpy.getLastGames.and.returnValue(of([]));
    
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [ {provide: GamesService, useValue: apiServiceSpy} ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('home title should be "NBA News"', () => {
    expect(component.title).toBe('NBA News');
  });
  
  it('should display 3 news', () => {
    expect(component.NewsPerPage).toBe(3);
  });

  it('should display game list', () => {
    expect(component.lastGames).toBeTruthy();
  });

});
