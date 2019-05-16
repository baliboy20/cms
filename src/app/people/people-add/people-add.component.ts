import {Component, Directive, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContactsFactory, IComment, IEmail, IWebSite} from '../../model/contact.classes';
import {map} from 'rxjs/internal/operators';
import {PersonFactory} from '../../model/person.class';
import {MatOptionSelectionChange, MatSnackBar} from '@angular/material';
import {OrgDaoService} from '../../dao/OrgDao.service';
import {EditStates, ORG_SECTORS, ORG_TYPES} from '../../dao/collections.enum';
import {AppComponent} from '../../app.component';
import {ReplaySubject} from 'rxjs';

@Component({
    selector: 'app-people-add',
    templateUrl: './people-add.component.html',
    styleUrls: ['./people-add.component.scss']
})
export class PeopleAddComponent implements OnInit {

    formGroupPerson: FormGroup;
     _formGroupArray: FormGroup[] = [];

    validations;
    newTelNo = ContactsFactory.instOfTelnos();
    newEmailAdd: IEmail = ContactsFactory.instOfEmail();
    newWebItem: IWebSite = ContactsFactory.instOfWebsite();
    newCommItem: IComment = ContactsFactory.instOfComments();
    ctl: AbstractControl;
    titles = [
        'Mr.',
        'Mrs.',
        'Ms.'
    ];

    onChange(event) {
        console.log('change event', event.target.value);
    }

    constructor(private builder: FormBuilder,
                private personFactory: PersonFactory,
                private snackBar: MatSnackBar,
                private dao: OrgDaoService) {
        this.formGroupPerson = builder.group(personFactory.buildPersonForm());

        // console.log('constuctor ctl', this.ctl);
        // this.ctl.valueChanges.subscribe(console.log);
    }

    ngOnInit() {
    }

    private _instForm(): FormGroup {
        return this.builder.group(this.personFactory.buildPersonForm());
    }

    orgSelected(event) {
    }

    onCancel() {
        this.reset();
    }

    onSave() {
        const vo = this.formGroupPerson.getRawValue();
        this.dao.insertOrg(vo).then((result) => {
            // vo.id = result.id;
            this.openSnackBar('Save OK');
            this.reset();
        }).catch(err => {
            this.openSnackBar('Save Failed');
        });
    }

    reset() {
        this.formGroupPerson.reset();
    }

    addData() {
        console.log('add data in editor');
    }

    openSnackBar(value) {
        this.snackBar.open(value, 'SAVED', {
            duration: 1500,
        });
    }

    navToPerson() {
    }

    insertRow() {
        this._formGroupArray.push(this._instForm());
    }

}
