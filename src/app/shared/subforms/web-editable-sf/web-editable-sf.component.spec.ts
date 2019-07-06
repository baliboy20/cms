import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebEditableSfComponent } from './web-editable-sf.component';

describe('WebEditableSfComponent', () => {
  let component: WebEditableSfComponent;
  let fixture: ComponentFixture<WebEditableSfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebEditableSfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebEditableSfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
