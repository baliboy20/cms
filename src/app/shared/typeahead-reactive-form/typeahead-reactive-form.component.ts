import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-typeahead-reactive-form',
    templateUrl: './typeahead-reactive-form.component.html',
    styleUrls: ['./typeahead-reactive-form.component.css'],
})
export class TypeaheadReactiveFormComponent implements OnInit {
    get lookUpData(): any[] {
        return this._lookUpData;
    }

    constructor(private fb: FormBuilder) {
    }

    private _lookUpData: any[];
    private _lookUpDataUntouched: any[];
    private _formGroup: FormGroup;
    private _nameFormControl: FormControl = new FormControl('orgName');


    @Input() set lookUpData(val: any[]) {
        this._lookUpData = val;
        this._lookUpDataUntouched = val;
        // console.log('data....=>>>', val);
    }

    filter = (src: string) => {
        return this._lookUpDataUntouched.filter(a => {
            return (a.name.includes(src));
        });
    };
    filteredData: any[];

    @Input() set formGroup(val: FormGroup) {
        // console.log('sub form group', val);
        this._formGroup = val;
        this._formGroup.addControl('orgName', this._nameFormControl);
        val
            .get('orgName')
            .valueChanges.subscribe(a => {

            this._lookUpData = this.filter(a);
            // console.log('lookupdata', this._lookUpData);
        });
    }

    get formGroup() {
        return this._formGroup;
    }

    displayFn(user?: any): string | undefined {
        console.log('user', user);
        return user ? user.name : undefined;
    }

    ngOnInit() {
    }

 selectionChange(item) {

      const fc: FormControl =  this.formGroup.controls.orgId as FormControl;
      fc.setValue(item.id);
     console.log('item selection changged', fc.value);

 }

}
