import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommSFormComponent} from './comms-sform/comms-sform.component';
import {AngularFirestore} from '@angular/fire/firestore';
import {OrgDaoService} from '../dao/OrgDao.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialzModule} from '../materialz/materialz.module';
import { TypeaheadReactiveFormComponent } from './typeahead-reactive-form/typeahead-reactive-form.component';
import { OrgOrPersonSelectComponent } from './org-or-person-select/org-or-person-select.component';
import { SteppNavbarComponent } from './stepp-navbar/stepp-navbar.component';
import { EmailEditableSFComponent } from './subforms/email-editable-sf/email-editable-sf.component';
import { TelnoEditableSfComponent } from './subforms/telno-editable-sf/telno-editable-sf.component';
import { WebEditableSfComponent } from './subforms/web-editable-sf/web-editable-sf.component';

@NgModule({
  declarations: [
      CommSFormComponent,
      TypeaheadReactiveFormComponent,
      OrgOrPersonSelectComponent,
      SteppNavbarComponent,
      EmailEditableSFComponent,
      TelnoEditableSfComponent,
      WebEditableSfComponent,
  ],
  imports: [
    CommonModule,
      MaterialzModule,
      FormsModule,
      ReactiveFormsModule,
  ],
    exports: [CommSFormComponent,
        TypeaheadReactiveFormComponent,
        OrgOrPersonSelectComponent,
        SteppNavbarComponent,
        EmailEditableSFComponent,
        TelnoEditableSfComponent,
        WebEditableSfComponent,
    ],
    providers: [ AngularFirestore, OrgDaoService],
})
export class SharedModule { }
