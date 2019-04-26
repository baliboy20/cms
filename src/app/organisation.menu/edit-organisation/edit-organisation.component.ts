import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContactsFactory, IEmail, ITelNo, IWebSite} from '../../model/contact.classes';
import {OrgDaoService} from '../../dao/OrgDao.service';
import {EditStates, ORG_SECTORS, ORG_TYPES} from '../../dao/collections.enum';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/internal/operators';
import {MatSnackBar} from '@angular/material';


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
    selector: 'app-edit-organisation',
    templateUrl: './edit-organisation.component.html',
    styleUrls: ['./edit-organisation.component.scss'],

})
export class EditOrganisationComponent implements OnInit {

    formGrp: FormGroup;
    validations;
    editState: EditStates = EditStates.add;
    orgTypes = ORG_TYPES;
    sectors = ORG_SECTORS;
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
        this.formGrp = builder.group(org);
    }

    initGroup() {
        const builder = this.builder;
        const emailsArr: FormArray = builder.array([builder.group(this.newEmailAdd)]);
        const telNosArr: FormArray = builder.array([builder.group(this.newTelNo)]);
        const webArr: FormArray = builder.array([builder.group(this.newWebItem)]);

        const org: any = {
            id: 'xx',
            address: ['add'],
            emails: this.newEmailAdd,
            name: ['errt'],
            orgType: ['errt'],
            sector: ['asD'],
            telNos: this.newTelNo,
            web: this.newWebItem,
        };
        return org;
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
    }

    onCancel() {
        this.reset();
    }

    onSave(value) {
        const vo = this.formGrp.getRawValue();
        this.dao.insertOrg(vo).then((result) => {
            // vo.id = result.id;
            console.log('added resykt', result, vo);
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
