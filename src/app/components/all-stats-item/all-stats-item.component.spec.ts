import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStatsItemComponent } from './all-stats-item.component';

describe('AllStatsItemComponent', () => {
  let component: AllStatsItemComponent;
  let fixture: ComponentFixture<AllStatsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllStatsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllStatsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
