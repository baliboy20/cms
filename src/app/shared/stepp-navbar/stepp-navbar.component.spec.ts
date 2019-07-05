import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteppNavbarComponent } from './stepp-navbar.component';

describe('SteppNavbarComponent', () => {
  let component: SteppNavbarComponent;
  let fixture: ComponentFixture<SteppNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteppNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteppNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
