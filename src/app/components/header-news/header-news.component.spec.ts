import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNewsComponent } from './header-news.component';

describe('HeaderNewsComponent', () => {
  let component: HeaderNewsComponent;
  let fixture: ComponentFixture<HeaderNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
