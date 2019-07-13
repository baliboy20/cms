import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FindInListSfComponent} from './subforms/find-in-list-sf/find-in-list-sf.component';
import {MaterialzModule} from '../materialz/materialz.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { WordSearchPipe } from './subforms/find-in-list-sf/word-search.pipe';
import { WhoisButtonComponent } from './dev/whois-button/whois-button.component';
import { DblFindInListSfComponent } from './subforms/dbl-find-in-list-sf/dbl-find-in-list-sf.component';



@NgModule({
  declarations: [
    FindInListSfComponent,
    WordSearchPipe,
    WhoisButtonComponent,
    DblFindInListSfComponent,
  ],
  imports: [
    CommonModule,
    MaterialzModule,
    ReactiveFormsModule,
  ],
  exports: [
      FindInListSfComponent,
    WhoisButtonComponent,
    DblFindInListSfComponent,
  ]
})
export class UtilsModule { }
