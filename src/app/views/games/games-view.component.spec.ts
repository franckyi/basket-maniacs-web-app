import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesViewComponent } from './games-view.component';

describe('GameScoresComponent', () => {
  let component: GameScoresComponent;
  let fixture: ComponentFixture<GameScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});