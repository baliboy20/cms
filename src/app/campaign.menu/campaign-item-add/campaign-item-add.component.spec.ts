import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignItemAddComponent } from './campaign-item-add.component';

describe('CampaignItemAddComponent', () => {
  let component: CampaignItemAddComponent;
  let fixture: ComponentFixture<CampaignItemAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignItemAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
