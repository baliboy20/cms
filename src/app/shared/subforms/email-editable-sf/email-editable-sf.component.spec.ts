import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailEditableSFComponent } from './email-editable-sf.component';

describe('EmailEditableSFComponent', () => {
  let component: EmailEditableSFComponent;
  let fixture: ComponentFixture<EmailEditableSFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailEditableSFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailEditableSFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
