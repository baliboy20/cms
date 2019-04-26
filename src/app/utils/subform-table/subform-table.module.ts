import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SubformTableComponent} from './subform-table.component';
import {MaterialzModule} from '../../materialz/materialz.module';

@NgModule({
  declarations: [ SubformTableComponent],
  imports: [
    CommonModule,
      MaterialzModule,
  ],
    exports: [ SubformTableComponent]
})
export class SubformTableModule { }
