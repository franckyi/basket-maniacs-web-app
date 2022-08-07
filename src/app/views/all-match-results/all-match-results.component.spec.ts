import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMatchResultsComponent } from './all-match-results.component';

describe('AllMatchResultsComponent', () => {
  let component: AllMatchResultsComponent;
  let fixture: ComponentFixture<AllMatchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMatchResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllMatchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
