import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrganisationMenuComponent} from '../organisation.menu/organisation.menu.component';
import {RouterModule, Routes} from '@angular/router';
import {MaterialzModule} from '../materialz/materialz.module';
import {EditOrganisationComponent} from './edit-organisation/edit-organisation.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes =
    [{
        path: 'organisation-menu',
        component: OrganisationMenuComponent,
        children: [
            {path: 'add', component: EditOrganisationComponent},
        ]
    }];

@NgModule({
    declarations: [OrganisationMenuComponent, EditOrganisationComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialzModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class OrganisationMenuModule {
}
