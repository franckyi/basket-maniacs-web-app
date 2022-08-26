import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderScoresComponent } from './header-scores.component';

describe('HeaderScoresComponent', () => {
  let component: HeaderScoresComponent;
  let fixture: ComponentFixture<HeaderScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderScoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
