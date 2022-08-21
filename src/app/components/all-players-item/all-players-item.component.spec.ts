import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPlayersItemComponent } from './all-players-item.component';

describe('AllPlayersItemComponent', () => {
  let component: AllPlayersItemComponent;
  let fixture: ComponentFixture<AllPlayersItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPlayersItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPlayersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
