import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeaheadReactiveFormComponent } from './typeahead-reactive-form.component';

describe('TypeaheadReactiveFormComponent', () => {
  let component: TypeaheadReactiveFormComponent;
  let fixture: ComponentFixture<TypeaheadReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeaheadReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeaheadReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
