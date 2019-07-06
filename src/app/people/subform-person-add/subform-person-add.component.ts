import {Component, OnInit} from '@angular/core';
import {PeopleBuilderService} from '../../utils/form-builders/people-builder.service';
import {FormArray, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-subform-person-add',
    templateUrl: './subform-person-add.component.html',
    styleUrls: ['./subform-person-add.component.scss']
})
export class SubformPersonAddComponent implements OnInit {
    formGroup: FormGroup;

    constructor(private builders: PeopleBuilderService) {
        this.formGroup = builders.buildPersonForm();
    }

    me = this;
    ngOnInit() {
    }

    addItem(arrName) {
        this.builders.appendTelno(this.formGroup.get(arrName) as FormArray);
    }

    deleteItem(arrName, event) {
        console.log('deleting', event);
        this.builders.deleteItem(this.formGroup.get(arrName) as FormArray, event);
    }

    addAnotherPerson(){}

}


// firstName: ['fn', Validators.required],
// lastName: ['ln', Validators.required],
// nickName: ['nk', Validators.required],
// title: ['tit', Validators.required],
// emails: formArrayBld(this.instOfEmail),
// telNos: formArrayBld(this.instOfTelnos),
// web: formArrayBld(this.instOfWebsite),
// comments: formArrayBld(this.instOfComments),
// org: null
