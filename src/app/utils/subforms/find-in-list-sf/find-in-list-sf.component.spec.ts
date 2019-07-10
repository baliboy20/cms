import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindInListSfComponent } from './find-in-list-sf.component';

describe('FindInListSfComponent', () => {
  let component: FindInListSfComponent;
  let fixture: ComponentFixture<FindInListSfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindInListSfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindInListSfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
