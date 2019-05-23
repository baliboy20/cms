import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignGanttComponent } from './campaign-gantt.component';

describe('CampaignGanttComponent', () => {
  let component: CampaignGanttComponent;
  let fixture: ComponentFixture<CampaignGanttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignGanttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignGanttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
