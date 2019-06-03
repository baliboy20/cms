import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgOrPersonSelectComponent } from './org-or-person-select.component';

describe('OrgOrPersonSelectComponent', () => {
  let component: OrgOrPersonSelectComponent;
  let fixture: ComponentFixture<OrgOrPersonSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgOrPersonSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgOrPersonSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
