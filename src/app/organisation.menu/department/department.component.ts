import {Component, Inject, Injector, OnInit} from '@angular/core';
import {OrganisationBuilderService} from '../../utils/form-builders/organisation-builder.service';
import {GenericSubFormBuilderService, NEW_DEPARTMENT} from '../../utils/form-builders/generic-subform-builder.service';
import * as G from 'glob';
import {Form, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
  providers: [
      {
        provide: 'fc',
        useFactory: (x: FormBuilder, y: any) => x.group(y), deps: [FormBuilder, NEW_DEPARTMENT]
      }
      ]
})
export class DepartmentComponent implements OnInit {
private formGroup: FormGroup;
  constructor(
      @Inject('fc') private fc: FormGroup
  ) {

     this.formGroup = fc;
  }

  ngOnInit() {
  }

}
