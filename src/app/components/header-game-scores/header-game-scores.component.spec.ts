import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGameScoresComponent } from './header-game-scores.component';

describe('HeaderGameScoresComponent', () => {
  let component: HeaderGameScoresComponent;
  let fixture: ComponentFixture<HeaderGameScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderGameScoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderGameScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
