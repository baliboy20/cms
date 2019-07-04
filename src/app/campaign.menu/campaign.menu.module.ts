import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CampaignMenuComponent} from './campaign.menu.component';
import {RouterModule, Routes} from '@angular/router';
import {OrganisationMenuComponent} from '../organisation.menu/organisation.menu.component';
import {MaterialzModule} from '../materialz/materialz.module';
import {CampaignEditComponent, CampaignItemEditPopupComponent} from './campaign-edit/campaign-edit.component';
import { CampaignSearchComponent } from './campaign-search/campaign-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SubformTableModule} from '../utils/subform-table/subform-table.module';
import { CampaignItemEditComponent } from './campaign-item-edit/campaign-item-edit.component';
import {ToDatePipe} from '../utils/pipe/to-date.pipe';
import {SharedModule} from '../shared/shared.module';
import { CampaignGanttComponent } from './campaign-gantt/campaign-gantt.component';
import {HighchartsChartComponent, HighchartsChartModule} from 'highcharts-angular';
import {CampaignItemAddComponent} from './campaign-item-add/campaign-item-add.component';
import { CampaignItemAddStepperComponent } from './campaign-item-add-stepper/campaign-item-add-stepper.component';
import { SubCampaignAddComponent } from './sub-campaign-add/sub-campaign-add.component';
import {SubCampaignItemAddComponent} from './sub-campaign-item-add/sub-campaign-item-add.component';
import { SubCampaignItem2AddComponent } from './sub-campaign-item2-add/sub-campaign-item2-add.component';

const routes: Routes = [{path: 'campaign-menu',
    component: CampaignMenuComponent,
    children: [
        { path: 'edit', component: CampaignEditComponent },
        { path: 'search', component: CampaignSearchComponent },
        { path: 'gantt', component: CampaignGanttComponent}
    ]
}]
@NgModule({
  declarations: [
      ToDatePipe,
      CampaignMenuComponent,
      CampaignEditComponent,
      CampaignSearchComponent,
      CampaignItemEditComponent,
      CampaignGanttComponent,
      CampaignItemAddComponent,
      CampaignItemEditPopupComponent,
      CampaignItemAddStepperComponent,
      SubCampaignAddComponent,
       SubCampaignItemAddComponent,
       SubCampaignItem2AddComponent,
  ],
  imports: [
    CommonModule,
      RouterModule.forChild(routes),
      MaterialzModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      MaterialzModule,
      SubformTableModule,
      SharedModule,
      HighchartsChartModule,
  ],
    exports: [ CampaignMenuComponent,
        CampaignItemAddComponent,
        CampaignItemAddStepperComponent,
        SubCampaignAddComponent,
        SubCampaignItemAddComponent,
        SubCampaignItem2AddComponent,
        CampaignEditComponent],
    entryComponents: [
        CampaignItemAddComponent,
        CampaignItemEditPopupComponent,
        CampaignEditComponent,
        SubCampaignItemAddComponent,
    ],
})
export class CampaignMenuModule { }
