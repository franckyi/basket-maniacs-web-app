import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchPlayerComponent } from './search-player.component';
import { PlayersService } from 'src/app/services/players.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('SearchPlayerComponent', () => {
  let component: SearchPlayerComponent;
  let fixture: ComponentFixture<SearchPlayerComponent>;

  beforeEach(async () => {
    const apiServiceSpy = jasmine.createSpyObj(['searchPlayer']);
    apiServiceSpy.searchPlayer.and.returnValue(of([]));
    
    const snackBarServiceSpy = jasmine.createSpyObj(['openSnackBar']);
    snackBarServiceSpy.openSnackBar.and.returnValue(of([]));
      
    await TestBed.configureTestingModule({
      declarations: [ SearchPlayerComponent ],
      providers: [ 
        {provide: PlayersService, useValue: apiServiceSpy},
        {provide: MatSnackBar, useValue: snackBarServiceSpy}
      ],
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
