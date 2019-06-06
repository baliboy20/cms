import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickInputComponent } from './quick-input.component';

describe('QuickInputComponent', () => {
  let component: QuickInputComponent;
  let fixture: ComponentFixture<QuickInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
