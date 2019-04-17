import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CampaignMenuComponent} from './campaign.menu.component';
import {RouterModule, Routes} from '@angular/router';
import {OrganisationMenuComponent} from '../organisation.menu/organisation.menu.component';
import {MaterialzModule} from '../materialz/materialz.module';

const routes: Routes = [{path: 'campaign-menu', component: CampaignMenuComponent, children: [ ]}]
@NgModule({
  declarations: [CampaignMenuComponent],
  imports: [
    CommonModule,
      RouterModule.forChild(routes),
      MaterialzModule,
  ]
})
export class CampaignMenuModule { }
