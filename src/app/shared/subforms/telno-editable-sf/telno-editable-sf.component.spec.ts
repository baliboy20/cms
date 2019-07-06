import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelnoEditableSfComponent } from './telno-editable-sf.component';

describe('TelnoEditableSfComponent', () => {
  let component: TelnoEditableSfComponent;
  let fixture: ComponentFixture<TelnoEditableSfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelnoEditableSfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelnoEditableSfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
