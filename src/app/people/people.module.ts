import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditPersonComponent, OptionDirective} from './person-edit/person-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialzModule} from '../materialz/materialz.module';
import {SubformTableModule} from '../utils/subform-table/subform-table.module';
import {ConfirmDeleteComponent} from '../organisation.menu/organisation-search/organisation-search.component';
import {SubformTableComponent} from '../utils/subform-table/subform-table.component';
import {SharedModule} from '../shared/shared.module';
import {HorizontalStepperDirective, PeopleAddComponent, SetFocusDirective} from './people-add/people-add.component';
import { PeopleSearchComponent } from './people-search/people-search.component';
import { PersonAddComponent } from './person-add/person-add.component';

@NgModule({
    declarations: [EditPersonComponent,
        OptionDirective,
        PeopleAddComponent,
        SetFocusDirective,
        HorizontalStepperDirective,
        PeopleSearchComponent,
        PersonAddComponent,
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
    exports: [EditPersonComponent,
        PeopleAddComponent,
        HorizontalStepperDirective,
        SetFocusDirective]
})
export class PeopleModule {
}
