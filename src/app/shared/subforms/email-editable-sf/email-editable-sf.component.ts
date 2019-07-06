import {Component, Inject, Input, OnInit, Optional} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {GenericSubFormBuilderService, NEW_EMAIL} from '../../../utils/form-builders/generic-subform-builder.service';


export class EditableSFBase {
    constructor( private srv: GenericSubFormBuilderService) { }

    @Input('activeFormGroup') fm: FormGroup;
    @Input('farn') formArrayName: string;
    addItem(arrName) {
        this.srv.append(this.fm.get( this.formArrayName) as FormArray);
    }

    deleteItem(arrName, event) {
        console.log('deleting', event);
        this.srv.delete(this.fm.get( this.formArrayName) as FormArray, event);
    }
    getFormArrayControls(): FormArray {
        // const a = this.fm.controls[this.formArrayName]  as FormArray;
        const a = this.fm.get( this.formArrayName)['controls']  as FormArray;
        // console.log('consteol array', a);
        return a;
    }
}


@Component({
    selector: 'app-email-editable-sf',
    templateUrl: './email-editable-sf.component.html',
    styleUrls: ['./email-editable-sf.component.scss'],
    providers: [{
        provide: GenericSubFormBuilderService,
        useFactory: (a, b) => (new GenericSubFormBuilderService(a, b)),
        deps: [FormBuilder, NEW_EMAIL],
    }]
})
export class EmailEditableSFComponent extends  EditableSFBase {

    // @Input('activeFormGroup') fm: FormGroup;
    // @Input('farn') formArrayName: string;
    constructor( @Inject(GenericSubFormBuilderService) srv: GenericSubFormBuilderService) {
        super(srv);
        // console.log('constructing', srv);
    }
}
