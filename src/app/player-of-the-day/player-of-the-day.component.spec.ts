import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerOfTheDayComponent } from './player-of-the-day.component';

describe('PlayerOfTheDayComponent', () => {
  let component: PlayerOfTheDayComponent;
  let fixture: ComponentFixture<PlayerOfTheDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerOfTheDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
