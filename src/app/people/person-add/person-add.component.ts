import {Component, Directive, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ContactsFactory, IComment, IEmail, IWebSite} from '../../model/contact.classes';
import {IPerson, PersonFactory} from '../../model/person.class';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';
import {ReplaySubject} from 'rxjs';
import {OrgDaoService} from '../../dao/OrgDao.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {

    @Input() showOrgForm = true;
    @ViewChild('stepper', {static: true}) stepper: any;
    tels = [1, 2, 3];
    formGroupPerson: FormGroup;
    _formGroupArray: FormGroup[] = [];
    orgs$: ReplaySubject<any> = new ReplaySubject<any>(1); // = of([{name: 'British Telecom', id: '12345'}, {name: 'United Utilites', id: '56789'}]);
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

    public getRawData() {
        return this._formGroupArray.map(a => a.getRawValue());
    }

    onChange(event) {
        console.log('change event', event.target.value);
    }

    constructor(private builder: FormBuilder,
                private personFactory: PersonFactory,
                private snackBar: MatSnackBar,
                private dao: OrgDaoService) {
        this.formGroupPerson = builder.group(personFactory.buildPersonForm());
        this.dao.getOrgs().subscribe(a => this.orgs$.next(a));

        // (this.stepper.nativeElement as MatStepper).steps.changes.subscribe(console.log);
        // console.log('constuctor ctl', this.ctl);
        // this.ctl.valueChanges.subscribe(console.log);
    }

    ngOnInit() {
        console.log('stepper', this.stepper);
    }

    public getForms(): IPerson[] {
        return (this._formGroupArray.map(a => <IPerson> a.getRawValue())) ;
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
        this.dao.insertOrgAsync(vo).then((result) => {
            // vo.id = result.id;
            this.openSnackBar('Save OK');
            this.reset();
        }).catch(err => {
            this.openSnackBar('Save Failed');
        });
    }

    onDevSave() {
        this._formGroupArray.forEach(a => console.log(a.getRawValue()));
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

    displayWith_org(value) {
        return value.name;
    }

}


