import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommSFormComponent} from './comms-sform/comms-sform.component';
import {AngularFirestore} from '@angular/fire/firestore';
import {OrgDaoService} from '../dao/OrgDao.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialzModule} from '../materialz/materialz.module';
import { TypeaheadReactiveFormComponent } from './typeahead-reactive-form/typeahead-reactive-form.component';
import { OrgOrPersonSelectComponent } from './org-or-person-select/org-or-person-select.component';

@NgModule({
  declarations: [
      CommSFormComponent,
      TypeaheadReactiveFormComponent,
      OrgOrPersonSelectComponent,
  ],
  imports: [
    CommonModule,
      MaterialzModule,
      FormsModule,
      ReactiveFormsModule,
  ],
    exports: [CommSFormComponent,
        TypeaheadReactiveFormComponent,
        OrgOrPersonSelectComponent
    ],
    providers: [ AngularFirestore, OrgDaoService],
})
export class SharedModule { }
