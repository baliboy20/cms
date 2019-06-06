import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignItemAddStepperComponent } from './campaign-item-add-stepper.component';

describe('CampaignItemAddStepperComponent', () => {
  let component: CampaignItemAddStepperComponent;
  let fixture: ComponentFixture<CampaignItemAddStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignItemAddStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignItemAddStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
