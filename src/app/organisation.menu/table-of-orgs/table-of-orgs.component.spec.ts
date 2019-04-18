import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOfOrgsComponent } from './table-of-orgs.component';

describe('TableOfOrgsComponent', () => {
  let component: TableOfOrgsComponent;
  let fixture: ComponentFixture<TableOfOrgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableOfOrgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOfOrgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
