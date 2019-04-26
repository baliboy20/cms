import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubformTableComponent } from './subform-table.component';

describe('SubformTableComponent', () => {
  let component: SubformTableComponent;
  let fixture: ComponentFixture<SubformTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubformTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubformTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
