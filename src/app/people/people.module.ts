import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditPersonComponent} from './edit-person/edit-person.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialzModule} from '../materialz/materialz.module';
import {SubformTableModule} from '../utils/subform-table/subform-table.module';
import {ConfirmDeleteComponent} from '../organisation.menu/table-of-orgs/table-of-orgs.component';
import {SubformTableComponent} from '../utils/subform-table/subform-table.component';

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

    ],
    exports: [EditPersonComponent]
})
export class PeopleModule {
}
