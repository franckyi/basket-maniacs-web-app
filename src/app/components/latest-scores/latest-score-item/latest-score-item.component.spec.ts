import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestScoreItemComponent } from './latest-score-item.component';

describe('LatestScoreItemComponent', () => {
  let component: LatestScoreItemComponent;
  let fixture: ComponentFixture<LatestScoreItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestScoreItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestScoreItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
