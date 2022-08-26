import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTeamsItemComponent } from './all-teams-item.component';

describe('AllTeamsItemComponent', () => {
  let component: AllTeamsItemComponent;
  let fixture: ComponentFixture<AllTeamsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTeamsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTeamsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
