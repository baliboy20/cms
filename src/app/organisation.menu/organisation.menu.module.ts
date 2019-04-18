import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrganisationMenuComponent} from '../organisation.menu/organisation.menu.component';
import {RouterModule, Routes} from '@angular/router';
import {MaterialzModule} from '../materialz/materialz.module';
import {EditOrganisationComponent} from './edit-organisation/edit-organisation.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableOfOrgsComponent} from './table-of-orgs/table-of-orgs.component';
import {AngularFirestore} from '@angular/fire/firestore';
import {OrgDaoService} from '../dao/OrgDao.service';

const routes: Routes =
    [{
        path: 'organisation-menu',
        component: OrganisationMenuComponent,
        children: [
            {path: 'add', component: EditOrganisationComponent},
            {path: 'orgs-table', component: TableOfOrgsComponent},
        ]
    }];

@NgModule({
    declarations: [OrganisationMenuComponent, EditOrganisationComponent, TableOfOrgsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialzModule,
        FormsModule,
        ReactiveFormsModule,
    ],

    providers: [ AngularFirestore, OrgDaoService]
})
export class OrganisationMenuModule {
}
