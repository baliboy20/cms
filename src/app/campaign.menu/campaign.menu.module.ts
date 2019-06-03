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
import {ToDatePipe} from '../utils/pipe/to-date.pipe';
import {SharedModule} from '../shared/shared.module';
import { CampaignGanttComponent } from './campaign-gantt/campaign-gantt.component';
import {HighchartsChartComponent, HighchartsChartModule} from 'highcharts-angular';
import {CampaignItemAddComponent} from './campaign-item-add/campaign-item-add.component';
// campaign-menu
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
        CampaignEditComponent],
    entryComponents: [CampaignItemAddComponent]
})
export class CampaignMenuModule { }
