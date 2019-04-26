import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrganisationMenuComponent} from '../organisation.menu/organisation.menu.component';
import {RouterModule, Routes} from '@angular/router';
import {MaterialzModule} from '../materialz/materialz.module';
import {EditOrganisationComponent} from './edit-organisation/edit-organisation.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConfirmDeleteComponent, TableOfOrgsComponent} from './table-of-orgs/table-of-orgs.component';
import {AngularFirestore} from '@angular/fire/firestore';
import {OrgDaoService} from '../dao/OrgDao.service';
import {SubformTableModule} from '../utils/subform-table/subform-table.module';
import {SubformTableComponent} from '../utils/subform-table/subform-table.component';
import {PeopleModule} from '../people/people.module';
import {EditPersonComponent} from '../people/edit-person/edit-person.component';

const routes: Routes =
    [{
        path: 'organisation-menu',
        component: OrganisationMenuComponent,
        children: [
            {path: 'add', component: EditOrganisationComponent},
            {path: 'orgs-table', component: TableOfOrgsComponent},
            {path: 'edit-person', component: EditPersonComponent},
        ]
    }];

@NgModule({
    declarations: [
        ConfirmDeleteComponent,
        OrganisationMenuComponent,
        EditOrganisationComponent,
        TableOfOrgsComponent,
        // SubformTableComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialzModule,
        FormsModule,
        ReactiveFormsModule,
        SubformTableModule,
        PeopleModule,
    ],

    providers: [ AngularFirestore, OrgDaoService],
    entryComponents: [ConfirmDeleteComponent]
})
export class OrganisationMenuModule {
}
