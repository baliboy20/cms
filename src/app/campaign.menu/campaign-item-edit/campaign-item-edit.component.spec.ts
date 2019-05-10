import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignItemEditComponent } from './campaign-item-edit.component';

describe('CampaignItemEditComponent', () => {
  let component: CampaignItemEditComponent;
  let fixture: ComponentFixture<CampaignItemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignItemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
