import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DblFindInListSfComponent } from './dbl-find-in-list-sf.component';

describe('DblFindInListSfComponent', () => {
  let component: DblFindInListSfComponent;
  let fixture: ComponentFixture<DblFindInListSfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DblFindInListSfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DblFindInListSfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
