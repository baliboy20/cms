import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrganisationMenuComponent} from '../organisation.menu/organisation.menu.component';
import {RouterModule, Routes} from '@angular/router';
import {MaterialzModule} from '../materialz/materialz.module';
import {EditOrganisationComponent} from './organisation-edit/organisation-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConfirmDeleteComponent, TableOfOrgsComponent} from './organisation-search/organisation-search.component';
import {AngularFirestore} from '@angular/fire/firestore';
import {OrgDaoService} from '../dao/OrgDao.service';
import {SubformTableModule} from '../utils/subform-table/subform-table.module';
import {SubformTableComponent} from '../utils/subform-table/subform-table.component';
import {PeopleModule} from '../people/people.module';
import {EditPersonComponent} from '../people/person-edit/person-edit.component';
import {OrganisationAddComponent} from './organisation-add/organisation-add.component';
import {PeopleAddComponent} from '../people/people-add/people-add.component';
import {PeopleSearchComponent} from '../people/people-search/people-search.component';
import {UtilsModule} from '../utils/utils.module';
import {OrgAddEditSfComponent} from './subforms/org-add-edit-sf/org-add-edit-sf.component';
import {SharedModule} from '../shared/shared.module';
import { DepartmentComponent } from './department/department.component';

const routes: Routes =
    [{
        path: 'organisation-menu',
        component: OrganisationMenuComponent,
        children: [
            {path: 'add', component: OrganisationAddComponent},
            {path: 'edit', component: EditOrganisationComponent},
            {path: 'orgs-table', component: TableOfOrgsComponent},
            {path: 'person-edit', component: EditPersonComponent},
            {path: 'person-add', component: PeopleAddComponent},
            {path: 'person-search', component: PeopleSearchComponent},
        ]
    }];

@NgModule({
    declarations: [
        ConfirmDeleteComponent,
        OrganisationMenuComponent,
        EditOrganisationComponent,
        TableOfOrgsComponent,
        OrganisationAddComponent,
        OrgAddEditSfComponent,
        DepartmentComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialzModule,
        FormsModule,
        ReactiveFormsModule,
        SubformTableModule,
        PeopleModule,
        UtilsModule,
        SharedModule,
    ],
    exports: [
        OrgAddEditSfComponent,
        DepartmentComponent,
    ],
    entryComponents: [
        ConfirmDeleteComponent
    ]
})
export class OrganisationMenuModule {
}
