import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerOfDayComponent } from './player-of-day.component';

describe('PlayerOfDayComponent', () => {
  let component: PlayerOfDayComponent;
  let fixture: ComponentFixture<PlayerOfDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerOfDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
