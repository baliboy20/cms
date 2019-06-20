import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCampaignItemAddComponent } from './sub-campaign-item-add.component';

describe('SubCampaignItemAddComponent', () => {
  let component: SubCampaignItemAddComponent;
  let fixture: ComponentFixture<SubCampaignItemAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCampaignItemAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCampaignItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
