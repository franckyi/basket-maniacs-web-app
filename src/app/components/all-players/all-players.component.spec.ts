import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllPlayersComponent } from './all-players.component';
import { PlayersService } from 'src/app/services/players.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('AllPlayersComponent', () => {
  let component: AllPlayersComponent;
  let fixture: ComponentFixture<AllPlayersComponent>;

  beforeEach(async () => {
    const apiServiceSpy = jasmine.createSpyObj(['getPlayers']);
    apiServiceSpy.getPlayers.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      declarations: [ AllPlayersComponent ],
      providers: [ {provide: PlayersService, useValue: apiServiceSpy} ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
