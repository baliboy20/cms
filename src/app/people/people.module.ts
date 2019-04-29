import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditPersonComponent} from './edit-person/edit-person.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialzModule} from '../materialz/materialz.module';
import {SubformTableModule} from '../utils/subform-table/subform-table.module';
import {ConfirmDeleteComponent} from '../organisation.menu/organisation-search/organisation-search.component';
import {SubformTableComponent} from '../utils/subform-table/subform-table.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [EditPersonComponent
        // ConfirmDeleteComponent,
        // SubformTableComponent
    ],
    imports: [

        CommonModule,
        // RouterModule.forChild(routes),
        MaterialzModule,
        FormsModule,
        ReactiveFormsModule,
        SubformTableModule,
        SharedModule,

    ],
    exports: [EditPersonComponent]
})
export class PeopleModule {
}
