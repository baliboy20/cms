import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {OrgDaoService} from '../../dao/OrgDao.service';
import {ActivatedRoute} from '@angular/router';
import {ContactsFactory, IEmail, ITelNo, IWebSite} from '../../model/contact.classes';
import {EditStates, ORG_SECTORS, ORG_TYPES} from '../../dao/collections.enum';
import {PeopleAddComponent} from '../../people/people-add/people-add.component';

@Component({
    selector: 'app-organisation-add',
    templateUrl: './organisation-add.component.html',
    styleUrls: ['./organisation-add.component.scss']
})
export class OrganisationAddComponent implements OnInit {

    // firstFormGroup: FormGroup;
    // secondFormGroup: FormGroup;

    @ViewChild('addPersonForm', {static: true}) PerComp: PeopleAddComponent;

    formGroup: FormGroup;
    validations;
    editState: EditStates = EditStates.add;
    orgTypes = ORG_TYPES;
    sectors = ORG_SECTORS;
    titles = [
        'Mr.',
        'Mrs.',
        'Ms.',
    ];
    types = ORG_TYPES;
    @Input() data: any;

    newTelNo: ITelNo = ContactsFactory.instOfTelnos();
    newEmailAdd: IEmail = ContactsFactory.instOfEmail();
    newWebItem: IWebSite = ContactsFactory.instOfWebsite();


    constructor(private builder: FormBuilder,
                private route: ActivatedRoute,
                private snackBar: MatSnackBar,
                private dao: OrgDaoService) {

        const emailsArr: FormArray = builder.array([builder.group(this.newEmailAdd)]);
        const telNosArr: FormArray = builder.array([builder.group(this.newTelNo)]);
        const webArr: FormArray = builder.array([builder.group(this.newWebItem)]);

        const org: any = {
            id: 'xx',
            address: [''],
            emails: emailsArr,
            name: ['', Validators.required],
            orgType: ['', Validators.required],
            sector: [''],
            telNos: telNosArr,
            web: webArr,
        };
        this.formGroup = builder.group(org);
    }

    ngOnInit() {

    }

    onSave(value) {
        const vo = this.formGroup.getRawValue();
        this.reset();
        this.formGroup.setValue(vo);
        console.log('VALUE', vo);
        this.dao.insertOrgAsync(vo).then((result) => {
            // vo.id = result.id;
            console.log('added resykt', result, vo);
            this.openSnackBar('Save OK');
            this.reset();
        }).catch(err => {
            this.openSnackBar('Save Failed');
        });
    }

    onUpdate() {
        this.dao.updateOrg(this.formGroup.getRawValue());
    }

    reset() {
        this.formGroup.reset();
    }

    openSnackBar(value) {
        this.snackBar.open(value, 'SAVED', {
            duration: 1500,
        });
    }

    navToPerson() {

    }

    saveToDb() {
        console.log('per forms', this.PerComp);
        const po = this.PerComp.getForms();
        console.log('pos', po)
       const retval = this.dao.insertOrganisationAndPersons( this.formGroup.getRawValue() , po);
        console.log('Data returned',  retval);
    }

}
