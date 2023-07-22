import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorComponent } from './paginator.component';
import { of } from 'rxjs';
import { GamesService } from 'src/app/services/games.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;

  beforeEach(async () => {
    const apiServiceSpy = jasmine.createSpyObj(['getAllGames']);
    apiServiceSpy.getAllGames.and.returnValue(of([]));
    
    await TestBed.configureTestingModule({
      declarations: [ PaginatorComponent ],
      providers: [ {provide: GamesService, useValue: apiServiceSpy} ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
