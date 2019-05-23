import {Component, Directive, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContactsFactory, IComment, IEmail, IWebSite} from '../../model/contact.classes';
import {OrgDaoService} from '../../dao/OrgDao.service';
import {EditStates, ORG_SECTORS, ORG_TYPES} from '../../dao/collections.enum';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/internal/operators';
import {MatOption, MatOptionSelectionChange, MatSnackBar} from '@angular/material';
import {BehaviorSubject, ReplaySubject} from 'rxjs';
import {AppComponent} from '../../app.component';
import {PersonFactory} from '../../model/person.class';


const constTestData: any = {
    name: 'Williams',
    address: '246 Deathrow',
    sector: 'Law',
    orgType: 'dfd',
    telNos: [{telNo: '1234', note: 'gughgghjgkghjkgghkjgg', id: '234'}],
    emails: [],
    web: [],
    id: 'xx',
};

@Component({
    selector: 'app-person-edit',
    templateUrl: './person-edit.component.html',
    styleUrls: ['./person-edit.component.scss']
})
export class EditPersonComponent implements OnInit {

    formGrp: FormGroup;
    validations;
    editState: EditStates = EditStates.add;
    orgTypes = ORG_TYPES;
    sectors = ORG_SECTORS;
    companies$ = new ReplaySubject();
    @Input() data: any;
    newTelNo = ContactsFactory.instOfTelnos();
    newEmailAdd: IEmail = ContactsFactory.instOfEmail();
    newWebItem: IWebSite = ContactsFactory.instOfWebsite();
    newCommItem: IComment = ContactsFactory.instOfComments();
    ctl: AbstractControl;
    _selectedOrg = 'hello';
    step = 0;

    setStep(index: number) {
        this.step = index;
    }

    nextStep() {
        this.step++;
    }

    prevStep() {
        this.step--;
    }

    set selectedOrg(arg: any) {
        console.log('selected org', arg);
        this._selectedOrg = arg;
    }

    get selectedOrg() {
        return this._selectedOrg;
    }

    onChange(event) {
        console.log('change event', event.target.value);
    }

    constructor(private builder: FormBuilder,
                private personFactory: PersonFactory,
                private route: ActivatedRoute,
                private snackBar: MatSnackBar,
                private dao: OrgDaoService) {
        this.formGrp = builder.group(personFactory.buildPersonForm());
        this.ctl = this.formGrp.get('org');
        // console.log('constuctor ctl', this.ctl);
        this.ctl.valueChanges.subscribe(console.log);

    }

    getCompanies() {
        console.log('heell');
        const mapper = (b: any[]) => {
            return b.map(a => {
                return {name: a.name, orgId: a.id};
            });
        };
        this.dao.enterprises$
            .pipe(map(mapper))
            .subscribe(a => this.companies$.next(a));
    }

    inspect() {
        console.log(`form data`, this.formGrp.get('org').value[0]);
    }

    orgSelect($event) {
        console.log('org selected', $event);
    }

    ngOnInit() {
        this.route.paramMap
            .subscribe(params => {
                const orgId = params.get('orgId');
                if (orgId) {
                    this.dao.getOrgs()
                        .pipe(
                            map(b => {
                                const res = b.find(c => c.id === orgId);
                                return res;
                            })
                        )
                        .subscribe(c => {
                            if (c !== undefined) {
                                this.formGrp.setValue(c);
                            }
                        });
                }
            });
        this.getCompanies();

    }

    orgSelected(event) {

        const targ: MatOption = event.option;

        console.log('org selected', event);

    }

    onCancel() {
        this.reset();
    }

    onSave() {
        const vo = this.formGrp.getRawValue();
        this.dao.insertOrgAsync(vo).then((result) => {
            // vo.id = result.id;
            this.openSnackBar('Save OK');
            this.reset();
        }).catch(err => {
            this.openSnackBar('Save Failed');
        });
    }

    reset() {
        this.formGrp.reset();
    }

    addDummye() {
        this.formGrp.controls.sector.setValue({type: 'IT'}); //   .controls.name='sewage'
        this.formGrp.setValue(constTestData);
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


}

@Directive({
    selector: '[appOption]',

})
export class OptionDirective {

    public _val = 0;
    public _key: string;

    @Input('appOption') set val(arg) {
        // console.log('value in directive st ======>', arg);
        this._val = arg;
    };

    @Input('appKey') set key(arg) {
        // console.log('the key is ', arg);
        this._key = arg;
    }

    get key() {
        return this._key;
    }

    @Output('customSelectionChange') customChange: EventEmitter<any> = new EventEmitter();

    @HostListener('onSelectionChange', ['$event']) onchange(ev: MatOptionSelectionChange) {
        if (!ev.isUserInput) {
            return;
        }
        console.log('host listener', ev, this._val);
        this.customChange.emit(this._val);
    }

    constructor(p: AppComponent) {
        // console.log('parent found', p);
    }

    get val() {
        return this._val;
    }


}
