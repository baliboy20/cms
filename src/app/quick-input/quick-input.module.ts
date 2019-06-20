import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuickInputComponent} from './quick-input.component';
import {RouterModule, Routes} from '@angular/router';
import {MaterialzModule} from '../materialz/materialz.module';
import {PeopleModule} from '../people/people.module';
import {CampaignMenuModule} from '../campaign.menu/campaign.menu.module';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
    { path: 'quick-input', component: QuickInputComponent},
];

@NgModule({
    declarations: [
        QuickInputComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialzModule,
        PeopleModule,
        CampaignMenuModule,
        ReactiveFormsModule,

    ],
    exports: [QuickInputComponent]
})
export class QuickInputModule {
}
