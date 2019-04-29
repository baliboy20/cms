import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommSFormComponent } from './comms-sform.component';

describe('CommsSformComponent', () => {
  let component: CommSFormComponent;
  let fixture: ComponentFixture<CommSFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommSFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommSFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
