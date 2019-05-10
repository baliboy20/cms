import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CampaignMenuComponent} from './campaign.menu.component';
import {RouterModule, Routes} from '@angular/router';
import {OrganisationMenuComponent} from '../organisation.menu/organisation.menu.component';
import {MaterialzModule} from '../materialz/materialz.module';
import { CampaignEditComponent } from './campaign-edit/campaign-edit.component';
import { CampaignSearchComponent } from './campaign-search/campaign-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SubformTableModule} from '../utils/subform-table/subform-table.module';
import { CampaignItemEditComponent } from './campaign-item-edit/campaign-item-edit.component';
// campaign-menu
const routes: Routes = [{path: 'campaign-menu',
    component: CampaignMenuComponent,
    children: [
        { path: 'edit', component: CampaignEditComponent },
        { path: 'search', component: CampaignSearchComponent }
    ]
}]
@NgModule({
  declarations: [CampaignMenuComponent, CampaignEditComponent, CampaignSearchComponent, CampaignItemEditComponent],
  imports: [
    CommonModule,
      RouterModule.forChild(routes),
      MaterialzModule,
      ReactiveFormsModule,
      FormsModule,
      RouterModule,
      MaterialzModule,
      SubformTableModule,
  ],
    exports: [ CampaignMenuComponent,
        CampaignEditComponent]
})
export class CampaignMenuModule { }
