import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCampaignItem2AddComponent } from './sub-campaign-item2-add.component';

describe('SubCampaignItem2AddComponent', () => {
  let component: SubCampaignItem2AddComponent;
  let fixture: ComponentFixture<SubCampaignItem2AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCampaignItem2AddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCampaignItem2AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
