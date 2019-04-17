import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationMenuComponent } from './organisation.menu.component';

describe('Organisation.MenuComponent', () => {
  let component: OrganisationMenuComponent;
  let fixture: ComponentFixture<OrganisationMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
