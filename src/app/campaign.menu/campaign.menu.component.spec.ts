import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Campaign.MenuComponent } from './campaign.menu.component';

describe('Campaign.MenuComponent', () => {
  let component: Campaign.MenuComponent;
  let fixture: ComponentFixture<Campaign.MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Campaign.MenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Campaign.MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
