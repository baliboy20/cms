import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoisButtonComponent } from './whois-button.component';

describe('WhoisButtonComponent', () => {
  let component: WhoisButtonComponent;
  let fixture: ComponentFixture<WhoisButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoisButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoisButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
