import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTeamsComponent } from './header-teams.component';

describe('HeaderTeamsComponent', () => {
  let component: HeaderTeamsComponent;
  let fixture: ComponentFixture<HeaderTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTeamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
