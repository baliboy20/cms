import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IOrganisation} from '../../model/organisaion.class';
import {IEmail} from '../../model/contact.classes';
import {OrgDaoService} from '../../dao/OrgDao.service';
import {DbCollections, EditStates, ORG_SECTORS, ORGANISATION_TYPES} from '../../dao/collections.enum';
import {AngularFirestore} from '@angular/fire/firestore';
import {ActivatedRoute} from '@angular/router';

 const  constTestData: any = {
     name: 'Williams',
     address: '246 Deathrow',
     sector: 'Law',
     orgType: 'dfd',
     telNos: [ {telNo: '1234', note: 'gughgghjgkghjkgghkjgg', id: '234'} ],
     emails: [ ],
     web: [ ],
     // id: '',
 }
@Component({
    selector: 'app-edit-organisation',
    templateUrl: './edit-organisation.component.html',
    styleUrls: ['./edit-organisation.component.scss'],

})
export class EditOrganisationComponent implements OnInit {

    formGrp: FormGroup;
    editState: EditStates = EditStates.add;
    orgTypes = ORGANISATION_TYPES;
    sectors = ORG_SECTORS;
    @Input() data: any;

    constructor(private builder: FormBuilder,
                private route: ActivatedRoute,
                private dao: OrgDaoService) {

        const emails: IEmail[] = [];
        const org: any = {
            address: [''],
            emails: [['']],
            name: ['', Validators.required],
            orgType: ['', Validators.required],
            sector: [''],
            telNos: [['']],
            web: [['']],
        };
        this.formGrp = builder.group(org);
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            console.log('params', params['name']);
            this.formGrp.setValue(constTestData);
        });
        if (EditStates.edit || EditStates.add) {
            // this.onCancel();
        }
    }

    onCancel() {
        this.reset();
    }

    onSave(value) {
        console.log('dap', this.dao);
        this.dao.insertOrg(this.formGrp.getRawValue());
    }

    reset() {
        this.formGrp.reset();
    }

    onSewage() {
       this.formGrp.controls.sector.setValue({type: 'IT'}); //   .controls.name='sewage'
    }
}
