import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubformPersonAddComponent } from './subform-person-add.component';

describe('SubformPersonAddComponent', () => {
  let component: SubformPersonAddComponent;
  let fixture: ComponentFixture<SubformPersonAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubformPersonAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubformPersonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
