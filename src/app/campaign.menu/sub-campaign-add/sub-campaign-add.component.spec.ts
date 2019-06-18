import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCampaignAddComponent } from './sub-campaign-add.component';

describe('SubCampaignAddComponent', () => {
  let component: SubCampaignAddComponent;
  let fixture: ComponentFixture<SubCampaignAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCampaignAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCampaignAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
