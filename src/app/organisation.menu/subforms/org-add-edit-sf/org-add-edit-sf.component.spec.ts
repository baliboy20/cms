import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgAddEditSfComponent } from './org-add-edit-sf.component';

describe('OrgAddEditSfComponent', () => {
  let component: OrgAddEditSfComponent;
  let fixture: ComponentFixture<OrgAddEditSfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgAddEditSfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgAddEditSfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
